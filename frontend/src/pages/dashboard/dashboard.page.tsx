import React from 'react'

import campfire from '../../assets/images/campire2.jpeg'
import campfire2 from '../../assets/images/campire1.jpeg'

import StoryCard from './components/story-card.component'

import FriendList from './components/friend-list.component'

import styled from 'styled-components'

class Dashboard extends React.Component<{ width: number }, {}> {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    const { width } = this.props

    return (
      <Background>
        <Container>
          <h2>Minhas historias</h2>
          <OuterRow>
            <Row>
              <Item>
                <StoryCard image={campfire} />
              </Item>
              <Item>
                <StoryCard image={campfire2} />
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
      </Background>
    )
  }
}

const Background = styled.div`
  display: flex;
  padding-top: 80px;
  background-color: rgb(22, 20, 26);
  min-height: 100vh;
  color: white;
  overflow: hidden;

  @media (max-width: 600px) {
    padding-top: 60px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;

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
