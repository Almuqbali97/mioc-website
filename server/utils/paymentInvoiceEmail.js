import PDFDocument from 'pdfkit';
import fs from 'fs';
import sgMail from '@sendgrid/mail';
import { invoiceEmail } from './invoiceEmailTemplate.js';

sgMail.setApiKey('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');
export async function successfullConferenceRegistrationEmail(email, pdfInvoicePath, userData) {
    const pdfData = fs.readFileSync(pdfInvoicePath);
    const msg = {
        to: email, // Change to your recipient
        from: {
            email: 'info@mioc.org.om',
            name: 'MIOC 2024'
        }, // Change to your verified sender
        subject: 'Conference Registration',
        text: 'Conference Registration Confirmed',
        html: invoiceEmail(userData.firstName, userData.lastName, userData.id.slice(0, 3), userData.amount, userData.paymentDate),
        headers: {
            'X-Sender': 'info@mioc.org.om',
            'X-Mailer': 'SendGrid-Mail-Node',
        },
        replay_to: 'info@mioc.org.om',
        attachments: [
            {
                content: pdfData.toString('base64'),
                filename: 'invoice.pdf',
                type: 'application/pdf',
                disposition: 'attachment'
            }
        ]
        // attachments: [
        //     {
        //         content: attachment,
        //         filename: `invoice-${invoiceData.id}.pdf`,
        //         type: 'application/pdf',
        //         disposition: 'attachment',
        //     },
        // ],
        // attachments: [
        //     {
        //         content: qrCodeBuffer.toString('base64'),
        //         filename: 'qrcode.png',
        //         type: 'image/png',
        //         disposition: 'attachment',
        //         content_id: 'qrcode'
        //     }
        // ]
    };

    try {
        const response = await sgMail.send(msg);
        console.log('Email sent successfully:', response);
    } catch (error) {
        console.error('Error sending email:', error);
        if (error.response) {
            console.error('Error response:', error.response.body);
        }
    }
};



// export function generateInvoice(invoice, path) {
//     let doc = new PDFDocument({ size: 'A4', margin: 50 });

//     generateHeader(doc, invoice);
//     generateCustomerInformation(doc, invoice);
//     generateInvoiceTable(doc, invoice);
//     generateFooter(doc);

//     doc.end();
//     doc.pipe(fs.createWriteStream(path));
// }
export async function generateInvoice(invoice, path) {
    return new Promise((resolve, reject) => {
        let doc = new PDFDocument({ size: 'A4', margin: 50 });

        generateHeader(doc, invoice);
        generateCustomerInformation(doc, invoice);
        generateInvoiceTable(doc, invoice);
        generateFooter(doc);

        doc.end();
        const writeStream = fs.createWriteStream(path);
        doc.pipe(writeStream);

        writeStream.on('finish', () => {
            resolve();
        });

        writeStream.on('error', (err) => {
            reject(err);
        });
    });
}

function generateHeader(doc, invoice) {
    const pageWidth = doc.page.width;
    const imageWidth = 100;
    const imageX = pageWidth - imageWidth - 50; // Adjust this value as needed for margins

    doc
        .image('logo.png', imageX, 45, { width: imageWidth })
        .fillColor('#444444')
        .fontSize(20)
        .text('Receipt', 50, 45) // The main title of the document
        .fontSize(10)
        .text('Invoice number', 50, 80)
        .text('346484A6B-0002', 95, 80)
        .text('Receipt number', 50, 95)
        .text('2848-7984', 95, 95)
        .text('Date paid:', 50, 110)
        // Adjusting the x-coordinate for better alignment of the date
        .text(invoice.paymentDate, 95, 110)
    // .text('Payment method', 50, 125)
    // .text(invoice.payment_method, 150, 125);
}


function generateCustomerInformation(doc, invoice) {
    doc
        .fillColor('#444444')
        .fontSize(10)
        .text('Oman Ophthalmology Society', 50, 160)
        .text('112 Alkhoud Street', 50, 175)
        .text('Muscat, Alkhoud 112', 50, 190)
        .text('Oman', 50, 205)
        .text('info@mioc.org.om', 50, 220)

        .text('Bill to', 300, 160)
        .text(invoice.firstName + ' ' + invoice.lastName, 300, 175)
        .text(invoice.city, 300, 190)
        .text(invoice.zip, 300, 205)
        .text(invoice.country, 300, 220)
        .text(invoice.email, 300, 235);

    doc
        .fillColor('#000000')
        .fontSize(12)
        .text(`${invoice.amount} OMR paid on ${invoice.paymentDate}`, 50, 260);
}

function generateInvoiceTable(doc, invoice) {
    const invoiceTableTop = 290;

    doc.font('Helvetica-Bold');
    generateTableRow(
        doc,
        invoiceTableTop,
        'Description',
        'Unit price',
        'Amount'
    );
    generateHr(doc, invoiceTableTop + 20);
    doc.font('Helvetica');
    // THIS NEED TO BE FIXED
    generateTableRow(
        doc,
        invoiceTableTop + 30,
        (invoice.ticketType).toUpperCase() + '' + 'REGISTRATION',
        `${(invoice.amount)} OMR`,
        `${invoice.amount} OMR`
    );

    generateHr(doc, invoiceTableTop + 50);

    const subtotalPosition = invoiceTableTop + 80;
    doc.font('Helvetica-Bold');
    generateTableRow(
        doc,
        subtotalPosition,
        '',
        '',
        'Subtotal',
        `${invoice.amount} OMR`
    );
}

function generateFooter(doc) {
    doc
        .fontSize(10)
        .text(
            'Thank you for your business.',
            50,
            780,
            { align: 'center', width: 500 }
        );
}

function generateTableRow(
    doc,
    y,
    description,
    unitPrice,
    amount
) {
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

const userData = {
    id: '12345678-abcd-90ef-1234-567890abcdef',
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    mobile: '+1234567890',
    address: '123 Main Street',
    city: 'Muscat',
    state: '511',
    zip: '12345',
    country: 'Oman',
    amount: 20.0,
    ticketType: 'Conference Ticket',
    oosMembership: 'Member',
    orderId: 'INV123456',
    paymentDate: '13 July 2024',
    paymentStatus: 'Success',
};
;

// const pdfPath = 'invoice.pdf';



// generateInvoice(userData, pdfPath);
// await successfullConferenceRegistrationEmail('almuqbalimusab@gmail.com',pdfPath)

