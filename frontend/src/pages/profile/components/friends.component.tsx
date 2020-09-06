import React from 'react'

import { AxiosResponse } from 'axios'
import {
  acceptFriendRequest,
  getFriends,
  listFriendRequests,
} from '../../../helpers/api-methods'

import ProfileBadge from '../../../components/profile-badge.component'

import { IconButton } from '@material-ui/core'

import CheckRoundedIcon from '@material-ui/icons/CheckRounded'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'

import styled from 'styled-components'

interface FriendsProps {
  id: number
  username: string
  status?: string
  image_url?: string
}

const Friends: React.FC = () => {
  const [friends, setFriends] = React.useState<FriendsProps[]>([])
  const [friendRequests, setFriendRequests] = React.useState<FriendsProps[]>([])

  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      // setFriends(await getFriends());
      setLoading(true)

      setFriends(await getFriends())

      // console.log(friends)

      const friendsRequests: AxiosResponse = await listFriendRequests()

      setFriendRequests(friendsRequests.data)

      setLoading(false)
      // console.log(friendRequests)
    })()
  }, [])

  return (
    <Container>
      {friendRequests.length > 0
        ? friendRequests.map((user, index) => (
            <Box key={user.id}>
              <ProfileBadge name={user.username} />
              <Actions>
                <IconButton onClick={() => acceptFriendRequest(user.id)}>
                  <CheckRoundedIcon style={{ color: 'green' }} />
                </IconButton>
                <IconButton>
                  <CloseRoundedIcon style={{ color: 'red' }} />
                </IconButton>
              </Actions>
            </Box>
          ))
        : null}
      {friends.length > 0
        ? friends.map((user, index) => (
            <Box key={user.id}>
              <ProfileBadge name={user.username} />
              <Actions>Remover</Actions>
            </Box>
          ))
        : null}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid rgb(56, 68, 77);
  width: 100%;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`

export default Friends
