import React from 'react'

import styled from 'styled-components'

import campfire from '../../assets/images/campire1.jpeg'
import { Button } from '@material-ui/core'
import Footer from './components/footer.component'

const StoryDescriptionPage: React.FC = () => {
  return (
    <Background>
      <Container>
        <Row>
          <RpgDetails>
            <RpgImage />
            <RpgTitle>Titulo do RPG</RpgTitle>
            <RpgActions>
              <Action>
                <Button style={{ color: 'white', textTransform: 'none' }}>
                  Escrever
                </Button>
              </Action>
              <Action>
                <Button style={{ color: 'white', textTransform: 'none' }}>
                  Editar
                </Button>
              </Action>
              <Action>
                <Button style={{ color: 'white', textTransform: 'none' }}>
                  Apagar
                </Button>
              </Action>
            </RpgActions>
          </RpgDetails>
          <UsersPanel>
            <UserCard>
              <Item>
                <h3>Maestro:</h3>
              </Item>
              <Item>Nicolas</Item>
            </UserCard>
            <UserCard>
              <Item>
                <h3>Membros:</h3>
              </Item>
              <Item>Yves</Item>
            </UserCard>
          </UsersPanel>
        </Row>
      </Container>
      <Footer />
    </Background>
  )
}

const Background = styled.div`
  display: flex;
  padding-top: 80px;
  background-color: rgb(22, 20, 26);
  min-height: 100vh;
  color: white;

  @media (max-width: 60px) {
    padding-top: 60px;
  }
`

const Container = styled.div`
  display: flex;
  padding: 20px 30px;
  width: 100%;
  justify-content: center;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  background-color: rgb(33, 34, 44);
`

const Item = styled.div`
  display: flex;
`

const RpgDetails = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  max-height: 300px;
  width: 600px;
  height: 300px;
  /* padding: 20px;
  padding-bottom: 0; */
  /* background-color: rgb(33, 34, 44); */
  /* border-radius: 5px; */

  @media (max-width: 600px) {
    width: 100%;
  }
`

const RpgImage = styled.div`
  display: flex;
  background-image: url(${campfire});
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
`

const RpgTitle = styled.div`
  display: flex;
  padding: 10px 10px;
  justify-content: center;
  font-family: Grenze Gotisch;
  line-height: 20px;
  font-size: 28px;
`

const RpgActions = styled.div`
  display: flex;
  flex-direction: column;
`

const Action = styled.div`
  display: flex;
`

const UsersPanel = styled.div`
  display: flex;
  flex-direction: column;
`

const UserCard = styled.div`
  display: flex;
  flex-direction: column;
`

export default StoryDescriptionPage
