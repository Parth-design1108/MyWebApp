const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    service: "gmail", auth: {

        user: "bhayaniparth932@gmail.com", pass: "ookjfgukrfbmtbur"
    }
});
let mailOptions = {
    from: "bhayaniparth932@gmail.com", to: "vatsalposty50@gmail.com", subject: "Node.js Email Test", text: "Email sent using Node.js"
};
transporter.sendMail(mailOptions, function (error, info) {
    if (error) console.log(error);
    else
        console.log(
            "Email sent successfully"
        );

});
