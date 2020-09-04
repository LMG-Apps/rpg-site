import React from 'react'
import Cookies from 'universal-cookie'

import {
  getFriends,
  listFriendRequests,
  addFriend,
} from '../../helpers/api-methods'

import UserInfo from './components/user-info.component'
import Tabs from '../../components/tabs.component'
import StoryCard from '../dashboard/components/story-card.component'
import Friends from './components/friends.component'
import { CustomInput } from '../../components/filled-input.component'

import { Button, InputAdornment, IconButton } from '@material-ui/core'

import SendRoundedIcon from '@material-ui/icons/SendRounded'
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded'

import styled from 'styled-components'
import { RootStoreContext } from '../../stores/root.store'

// Defining new Cookies instance
const cookies = new Cookies()

interface TabContentProps {
  label?: string
}

const ProfilePage: React.FC = () => {
  const rootStore = React.useContext(RootStoreContext)
  // const [friends, setFriends] = React.useState(null)
  const [amigo, setAmigo] = React.useState('')

  const signOut: any = () => {
    cookies.remove('token', { path: '/' })
    cookies.remove('refreshToken', { path: '/' })

    rootStore.userStore.setLoggedIn(false)
  }

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
        <Button onClick={() => addFriend(4)} color="primary">
          Adicionar Teste
        </Button>
        <Button color="primary" onClick={signOut}>
          Logout
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
            <CustomInput
              label="Adicionar amigo"
              value={amigo}
              onChange={(event) => setAmigo(event.target.value)}
              placeholder="Digite o nome do usuário"
              variant="filled"
              fullWidth
              style={{
                marginTop: '10px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
              InputLabelProps={{
                style: { color: 'grey', marginTop: '-5px' },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonAddRoundedIcon
                      style={{
                        color: 'white',
                      }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => addFriend(amigo)}>
                      <SendRoundedIcon
                        style={{
                          color: 'white',
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
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

const TabContent = styled.div<TabContentProps>`
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
