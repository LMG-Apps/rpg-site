import React from 'react'

import styled from 'styled-components'

import UserInfo from './components/user-info.component'
// import Tabs from './components/tabs.component'
import Tabs from '../../components/tabs.component'
import StoryCard from '../dashboard/components/story-card.component'

const ProfilePage: React.FC = () => {
  const [activeTab, setAcitveTab] = React.useState('stories')

  return (
    <Background>
      <Container>
        <UserInfo />
        <Tabs>
          <TabContent label="Histórias">
            <StoryCard />
            <StoryCard empty />
          </TabContent>
          <TabContent label="Amigos">Meus amigos</TabContent>
        </Tabs>
        {/* <Tabs>
          <TabContent active={activeTab} index="stories">
            <StoryCard />
            <StoryCard empty />
          </TabContent>
        </Tabs> */}
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
  justify-content: center;
`

const TabContent = styled.div`
  visibility: ${(props) =>
    props.index === props.active ? 'visible' : 'hidden'};
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
