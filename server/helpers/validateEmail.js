export const validateEmail = (email) => {
    //const allowedDomains = ['gmail.com', 'cloud.com']; // Add other allowed domains as needed
    //const domain = email.split('@')[1];

    // Regular expression for basic email validation
    const emailRegex = /^(?!.*\s)(?=.{1,64}@.{1,255}$)[a-zA-Z0-9"$&'*+,\/:;=?^_`{|}~-]+(?:\.[a-zA-Z0-9"$&'*+,\/:;=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;

    if (!emailRegex.test(email)) {
        return false;
    }

    // in case spesific email domains are accepted this can be used
    // if (!allowedDomains.includes(domain)) {
    //     return false
    // }

    return true;
};