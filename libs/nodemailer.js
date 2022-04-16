const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');

const config = require('../config/config');

const USER = encodeURI(config.emailUser);
const PASS = encodeURI(config.emailPass);

const readHTMLFile = async (path, callback) => {
   fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
      if (err) {
         throw err;
      }
      else {
         callback(null, html);
      }
   });
};

const transporter = nodemailer.createTransport({
   service: 'Gmail',
   auth: {
      user: USER,
      pass: PASS
   }
});

async function sendMailOp(mailData) {
   return await readHTMLFile(__dirname + '/prueba.html', async (err, html) => {
      const template = handlebars.compile(html);
      console.log(mailData);
      const email = mailData.client.email;
      const name = mailData.client.name;
      const reservationCode = mailData.reservation_code;
      const arrivalDate = mailData.arrival_date;
      const departureDate = mailData.departure_date;
      const replacements = {
         name: name,
         reservationCode: reservationCode,
         arrivalDate: arrivalDate,
         departureDate: departureDate
      }
      const htmlToSend = template(replacements);
      const mailOptions = {
         from: 'Hotelium Reservation Support ✔ <hoteliumteam@gmail.com>',
         to: email,
         subject: "Hello " + email,
         text: 'Hello ' + email + '✔',
         html: htmlToSend,
         bcc: email
      };
      return await transporter.sendMail(mailOptions);
   })
}

module.exports = sendMailOp;
