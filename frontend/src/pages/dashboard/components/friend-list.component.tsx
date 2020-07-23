import React from 'react'

import Grid from '@material-ui/core/Grid'
import ProfileBadge from '../../../components/profile-badge.component'
import { StyledLink } from '../../../styles/app-styles'

const FriendList: React.FC = () => (
  <Grid
    container
    direction="column"
    justify="flex-start"
    alignItems="flex-start"
    spacing={2}
    style={{ width: '200px' }}
  >
    <Grid item>
      <h3 style={{ margin: 0 }}>Lista de amigos</h3>
    </Grid>
    <Grid item>
      <ProfileBadge name="Gustavo Lopes" />
    </Grid>
    <Grid item>
      <ProfileBadge name="Miguel Demarque" />
    </Grid>
    <Grid item>
      <ProfileBadge name="Luis Felipe" />
    </Grid>
    <Grid item>
      <ProfileBadge name="Nicolas" />
    </Grid>
    <Grid item>
      <StyledLink to="/">
        <h5 style={{ margin: 0 }}>Ver todos amigos</h5>
      </StyledLink>
    </Grid>
  </Grid>
)

export default FriendList
