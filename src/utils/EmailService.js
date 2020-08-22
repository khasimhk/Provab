import nodemailer from 'nodemailer';
function mailer(mail) {
  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'khasimtest@gmail.com',
      pass: 'm1m1f1fd',
    },
  });
  mailTransporter.sendMail(mail, function (err, data) {
    if (err) {
      console.log('Error Occurs',err);
    } else {
      console.log('Email sent successfully');
    }
  });
}

module.exports = {mailer};
