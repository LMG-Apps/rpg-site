import knex from '../database/connection'
import { Request, Response } from 'express'
import getMessage from '../helpers/message.helper'
import removeImage from '../helpers/removeImage.helper'

interface User {
  id: number
  username: string
  profileImage: string
  password: string
  biography: string
  email: string
}

interface Story {
  name: string
  image: string
}

class UserProfile {
  async show(req: Request, res: Response) {
    const { username } = req.params

    const user: User = await knex('Account').where('username', username).first()

    if (!user) {
      const message = getMessage('story.id.notfound')
      return res.status(404).json({ message })
    }

    const storiesData: Story[] = await knex('Story')
      .select('id', 'name', 'image')
      .where('isPublic', true)

    const stories = storiesData.map((story) => {
      const image_url = story.image
        ? `http://127.0.0.1:3333/tmp/${story.image}`
        : null

      delete story.image

      return {
        ...story,
        image_url,
      }
    })

    delete user.password

    const serializedUser = {
      ...user,
      user_image_url: user.profileImage
        ? `http://127.0.0.1:3333/tmp/${user.profileImage}`
        : null,
    }

    delete user.profileImage

    return res.status(200).json({
      user: serializedUser,
      stories,
    })
  }

  async update(req: Request, res: Response) {
    const { accountId } = req
    const { biography } = req.body

    const user: User = await knex('Account').where('id', accountId).first()

    if (!user) {
      const message = getMessage('user.id.notfound')
      return res.status(404).json({ message })
    }

    const trx = await knex.transaction()

    try {
      await trx('Account').where('id', accountId).update('biography', biography)

      await trx.commit()

      const message = getMessage('user.updated')
      return res.status(200).json({ message })
    } catch (err) {
      await trx.rollback()

      const message = getMessage('unexpected.error')
      return res.status(400).json({
        message,
      })
    }
  }

  async patch(req: Request, res: Response) {
    const { accountId } = req
    const image = req.file ? req.file.filename : null

    const user: User = await knex('Account').where('id', accountId).first()

    console.log(user)

    if (!user) {
      const message = getMessage('user.id.notfound')
      return res.status(404).json({ message })
    }

    const trx = await knex.transaction()

    try {
      await trx('Account')
        .where('id', accountId)
        .update('profileImage', image || knex.raw('DEFAULT'))

      await trx.commit()

      if (user.profileImage) {
        removeImage(user.profileImage)
      }

      const message = getMessage('user.avatar.updated')
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

export default UserProfile
