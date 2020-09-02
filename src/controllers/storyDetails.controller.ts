import knex from '../database/connection'
import { Request, Response } from 'express'
import getMessage from '../helpers/message.helper'
import removeImage from '../helpers/removeImage.helper'
import getStoryMembers from '../helpers/getStoryMembers.helper'

interface Story {
  id: number
  name: string
  accountId: number
  description: string
  text: string
  image: string
  isPublic: boolean
}

interface User {
  username: string
  profileImage: string
}

class StoryDetails {
  async index(req: Request, res: Response) {
    const { accountId } = req
    const stories: Story[] = await knex('Story').where('accountId', accountId)

    const serializedStories = stories.map((story) => {
      const image_url = story.image
        ? `http://127.0.0.1:3333/tmp/${story.image}`
        : null

      delete story.image

      return {
        ...story,
        image_url,
      }
    })

    return res.status(200).json(serializedStories)
  }

  async store(req: Request, res: Response) {
    const { accountId, body } = req
    const { name, description, isPublic, members } = body

    if (!members) {
      const message = getMessage('story.members.required')
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

      const storyMembers = getStoryMembers(members, story_id)

      await trx('Story_members').insert(storyMembers)

      await trx.commit()

      const message = getMessage('story.created')

      const serializedStory = {
        ...story,
        image_url: story.image
          ? `http://127.0.0.1:3333/tmp/${story.image}`
          : null,
      }

      delete serializedStory.image

      return res.status(201).json({
        story: serializedStory,
        message,
      })
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

    delete serializedStories.image

    const storyMembers: User[] = await knex('Story_members')
      .select('Account.id', 'username', 'profileImage')
      .join('Account', 'Account.id', 'friend_id')
      .where('story_id', id)

    const serializedStoryMembers = storyMembers.map((user) => {
      const image_url = user.profileImage
        ? `http://127.0.0.1:3333/tmp/${user.profileImage}`
        : null

      delete user.profileImage

      return {
        ...user,
        image_url,
      }
    })

    return res.status(200).json({
      stories: serializedStories,
      story_members: serializedStoryMembers,
    })
  }

  async update(req: Request, res: Response) {
    const { accountId } = req
    const { id } = req.params
    const { name, description, isPublic, members } = req.body

    if (!name.trim()) {
      const message = getMessage('story.name.string.required')
      return res.status(400).json({ message })
    }

    if (!members) {
      const message = getMessage('story.members.required')
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
      const storyMembers = getStoryMembers(members, story.id)

      await trx('Story_members').where('story_id', story.id).del()

      await trx('Story_members').insert(storyMembers)

      await trx('Story')
        .where('accountId', accountId)
        .where('id', id)
        .update('name', name)
        .update('description', description)
        .update('isPublic', isPublic)

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

  async delete(req: Request, res: Response) {
    const { accountId } = req
    const { id } = req.params

    const { image }: { image: string } =
      (await knex('Story')
        .where('accountId', accountId)
        .where('id', id)
        .first()
        .select('image')) || {}

    const story = await knex('Story')
      .where('accountId', accountId)
      .where('id', id)
      .del()

    if (!story) {
      const message = getMessage('story.id.notfound')
      return res.status(404).json({ message })
    }

    if (image) {
      removeImage(image)
    }

    const message = getMessage('story.deleted')
    return res.status(200).json({ message })
  }

  async write(req: Request, res: Response) {
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

  async avatar(req: Request, res: Response) {
    const { accountId } = req
    const { id } = req.params
    const image = req.file ? req.file.filename : null

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
      await trx('Story')
        .where('accountId', accountId)
        .where('id', id)
        .update('image', image || knex.raw('DEFAULT'))

      await trx.commit()

      if (story.image) {
        removeImage(story.image)
      }

      const message = getMessage('story.image.updated')
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

export default StoryDetails
