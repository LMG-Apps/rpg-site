import React from 'react'

import Grid from '@material-ui/core/Grid'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'

import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

import { StyledLink } from '../styles/app-styles'

interface ProfileBadgeProps {
  name?: string;
  size?: 'default' | 'small';
  id?: number;
}

const StyledAvatar = styled(Avatar)`
  background-color: rgba(247, 157, 32, 1);

  :hover {
    filter: brightness(70%);
    cursor: pointer;
  }
`

const ProfileBadge: React.FC<ProfileBadgeProps> = ({
  name,
  size,
  id
}: ProfileBadgeProps) => (
  <Grid container direction="row-reverse" justify="flex-start" spacing={1}>
    <Grid item>
      {size === 'small' ? null : (
        <StyledLink to="/">
          <h4 style={{ margin: 0 }}>{name}</h4>
        </StyledLink>
      )}
    </Grid>
    <Grid item>
      <Badge
        overlap="circle"
        // anchorOrigin={{
        //   vertical: 'top',
        //   horizontal: 'right'
        // }}
        color="primary"
        variant="dot"
      >
        <NavLink to="/" activeStyle={{ textDecoration: 'none' }}>
          <StyledAvatar alt="profile-pic">{name && name[0]}</StyledAvatar>
        </NavLink>
      </Badge>
    </Grid>
  </Grid>
)

export default ProfileBadge
