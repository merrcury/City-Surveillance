const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("Your Key");
const msg = {
  to: 'Your mail',
  from: 'abeyoye@joy.com',
  subject: 'Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
