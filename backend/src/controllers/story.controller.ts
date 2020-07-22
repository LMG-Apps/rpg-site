import knex from '../database/connection'
import { Request, Response } from 'express'
import getMessage from '../helpers/message.helper'
import fs from 'fs'
import path from 'path'

interface Story {
  name: string;
  description: string;
  text: string;
  image: string;
}

const tmpPath = path.resolve(__dirname, '..', '..', 'tmp')

class Story {
  async index (req: Request, res: Response) {
    const { accountId } = req
    const stories: Story[] = await knex('Story')
      .where('account_id', accountId)

    const serializedStories = stories.map(point => {
      return {
        ...point,
        image_url: `http://127.0.0.1:3333/tmp/${point.image}`
      }
    })

    return res.status(200).json(serializedStories)
  }

  async create (req: Request, res: Response) {
    const { accountId, body } = req
    const { name, description } = body

    const story = {
      name,
      description,
      image: req.file.filename,
      account_id: accountId
    }

    const trx = await knex.transaction()

    await trx('Story').insert(story)

    await trx.commit()

    const message = getMessage('story.created')
    return res.status(200).json({ story, message })
  }

  async show (req: Request, res: Response) {
    const { accountId } = req
    const { id } = req.params

    const story: Story = await knex('Story')
      .where('account_id', accountId)
      .where('id', id)
      .first()

    if (!story) {
      const message = getMessage('story.id.notfound')
      return res.status(404).json({ message })
    }

    const serializedStories = {
      ...story,
      image_url: `http://127.0.0.1:3333/tmp/${story.image}`
    }

    return res.status(200).json(serializedStories)
  }

  async update (req: Request, res: Response) {
    const { accountId } = req
    const { id } = req.params
    const { name, description, text } = req.body
    const { filename: image } = req.file

    const story: Story = await knex('Story')
      .where('account_id', accountId)
      .where('id', id)
      .first()

    if (!story) {
      const message = getMessage('story.id.notfound')
      return res.status(404).json({ message })
    }

    const trx = await knex.transaction()

    await trx('Story')
      .where('account_id', accountId)
      .where('id', id)
      .update('name', name)
      .update('description', description)
      .update('text', text)
      .update('image', image)

    await trx.commit()

    fs.unlink(path.resolve(tmpPath, `${story.image}`), err => {
      if (err) console.log(err)
    })

    const message = getMessage('story.updated')
    return res.status(200).json({ message })
  }

  async delete (req: Request, res: Response) {
    const { accountId } = req
    const { id } = req.params

    const { image } = await knex('Story')
      .where('account_id', accountId)
      .where('id', id)
      .first()
      .select('image')

    const story = await knex('Story')
      .where('account_id', accountId)
      .where('id', id)
      .del()

    if (!story) {
      const message = getMessage('story.id.notfound')
      return res.status(404).json({ message })
    }

    fs.unlink(path.resolve(tmpPath, `${image}`), err => {
      if (err) console.log(err)
    })

    const message = getMessage('story.deleted')
    return res.status(200).json({ message })
  }
}

export default Story
