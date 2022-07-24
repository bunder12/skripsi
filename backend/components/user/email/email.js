const nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');

exports.kirimEmail = dataEmail => {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        requireTLS: true,
        auth: {
          user: 'fajriwork12@gmail.com', // generated ethereal user
          pass: 'nddasajpbjzeqnvb', // generated ethereal password
        },
      });

      return (
          transporter.sendMail(dataEmail)
          .then(info => console.log(`email terkirim: ${info.message}`))
          .catch(err => console.log(`terjadi kesalahan: ${err}`))
      )
}