const { Router } = require('express');
const router = Router();
const axios = require('axios');
let nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// const creds = require('../../credendial.json');
const { auth_mail, pass_mail } = process.env;


// router.post('/aboutus', cors(), async(req, res) => {
//     let { name, email, message } = req.body;
//     let transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 587,
//         // secure: false,
//         auth: {
//             user: auth_mail,
//             pass: pass_mail
//         },
//     });

//     await transporter.sendMail({
//         from: name,
//         to: email,
//         subject: 'no reply, test email',
//         html: `<div>
//         <h2>Here is your mail</h2>
//         <p>${message}</p>
//         </div>`
//     })
// })


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: auth_mail,
        pass: pass_mail
    },
});


router.post('/aboutus', (req, res) => {
    try {
        let { name, email, message } = req.body;
        console.log(req.body);
        let mailOptions = {
            from: name,
            to: email,
            subject: 'test email',
            html: `<div>
                <h2>Here is your mail</h2>
                <p>${message}</p>
                </div>`
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
        console.error(error);
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