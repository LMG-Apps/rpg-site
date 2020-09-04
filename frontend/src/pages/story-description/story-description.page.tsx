import React from 'react'

import ProfileBadge from '../../components/profile-badge.component'
import Footer from './components/footer.component'

import Button from '@material-ui/core/Button'

import DeleteIcon from '@material-ui/icons/Delete'
import CreateIcon from '@material-ui/icons/Create'
import SettingsIcon from '@material-ui/icons/Settings'

import campfire from '../../assets/images/campire1.jpeg'

import styled from 'styled-components'

interface StoryDescriptionPageProps {
  width: number
}

const StoryDescriptionPage: React.FC<StoryDescriptionPageProps> = ({
  width,
}: StoryDescriptionPageProps) => {
  return (
    <Background>
      <Container>
        <RpgImage />
        {width > 700 ? (
          <Actions>
            <Button
              style={{
                color: 'white',
                backgroundColor: 'rgb(33, 34, 44)',
                textTransform: 'none',
                width: '150px',
                boxShadow: '1px 1px 5px 0 black',
              }}
              endIcon={<CreateIcon />}
            >
              Escrever
            </Button>
            <Button
              style={{
                color: 'white',
                backgroundColor: 'rgb(33, 34, 44)',
                textTransform: 'none',
                width: '150px',
                boxShadow: '1px 1px 5px 0 black',
              }}
              endIcon={<SettingsIcon />}
            >
              Editar
            </Button>
            <Button
              style={{
                color: 'white',
                backgroundColor: 'rgb(33, 34, 44)',
                textTransform: 'none',
                width: '150px',
                boxShadow: '1px 1px 5px 0 black',
              }}
              endIcon={<DeleteIcon />}
            >
              Apagar
            </Button>
          </Actions>
        ) : null}

        <RpgTitle>
          O RPG De Mesa Mais Doido Que Tem Um Titulo Gigantesco
        </RpgTitle>

        <Divider />

        <Description>
          <DividerDesktop />
          <h2>Descrição</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Description>

        <Divider />

        {/* <Participants>
          <h2>Participantes</h2>
          <h3>Mestre</h3>
          <span>Nicolas</span>
          <h3>Jogadores</h3>
          <span>Luiz Felipe</span>
          <span>Miguel Demarque</span>
          <span>Gustavo Lopes</span>
        </Participants> */}
        <Participants>
          <Card>
            <h2>Mestre</h2>
            <ProfileBadge name="Nicolas" />
          </Card>
          <Card>
            <h2>Membros</h2>
            <ProfileBadge name="Luiz Felipe" />
            <ProfileBadge name="Miguel Demarque" />
            <ProfileBadge name="Gustavo Lopes" />
          </Card>
        </Participants>
        <Footer />
      </Container>
    </Background>
  )
}

const Background = styled.div`
  padding-top: 80px;

  @media (max-width: 700px) {
    padding-top: 60px;
    padding-bottom: 80px;
  }
`

const Container = styled.div`
  width: 100%;
  max-width: 1200px;

  @media (min-width: 700px) {
    padding-top: 30px;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 320px 320px 170px 1fr;
    column-gap: 15px;
    grid-template-rows: auto;
    grid-template-areas:
      'image image actions participants'
      'title title . participants'
      'description description . participants';
  }
`

const RpgImage = styled.div`
  display: flex;

  grid-area: image;

  width: 640px;
  height: 360px;

  background-image: url(${campfire});
  background-size: 100% 100%;

  @media (max-width: 700px) {
    height: 250px;
    width: 100%;
  }
`

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: actions;

  justify-content: center;
  /* margin-left: 16px; */
  /* justify-self: start; */

  button:not(:first-child) {
    margin-top: 20px;
  }

  @media (max-width: 700px) {
    visibility: hidden;
  }
`

const RpgTitle = styled.div`
  display: flex;

  grid-area: title;

  padding: 10px 10px;
  /* justify-content: center; */
  text-align: center;

  font-family: Grenze Gotisch;
  line-height: 32px;
  font-size: 32px;
  margin-top: 18px;

  @media (max-width: 700px) {
    font-size: 24px;
  }
`
const Participants = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-area: participants;

  justify-self: right;

  /* padding-right: 20px;
  padding-left: 20px; */

  h2 {
    font-family: Grenze Gotisch;
    line-height: 24px;
    font-size: 32px;
    font-weight: 500;

    @media (max-width: 700px) {
      font-size: 24px;
    }
  }

  div:not(:first-child) {
    margin-top: 10px;
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: description;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 18px;
  /* align-items: center;
  text-align: center; */

  h2 {
    font-family: Grenze Gotisch;
    line-height: 20px;
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 16px;

    @media (max-width: 700px) {
      font-size: 24px;
    }
  }

  p:last-child {
    margin-top: 10px;
    line-height: 20px;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  background-color: var(--color-primary);
  width: 100%;
  box-shadow: 1px 1px 5px 0 black;

  div:not(:first-child) {
    margin-top: 30px;
  }
`

const Divider = styled.div`
  border-bottom: 1px solid rgb(56, 68, 77);
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;

  @media (min-width: 700px) {
    display: none;
  }
`
const DividerDesktop = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(56, 68, 77);
  margin-top: 10px;
  margin-bottom: 32px;
  width: 100%;

  @media (max-width: 700px) {
    display: none;
  }
`

export default StoryDescriptionPage
