import React from 'react'

import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'

import styled from 'styled-components'

import { StyledLink } from '../styles/app-styles'

interface ProfileBadgeProps {
  name?: string;
  size?: 'default' | 'small';
  id?: number;
}

const ProfileBadge: React.FC<ProfileBadgeProps> = ({
  name,
  size,
  id
}: ProfileBadgeProps) => (
  <Container>
    <StyledLink underline to="/user">
      <Name>{size === 'small' ? null : <h4>{name}</h4>}</Name>
    </StyledLink>
    <StyledLink to="/user">
      <Badge
        overlap="circle"
        // anchorOrigin={{
        //   vertical: 'top',
        //   horizontal: 'right'
        // }}
        color="primary"
        variant="dot"
      >
        <StyledAvatar alt="profile-pic">{name && name[0]}</StyledAvatar>
      </Badge>
    </StyledLink>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

const Name = styled.div`
  display: flex;
  margin-left: 8px;
`
const StyledAvatar = styled(Avatar)`
  background-color: rgba(247, 157, 32, 1);

  :hover {
    filter: brightness(70%);
    cursor: pointer;
  }
`

export default ProfileBadge
