import crypto from 'crypto';
import { configDotenv } from 'dotenv';
import qs from 'qs';
configDotenv();
import { v4 as uuidv4 } from 'uuid';
import { registrationListCollection } from '../models/registrationListModel.js';
import { successfullConferenceRegistrationEmail,generateInvoice } from '../utils/paymentInvoiceEmail.js'
import QRCode from 'qrcode'
const workingKey = process.env.WORKING_KEY;
const accessCode = process.env.ACCESS_CODE;



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

    const merchant_data = `merchant_id=${merchant_id}&order_id=${order_id}&currency=${currency}&amount=${amount}&redirect_url=${redirect_url}&cancel_url=${cancel_url}&language=${language}&billing_name=${billing_name}&billing_address=${billing_address}&billing_city=${billing_city}&billing_state=${billing_state}&billing_zip=${billing_zip}&billing_country=${billing_country}&billing_tel=${billing_tel}&billing_email=${billing_email}&delivery_name=${delivery_name}&delivery_address=${delivery_address}&delivery_city=${delivery_city}&delivery_state=${delivery_state}&delivery_zip=${delivery_zip}&delivery_country=${delivery_country}&delivery_tel=${delivery_tel}&merchant_param1=${merchant_param1}&merchant_param2=${merchant_param2}&merchant_param3=${merchant_param3}&merchant_param4=${merchant_param4}&merchant_param5=${merchant_param5}&promo_code=${promo_code}&customer_identifier=${customer_identifier}&`;

    const encryptedText = encrypt(merchant_data, workingKey);
    res.json({
        encRequest: encryptedText,
        accessCode: accessCode
    });

}

export const successfullPayment = async (req, res) => {
    const encResp = req.body.encResp;
    const decResp = decrypt(encResp, workingKey);
    const decreptedDataToObject = qs.parse(decResp);
    // Log the decrypted data
    const id = uuidv4();
    // Store user info in MongoDB
    const date = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    console.log(formattedDate); // Outputs something like "13 July 2024"

    try {
        const userData = {
            id: id,
            firstName: decreptedDataToObject.billing_name.split(' ')[0],
            lastName: decreptedDataToObject.billing_name.split(' ')[1],
            email: decreptedDataToObject.billing_email,
            mobile: decreptedDataToObject.billing_tel,
            address: decreptedDataToObject.billing_address,
            city: decreptedDataToObject.billing_city,
            state: decreptedDataToObject.billing_state,
            zip: decreptedDataToObject.billing_zip,
            country: decreptedDataToObject.billing_country,
            amount: decreptedDataToObject.amount,
            ticketType: decreptedDataToObject.merchant_param1,
            oosMembership: decreptedDataToObject.merchant_param2,
            orderId: decreptedDataToObject.order_id,
            paymentDate: formattedDate,
            paymentStatus: decreptedDataToObject.order_status,
        };
        console.log('User info stored in MongoDB');
        // Generate QR code
        const qrCodeUrl = `http://localhost:5000/registrar/${id}`;
        const qrCodeDataUrl = await QRCode.toDataURL(qrCodeUrl);
        const qrCodeBuffer = Buffer.from(qrCodeDataUrl.split(',')[1], 'base64');

        // add send invoice and confirmation email here
        if (decreptedDataToObject.order_status === 'Success') {
            await registrationListCollection.insertOne(userData);
            const pdfPath = 'invoice.pdf';
            await generateInvoice(userData, pdfPath);
            await successfullConferenceRegistrationEmail(decreptedDataToObject.billing_email, pdfPath,userData);
        }
    } catch (error) {
        console.error('Error storing user info in MongoDB', error);
    }
    if (decreptedDataToObject.order_status === 'Failure') {
        res.redirect('http://localhost:5000/payment/failed');
        // res.redirect('https://mioc.org.om/payment/failed');
    }
    res.redirect('http://localhost:5000/payment/success');
    // res.redirect('https://mioc.org.om/payment/success');
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

function resHandler(encResp, workingKey) {
    const decResp = decrypt(encResp, workingKey);
    let data = '<table border=1 cellspacing=2 cellpadding=2><tr><td>';
    data += decResp.replace(/=/g, '</td><td>'); // Replace '=' with '</td><td>'
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

