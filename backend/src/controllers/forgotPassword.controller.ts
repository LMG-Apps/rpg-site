import { Request, Response } from 'express'
import knex from '../database/connection'
import getMessage from '../helpers/message.helper'
import { promisify } from 'util'
import { randomBytes } from 'crypto'
import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

require('dotenv').config()

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

    const random = await promisify(randomBytes)(24)
    const token = random.toString('hex')

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
      text: `
      You are receiving this because you (or someone else) have requested the reset of password.

      Please click on the link or paste it on your browser to complete the process: 
      http://localhost:3333/${token}

      If you did not request this, ignore this email. Your password will still the same.
      `
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
