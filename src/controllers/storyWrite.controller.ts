import knex from '../database/connection'
import { Request, Response } from 'express'
import getMessage from '../helpers/message.helper'

class StoryWrite {
  async update(req: Request, res: Response) {
    const { accountId } = req
    const { id } = req.params
    const { text } = req.body

    const story = await knex('Story')
      .where('accountId', accountId)
      .where('id', id)
      .first()

    if (!story) {
      const message = getMessage('story.id.notfound')
      return res.status(404).json({ message })
    }

    const trx = await knex.transaction()

    try {
      await trx('Story')
        .where('accountId', accountId)
        .where('id', id)
        .update('text', text)

      await trx.commit()

      const message = getMessage('story.updated')
      return res.status(200).json({ message })
    } catch (err) {
      await trx.rollback()

      const message = getMessage('unexpected.error')
      return res.status(400).json({
        message,
      })
    }
  }
}

export default StoryWrite
