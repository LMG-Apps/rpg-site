import { Request, Response } from 'express'
import knex from '../database/connection'
import getMessage from '../helpers/message.helper'
import { getTokenFromHeaders, verifyJwt } from '../helpers/jwt.helper'
import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

class ForgotPassword {
  async create (req: Request, res: Response) {
    const { email } = req.body
    if (!email) {
      const message = getMessage('account.reset.email.string.empty')
      res.status(400).json({ message })
    }

    const user = await knex('Account')
      .where('email', email)
      .first()

    if (!user) {
      const message = getMessage('account.reset.email.invalid')
      res.status(400).json({ message })
    }

    const token = getTokenFromHeaders(req.headers)

    if (!token) {
      const message = getMessage('account.token.invalid')
      return res.status(401).json({ message })
    }

    // const trx = await knex.transaction()
    // const hour = 360000
    // const expireTime = (Date.now() + hour).toString()

    // await trx('Account')
    //   .where('email', email)
    //   .update('resetPasswordToken', token)
    //   .update('resetPasswordExpires', expireTime)

    // trx.commit()

    const smtpTransport = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'lutilipe2469@gmail.com',
        pass: 'Paimeliga081200'
      }
    } as SMTPTransport.Options)
    const mailOptions = {
      to: email,
      from: 'lutilipe2469@gmail.com',
      subject: 'RPG - Password Reset',
      text: `Click http://localhost:3333/${token}`
    }
    smtpTransport.sendMail(mailOptions, err => {
      if (err) {
        res.status(500).json({ message: err })
      }
      const message = getMessage('account.reset.email.sent')
      res.status(200).json({ message })
    })
  }
}

export default ForgotPassword
