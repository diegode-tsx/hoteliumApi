const express = require('express');
const nodemailer = require('nodemailer');

const config = require('../config/config');

const USER = encodeURI(config.emailUser);
const PASS = encodeURI(config.emailPass);

const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: USER,
            pass: PASS
        }
    });

function sendMailOp (mailData) {
    
    const email = mailData.client.email;
        var mailOptions = {
            from: 'Hotelium Reservation Support ✔ <hoteliumteam@gmail.com>',
            to: email,
            subject: "Hello " + email,
            text: 'Hello ' + email + '✔',
            html: "<p>Hello " + email + " </p>",
            bcc: email
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
            }else{
                console.log('Message sent: ' + info.response);
                res.send(200);
            }
        });        
    
}

module.exports = sendMailOp;