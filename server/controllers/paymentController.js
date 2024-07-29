import crypto from 'crypto';
import { configDotenv } from 'dotenv';
import qs from 'qs';
configDotenv();
import { v4 as uuidv4 } from 'uuid';
import { registrationListCollection } from '../models/registrationListModel.js';
import { registrationPaymentsCollection } from '../models/registrationPaymentsModel.js';
import { successfullConferenceRegistrationEmail } from '../utils/paymentInvoiceEmail.js'
import { awaitedPaymentNotification, registrationNotification } from '../utils/notificationEmails.js'
import QRCode from 'qrcode'
import { oosPaymentsCollection } from '../models/oosPaymentsModel.js';
import { oosMembershipCollection } from '../models/oosMembershipsModel.js';
import { oosMembershipCertificateEmail } from '../utils/oosMembershipEmail.js';
import { type } from 'os';
const workingKey = process.env.WORKING_KEY;
const accessCode = process.env.ACCESS_CODE;

export const paymentRequestCheckout = (req, res) => {

    res.render('paymentForm', { data: req.query });
}

export const paymentRequest = (req, res) => {
    const {
        merchant_id,
        order_id,
        currency,
        amount,
        redirect_url,
        cancel_url,
        language,
        billing_name,
        billing_address,
        billing_city,
        billing_state,
        billing_zip,
        billing_country,
        billing_tel,
        billing_email,
        delivery_name,
        delivery_address,
        delivery_city,
        delivery_state,
        delivery_zip,
        delivery_country,
        delivery_tel,
        merchant_param1,
        merchant_param2,
        merchant_param3,
        merchant_param4,
        merchant_param5,
        promo_code,
        customer_identifier
    } = req.body;
    // console.log(req.body);
    const merchant_data = `merchant_id=${merchant_id}&order_id=${order_id}&currency=${currency}&amount=${amount}&redirect_url=${redirect_url}&cancel_url=${cancel_url}&language=${language}&billing_name=${billing_name}&billing_address=${billing_address}&billing_city=${billing_city}&billing_state=${billing_state}&billing_zip=${billing_zip}&billing_country=${billing_country}&billing_tel=${billing_tel}&billing_email=${billing_email}&delivery_name=${delivery_name}&delivery_address=${delivery_address}&delivery_city=${delivery_city}&delivery_state=${delivery_state}&delivery_zip=${delivery_zip}&delivery_country=${delivery_country}&delivery_tel=${delivery_tel}&merchant_param1=${merchant_param1}&merchant_param2=${merchant_param2}&merchant_param3=${merchant_param3}&merchant_param4=${merchant_param4}&merchant_param5=${merchant_param5}&promo_code=${promo_code}&customer_identifier=${customer_identifier}&`;


    const redirectUrl = `${process.env.API_URL}/payment/request/checkout?${merchant_data}`;
    return res.json({
        redirectUrl: redirectUrl,
    });


}

export const paymentRequestHandler = (req, res) => {

    const {
        merchant_id,
        order_id,
        currency,
        amount,
        redirect_url,
        cancel_url,
        language,
        billing_name,
        billing_address,
        billing_city,
        billing_state,
        billing_zip,
        billing_country,
        billing_tel,
        billing_email,
        delivery_name,
        delivery_address,
        delivery_city,
        delivery_state,
        delivery_zip,
        delivery_country,
        delivery_tel,
        merchant_param1,
        merchant_param2,
        merchant_param3,
        merchant_param4,
        merchant_param5,
        promo_code,
        customer_identifier
    } = req.body;

    const merchant_data = `merchant_id=${merchant_id}&order_id=${order_id}&currency=${currency}&amount=${amount}&redirect_url=${redirect_url}&cancel_url=${cancel_url}&language=${language}&billing_name=${billing_name}&billing_address=${billing_address}&billing_city=${billing_city}&billing_state=${billing_state}&billing_zip=${billing_zip}&billing_country=${billing_country}&billing_tel=${billing_tel}&billing_email=${billing_email}&delivery_name=${delivery_name}&delivery_address=${delivery_address}&delivery_city=${delivery_city}&delivery_state=${delivery_state}&delivery_zip=${delivery_zip}&delivery_country=${delivery_country}&delivery_tel=${delivery_tel}&merchant_param1=${merchant_param1}&merchant_param2=${merchant_param2}&merchant_param3=${merchant_param3}&merchant_param4=${merchant_param4}&merchant_param5=${merchant_param5}&promo_code=${promo_code}&customer_identifier=${customer_identifier}&`;

    const encryptedText = encrypt(merchant_data, workingKey);

    const html = `
    <form id="nonseamless" method="post" name="redirect" action="${process.env.BANK_PAYMENT_URL}">
      <input type="hidden" id="encRequest" name="encRequest" value="${encryptedText}">
      <input type="hidden" name="access_code" id="access_code" value="${accessCode}">
      <script language="javascript">document.redirect.submit();</script>
    </form>
  `;

    res.send(html);
}

export const registrationPaymentRes = async (req, res) => {
    const encRes = req.body.encResp;
    const decRes = decrypt(encRes, process.env.WORKING_KEY);
    const decryptedResToObject = qs.parse(decRes);
    console.log(decryptedResToObject); // Log the decrypted data

    const id = uuidv4();
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const paymentRequest = {
        ...decryptedResToObject
    };

    const userData = {
        id: id,
        orderId: decryptedResToObject.order_id,
        fullName: capitalizeWords(decryptedResToObject.billing_name),
        email: decryptedResToObject.billing_email,
        mobile: decryptedResToObject.billing_tel,
        country: decryptedResToObject.billing_country,
        state: decryptedResToObject.billing_state,
        city: decryptedResToObject.billing_city,
        zip: decryptedResToObject.billing_zip,
        amount: decryptedResToObject.amount,
        ticketType: decryptedResToObject.merchant_param1,
        oosMembership: decryptedResToObject.merchant_param2,
        paymentDate: formattedDate,
        paymentStatus: decryptedResToObject.order_status,
        paymentMethod: decryptedResToObject.payment_mode,
        oosMembershipNumber: decryptedResToObject.merchant_param3
    };

    if (!userData.orderStatus != 'Success') {
        try {
            await awaitedPaymentNotification(userData, 'registration')

        } catch (error) {
            console.log(error);
        }
    }


    try {
        // Insert the payment request details into the database
        await registrationPaymentsCollection.insertOne(paymentRequest);
    } catch (error) {
        console.error("Failed to insert payment request:", error);
        // Continue execution as payment details are already determined by third party
    }

    try {
        // Insert user data for registration
        await registrationListCollection.insertOne(userData);
    } catch (error) {
        console.error("Failed to insert user data:", error);
        // Continue execution as payment details are already determined by third party
    }

    if (decryptedResToObject.order_status === 'Success' || decryptedResToObject.order_status === 'Confirmed' || decryptedResToObject.order_status === 'Shipped' || decryptedResToObject.order_status === 'Approved') {

        try {
            // Send notification email
            await registrationNotification(userData);
        } catch (error) {
            console.error("Failed to send registration notification email:", error);
            // Continue execution as payment details are already determined by third party
        }

        try {
            // Generate QR code and send invoice email
            const qrCodeUrl = userData.id;
            const qrCodeDataUrl = await QRCode.toDataURL(qrCodeUrl);
            const qrCodeBuffer = Buffer.from(qrCodeDataUrl.split(',')[1], 'base64');

            await successfullConferenceRegistrationEmail(decryptedResToObject.billing_email, userData, qrCodeBuffer);
        } catch (error) {
            console.error("Failed to generate invoice and send email:", error);
            // Continue execution as payment details are already determined by third party
        }
    }

    // Redirect to React with parameters
    const queryParams = new URLSearchParams({
        orderStatus: decryptedResToObject.order_status,
        orderId: decryptedResToObject.order_id
    }).toString();
    return res.redirect(`https://mioc.org.om/payment/response?${queryParams}`);
};

export const oosMembershipPaymentRes = async (req, res) => {
    const encRes = req.body.encResp;
    const decRes = decrypt(encRes, process.env.WORKING_KEY);
    const decryptedResToObject = qs.parse(decRes);
    console.log(decryptedResToObject); // Log the decrypted data

    const id = uuidv4();
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const paymentRequest = {
        ...decryptedResToObject
    };

    let membership_id = decryptedResToObject.merchant_param5;

    if (!membership_id) {
        // Find the highest existing membership ID
        const highestMembership = await oosMembershipCollection.findOne({}, { sort: { membership_id: -1 } });

        if (highestMembership) {
            const highestId = highestMembership.membership_id;
            const nextIdNum = parseInt(highestId.replace('OOS', '')) + 1;
            membership_id = `OOS${String(nextIdNum).padStart(5, '0')}`;
        } else {
            membership_id = 'OOS00001'; // Default starting ID if no memberships exist
        }
    }

    const oosMemberData = {
        id: id,
        membership_id: membership_id,
        orderId: decryptedResToObject.order_id,
        fullName: capitalizeWords(decryptedResToObject.billing_name),
        email: decryptedResToObject.billing_email,
        contactNumber: decryptedResToObject.billing_tel,
        country: capitalizeWords(decryptedResToObject.billing_country),
        city: decryptedResToObject.billing_city,
        zip: decryptedResToObject.billing_zip,
        amount: decryptedResToObject.amount,
        nationality: capitalizeWords(decryptedResToObject.merchant_param1),
        workingPlace: decryptedResToObject.merchant_param2,
        designation: decryptedResToObject.merchant_param3,
        membershipType: decryptedResToObject.merchant_param4,
        paymentDate: formattedDate,
        paymentStatus: decryptedResToObject.order_status,
        paymentMethod: decryptedResToObject.payment_mode,
        expirationDate: "2024-12-31",
    };

    if (oosMemberData.orderStatus != 'Success') {
        try {
            await awaitedPaymentNotification(oosMemberData, 'OOS membership')

        } catch (error) {
            console.log(error);
        }
    }
    try {
        // Insert the payment request details into the database
        await oosPaymentsCollection.insertOne(paymentRequest);
    } catch (error) {
        console.error("Failed to insert oos payment request:", error);
        // Continue execution as payment details are already determined by third party
    }

    try {
        if (!decryptedResToObject.merchant_param5) {
            // Create new membership
            await oosMembershipCollection.insertOne(oosMemberData);
        } else {
            // Update existing membership
            const filter = { membership_id: decryptedResToObject.merchant_param5 };
            const updateDoc = {
                $set: {
                    fullName: capitalizeWords(oosMemberData.fullName),
                    email: oosMemberData.email,
                    contactNumber: oosMemberData.contactNumber,
                    country: oosMemberData.country,
                    city: oosMemberData.city,
                    zip: oosMemberData.zip,
                    amount: oosMemberData.amount,
                    nationality: capitalizeWords(oosMemberData.nationality),
                    workingPlace: oosMemberData.workingPlace,
                    designation: oosMemberData.designation,
                    membershipType: oosMemberData.membershipType,
                    paymentDate: oosMemberData.paymentDate,
                    paymentStatus: oosMemberData.paymentStatus,
                    paymentMethod: oosMemberData.paymentMethod,
                    expirationDate: "2024-12-31",
                },
            };
            await oosMembershipCollection.updateOne(filter, updateDoc);
        }
    } catch (error) {
        console.error("Failed to insert or update oos data:", error);
        // Continue execution as payment details are already determined by third party
    }

    if (decryptedResToObject.order_status === 'Success' || decryptedResToObject.order_status === 'Confirmed' || decryptedResToObject.order_status === 'Shipped' || decryptedResToObject.order_status === 'Approved') {
        try {
            // Send notification email
            await oosMembershipCertificateEmail(decryptedResToObject.billing_email, oosMemberData);
        } catch (error) {
            console.error("Failed to send registration notification email:", error);
            // Continue execution as payment details are already determined by third party
        }
    }

    // Redirect to React with parameters
    const queryParams = new URLSearchParams({
        orderStatus: decryptedResToObject.order_status,
        orderId: decryptedResToObject.order_id
    }).toString();
    return res.redirect(`https://mioc.org.om/payment/response?${queryParams}`);
};

export const getInvoiceByOrderID = async (req, res) => {
    const { order_id } = req.params;
    try {
        const invoice = await registrationPaymentsCollection.findOne({ order_id: order_id });

        if (!invoice) {
            return res.status(404).json({ message: 'invoice not found' });
        }

        return res.status(200).json(invoice);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Something went wrong, please try again' });
    }
}

function encrypt(raw, key) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from(key, 'utf8'), iv);
    let encryptedText = cipher.update(raw, 'utf8', 'hex');
    encryptedText += cipher.final('hex');
    const tag = cipher.getAuthTag().toString('hex');
    return iv.toString('hex') + encryptedText + tag; // Concatenate IV, ciphertext, and tag
}

function decrypt(encryptedData, key) {
    // Extract IV, ciphertext, and tag from the encrypted data
    const iv = Buffer.from(encryptedData.slice(0, 32), 'hex');
    const ciphertext = encryptedData.slice(32, -32);
    const tag = Buffer.from(encryptedData.slice(-32), 'hex');

    // Create decipher object with key, IV, and authentication tag
    const decipher = crypto.createDecipheriv('aes-256-gcm', Buffer.from(key, 'utf8'), iv);
    decipher.setAuthTag(tag);

    // Decrypt the ciphertext
    let decryptedText = decipher.update(ciphertext, 'hex', 'utf8');
    decryptedText += decipher.final('utf8');
    return decryptedText;
}

function resHandler(encRes, workingKey) {
    const decRes = decrypt(encRes, workingKey);
    let data = '<table border=1 cellspacing=2 cellpadding=2><tr><td>';
    data += decRes.replace(/=/g, '</td><td>'); // Replace '=' with '</td><td>'
    data = data.replace(/&/g, '</td></tr><tr><td>'); // Replace '&' with '</td></tr><tr><td>'
    data += '</td></tr></table>';

    const html = `
    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <title>Response Handler</title>
        </head>
        <body>
            <center>
                <font size="4" color="blue"><b>Response Page</b></font>
                <br>
                ${data}
            </center>
            <br>
        </body>
    </html>
    `;

    return html;
}


function capitalizeWords(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}


