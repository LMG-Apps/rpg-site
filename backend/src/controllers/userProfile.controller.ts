import knex from '../database/connection'
import { Request, Response } from 'express'
import getMessage from '../helpers/message.helper'
import removeImage from '../helpers/removeImage.helper'

interface User {
  id: number;
  username: string;
  profileImage: string;
  password: string;
  biography: string;
  email: string;
}

interface Story {
  name: string;
  image: string;
}

class UserProfile {
  async show (req: Request, res: Response) {
    const { username } = req.params

    const user: User = await knex('Account')
      .where('username', username)
      .first()

    if (!user) {
      const message = getMessage('story.id.notfound')
      return res.status(404).json({ message })
    }

    const story: Story = await knex('Story')
      .select('id', 'name', 'image')
      .where('isPublic', true)
      .first()

    delete user.password

    const serializedStories = {
      user,
      story,
      user_image_url: `http://127.0.0.1:3333/tmp/${user.profileImage || ''}`,
      story_image_url: `http://127.0.0.1:3333/tmp/${story.image || ''}`
    }

    return res.status(200).json(serializedStories)
  }

  async update (req: Request, res: Response) {
    const { username } = req.params
    const { accountId } = req
    const { biography } = req.body
    const image = req.file ? req.file.filename : null

    const user: User = await knex('Account')
      .where('username', username)
      .first()

    if (!user) {
      const message = getMessage('user.id.notfound')
      return res.status(404).json({ message })
    }

    if (user.id !== accountId) {
      return res.status(403).json({ sai: 'ladrao' })
    }

    const trx = await knex.transaction()

    await trx('Account')
      .where('username', username)
      .update('biography', biography)
      .update('profileImage', image || knex.raw('DEFAULT'))

    await trx.commit()

    removeImage(user.profileImage)

    const message = getMessage('user.updated')
    return res.status(200).json({ message })
  }
}

export default UserProfile
