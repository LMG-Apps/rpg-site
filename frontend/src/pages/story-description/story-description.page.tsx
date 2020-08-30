import React from 'react'

import styled from 'styled-components'

import { StylesProvider } from '@material-ui/styles'

import campfire from '../../assets/images/campire1.jpeg'
import Button from '@material-ui/core/Button'
import Footer from './components/footer.component'

import DeleteIcon from '@material-ui/icons/Delete'
import CreateIcon from '@material-ui/icons/Create'
import SettingsIcon from '@material-ui/icons/Settings'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Collapse } from '@material-ui/core'
import Friends from '../profile/components/friends.component'

const StyledButton = styled(Button)`
  font-family: 'Grenze Gotisch', cursive;
  font-size: 24px;
  text-transform: none;
  line-height: 17px;
  color: white;
  background-color: rgba(255, 85, 85, 1);

  :hover {
    background-color: rgba(255, 85, 85, 0.9);
  }
`

const StoryDescriptionPage: React.FC = () => {
  return (
    <Background>
      <Container>
        <RpgImage />
        <RpgTitle>
          O RPG De Mesa Mais Doido Que Tem Um Titulo Gigantesco
        </RpgTitle>
        <Divider />
        <Description>
          <h2>Descrição</h2>
          <p>
            Lorem Ipsum RPG Lorem Ipsum RPGLorem Ipsum RPGLorem Ipsum RPGLorem
            Ipsum RPG Lorem Ipsum RPGLorem Ipsum RPGLorem Ipsum RPGLorem Ipsum
            RPG Lorem Ipsum RPGLorem Ipsum RPGLorem Ipsum RPGLorem Ipsum RPG
            Lorem Ipsum RPGLorem Ipsum RPGLorem Ipsum RPGLorem Ipsum RPG Lorem
            Ipsum RPGLorem Ipsum RPGLorem Ipsum RPGLorem Ipsum RPG Lorem Ipsum
            RPGLorem Ipsum RPGLorem Ipsum RPG
          </p>
        </Description>
        <Divider />
        <Participants>
          <h2>Participantes</h2>
          <h3>Mestre</h3>
          <span>Nicolas</span>
          <h3>Jogadores</h3>
          <span>Luiz Felipe</span>
          <span>Miguel Demarque</span>
          <span>Gustavo Lopes</span>
        </Participants>
      </Container>
      <Footer />
    </Background>
  )
}

const Background = styled.div`
  display: flex;
  padding-top: 80px;

  @media (max-width: 700px) {
    padding-top: 60px;
    padding-bottom: 80px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 30px;
  margin: 0 20%;

  width: 100%;

  @media (max-width: 1200px) {
    margin: 0;
  }

  @media (max-width: 700px) {
    padding: 0;
    margin: 0;
  }
`

const RpgImage = styled.div`
  display: flex;

  width: 640px;
  height: 360px;

  background-image: url(${campfire});
  background-size: 100% 100%;

  @media (max-width: 700px) {
    height: 250px;
    width: 100%;
  }
`

const RpgTitle = styled.div`
  display: flex;
  padding: 10px 10px;
  justify-content: center;
  text-align: center;
  font-family: Grenze Gotisch;
  line-height: 20px;
  font-size: 32px;

  @media (max-width: 700px) {
    font-size: 24px;
  }
`
const Participants = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3:not(:first-child) {
    margin-top: 10px;
  }

  span:not(:first-child) {
    margin-top: 10px;
  }
`

const Description = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;

  p:last-child {
    margin-top: 10px;
  }
`
const Divider = styled.div`
  border-bottom: 1px solid rgb(56, 68, 77);
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;

  @media (min-width: 700px) {
    width: 700px;
  }
`
export default StoryDescriptionPage
