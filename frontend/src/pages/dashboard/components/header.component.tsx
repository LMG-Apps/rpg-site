import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProfileBadge from '../../../components/profile-badge.component'

interface HeaderProps {
  width: number;
  height?: number;
}

const Header: React.FC<HeaderProps> = ({ width, height }: HeaderProps) => (
  <Grid
    container
    direction={width < 600 ? 'column' : 'row'}
    spacing={2}
    justify={width < 600 ? 'center' : 'flex-start'}
    alignItems="center"
  >
    <Grid item xs={width < 600 ? 'auto' : 6}>
      <h1>RPG Storytelling</h1>
    </Grid>
    <Grid
      item
      xs={width < 600 ? 'auto' : 6}
      container
      justify="flex-end"
    >
      <Grid item>
        <ProfileBadge name="Rasengan" />
      </Grid>
    </Grid>
  </Grid>
)

export default Header
