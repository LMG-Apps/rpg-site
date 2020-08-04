import { Request, Response } from 'express'
import knex from '../database/connection'
import getMessage from '../helpers/message.helper'
import { generateJwt, Session } from '../helpers/jwt.helper'
import jwtDecode from 'jwt-decode'
import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import bcrypt from 'bcrypt'
import fs from 'fs'
import hogan from 'hogan.js'
import path from 'path'

require('dotenv').config()

const template = fs.readFileSync(
  path.resolve(__dirname, '..', 'views', 'emailTemplate.hjs'),
  'utf-8'
)
const compiledTemplate = hogan.compile(template)

const saltRounds = 10

class ForgotPassword {
  async store(req: Request, res: Response) {
    const { email } = req.body
    if (!email || !email.trim()) {
      const message = getMessage('account.reset.email.string.empty')
      return res.status(400).json({ message })
    }

    const user = await knex('Account').where('email', email).first()

    if (!user) {
      const message = getMessage('account.reset.email.invalid')
      return res.status(400).json({ message })
    }

    const token = generateJwt({ id: user.id })
    const data: Session = jwtDecode(token)
    const expireTime = +data.exp!

    const trx = await knex.transaction()

    await trx('Account')
      .where('email', email)
      .update('resetPasswordToken', token)
      .update('resetPasswordExpires', expireTime)

    trx.commit()

    const smtpTransport = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    } as SMTPTransport.Options)

    const mailOptions = {
      to: email,
      from: process.env.EMAIL,
      subject: 'RPG - Password Reset',
      html: compiledTemplate.render({
        token,
        user: user.username,
      }),
    }

    smtpTransport.sendMail(mailOptions, (err) => {
      if (err) {
        return res.status(500).json({ message: err })
      }
      const message = getMessage('account.reset.email.sent')
      return res.status(201).json({ message })
    })
  }

  async update(req: Request, res: Response) {
    const { token }: { token?: string } = req.query
    const { password } = req.body

    const trx = await knex.transaction()

    const account = await trx('Account')
      .where('resetPasswordToken', token)
      .first()

    if (!account || account.resetPasswordExpires * 1000 < Date.now()) {
      const message = getMessage('account.reset.token.invalid')
      await trx('Account')
        .update('resetPasswordToken', knex.raw('DEFAULT'))
        .update('resetPasswordExpires', knex.raw('DEFAULT'))
        .where('id', account.id)
      return res.status(401).json({ message })
    }

    const hash = bcrypt.hashSync(password, saltRounds)

    await trx('Account')
      .update('password', hash)
      .update('resetPasswordToken', knex.raw('DEFAULT'))
      .update('resetPasswordExpires', knex.raw('DEFAULT'))
      .where('id', account.id)

    trx.commit()

    return res.status(200).json({
      message: getMessage('account.reset.success'),
    })
  }
}

export default ForgotPassword
