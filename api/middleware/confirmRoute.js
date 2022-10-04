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

function confirmationEmail(userData, products) {
    console.log('BUENAS BUENAS', userData);
    try {
        let mailToCompanyOptions = {
            from: userData,
            to: auth_mail,
            subject: 'NEW ORDER',
            html: `<div>
                <h2>You have a new order to prepare</h2>
                <p>${products}</p>
                </div>`
        };

        let mailToCustomerOptions = {
            from: 'Developets',
            to: userData,
            subject: 'ORDER CONFIRM 🐶',
            html: `<div>
                <h2>Thank you for your purchase!</h2>
                <p>We receive your purchase for 
                    <div>
                        ${products}
                    </div>
                </p>
                </div>`
        }

        transporter.sendMail(mailToCompanyOptions, (err, data) => {
            if (err) {
                // res.json({
                //     status: err
                // })
                console.log(err);
            }
        })

        transporter.sendMail(mailToCustomerOptions, (err, data) => {
            if (err) {
                // res.json({
                //     status: err
                // })
                console.log(err);
            } else {
                console.log('success');
                // res.json({
                //     status: 'success'
                // })
            }
        })

    } catch (error) {
        console.error(error);
    }

    transporter.verify(function(err, success) {
        if (err) {
            console.log(err);
        } else {
            console.log('Server is ready to take the emails');
        }
    });
    
    

};



module.exports = { confirmationEmail }