import React from 'react'

import styled from 'styled-components'

import UserInfo from './components/user-info.component'
import Tabs from './components/tabs.component'
import StoryCard from '../dashboard/components/story-card.component'

const ProfilePage: React.FC = () => (
  <Background>
    <Container>
      <UserInfo />
      <Tabs>
        <StoryCard />
        <StoryCard empty/>
      </Tabs>
    </Container>
  </Background>
)

const Background = styled.div`
  display: flex;
  padding-top: 80px;
  background-color: rgb(22, 20, 26);
  min-height: 100vh;
  color: white;
  justify-content: center;
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
