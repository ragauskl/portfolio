import * as nodemailer from 'nodemailer'
import { ENV } from './env.util'

export default class Email {
  private static transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env[ENV.NO_REPLY_EMAIL],
      pass: process.env[ENV.NO_REPLY_PASSWORD]
    }
  })

  static sendEmail = async (name: string, replyTo: string, msg: string) => {
    const mailOptions: nodemailer.SendMailOptions = {
      from: `"Protfolio System " <${process.env[ENV.NO_REPLY_EMAIL]}>`,
      to: `${process.env[ENV.NO_REPLY_EMAIL]}`,
      subject: 'Contact Form submitted on lina.codes',
      text: `Name: ${name}\n\nEmail: ${replyTo}\n\nMessage: ${msg}`
    }

    await Email.send(mailOptions)
  }

  private static send = (mailOptions: nodemailer.SendMailOptions) => {
    return new Promise((resolve, reject) => {
      Email.transporter.sendMail(mailOptions, (error: any, info: any) => {
        if (error) reject(error)
        else resolve(info)
      })
    })
  }
}
