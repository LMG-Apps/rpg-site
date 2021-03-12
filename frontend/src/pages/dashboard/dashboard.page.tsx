import React from 'react'

import campfire from '../../assets/images/campire2.jpeg'
import campfire2 from '../../assets/images/campire1.jpeg'

import StoryCard from './components/story-card.component'

import FriendList from './components/friend-list.component'

import styled from 'styled-components'

class Dashboard extends React.Component<{ width: number }, {}> {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { width } = this.props

    return (
      <WaveBG>
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
            </Row>
            {width > 738 ? <FriendList /> : null}
          </OuterRow>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            fill="rgb(34,34,44)"
            fill-opacity="1"
            d="M0,64L34.3,53.3C68.6,43,137,21,206,48C274.3,75,343,149,411,176C480,203,549,181,617,149.3C685.7,117,754,75,823,74.7C891.4,75,960,117,1029,112C1097.1,107,1166,53,1234,32C1302.9,11,1371,21,1406,26.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </WaveBG>
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
