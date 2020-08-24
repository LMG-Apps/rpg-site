import knex from '../database/connection'
import { Request, Response } from 'express'
import getMessage from '../helpers/message.helper'
import removeImage from '../helpers/removeImage.helper'
import getStoryParticipants from '../helpers/getStoryParticipants.helper'

interface Story {
  id: number
  name: string
  accountId: number
  description: string
  text: string
  image: string
  isPublic: boolean
}

class StoryDetails {
  async index(req: Request, res: Response) {
    const { accountId } = req
    const stories: Story[] = await knex('Story').where('accountId', accountId)

    const serializedStories = stories.map((story) => {
      return {
        ...story,
        image_url: story.image
          ? `http://127.0.0.1:3333/tmp/${story.image}`
          : null,
      }
    })

    return res.status(200).json(serializedStories)
  }

  async store(req: Request, res: Response) {
    const { accountId, body } = req
    const { name, description, isPublic, friends } = body

    if (!friends) {
      const message = getMessage('story.friends.required')
      return res.status(400).json({ message })
    }

    const story = {
      name,
      description,
      image: req.file ? req.file.filename : null,
      accountId,
      isPublic,
    }

    if (!name.trim()) {
      const message = getMessage('story.name.string.required')
      return res.status(400).json({ message })
    }

    const trx = await knex.transaction()

    try {
      const insertedStoryIds = await trx('Story').insert(story)

      const story_id = insertedStoryIds[0]

      const storyFriends = getStoryParticipants(friends, story_id)

      await trx('Story_friends').insert(storyFriends)

      await trx.commit()

      const message = getMessage('story.created')
      return res.status(201).json({ ...story, message })
    } catch (err) {
      await trx.rollback()

      const message = getMessage('unexpected.error')
      return res.status(400).json({
        message,
      })
    }
  }

  async show(req: Request, res: Response) {
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
      image_url: story.image
        ? `http://127.0.0.1:3333/tmp/${story.image}`
        : null,
    }

    return res.status(200).json(serializedStories)
  }

  async update(req: Request, res: Response) {
    const { accountId } = req
    const { id } = req.params
    const { name, description, isPublic, friends } = req.body
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

    try {
      const storyFriends = getStoryParticipants(friends, story.id).map(
        (story) => story.friend_id
      )

      await trx('Story_friends')
        .where('story_id', story.id)
        .whereNotIn('friend_id', storyFriends)
        .del()

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
    } catch (err) {
      await trx.rollback()

      const message = getMessage('unexpected.error')
      return res.status(400).json({
        message,
      })
    }
  }

  async delete(req: Request, res: Response) {
    const { accountId } = req
    const { id } = req.params

    const { image }: { image: string } = await knex('Story')
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
