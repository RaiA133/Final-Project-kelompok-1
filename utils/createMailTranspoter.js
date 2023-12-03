const nodemailer = require("nodemailer") 

const createMailTransporter = () => {
  const transporter = nodemailer.createTransport({
    host: "mail.iconnet-operation.com",
    port: 465,
    secure: true,
    auth: {
      user: "notUndefined.team@iconnet-operation.com",
      pass: process.env.EMAIL_PASS
    }
  })
  return transporter
}

module.exports = { createMailTransporter }