import React from 'react'

import styled from 'styled-components'

const ProfilePage: React.FC = () => (
  <Background>
    <h1>Profile Page</h1>
  </Background>
)

const Background = styled.div`
  background-color: rgb(22, 20, 26);
  min-height: 100vh;
  color: white;
`

export default ProfilePage
