export function registrationEmail(fullName, amount, paymentDate, registrationType, orderId, paymentStatus) {
    return `
<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en"
    style="padding:0;Margin:0">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>New Message</title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]>
    <style>sup { font-size: 100% !important; }</style>
    <![endif]-->
    <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
    <!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,400i,700,700i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i" rel="stylesheet">
    <!--<![endif]-->
    <style type="text/css">
        #outlook a {
            padding: 0;
        }

        .ExternalClass {
            width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }

        .es-button {
            mso-style-priority: 100 !important;
            text-decoration: none !important;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .es-desk-hidden {
            display: none;
            float: left;
            overflow: hidden;
            width: 0;
            max-height: 0;
            line-height: 0;
            mso-hide: all;
        }

        @media only screen and (max-width:600px) {

            p,
            ul li,
            ol li,
            a {
                line-height: 150% !important
            }

            h1,
            h2,
            h3,
            h1 a,
            h2 a,
            h3 a {
                line-height: 120% !important
            }

            h1 {
                font-size: 30px !important;
                text-align: center
            }

            h2 {
                font-size: 26px !important;
                text-align: center
            }

            h3 {
                font-size: 20px !important;
                text-align: center
            }

            h1 a {
                text-align: center
            }

            .es-header-body h1 a,
            .es-content-body h1 a,
            .es-footer-body h1 a {
                font-size: 30px !important
            }

            h2 a {
                text-align: center
            }

            .es-header-body h2 a,
            .es-content-body h2 a,
            .es-footer-body h2 a {
                font-size: 26px !important
            }

            h3 a {
                text-align: center
            }

            .es-header-body h3 a,
            .es-content-body h3 a,
            .es-footer-body h3 a {
                font-size: 20px !important
            }

            .es-menu td a {
                font-size: 14px !important
            }

            .es-header-body p,
            .es-header-body ul li,
            .es-header-body ol li,
            .es-header-body a {
                font-size: 14px !important
            }

            .es-content-body p,
            .es-content-body ul li,
            .es-content-body ol li,
            .es-content-body a {
                font-size: 14px !important
            }

            .es-footer-body p,
            .es-footer-body ul li,
            .es-footer-body ol li,
            .es-footer-body a {
                font-size: 14px !important
            }

            .es-infoblock p,
            .es-infoblock ul li,
            .es-infoblock ol li,
            .es-infoblock a {
                font-size: 12px !important
            }

            *[class="gmail-fix"] {
                display: none !important
            }

            .es-m-txt-c,
            .es-m-txt-c h1,
            .es-m-txt-c h2,
            .es-m-txt-c h3 {
                text-align: center !important
            }

            .es-m-txt-r,
            .es-m-txt-r h1,
            .es-m-txt-r h2,
            .es-m-txt-r h3 {
                text-align: right !important
            }

            .es-m-txt-l,
            .es-m-txt-l h1,
            .es-m-txt-l h2,
            .es-m-txt-l h3 {
                text-align: left !important
            }

            .es-m-txt-r img,
            .es-m-txt-c img,
            .es-m-txt-l img {
                display: inline !important
            }

            .es-button-border {
                display: inline-block !important
            }

            a.es-button,
            button.es-button {
                font-size: 18px !important;
                display: inline-block !important
            }

            .es-btn-fw {
                border-width: 10px 0px !important;
                text-align: center !important
            }

            .es-adaptive table,
            .es-btn-fw,
            .es-btn-fw-brdr,
            .es-left,
            .es-right {
                width: 100% !important
            }

            .es-content table,
            .es-header table,
            .es-footer table,
            .es-content,
            .es-footer,
            .es-header {
                width: 100% !important;
                max-width: 600px ! important
            }

            .es-adapt-td {
                display: block !important;
                width: 100% !important
            }

            .adapt-img {
                width: 100% !important;
                height: auto !important
            }

            .es-m-p0 {
                padding: 0 !important
            }

            .es-m-p0r {
                padding-right: 0 !important
            }

            .es-m-p0l {
                padding-left: 0 !important
            }

            .es-m-p0t {
                padding-top: 0 !important
            }

            .es-m-p0b {
                padding-bottom: 0 !important
            }

            .es-m-p20b {
                padding-bottom: 20px !important
            }

            .es-mobile-hidden,
            .es-hidden {
                display: none !important
            }

            tr.es-desk-hidden,
            td.es-desk-hidden,
            table.es-desk-hidden {
                width: auto !important;
                overflow: visible !important;
                float: none !important;
                max-height: inherit !important;
                line-height: inherit !important
            }

            tr.es-desk-hidden {
                display: table-row !important
            }

            table.es-desk-hidden {
                display: table !important
            }

            td.es-desk-menu-hidden {
                display: table-cell !important
            }

            .es-menu td {
                width: 1% !important
            }

            table.es-table-not-adapt,
            .esd-block-html table {
                width: auto !important
            }

            table.es-social {
                display: inline-block !important
            }

            table.es-social td {
                display: inline-block !important
            }

            .es-desk-hidden {
                display: table-row !important;
                width: auto !important;
                overflow: visible !important;
                max-height: inherit !important
            }

            .es-m-p5 {
                padding: 5px !important
            }

            .es-m-p5t {
                padding-top: 5px !important
            }

            .es-m-p5b {
                padding-bottom: 5px !important
            }

            .es-m-p5r {
                padding-right: 5px !important
            }

            .es-m-p5l {
                padding-left: 5px !important
            }

            .es-m-p10 {
                padding: 10px !important
            }

            .es-m-p10t {
                padding-top: 10px !important
            }

            .es-m-p10b {
                padding-bottom: 10px !important
            }

            .es-m-p10r {
                padding-right: 10px !important
            }

            .es-m-p10l {
                padding-left: 10px !important
            }

            .es-m-p15 {
                padding: 15px !important
            }

            .es-m-p15t {
                padding-top: 15px !important
            }

            .es-m-p15b {
                padding-bottom: 15px !important
            }

            .es-m-p15r {
                padding-right: 15px !important
            }

            .es-m-p15l {
                padding-left: 15px !important
            }

            .es-m-p20 {
                padding: 20px !important
            }

            .es-m-p20t {
                padding-top: 20px !important
            }

            .es-m-p20r {
                padding-right: 20px !important
            }

            .es-m-p20l {
                padding-left: 20px !important
            }

            .es-m-p25 {
                padding: 25px !important
            }

            .es-m-p25t {
                padding-top: 25px !important
            }

            .es-m-p25b {
                padding-bottom: 25px !important
            }

            .es-m-p25r {
                padding-right: 25px !important
            }

            .es-m-p25l {
                padding-left: 25px !important
            }

            .es-m-p30 {
                padding: 30px !important
            }

            .es-m-p30t {
                padding-top: 30px !important
            }

            .es-m-p30b {
                padding-bottom: 30px !important
            }

            .es-m-p30r {
                padding-right: 30px !important
            }

            .es-m-p30l {
                padding-left: 30px !important
            }

            .es-m-p35 {
                padding: 35px !important
            }

            .es-m-p35t {
                padding-top: 35px !important
            }

            .es-m-p35b {
                padding-bottom: 35px !important
            }

            .es-m-p35r {
                padding-right: 35px !important
            }

            .es-m-p35l {
                padding-left: 35px !important
            }

            .es-m-p40 {
                padding: 40px !important
            }

            .es-m-p40t {
                padding-top: 40px !important
            }

            .es-m-p40b {
                padding-bottom: 40px !important
            }

            .es-m-p40r {
                padding-right: 40px !important
            }

            .es-m-p40l {
                padding-left: 40px !important
            }
        }

        @media screen and (max-width:384px) {
            .mail-message-content {
                width: 414px !important
            }
        }

        .email-container {
            border: 1px solid #eaeaea;
            border-radius: 8px;
            padding: 16px;
            max-width: 600px;
            margin: auto;
        }

        .header {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 8px;
        }

        .amount {
            font-size: 24px;
            font-weight: bold;
            color: #000;
            margin-bottom: 4px;
        }

        .date {
            color: #666;
            margin-bottom: 16px;
        }

        .details {
            margin-top: 16px;
        }

        .details p {
            margin: 0;
            color: #666;
            margin-bottom: 8px;
        }

        .details span {
            font-weight: bold;
            color: #000;
        }

        .right-aligned {
            text-align: right;
        }
    </style>
</head>

<body
    style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
    <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#F6F6F6">
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F6F6F6">
            <tr style="border-collapse:collapse">
                <td valign="top" style="padding:0;Margin:0">
                    <table cellpadding="0" cellspacing="0" class="es-header" align="center" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table class="es-header-body"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px"
                                    cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none">
                                    <tr style="border-collapse:collapse">
                                        <td style="padding:15px;Margin:0;background-color:#ffffff" bgcolor="#fff"
                                            align="left">
                                            <table width="100%" cellspacing="0" cellpadding="0" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td valign="top" align="center"
                                                        style="padding:0;Margin:0;width:570px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td class="es-m-txt-c" align="center"
                                                                    style="padding:0;Margin:0;font-size:0px"><a
                                                                        target="_blank" href="https://viewstripo.email"
                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#B0883F;font-size:14px"><img
                                                                            src="https://i.imgur.com/V5IDBY0.jpeg" alt
                                                                            style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                            width="570"></a></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr style="border-collapse:collapse">
                                        <td style="padding:10px;Margin:0;background-color:#095c9f" bgcolor="#095C9F"
                                            align="left">
                                            <table width="100%" cellspacing="0" cellpadding="0" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td valign="top" align="center"
                                                        style="padding:0;Margin:0;width:580px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:0;Margin:0">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:23px;color:#ffffff;font-size:15px">
                                                                        <strong>28-30 Nov, 2024 Muscat, Oman</strong>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff"
                                    align="center" role="none"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                    <tr style="border-collapse:collapse">
                                        <td style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;background-color:#ffffff"
                                            bgcolor="#ffffff" align="left">
                                            <table width="100%" cellspacing="0" cellpadding="0" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td valign="top" align="center"
                                                        style="padding:0;Margin:0;width:560px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">



                                                            <tr>
                                                                <td
                                                                    style="border-collapse:collapse;padding-right:10px;padding-left:10px">
                                                                    <div
                                                                        style="color:#444;font-family:Calibri,Candara,Segoe,'Segoe UI',Optima,Arial,sans-serif;font-size:11pt;line-height:120%;text-align:left">
                                                                        <br><br>Dear ${fullName},<br><br>Thank you
                                                                        for your registration to attend the <b>20th
                                                                            Muscat International Ophthalmology
                                                                            Conference (<span
                                                                                class="il">MIOC</span>)</b> jointly
                                                                        with <b>4th Eastern Mediterranean Council of
                                                                            Optometry Conference (EMCO)</b> and the
                                                                        <b>International Keratoconus Society (IKS)</b>
                                                                        which will be held
                                                                        on 28 - 30 November 2024
                                                                        at Muscat, Oman.<br><br>Your registration request has
                                                                        been allocated a unique ID number.
                                                                        Please take note of your ID number
                                                                        below as you may will require it on all future
                                                                        communications with the registration
                                                                        team.<b></b> Please
                                                                        see below
                                                                        your registration details:<br><br>
                                                                    </div>
                                                                    <div class="email-container">
                                                                        <div class="header">
                                                                            Receipt from Oman Ophthalmic Society.
                                                                        </div>
                                                                        <div class="amount">
                                                                            Fees: ${amount} OMR
                                                                        </div>
                                                                        <div class="date">
                                                                            Issued on ${paymentDate}
                                                                        </div>
                                                                        <hr>

                                                                        <div class="details">
                                                                            <p>
                                                                                <span>Registration type: ${registrationType}</span>
                                                                            </p>
                                                                            <p>
                                                                                <span>Order ID:</span>
                                                                                <span
                                                                                    class="right-aligned">${orderId}</span>
                                                                            </p>
                                                                            <p>
                                                                                <span>Payment Status:</span>
                                                                                <span
                                                                                    class="right-aligned">${paymentStatus}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="left"
                                                                    style="padding:0;Margin:0;padding-bottom:5px;padding-left:10px;padding-right:0px">
                                                                    <p
                                                                        style="margin-top:20px;line-height:24px;mso-line-height-rule:exactly;font-family:'playfair display', georgia, 'times new roman', serif;font-size:16px;font-style:normal;font-weight:normal;color:#333333">
                                                                        Sincerely,<br />
                                                                        MIOC Team</p>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" style="padding:10px;Margin:0"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <!--  -->
                    <table cellpadding="0" cellspacing="0" class="es-footer" align="center" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table class="es-footer-body"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#016699;width:600px"
                                    cellspacing="0" cellpadding="0" bgcolor="#016699" align="center" role="none">
                                    <tr style="border-collapse:collapse">
                                        <td align="left" style="padding:0;Margin:0">
                                            <table width="100%" cellspacing="0" cellpadding="0" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td valign="top" align="center"
                                                        style="padding:0;Margin:0;width:600px">
                                                        <table
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff"
                                                            width="100%" cellspacing="0" cellpadding="0"
                                                            bgcolor="#ffffff" role="presentation">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0px"><img
                                                                        class="adapt-img"
                                                                        src="https://finwsnw.stripocdn.email/content/guids/b4254009-bbb5-4cb4-b4be-866abb0f5bf5/images/shryt_almʿalm_2.png"
                                                                        alt
                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                        width="600"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" class="es-header" align="center" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0"
                                    cellspacing="0" role="none"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                                    <tr style="border-collapse:collapse">
                                        <td style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color:#095c9f"
                                            bgcolor="#095C9F" align="left">
                                            <!--[if mso]>
                                            <table style="width:560px" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td style="width:270px" valign="top">
                                            <![endif]-->
                                            <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                                            <table class="es-right" cellspacing="0" cellpadding="0" align="center"
                                                role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;margin:0 auto">
                                                <tr style="border-collapse:collapse">
                                                    <td align="center" style="padding:0;Margin:0;width:270px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td class="es-m-txt-c" align="center"
                                                                    style="padding:0;Margin:0;font-size:0px">
                                                                    <table class="es-table-not-adapt es-social"
                                                                        cellspacing="0" cellpadding="0"
                                                                        role="presentation"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;margin:0 auto">
                                                                        <tr style="border-collapse:collapse">
                                                                            <td valign="top" align="center"
                                                                                style="padding:0;Margin:0;padding-right:10px">
                                                                                <a target="_blank"
                                                                                    href="https://www.facebook.com/people/Muscat-International-Ophthalmology-Conference-MIOC-2024/100063872257919/?mibextid=LQQJ4d"
                                                                                    style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#B0883F;font-size:14px"><img
                                                                                        title="Facebook"
                                                                                        src="https://finwsnw.stripocdn.email/content/assets/img/social-icons/logo-white/facebook-logo-white.png"
                                                                                        alt="Fb" width="32"
                                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a>
                                                                            </td>
                                                                            <td valign="top" align="center"
                                                                                style="padding:0;Margin:0;padding-right:10px">
                                                                                <a target="_blank"
                                                                                    href="https://www.instagram.com/mioc_oman/?igsh=dzQ5bGZ0M2h3M2Z2"
                                                                                    style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#B0883F;font-size:14px"><img
                                                                                        title="Instagram"
                                                                                        src="https://finwsnw.stripocdn.email/content/assets/img/social-icons/logo-white/instagram-logo-white.png"
                                                                                        alt="Inst" width="32"
                                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a>
                                                                            </td>
                                                                            <td valign="top" align="center"
                                                                                style="padding:0;Margin:0">
                                                                                <a target="_blank"
                                                                                    href="https://x.com/mioc_oman?s=21&t=g3Pqb7NMI7Y9YyKlI08wzw"
                                                                                    style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#B0883F;font-size:14px"><img
                                                                                        title="X"
                                                                                        src="https://finwsnw.stripocdn.email/content/assets/img/social-icons/logo-white/x-logo-white.png"
                                                                                        alt="X" width="32"
                                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>

                    <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                        <tr style="border-collapse:collapse">
                            <td align="center" style="padding:0;Margin:0">
                                <table class="es-content-body"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                                    cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none">
                                    <tr style="border-collapse:collapse">
                                        <td align="left"
                                            style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px">
                                            <table width="100%" cellspacing="0" cellpadding="0" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr style="border-collapse:collapse">
                                                    <td valign="top" align="center"
                                                        style="padding:0;Margin:0;width:560px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td class="es-infoblock" align="center"
                                                                    style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#999999">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#999999;font-size:12px">
                                                                        ©2024 MIOC 112 Oman Muscat, AL-Khoud</p>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td class="es-infoblock" align="center"
                                                                    style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px;line-height:14px;font-size:12px;color:#999999">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#999999;font-size:12px">
                                                                        You are receiving this email because of your
                                                                        recent activity at mioc.org.om. For information
                                                                        about our privacy practices, see our <strong><a
                                                                                target="_blank"
                                                                                href="https://viewstripo.email"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#999999;font-size:12px">Privacy
                                                                                Policy</a></strong>.</p>
                                                                </td>
                                                            </tr>
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center" class="es-infoblock"
                                                                    style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#999999">
                                                                    <p
                                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#999999;font-size:12px">
                                                                        <b>Visit website</b> | <strong>Terms &amp;
                                                                            Conditions</strong> | <b>Copyright</b>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</body>

</html>
}`;
    return registrationEmail;
}
