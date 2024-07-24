export function invoiceEmail(amount, paymentDate, invoiceId, paymentMethod, registrationType) {

    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .centerAlieng {
        margin: 0 auto;
    }
</style>
<body>
    <tbody class="centerAlieng">
        <tr>
            <td style="font-size:16px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>


                <table class="m_-1466481084171350147st-Wrapper" align="center" border="0" cellpadding="0"
                    cellspacing="0" style="width:480px;min-width:480px;max-width:480px">
                    <tbody>
                        <tr>
                            <td>







                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td height="58"
                                                style="border:0;margin:0;padding:0;font-size:1px;line-height:1px;max-height:1px">
                                                <div>&nbsp;</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td height="32"
                                                style="border:0;margin:0;padding:0;font-size:1px;line-height:1px;max-height:1px">
                                                <div>&nbsp;</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table cellpadding="0" cellspacing="0" style="width:100%">
                                    <tbody>

                                        <tr>

                                            <td align="">


                                                <table cellpadding="0" cellspacing="0" style="width:100%">
                                                    <tbody>

                                                        <tr>

                                                            <td align=""
                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;width:100%;width:482px;border-radius:12px;background-color:#e3e8ee;padding:1px">


                                                                <table cellpadding="0" cellspacing="0"
                                                                    style="width:100%;background-color:#ffffff;border-radius:12px">
                                                                    <tbody>

                                                                        <tr>

                                                                            <td
                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0">


                                                                                <table border="0" cellpadding="0"
                                                                                    cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td height="32"
                                                                                                style="border:0;margin:0;padding:0;font-size:1px;line-height:1px;max-height:1px">
                                                                                                <div>&nbsp;</div>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>

                                                                                <table cellpadding="0" cellspacing="0"
                                                                                    style="width:100%">
                                                                                    <tbody>

                                                                                        <tr>


                                                                                            <td
                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:32px;width:32px;font-size:1px">

                                                                                                &nbsp;

                                                                                            </td>

                                                                                            <td
                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0">



                                                                                                <table cellpadding="0"
                                                                                                    cellspacing="0"
                                                                                                    style="width:100%">
                                                                                                    <tbody>

                                                                                                        <tr>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;width:100%">


                                                                                                                <table
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    style="width:100%">
                                                                                                                    <tbody>

                                                                                                                        <tr>

                                                                                                                            <td align=""
                                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;width:100%;padding-bottom:2px">


                                                                                                                                <span
                                                                                                                                    style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;text-decoration:none;color:#7a7a7a;font-size:14px;line-height:20px;font-weight:500">
                                                                                                                                    Receipt
                                                                                                                                    from
                                                                                                                                    <span
                                                                                                                                        class="il">Oman
                                                                                                                                        Ophthalmic
                                                                                                                                        Society</span>

                                                                                                                                </span>

                                                                                                                            </td>

                                                                                                                        </tr>

                                                                                                                    </tbody>
                                                                                                                </table>

                                                                                                                <table
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    style="width:100%">
                                                                                                                    <tbody>

                                                                                                                        <tr>

                                                                                                                            <td align=""
                                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;width:100%;padding-bottom:2px">


                                                                                                                                <span
                                                                                                                                    style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;text-decoration:none;color:#1a1a1a;font-size:36px;line-height:40px;font-weight:600">
                                                                                                                                    OMR
                                                                                                                                    ${amount}

                                                                                                                                </span>

                                                                                                                            </td>

                                                                                                                        </tr>

                                                                                                                    </tbody>
                                                                                                                </table>

                                                                                                                <table
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    style="width:100%">
                                                                                                                    <tbody>

                                                                                                                        <tr>

                                                                                                                            <td align=""
                                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;width:100%">



                                                                                                                                <span
                                                                                                                                    style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;text-decoration:none;color:#7a7a7a;font-size:14px;line-height:24px;font-weight:500">
                                                                                                                                    Paid
                                                                                                                                    on
                                                                                                                                    ${paymentDate}
                                                                                                                                </span>




                                                                                                                            </td>

                                                                                                                        </tr>

                                                                                                                    </tbody>
                                                                                                                </table>

                                                                                                                <table
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    style="width:100%">
                                                                                                                    <tbody>

                                                                                                                        <tr>

                                                                                                                            <td colspan="1"
                                                                                                                                height="16"
                                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;height:16px;font-size:1px;line-height:1px">

                                                                                                                                &nbsp;

                                                                                                                            </td>

                                                                                                                        </tr>

                                                                                                                        <tr>


                                                                                                                            <td height="1"
                                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;height:1px;font-size:1px;background-color:#ebebeb;line-height:1px">

                                                                                                                                &nbsp;

                                                                                                                            </td>


                                                                                                                        </tr>

                                                                                                                        <tr>

                                                                                                                            <td colspan="1"
                                                                                                                                height="12"
                                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;height:12px;font-size:1px;line-height:1px">

                                                                                                                                &nbsp;

                                                                                                                            </td>

                                                                                                                        </tr>

                                                                                                                    </tbody>
                                                                                                                </table>


                                                                                                            </td>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;width:76px;max-width:76px">

                                                                                                                <img src="https://ci3.googleusercontent.com/meips/ADKq_Nb0PIKp4BW7Q9dGZWAbhhehqH1C7jSJqPrktJ2lzqT_ZKhZb3k_OE2EHw4d-X52LFFEkrtG1wxOZCHxAtGyrjX1yDzocuLEuaTPZySKYYjONkOVyakKaNjTutQUWWCz6ZcbCwWN=s0-d-e1-ft#https://stripe-images.s3.amazonaws.com/emails/invoices_invoice_illustration.png"
                                                                                                                    width="94"
                                                                                                                    height="91"
                                                                                                                    style="border:0;margin:0 auto;padding:0;display:block;border-radius:8px"
                                                                                                                    alt="invoice illustration"
                                                                                                                    class="CToWUd"
                                                                                                                    data-bit="iit">

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                    </tbody>
                                                                                                </table>

                                                                                                <table cellpadding="0"
                                                                                                    cellspacing="0">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:16px;width:16px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0">


                                                                                                            </td>

                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>

                                                                                                <table border="0"
                                                                                                    cellpadding="0"
                                                                                                    cellspacing="0"
                                                                                                    width="100%">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td height="32"
                                                                                                                style="border:0;margin:0;padding:0;font-size:1px;line-height:1px;max-height:1px">
                                                                                                                <div>
                                                                                                                    &nbsp;
                                                                                                                </div>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>

                                                                                                <table cellpadding="0"
                                                                                                    cellspacing="0"
                                                                                                    style="width:100%">
                                                                                                    <tbody>

                                                                                                        <tr>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;vertical-align:top;white-space:nowrap">

                                                                                                                <span
                                                                                                                    style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;text-decoration:none;color:#7a7a7a;font-size:14px;line-height:16px">
                                                                                                                    Invoice
                                                                                                                    Number
                                                                                                                </span>

                                                                                                            </td>
                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;width:24px">
                                                                                                                &nbsp;
                                                                                                            </td>
                                                                                                            <td align="right"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0">

                                                                                                                <span
                                                                                                                    style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;text-decoration:none;color:#1a1a1a;font-size:14px;line-height:16px">
                                                                                                                    ${invoiceId}
                                                                                                                </span>

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                        <tr>

                                                                                                            <td colspan="2"
                                                                                                                height="8"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;height:8px;font-size:1px;line-height:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                        </tr>


                                                                                                        <tr>

                                                                                                            <td colspan="2"
                                                                                                                height="8"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;height:8px;font-size:1px;line-height:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                        <tr>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;vertical-align:top;white-space:nowrap">

                                                                                                                <span
                                                                                                                    style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;text-decoration:none;color:#7a7a7a;font-size:14px;line-height:16px">
                                                                                                                    Payment
                                                                                                                    method
                                                                                                                </span>

                                                                                                            </td>
                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;width:24px">
                                                                                                                &nbsp;
                                                                                                            </td>
                                                                                                            <td align="right"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0">

                                                                                                                <span
                                                                                                                    style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;text-decoration:none;color:#1a1a1a;font-size:14px;line-height:16px">

                                                                                                                    <span>
                                                                                                                        ${paymentMethod}
                                                                                                                    </span>
                                                                                                                </span>

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                    </tbody>
                                                                                                </table>



                                                                                            </td>


                                                                                            <td
                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:32px;width:32px;font-size:1px">

                                                                                                &nbsp;

                                                                                            </td>

                                                                                        </tr>

                                                                                    </tbody>
                                                                                </table>


                                                                                <table border="0" cellpadding="0"
                                                                                    cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td height="24"
                                                                                                style="border:0;margin:0;padding:0;font-size:1px;line-height:1px;max-height:1px">
                                                                                                <div>&nbsp;</div>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>

                                                                            </td>

                                                                        </tr>

                                                                    </tbody>
                                                                </table>


                                                            </td>

                                                        </tr>

                                                    </tbody>
                                                </table>


                                            </td>

                                        </tr>

                                    </tbody>
                                </table>

                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td height="20"
                                                style="border:0;margin:0;padding:0;font-size:1px;line-height:1px;max-height:1px">
                                                <div>&nbsp;</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table cellpadding="0" cellspacing="0" style="width:100%">
                                    <tbody>

                                        <tr>

                                            <td align="">


                                                <table cellpadding="0" cellspacing="0" style="width:100%">
                                                    <tbody>

                                                        <tr>

                                                            <td align=""
                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;width:100%;width:482px;border-radius:12px;background-color:#e3e8ee;padding:1px">


                                                                <table cellpadding="0" cellspacing="0"
                                                                    style="width:100%;background-color:#ffffff;border-radius:12px">
                                                                    <tbody>

                                                                        <tr>

                                                                            <td
                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0">


                                                                                <table border="0" cellpadding="0"
                                                                                    cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td height="32"
                                                                                                style="border:0;margin:0;padding:0;font-size:1px;line-height:1px;max-height:1px">
                                                                                                <div>&nbsp;</div>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>

                                                                                <table cellpadding="0" cellspacing="0"
                                                                                    style="width:100%">
                                                                                    <tbody>

                                                                                        <tr>



                                                                                            <td
                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0">



                                                                                                <table cellpadding="0"
                                                                                                    cellspacing="0"
                                                                                                    style="width:100%">
                                                                                                    <tbody>

                                                                                                        <tr>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:32px;width:32px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>
                                                                                                            <td nowrap=""
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;width:100%">

                                                                                                                <span
                                                                                                                    style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;text-decoration:none;color:#1a1a1a;font-size:16px;line-height:20px;font-weight:500;white-space:nowrap">
                                                                                                                    invoice#
                                                                                                                    ${invoiceId}
                                                                                                                </span>

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                    </tbody>
                                                                                                </table>

                                                                                                <table border="0"
                                                                                                    cellpadding="0"
                                                                                                    cellspacing="0"
                                                                                                    width="100%">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td height="26"
                                                                                                                style="border:0;margin:0;padding:0;font-size:1px;line-height:1px;max-height:1px">
                                                                                                                <div>
                                                                                                                    &nbsp;
                                                                                                                </div>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>




                                                                                                <table cellpadding="0"
                                                                                                    cellspacing="0"
                                                                                                    style="width:100%">
                                                                                                    <tbody>

                                                                                                        <tr>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:32px;width:32px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>
                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0">

                                                                                                                <span
                                                                                                                    style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;text-decoration:none;color:#7a7a7a;font-size:13px;line-height:16px;font-weight:500;text-transform:uppercase">
                                                                                                                    ${paymentDate}
                                                                                                                </span>

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                    </tbody>
                                                                                                </table>

                                                                                                <table border="0"
                                                                                                    cellpadding="0"
                                                                                                    cellspacing="0"
                                                                                                    width="100%">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td height="8"
                                                                                                                style="border:0;margin:0;padding:0;font-size:1px;line-height:1px;max-height:1px">
                                                                                                                <div>
                                                                                                                    &nbsp;
                                                                                                                </div>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>


                                                                                                <table cellpadding="0"
                                                                                                    cellspacing="0"
                                                                                                    style="width:100%">
                                                                                                    <tbody>

                                                                                                        <tr>


                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:32px;width:32px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;padding-left:0px">


                                                                                                                <table
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    style="width:100%">
                                                                                                                    <tbody>

                                                                                                                        <tr>

                                                                                                                            <td align=""
                                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;width:100%">


                                                                                                                                <span
                                                                                                                                    style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;text-decoration:none;color:#1a1a1a;font-size:14px;line-height:16px;font-weight:500;word-break:break-word">

                                                                                                                                    ${registrationType}

                                                                                                                                </span>


                                                                                                                            </td>

                                                                                                                        </tr>

                                                                                                                    </tbody>
                                                                                                                </table>

                                                                                                                <table
                                                                                                                    border="0"
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    width="100%">
                                                                                                                    <tbody>
                                                                                                                        <tr>
                                                                                                                            <td height="3"
                                                                                                                                style="border:0;margin:0;padding:0;font-size:1px;line-height:1px;max-height:1px">
                                                                                                                                <div>
                                                                                                                                    &nbsp;
                                                                                                                                </div>
                                                                                                                            </td>
                                                                                                                        </tr>
                                                                                                                    </tbody>
                                                                                                                </table>
                                                                                                                <table
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    style="width:100%">
                                                                                                                    <tbody>

                                                                                                                        <tr>

                                                                                                                            <td align=""
                                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;width:100%">


                                                                                                                                <span
                                                                                                                                    style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;text-decoration:none;color:#999999;font-size:12px;line-height:14px">
                                                                                                                                    Qty
                                                                                                                                    1
                                                                                                                                </span>


                                                                                                                            </td>

                                                                                                                        </tr>

                                                                                                                    </tbody>
                                                                                                                </table>



                                                                                                            </td>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:16px;width:16px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                            <td align="right"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;text-align:right;vertical-align:top">


                                                                                                                <table
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    style="width:100%">
                                                                                                                    <tbody>

                                                                                                                        <tr>

                                                                                                                            <td align="right"
                                                                                                                                nowrap=""
                                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;width:100%">


                                                                                                                                <span
                                                                                                                                    style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;text-decoration:none;color:#1a1a1a;font-size:14px;line-height:16px;font-weight:500;white-space:nowrap">
                                                                                                                                    ${amount}
                                                                                                                                </span>


                                                                                                                            </td>

                                                                                                                        </tr>

                                                                                                                    </tbody>
                                                                                                                </table>



                                                                                                            </td>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:32px;width:32px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>


                                                                                                        </tr>

                                                                                                        <tr>

                                                                                                            <td colspan="5"
                                                                                                                height="24"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;height:24px;font-size:1px;line-height:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                    </tbody>
                                                                                                </table>







































                                                                                                <table cellpadding="0"
                                                                                                    cellspacing="0"
                                                                                                    style="width:100%">
                                                                                                    <tbody>

                                                                                                        <tr>

                                                                                                            <td colspan="3"
                                                                                                                height="16"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;height:16px;font-size:1px;line-height:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                        <tr>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:32px;width:32px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                            <td height="1"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;height:1px;font-size:1px;background-color:#ebebeb;line-height:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:32px;width:32px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                        <tr>

                                                                                                            <td colspan="3"
                                                                                                                height="16"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;height:16px;font-size:1px;line-height:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                    </tbody>
                                                                                                </table>
                                                                                                <table cellpadding="0"
                                                                                                    cellspacing="0"
                                                                                                    style="width:100%">
                                                                                                    <tbody>

                                                                                                        <tr>


                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:32px;width:32px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;padding-left:0px">


                                                                                                                <table
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    style="width:100%">
                                                                                                                    <tbody>

                                                                                                                        <tr>

                                                                                                                            <td align=""
                                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;width:100%">


                                                                                                                                <span
                                                                                                                                    style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;text-decoration:none;color:#1a1a1a;font-size:14px;line-height:16px;font-weight:500;word-break:break-word">

                                                                                                                                    Total

                                                                                                                                </span>


                                                                                                                            </td>

                                                                                                                        </tr>

                                                                                                                    </tbody>
                                                                                                                </table>




                                                                                                            </td>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:16px;width:16px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                            <td align="right"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;text-align:right;vertical-align:top">


                                                                                                                <table
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    style="width:100%">
                                                                                                                    <tbody>

                                                                                                                        <tr>

                                                                                                                            <td align="right"
                                                                                                                                nowrap=""
                                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;width:100%">


                                                                                                                                <span
                                                                                                                                    style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;text-decoration:none;color:#1a1a1a;font-size:14px;line-height:16px;font-weight:500;white-space:nowrap">
                                                                                                                                    ${amount}
                                                                                                                                </span>


                                                                                                                            </td>

                                                                                                                        </tr>

                                                                                                                    </tbody>
                                                                                                                </table>



                                                                                                            </td>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:32px;width:32px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>


                                                                                                        </tr>

                                                                                                        <tr>

                                                                                                            <td colspan="5"
                                                                                                                height="0"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;height:0px;font-size:1px;line-height:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                    </tbody>
                                                                                                </table>
                                                                                                <table cellpadding="0"
                                                                                                    cellspacing="0"
                                                                                                    style="width:100%">
                                                                                                    <tbody>

                                                                                                        <tr>

                                                                                                            <td colspan="3"
                                                                                                                height="16"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;height:16px;font-size:1px;line-height:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                        <tr>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:32px;width:32px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                            <td height="1"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;height:1px;font-size:1px;background-color:#ebebeb;line-height:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:32px;width:32px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                        <tr>

                                                                                                            <td colspan="3"
                                                                                                                height="16"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;height:16px;font-size:1px;line-height:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                    </tbody>
                                                                                                </table>




                                                                                                <table cellpadding="0"
                                                                                                    cellspacing="0"
                                                                                                    style="width:100%">
                                                                                                    <tbody>

                                                                                                        <tr>


                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:32px;width:32px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;padding-left:0px">


                                                                                                                <table
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    style="width:100%">
                                                                                                                    <tbody>

                                                                                                                        <tr>

                                                                                                                            <td align=""
                                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;width:100%">


                                                                                                                                <span
                                                                                                                                    style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;text-decoration:none;color:#1a1a1a;font-size:14px;line-height:16px;font-weight:500;word-break:break-word">

                                                                                                                                    Amount
                                                                                                                                    paid

                                                                                                                                </span>


                                                                                                                            </td>

                                                                                                                        </tr>

                                                                                                                    </tbody>
                                                                                                                </table>




                                                                                                            </td>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:16px;width:16px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                            <td align="right"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;text-align:right;vertical-align:top">


                                                                                                                <table
                                                                                                                    cellpadding="0"
                                                                                                                    cellspacing="0"
                                                                                                                    style="width:100%">
                                                                                                                    <tbody>

                                                                                                                        <tr>

                                                                                                                            <td align="right"
                                                                                                                                nowrap=""
                                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;width:100%">


                                                                                                                                <span
                                                                                                                                    style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;text-decoration:none;color:#1a1a1a;font-size:14px;line-height:16px;font-weight:500;white-space:nowrap">
                                                                                                                                    ${amount}
                                                                                                                                </span>


                                                                                                                            </td>

                                                                                                                        </tr>

                                                                                                                    </tbody>
                                                                                                                </table>



                                                                                                            </td>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:32px;width:32px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>


                                                                                                        </tr>

                                                                                                        <tr>

                                                                                                            <td colspan="5"
                                                                                                                height="0"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;height:0px;font-size:1px;line-height:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                    </tbody>
                                                                                                </table>






                                                                                                <table cellpadding="0"
                                                                                                    cellspacing="0"
                                                                                                    style="width:100%">
                                                                                                    <tbody>

                                                                                                        <tr>

                                                                                                            <td colspan="3"
                                                                                                                height="16"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;height:16px;font-size:1px;line-height:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                        <tr>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:32px;width:32px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                            <td height="1"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;height:1px;font-size:1px;background-color:#ebebeb;line-height:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:32px;width:32px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                        <tr>

                                                                                                            <td colspan="3"
                                                                                                                height="20"
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;height:20px;font-size:1px;line-height:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                    </tbody>
                                                                                                </table>


                                                                                                <table cellpadding="0"
                                                                                                    cellspacing="0"
                                                                                                    style="width:100%">
                                                                                                    <tbody>

                                                                                                        <tr>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:32px;width:32px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;font-size:14px;line-height:16px;color:#999999">

                                                                                                                Questions?
                                                                                                                Contact
                                                                                                                our
                                                                                                                support
                                                                                                                at <a
                                                                                                                    style="border:0;margin:0;padding:0;color:#625afa!important;font-weight:bold;text-decoration:none;white-space:nowrap"
                                                                                                                    href="https://mioc.org.om"
                                                                                                                    target="_blank"
                                                                                                                    data-saferedirecturl="https://www.google.com/url?q=https://vercel.com/support&amp;source=gmail&amp;ust=1721719904328000&amp;usg=AOvVaw2kq7AXEy8u56Dvl9AI9uFa">https://<span
                                                                                                                        class="il">mioc</span>.org.om</a>


                                                                                                            </td>

                                                                                                            <td
                                                                                                                style="border:0;border-collapse:collapse;margin:0;padding:0;min-width:32px;width:32px;font-size:1px">

                                                                                                                &nbsp;

                                                                                                            </td>

                                                                                                        </tr>

                                                                                                    </tbody>
                                                                                                </table>



                                                                                            </td>



                                                                                        </tr>

                                                                                    </tbody>
                                                                                </table>


                                                                                <table border="0" cellpadding="0"
                                                                                    cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td height="24"
                                                                                                style="border:0;margin:0;padding:0;font-size:1px;line-height:1px;max-height:1px">
                                                                                                <div>&nbsp;</div>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>

                                                                            </td>

                                                                        </tr>

                                                                    </tbody>
                                                                </table>


                                                            </td>

                                                        </tr>

                                                    </tbody>
                                                </table>


                                            </td>

                                        </tr>

                                    </tbody>
                                </table>


                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td height="32"
                                                style="border:0;margin:0;padding:0;font-size:1px;line-height:1px;max-height:1px">
                                                <div>&nbsp;</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table cellpadding="0" cellspacing="0" style="width:100%">
                                    <tbody>

                                        <tr>

                                            <td
                                                style="border:0;border-collapse:collapse;margin:0;padding:0;width:100%;text-align:center;color:rgb(255,255,255);opacity:0.5">

                                                <span
                                                    style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;text-decoration:none;font-size:12px;line-height:14px">
                                                    <p
                                                        style="border:0;margin:0;padding:0;font-family:-apple-system,'SF Pro Display','SF Pro Text','Helvetica',sans-serif">
                                                        Powered by
                                                        <a style="border:0;margin:0;padding:0;text-decoration:none;outline:0"
                                                            href="https://58.email.stripe.com/CL0/https:%2F%2Fstripe.com/1/01000190adb74b75-529f232f-27d1-4d15-9bbd-8646e9981a83-000000/L6jr47J49Lhscx75Jxw8TVGfSxvd7Ixtk0m0FzRw49s=361"
                                                            target="_blank"
                                                            data-saferedirecturl="https://www.google.com/url?q=https://58.email.stripe.com/CL0/https:%252F%252Fstripe.com/1/01000190adb74b75-529f232f-27d1-4d15-9bbd-8646e9981a83-000000/L6jr47J49Lhscx75Jxw8TVGfSxvd7Ixtk0m0FzRw49s%3D361&amp;source=gmail&amp;ust=1721719904328000&amp;usg=AOvVaw1HIA8zAZFuNBdhrMDKCSGZ">
                                                            <img src="https://ci3.googleusercontent.com/meips/ADKq_Na5b19M0uoCIxtBaqKWlGeq-0wEReDSWWl0DkIR0-9owfYweQlfxgcWmWr5zN6NrvUbTvyGy6BxwMXoPkyXAvIJ4Nn7CYUr6d7bBxCEL2fQ1YJEv36mFkECIjRxYcI3klhu=s0-d-e1-ft#https://stripe-images.s3.amazonaws.com/emails/invoices_stripe_logo_light.png"
                                                                height="24" width="51" align="middle"
                                                                style="border:0;line-height:100%;vertical-align:middle"
                                                                alt="stripe logo" class="CToWUd" data-bit="iit">
                                                        </a>&nbsp;&nbsp;|&nbsp;&nbsp;
                                                        <a style="border:0;margin:0;padding:0;text-decoration:none;outline:0;color:rgb(255,255,255)"
                                                            href="https://58.email.stripe.com/CL0/https:%2F%2Fstripe.com%2Finvoicing/1/01000190adb74b75-529f232f-27d1-4d15-9bbd-8646e9981a83-000000/r3xgMIUhLw4sAHv6crH5Miytz2kmLfujZ1lB8ZNSe_E=361"
                                                            target="_blank"
                                                            data-saferedirecturl="https://www.google.com/url?q=https://58.email.stripe.com/CL0/https:%252F%252Fstripe.com%252Finvoicing/1/01000190adb74b75-529f232f-27d1-4d15-9bbd-8646e9981a83-000000/r3xgMIUhLw4sAHv6crH5Miytz2kmLfujZ1lB8ZNSe_E%3D361&amp;source=gmail&amp;ust=1721719904328000&amp;usg=AOvVaw25r6aiHWg-8TUWC4sx6sUW">Learn
                                                            more about Stripe Invoicing</a>
                                                    </p>
                                                </span>

                                            </td>

                                        </tr>

                                    </tbody>
                                </table>

                            </td>
                        </tr>
                    </tbody>
                </table>


            </td>
            <td style="font-size:16px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>
        <tr>
            <td height="64" colspan="3" style="border:0;margin:0;padding:0;font-size:1px;line-height:1px">
                <div>&nbsp;</div>
            </td>
        </tr>
    </tbody>
</body>

</html>`;
}
