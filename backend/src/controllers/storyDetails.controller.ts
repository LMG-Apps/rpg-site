import knex from '../database/connection'
import { Request, Response } from 'express'
import getMessage from '../helpers/message.helper'
import removeImage from '../helpers/removeImage.helper'

interface Story {
  name: string;
  description: string;
  text: string;
  image: string;
}

class StoryDetails {
  async index (req: Request, res: Response) {
    const { accountId } = req
    const stories: Story[] = await knex('Story')
      .where('accountId', accountId)

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
    const { name, description, isPublic } = body

    const story = {
      name,
      description,
      image: req.file ? req.file.filename : null,
      accountId,
      isPublic
    }

    if (!name.trim()) {
      const message = getMessage('story.name.string.required')
      return res.status(400).json({ message })
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
      .where('accountId', accountId)
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
    const { name, description, isPublic } = req.body
    const image = req.file ? req.file.filename : null

    if (!name.trim()) {
      const message = getMessage('story.name.string.required')
      return res.status(400).json({ message })
    }

    const story: Story = await knex('Story')
      .where('accountId', accountId)
      .where('id', id)
      .first()

    if (!story) {
      const message = getMessage('story.id.notfound')
      return res.status(404).json({ message })
    }

    const trx = await knex.transaction()

    await trx('Story')
      .where('accountId', accountId)
      .where('id', id)
      .update('name', name)
      .update('description', description)
      .update('image', image || knex.raw('DEFAULT'))
      .update('isPublic', isPublic)

    await trx.commit()

    removeImage(story.image)

    const message = getMessage('story.updated')
    return res.status(200).json({ message })
  }

  async delete (req: Request, res: Response) {
    const { accountId } = req
    const { id } = req.params

    const { image }: { image: string} = await knex('Story')
      .where('accountId', accountId)
      .where('id', id)
      .first()
      .select('image')

    const story = await knex('Story')
      .where('accountId', accountId)
      .where('id', id)
      .del()

    if (!story) {
      const message = getMessage('story.id.notfound')
      return res.status(404).json({ message })
    }

    removeImage(image)

    const message = getMessage('story.deleted')
    return res.status(200).json({ message })
  }
}

export default StoryDetails
