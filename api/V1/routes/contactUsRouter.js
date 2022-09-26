const { Router } = require('express');
const router = Router();
const axios = require('axios');
let nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// const creds = require('../../credendial.json');
const { auth_mail, pass_mail } = process.env;

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: auth_mail,
        pass: pass_mail
    },
});

router.post('/', (req, res) => {
    try {
        let { name, email, message } = req.body;
        let mailToCompanyOptions = {
            from: name,
            to: auth_mail,
            subject: 'test email',
            html: `<div>
                <h2>You have a new message</h2>
                <p>${message}</p>
                <p>${email}</p>
                </div>`
        };

        let mailToCustomerOptions = {
            from: name,
            to: email,
            subject: 'No Reply',
            html: `<div>
                <h2>Thank you for your message!</h2>
                <p>We'll be in touch as soon as we can.</p>
                </div>`
        }

        transporter.sendMail(mailToCompanyOptions, (err, data) => {
            if (err) {
                res.json({
                    status: err
                })
                console.log(err);
            }
        })

        transporter.sendMail(mailToCustomerOptions, (err, data) => {
            if (err) {
                res.json({
                    status: err
                })
                console.log(err);
            } else {
                res.json({
                    status: 'success'
                })
            }
        })

    } catch (error) {
        console.error(error);
    }

});

transporter.verify(function(err, success) {
    if (err) {
        console.log(err);
    } else {
        console.log('Server is ready to take the emails');
    }
});


module.exports = router;