import React from 'react'

import Grid from '@material-ui/core/Grid'
import ProfileBadge from '../../../components/profile-badge.component'
import { StyledLink } from '../../../styles/app-styles'

// Array for testing purposes only
const namesArray: Array<string> = ['Gustavo Lopes', 'Miguel Demarque', 'Luis Felipe', 'Nicolas Gen', 'Leonel P', 'Yves']

const FriendList: React.FC = () => (
  <Grid
    container
    direction="column"
    justify="flex-start"
    alignItems="flex-start"
    spacing={2}
    style={{ minWidth: '200px', width: '200px' }}
  >
    <Grid item>
      <h3 style={{ margin: 0 }}>Lista de amigos</h3>
    </Grid>
    {namesArray.map((name, index) => (
      <Grid item key={index}>
        <ProfileBadge name={name} />
      </Grid>
    ))}
    <Grid item>
      <StyledLink to="/">
        <h5 style={{ margin: 0 }}>Ver todos amigos</h5>
      </StyledLink>
    </Grid>
  </Grid>
)

export default FriendList
