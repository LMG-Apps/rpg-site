import knex from '../database/connection'
import { Request, Response } from 'express'
import getMessage from '../helpers/message.helper'
import { QueryInterface } from 'knex'

interface UserFriends extends QueryInterface {
  username: string;
  id: number;
  profileImage: string;
  user1_id: number;
  user2_id: number;
}

class FriendList {
  async index (req: Request, res: Response) {
    const { accountId } = req

    const friendsData: UserFriends[] = await knex('FriendList')
      .select('Account.id', 'username', 'profileImage')
      .join('Account', 'Account.id', knex.raw(
        `
          CASE
            WHEN user1_id = ${accountId}
              THEN user2_id
            WHEN user2_id = ${accountId}
              THEN user1_id
          END
        `
      ))
      .where('status', 'A')

    const friends = friendsData.map(friend => {
      return {
        ...friend,
        profileImage: friend.profileImage ? `http://127.0.0.1:3333/tmp/${friend.profileImage}` : null
      }
    })

    return res.status(200).json(friends)
  }

  async delete (req: Request, res: Response) {
    const { accountId, params } = req
    const { id } = params

    const data = await knex('FriendList')
      .where('status', 'A')
      .where(friend => {
        friend.where('user1_id', accountId).andWhere('user2_id', id)
      })
      .orWhere(friend => {
        friend.where('user1_id', id).andWhere('user2_id', accountId)
      })
      .del()

    if (!data) {
      const message = getMessage('friend.status.error.notFriendYet')
      return res.status(400).json({ message })
    }

    const message = getMessage('friend.status.deleted')
    return res.status(200).json({ message })
  }
}

export default FriendList
