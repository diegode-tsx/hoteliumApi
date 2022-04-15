const express = require('express');
const nodemailer = require('nodemailer');

const config = require('../config/config');

const USER = encodeURI(config.emailUser);
const PASS = encodeURI(config.emailPass);

const transporter = nodemailer.createTransport({
<<<<<<< HEAD
        service: 'Gmail',
        auth: {
            user: USER,
            pass: PASS
        }
    });
=======
   service: 'Gmail',
   auth: {
      user: 'hoteliumteam@gmail.com',
      pass: 'roothotelium1'
   }
});
>>>>>>> eddb1b403de87927faf67fb29bd213decc98c397

async function sendMailOp(mailData) {
   const email = mailData.client.email;
   const mailOptions = {
      from: 'Hotelium Reservation Support ✔ <hoteliumteam@gmail.com>',
      to: email,
      subject: "Hello " + email,
      text: 'Hello ' + email + '✔',
      html: "<p>Hello " + email + " </p>",
      bcc: email
   };

   return await transporter.sendMail(mailOptions);
}

module.exports = sendMailOp;
