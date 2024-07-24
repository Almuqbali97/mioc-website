import PDFDocument from 'pdfkit';
import sgMail from '@sendgrid/mail';
import fs from 'fs';
import { oosCertificateEmailTemplate } from '../emailTemplates/oosCertificateEmail.js';

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

export async function oosMembershipCertificateEmail(email, userData) {
    try {
        const pdfBuffer = await generateCertificate(userData);
        const msg = {
            to: email,
            from: {
                email: 'info@mioc.org.om',
                name: 'MIOC2024'
            },
            subject: 'OOS Membership Confirmation & Certificate',
            text: 'OOS Membership Certificate',
            html: oosCertificateEmailTemplate(userData.fullName, userData.membership_id, userData.amount, userData.paymentDate, userData.membershipType, userData.orderId, userData.paymentStatus),
            headers: {
                'X-Sender': 'info@mioc.org.om',
                'X-Mailer': 'SendGrid-Mail-Node',
            },
            reply_to: 'info@mioc.org.om',
            attachments: [
                {
                    content: pdfBuffer.toString('base64'),
                    filename: 'certificate.pdf',
                    type: 'application/pdf',
                    disposition: 'attachment'
                },
            ]
        };

        const response = await sgMail.send(msg);
        console.log('Email sent successfully:', response);
    } catch (error) {
        console.error('Error sending email:', error);
        if (error.response) {
            console.error('Error response:', error.response.body);
        }
    }
};

async function generateCertificate(userData) {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument({ size: 'A4', margin: 0, layout: 'landscape' });

        generateCertificateDesign(doc, userData);

        const buffers = [];
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => {
            const pdfBuffer = Buffer.concat(buffers);
            resolve(pdfBuffer);
        });

        doc.end();
    });
}

async function generateCertificateDesign(doc, userData) {
    const pageWidth = doc.page.width;
    const pageHeight = doc.page.height;

    // Register the Great Vibes font
    doc.registerFont('GreatVibes', 'GreatVibes-Regular.ttf');

    // Use the uploaded image for the certificate design
    doc.image('certificate-design.png', 0, 0, { width: pageWidth, height: pageHeight });

    // Add the name to the certificate
    doc
        .font('GreatVibes')
        .fontSize(60)
        .fillColor('#FF0000')
        .text(userData.fullName, 0, pageHeight / 2, { align: 'center' });
}