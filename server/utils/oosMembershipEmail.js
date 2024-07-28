import PDFDocument from 'pdfkit';
import sgMail from '@sendgrid/mail';
import { oosCertificateEmailTemplate } from '../emailTemplates/oosCertificateEmail.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const certificatePath = join(__dirname, '../certificate-design.png');
const fontPath = join(__dirname, '../GreatVibes-Regular.ttf');

const __filename2 = fileURLToPath(import.meta.url);
const __dirname2 = dirname(__filename2);
const logoPath = join(__dirname2, '../logo.png');


sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

export async function oosMembershipCertificateEmail(email, userData) {
    try {
        const pdfBuffer = await generateCertificate(userData);
        const pdfInvoiceBuffer = await generateOOSInvoice(userData);
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
                {
                    content: pdfInvoiceBuffer.toString('base64'),
                    filename: 'invoice.pdf',
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
    doc.registerFont('GreatVibes', fontPath);

    // Use the uploaded image for the certificate design
    doc.image(certificatePath, 0, 0, { width: pageWidth, height: pageHeight });

    // Add the name to the certificate
    doc
        .font('GreatVibes')
        .fontSize(60)
        .fillColor('#FF0000')
        .text(userData.fullName, 0, pageHeight / 2, { align: 'center' });
}


async function generateOOSInvoice(invoice) {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument({ size: 'A4', margin: 50 });

        generateHeader(doc, invoice);
        generateCustomerInformation(doc, invoice);
        generateOOSInvoiceTable(doc, invoice);

        const buffers = [];
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => {
            const pdfBuffer = Buffer.concat(buffers);
            resolve(pdfBuffer);
        });

        doc.end();
    });
}

function generateHeader(doc, invoice) {
    const pageWidth = doc.page.width;
    const imageWidth = 100;
    const imageX = pageWidth - imageWidth - 50;

    doc
        .image(logoPath, imageX, 45, { width: imageWidth })
        .fillColor('#444444')
        .fontSize(20)
        .text('Invoice', 50, 45)
        .fontSize(10)
        .text('Invoice number:', 50, 80)
        .text(invoice.orderId, 125, 80)
        .text('Issue date:', 50, 95)
        .text(invoice.paymentDate, 100, 95)
        .text('Payment method:', 50, 110)
        .text(invoice.paymentMethod, 130, 110);
}

function generateCustomerInformation(doc, invoice) {
    doc
        .fillColor('#444444')
        .fontSize(10)
        .text('Oman Ophthalmic Society', 50, 160)
        .text('112 Alkhoud Street', 50, 175)
        .text('Muscat, Alkhoud 112', 50, 190)
        .text('Oman', 50, 205)
        .text('info@mioc.org.om', 50, 220)

        .text('Bill to', 300, 160)
        .text(invoice.fullName)
        .text(invoice.city, 300, 190)
        .text(invoice.zip, 300, 205)
        .text(invoice.country, 300, 220)
        .text(invoice.email, 300, 235);

    doc
        .fillColor('#000000')
        .fontSize(12)
        .text(`${invoice.amount} OMR issued on ${invoice.paymentDate}`, 50, 260)
        .text(`Price for OOS Member: ${invoice.membership_id}`, 50, 280);
}

function generateOOSInvoiceTable(doc, invoice) {
    const invoiceTableTop = 310;

    doc.font('Helvetica-Bold');
    if (invoice.paymentStatus === 'Success') {
        generateTableRow(
            doc,
            invoiceTableTop,
            'Description',
            'Unit price',
            'Amount Paid'
        );
    } else {
        generateTableRow(
            doc,
            invoiceTableTop,
            'Description',
            'Unit price',
            'Amount remaining'
        );
    }

    generateHr(doc, invoiceTableTop + 20);
    doc.font('Helvetica');
    generateTableRow(
        doc,
        invoiceTableTop + 30,
        (invoice.membershipType).toUpperCase() + ' ' + 'OOS MEMBERSHIP',
        `${(invoice.amount)} OMR`,
        `${invoice.amount} OMR`
    );

    generateHr(doc, invoiceTableTop + 50);
}

function generateTableRow(doc, y, description, unitPrice, amount) {
    doc
        .fontSize(10)
        .text(description, 50, y)
        .text(unitPrice, 300, y, { width: 90, align: 'right' })
        .text(amount, 400, y, { align: 'right' });
}

function generateHr(doc, y) {
    doc
        .strokeColor('#aaaaaa')
        .lineWidth(1)
        .moveTo(50, y)
        .lineTo(550, y)
        .stroke();
}
