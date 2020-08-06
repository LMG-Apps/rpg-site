import React from 'react'

import styled from 'styled-components'

import UserInfo from './components/user-info.component'
// import Tabs from './components/tabs.component'
import Tabs from '../../components/tabs.component'
import StoryCard from '../dashboard/components/story-card.component'
import Friends from './components/friends.component'

import {
  getFriends,
  listFriendRequests,
  addFriend,
} from '../../helpers/api-methods'
import { Button } from '@material-ui/core'

const ProfilePage: React.FC = () => {
  const [friends, setFriends] = React.useState(null)

  React.useEffect(() => {
    ;(async () => {
      // setFriends(await getFriends());
      const friends = await getFriends()

      console.log(friends)

      const friendRequests = await listFriendRequests()

      console.log(friendRequests)
    })()
  }, [])

  return (
    <Background>
      <Container>
        <UserInfo />
        <br />
        <Button onClick={() => addFriend(3)} color="primary">
          Adicionar Teste
        </Button>
        <Tabs>
          <TabContent label="Histórias">
            <Row>
              <Item>
                <StoryCard />
              </Item>
              <Item>
                <StoryCard empty />
              </Item>
              <Item>
                <StoryCard empty />
              </Item>
            </Row>
          </TabContent>
          <TabContent label="Amigos">
            <Friends />
          </TabContent>
        </Tabs>
      </Container>
    </Background>
  )
}

const Background = styled.div`
  display: flex;
  padding-top: 80px;
  background-color: rgb(22, 20, 26);
  min-height: 100vh;
  color: white;

  @media (max-width: 600px) {
    padding-top: 60px;
  }
`

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 15px;

  @media (max-width: 650px) {
    justify-content: center;
  }
`

const Item = styled.div`
  display: flex;
  margin-right: 20px;
  margin-bottom: 20px;
`

const TabContent = styled.div`
  display: flex;
`

const Container = styled.div`
  display: flex;
  padding-top: 20px;
  width: 100%;
  flex-direction: column;
  /* background-color: red; */
  margin: 0 25%;
  max-width: 800px;

  @media (max-width: 1200px) {
    margin: 0 15%;
    max-width: 600px;
  }

  @media (max-width: 600px) {
    margin: 0 20px;
    max-width: 600px;

    h1 {
      font-size: 20px;
    }
    h4 {
      font-size: 12px;
    }
    h3 {
      font-size: 15px;
    }
    h5 {
      font-size: 11px;
    }
  }
`

export default ProfilePage
