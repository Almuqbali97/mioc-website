import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import dotenv from "dotenv";
dotenv.config();

const sesAcessKey = process.env.AMAZON_SES_ACCESS_KEY;
const sesSecretKey = process.env.AMAZON_SES_SECRET_KEY;
const awsRegion = process.env.AMAZON_SES_REGION;


const sesClient = new SESClient({
    region: awsRegion,
    credentials: {
        accessKeyId: sesAcessKey,
        secretAccessKey: sesSecretKey,
    },
});

export async function sendVerificationEmail(email, verificationCode) {
    // const verificationLink = `http://localhost:5000/verify-email?token=${verificationCode}`; // for testing not production
    const verificationLink = `https://mioc.org.om//verify-email?token=${verificationCode}`;
    const params = {
        Destination: {
            ToAddresses: [email], // Replace with your recipient's email address
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: `
                        <html>
                            <body>
                                <h1>Verify your email for MIOC website</h1>
                                <p>Thank you for registering. Please verify your email by clicking on the link below:</p>
                                <a href="${verificationLink}">Verify Email</a>
                            </body>
                        </html>`
                },
                // Text: { Data: "Hello, this is a test email sent using Amazon SES." }, // Replace with your email content
            },
            Subject: { Data: "Verify your email" }, // Replace with your email subject
        },
        Source: "MIOC 2024 email verification <no-replay@mioc.org.om>", // Replace with your verified sender's email address
        ReplyToAddresses: ["no-replay@mioc.org.om"],
        // ConfigurationSetName: 'EventsLogs',
    };

    try {
        const data = await sesClient.send(new SendEmailCommand(params));
        console.log("Email sent successfully:", data);
    } catch (err) {
        console.error("Error sending email:", err);
    }
}
