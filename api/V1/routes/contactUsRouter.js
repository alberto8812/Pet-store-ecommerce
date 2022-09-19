const { Router } = require('express');
const router = Router();
const axios = require('axios');
let nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const creds = require('../../credendial.json');


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: creds.auth.user,
        pass: creds.auth.pass
    },
});


router.post('/aboutus', (req, res) => {
    try {
        console.log(req.body);
        let { name, email, message } = req.body;
        let mailOptions = {
            from: name,
            to: email,
            message: message,
            html: `${name} <noreply@${name}.com> <br/> ${message}`
        };

        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                res.json({
                    status: err
                })
                console.log(err);
            } else {
                res.json({
                    status: 'success'
                })
                console.log('Email sent' + data.response);
            }
        })

    } catch (error) {
        console.error(JSON.stringify(error));
    }

});

transporter.verify(function(err, success) {
    if (err) {
        console.log(err);
    } else {
        console.log('Server is ready to take the emails');
    }
})




module.exports = router;