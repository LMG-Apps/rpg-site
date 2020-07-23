import React from 'react'

import campfire from '../../assets/images/campire2.jpeg'
import campfire2 from '../../assets/images/campire1.jpeg'

import StoryCard from './components/story-card.component'

import Header from './components/header.component'

import FriendList from './components/friend-list.component'

import styled from 'styled-components'

class Dashboard extends React.Component<{}, { width: number; height: number }> {
  constructor (props) {
    super(props)

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = (event) => {
    console.log('innerwidth: ', event.currentTarget.innerWidth)
    console.log('innerheight: ', event.currentTarget.innerHeight)
    this.setState({
      width: event.currentTarget.innerWidth,
      height: event.currentTarget.innerHeight
    })
  };

  render () {
    const { width } = this.state

    return (
      <Background>
        <Header width={width} />
        <Container>
          <h2>Minhas historias</h2>
          <OuterRow>
            <Row>
              <StoryCard image={campfire} />
              <StoryCard image={campfire2} />
              <StoryCard empty />
              <StoryCard empty />
              <StoryCard empty />
              <StoryCard empty />
              <StoryCard empty />
              <StoryCard empty />
            </Row>
            {width > 730 ? (
              <FriendList />
            ) : null}
          </OuterRow>
        </Container>
      </Background>
    )
  }
}

const Background = styled.div`
  padding-top: 80px;
  background-color: rgb(22, 20, 26);
  min-height: 100vh;
  color: white;
  overflow: hidden;
  /* @media (max-width: 768px) {
    padding-top: 60px;
  } */
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  @media (max-width: 730px) {
    justify-content: center;
  }
`
const OuterRow = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: flex-start;
`

export default Dashboard
