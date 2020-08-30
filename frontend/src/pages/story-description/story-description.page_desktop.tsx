import React from 'react'

import styled from 'styled-components'

import { StylesProvider } from '@material-ui/styles'

import campfire from '../../assets/images/campire1.jpeg'
import Button from '@material-ui/core/Button'
import Footer from './components/footer.component'

import DeleteIcon from '@material-ui/icons/Delete'
import CreateIcon from '@material-ui/icons/Create'
import SettingsIcon from '@material-ui/icons/Settings'

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
        <Row>
          <RpgContainer>
            <RpgDetails>
              <RpgImage />
              <RpgTitle>Titulo do RPG</RpgTitle>
            </RpgDetails>
            <RpgActions>
              <StylesProvider injectFirst>
                <Action>
                  <Button
                    style={{
                      color: 'white',
                      backgroundColor: 'rgb(33, 34, 44)',
                      textTransform: 'none',
                    }}
                    endIcon={<CreateIcon />}
                    fullWidth
                  >
                    Escrever
                  </Button>
                </Action>
                <Action>
                  <Button
                    style={{
                      color: 'white',
                      backgroundColor: 'rgb(33, 34, 44)',
                      textTransform: 'none',
                    }}
                    endIcon={<SettingsIcon />}
                    fullWidth
                  >
                    Editar
                  </Button>
                </Action>
                <Action>
                  <Button
                    style={{
                      color: 'white',
                      backgroundColor: 'rgb(33, 34, 44)',
                      textTransform: 'none',
                    }}
                    endIcon={<DeleteIcon />}
                    fullWidth
                  >
                    Apagar
                  </Button>
                </Action>
              </StylesProvider>
            </RpgActions>
          </RpgContainer>
          <UsersPanel>
            <UserCard>
              <Item>
                <h3>Mestre:</h3>
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
  width: 100%;
  margin-left: 30px;
  margin-right: 30px;
  /* background-color: rgb(33, 34, 44); */
`

const Item = styled.div`
  display: flex;
`

const RpgContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 405px;
  min-width: 600px;
  border-radius: 10px;
  background-color: blue;
`

const RpgDetails = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  height: 400px;
  /* padding: 20px;
  padding-bottom: 0; */
  /* background-color: blue; */
  /* border-radius: 5px; */

  @media (max-width: 600px) {
    max-width: 100%;
    width: 100%;
  }
`

const RpgImage = styled.div`
  display: flex;
  background-image: url(${campfire});

  background-color: red;
  height: 360px;
  width: 548px;
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
  /* padding-left: 30px;
  padding-right: 30px; */
  display: flex;
  flex-direction: column;
  max-height: 360px;
  min-width: 120px;
  justify-content: center;
  background-color: rgb(33, 34, 44);
  border-radius: 5px;

  div:not(:first-child) {
    margin-top: 10px;
  }

  @media (max-width: 900px) {
    visibility: hidden;
  }
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
