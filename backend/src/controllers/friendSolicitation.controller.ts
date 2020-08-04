import knex from '../database/connection'
import { Request, Response } from 'express'
import getMessage from '../helpers/message.helper'

interface User {
  username: string
  id: number
  profileImage: string
  status: string
  user2_id: number
}

class FriendSolicitation {
  async index(req: Request, res: Response) {
    const { accountId } = req

    const solicitations: User[] = await knex('FriendList')
      .where('user2_id', accountId)
      .where('status', 'P')
      .join('Account', 'Account.id', 'FriendList.user1_id')
      .select('Account.id', 'username', 'profileImage')

    const serializedUsers = solicitations.map((user) => {
      return {
        ...user,
        profileImage: user.profileImage
          ? `http://127.0.0.1:3333/tmp/${user.profileImage}`
          : null,
      }
    })

    return res.status(200).json(serializedUsers)
  }

  async store(req: Request, res: Response) {
    const { accountId, params } = req
    const { id } = params

    if (!id) {
      const message = getMessage('friend.username.notfound')
      return res.status(404).json({ message })
    }

    if (+id === accountId) {
      const message = getMessage('friend.status.error.invalidFriend')
      return res.status(400).json({ message })
    }

    const { status }: User =
      (await knex('FriendList')
        .where((friend) => {
          friend.where('user1_id', accountId).andWhere('user2_id', id)
        })
        .orWhere((friend) => {
          friend.where('user1_id', id).andWhere('user2_id', accountId)
        })
        .select('status')
        .first()) || ''

    if (status === 'P') {
      const message = getMessage('friend.status.alreadySent')
      return res.status(400).json({ message })
    }

    if (status === 'A') {
      const message = getMessage('friend.status.isFriend')
      return res.status(400).json({ message })
    }

    const newFriends = {
      user1_id: accountId,
      user2_id: id,
      status: 'P',
    }

    const trx = await knex.transaction()

    await trx('FriendList').insert(newFriends)

    await trx.commit()

    const message = getMessage('friend.status.sent')
    return res.status(201).json({ message })
  }

  async update(req: Request, res: Response) {
    const { accountId, params } = req
    const { id } = params

    const { status }: User = await knex('FriendList')
      .where('user1_id', id)
      .where('user2_id', accountId)
      .select('status')
      .first()

    if (status !== 'P') {
      const message = getMessage('friend.status.error')
      return res.status(400).json({ message })
    }

    const trx = await knex.transaction()

    await trx('FriendList')
      .where('user1_id', id)
      .where('user2_id', accountId)
      .update('status', 'A')

    trx.commit()

    const message = getMessage('friend.status.accepted')
    return res.status(200).json({ message })
  }

  async delete(req: Request, res: Response) {
    const { accountId, params } = req
    const { id } = params

    const data = await knex('FriendList')
      .where('user1_id', id)
      .where('user2_id', accountId)
      .del()

    if (!data) {
      const message = getMessage('friend.status.error')
      return res.status(400).json({ message })
    }

    const message = getMessage('friend.status.refused')
    return res.status(200).json({ message })
  }
}

export default FriendSolicitation
