const express = require('express');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
   service: 'Gmail',
   auth: {
      user: 'hoteliumteam@gmail.com',
      pass: 'roothotelium1'
   }
});

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
