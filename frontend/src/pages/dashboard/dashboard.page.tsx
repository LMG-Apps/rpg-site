import React from 'react'

import Grid from '@material-ui/core/Grid'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'

import campfire from '../../assets/images/campire2.jpeg'
import campfire2 from '../../assets/images/campire1.jpeg'

import StoryCard from './components/story-card.component'

import styled from 'styled-components'

const StyledGrid = styled(Grid)`
  padding: 30px;
`

class Dashboard extends React.Component<{}, {}> {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <div style={{ backgroundColor: 'rgba(5, 5, 5, 0.75)', height: '100vh', color: 'white' }}>
        <Grid container direction="row">
          <Grid item xs={10}>
            <h1>RPG Storytelling</h1>
          </Grid>
          <Grid item xs={2}>
            Lopao do Morro
            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              badgeContent={<AccountCircle />}
            >
              <Avatar alt="Travis Howard" />
            </Badge>
          </Grid>
          <StyledGrid item xs={12}>
            <h2>Minhas historias</h2>
            <Grid container justify="flex-start" spacing={3}>
              <Grid item>
                <StoryCard image={campfire} />
              </Grid>
              <Grid item>
                <StoryCard image={campfire2} />
              </Grid>
              <Grid item>
                <StoryCard empty />
              </Grid>
            </Grid>
          </StyledGrid>
        </Grid>
      </div>
    )
  }
}

export default Dashboard
