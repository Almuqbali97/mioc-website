export default function handler(req, res) {
    // Your scheduled task logic here
    console.log("Cron job - server is alive!");
    res.status(200).end('Hello Cron!');
}