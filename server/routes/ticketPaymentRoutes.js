import { Router } from 'express';
import crypto from 'crypto';
import { configDotenv } from 'dotenv';
import qs from 'qs';
configDotenv();
import { v4 as uuidv4 } from 'uuid';
import { registrationListCollection } from '../models/registrationListModel.js';
import nodemailer from 'nodemailer';
import QRCode from 'qrcode'

const router = Router();

const accessCode = process.env.ACCESS_CODE;
const workingKey = process.env.WORKING_KEY;

router.post('/ccavRequestHandler', (req, res) => {
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

});

router.post('/payment/cancel', (req, res) => {
    // res.redirect('http://localhost:5000/payment/cancel');
    res.redirect('https://mioc.org.om/payment/cancel');
});

router.post('/payment/success', async (req, res) => {
    const encResp = req.body.encResp;
    const decResp = decrypt(encResp, workingKey);
    const decreptedDataToObject = qs.parse(decResp);
    let ticketType;
    if (decreptedDataToObject.amount === "550.000") {
        ticketType = 'OPHTHALMOLOGIST/ PHYSICIAN'
    } else if (decreptedDataToObject.amount === "350.000") {
        ticketType = "YOUNG OPHTHALMOLOGIST";
    } else {
        ticketType = 'OPTOMETRIST / ALLIED HEALTH / RESIDENTS';
    }
    // Log the decrypted data
    console.log(decreptedDataToObject);
    const id = uuidv4();
    // Store user info in MongoDB
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
            ticketType: ticketType,
            orderId: decreptedDataToObject.order_id,
            paymentStatus: decreptedDataToObject.order_status,
        };
        await registrationListCollection.insertOne(userData);
        console.log('User info stored in MongoDB');
        // Generate QR code
        const qrCodeUrl = `http://localhost:5000/registrar/${id}`;
        const qrCodeDataUrl = await QRCode.toDataURL(qrCodeUrl);
        const qrCodeBuffer = Buffer.from(qrCodeDataUrl.split(',')[1], 'base64');

        await sendTicketEmail(decreptedDataToObject.billing_email, qrCodeBuffer, id);
    } catch (error) {
        console.error('Error storing user info in MongoDB', error);
    }

    // res.redirect('http://localhost:5000/payment/success');
    res.redirect('https://mioc.org.om/payment/success');
});

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


async function sendTicketEmail(email, qrCodeBuffer, id) {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'musaab.dev@gmail.com',
            pass: 'pdpg ugdz dgtz qcxt'
        }
    });

    const mailOptions = {
        from: 'musaab.dev@gmail.com',
        to: email,
        subject: 'Registration Confirmation',
        html: `
            <h3>Registration Confirmation</h3>
            <p>Thank you for registering. Please find your QR code below:</p>
            <p>Use this QR code for entry: <a href="http://localhost:5000/registrar/${id}">http://localhost:5000/registrar/${id}</a></p>
        `,
        attachments: [
            {
                filename: 'qrcode.png',
                content: qrCodeBuffer,
                cid: 'qrcode' // same cid value as in the html img src
            }
        ]
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Confirmation email sent');
    } catch (error) {
        console.error('Error sending confirmation email:', error);
    }
}

export default router;
