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

export async function abstractNotificationEmail(topic) {
    const params = {
        Destination: {
            ToAddresses: ['almuqbalimusab@gmail.com'], // Replace with your recipient's email address
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: `
                        <html>
                            <body>
                                <h3>There is a new abstract submission of ${topic}</h3>
                            </body>
                        </html>`
                },
                // Text: { Data: "Hello, this is a test email sent using Amazon SES." }, // Replace with your email content
            },
            Subject: { Data: "Abstract Submission Notificatoin" }, // Replace with your email subject
        },
        Source: "MIOC Notification <no-replay@mioc.org.om>", // Replace with your verified sender's email address
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



export async function abstractSuccssfullSubmissionEmail(email) {
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
                                <h3>We recived your abstract and we will get back to you once yout abstract reviewd</h3>
                                <p>Best Regards</p>
                                <p>MIOC team</p>
                            </body>
                        </html>`
                },
                // Text: { Data: "Hello, this is a test email sent using Amazon SES." }, // Replace with your email content
            },
            Subject: { Data: "Abstract Submission Notificatoin" }, // Replace with your email subject
        },
        Source: "MIOC Abstract Submission <no-replay@mioc.org.om>", // Replace with your verified sender's email address
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
