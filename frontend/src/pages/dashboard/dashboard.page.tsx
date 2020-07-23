import React from 'react'

import Grid from '@material-ui/core/Grid'

import campfire from '../../assets/images/campire2.jpeg'
import campfire2 from '../../assets/images/campire1.jpeg'

import StoryCard from './components/story-card.component'

import styled from 'styled-components'
import Header from './components/header.component'

import './components/dashboard.styles.css'

import FriendList from './components/friend-list.component'

// const StyledGrid = styled(Grid)`
//   padding: 30px;
// `

const Background = styled.div`
  /* position: fixed; */
  background-color: rgba(5, 5, 5, 0.8);
  height: 100%;
  /* color: white; */
  /* overflow: hidden; */
`

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
    const { width, height } = this.state

    return (
      <Grid
        className="background"
        container
        direction={width < 1180 ? 'row' : 'column'}
        alignItems={width < 600 ? 'center' : 'flex-start'}
      >
        <Header width={width} />
        <h2>Minhas historias</h2>
        <Grid item container direction="row" spacing={1}>
          <Grid
            container
            item
            direction="row"
            xs
            justify={width <= 730 ? 'center' : 'flex-start'}
            spacing={2}
          >
            <Grid item>
              <StoryCard image={campfire} />
            </Grid>
            <Grid item>
              <StoryCard image={campfire2} />
            </Grid>
            <Grid item>
              <StoryCard empty />
            </Grid>
            <Grid item>
              <StoryCard empty />
            </Grid>
            <Grid item>
              <StoryCard empty />
            </Grid>
            <Grid item>
              <StoryCard empty />
            </Grid>
            <Grid item>
              <StoryCard empty />
            </Grid>
            <Grid item>
              <StoryCard empty />
            </Grid>
          </Grid>
          {width > 730 ? (
            <Grid item>
              <FriendList />
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    )
  }
}

export default Dashboard
