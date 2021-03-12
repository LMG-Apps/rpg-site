import React from 'react'

import campfire from '../../assets/images/campire2.jpeg'
import campfire2 from '../../assets/images/campire1.jpeg'

import StoryCard from './components/story-card.component'

import FriendList from './components/friend-list.component'

import styled from 'styled-components'
import MountainBG from '../../components/mountain-background.component'

class Dashboard extends React.Component<{ width: number }, {}> {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { width } = this.props

    return (
      <MountainBG>
        <Container>
          <h1>Minhas historias</h1>
          <OuterRow>
            <Row>
              <Item>
                <StoryCard image={campfire} />
              </Item>
              <Item>
                <StoryCard image={campfire2} small />
              </Item>
              <Item>
                <StoryCard empty />
              </Item>
              <Item>
                <StoryCard empty />
              </Item>
              <Item>
                <StoryCard empty />
              </Item>
              <Item>
                <StoryCard empty />
              </Item>
              <Item>
                <StoryCard empty />
              </Item>
              <Item>
                <StoryCard empty />
              </Item>
              <Item>
                <StoryCard empty />
              </Item>
            </Row>
            {width > 738 ? <FriendList /> : null}
          </OuterRow>
        </Container>
      </MountainBG>
    )
  }
}

// Importing waves for website background
{
  /*<div class="wave-container">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="rgb(22,20,26)"
      fill-opacity="1"
      d="M0,64L205.7,224L411.4,288L617.1,256L822.9,64L1028.6,192L1234.3,128L1440,224L1440,0L1234.3,0L1028.6,0L822.9,0L617.1,0L411.4,0L205.7,0L0,0Z"
    ></path>
  </svg>
</div>
*/
}
const WaveBG = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  background-color: rgb(22, 20, 26);
  overflow: hidden;

  @media (max-width: 600px) {
    padding-top: 60px;
  }
`

{
  /* const Background = styled.div`
  display: flex;
  padding-top: 80px;
  background-color: rgb(22, 20, 26);
  min-height: 100vh;
  color: white;
  overflow: hidden;

  @media (max-width: 600px) {
    padding-top: 60px;
  }
`*/
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;

  @media (max-width: 738px) {
    padding: 20px 20px;
    align-items: center;
  }
`

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding-top: 20px;

  @media (max-width: 738px) {
    justify-content: center;
  }
`

const Item = styled.div`
  display: flex;
  margin-right: 20px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-right: 0;
  }
`
const OuterRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`

export default Dashboard
