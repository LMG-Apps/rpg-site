import React from 'react'

import styled from 'styled-components'

import campfire from '../../../assets/images/campire1.jpeg'

interface AvatarProps {
  image?: string
}

const UserSection: React.FC = () => (
  <Row>
    <UserInfo>
      <h1>Miguel Demarque</h1>
      <h4>Floresta dos anoes</h4>
      <Bio>
        <h3>Bio</h3>
        <h5>
          Ola sou o miguelOla sou o miguelOla sou o miguelOla sou o miguelOla
          sou o miguelOla sou o miguelOla sou o miguel
        </h5>
      </Bio>
    </UserInfo>
    <Avatar image={campfire} />
  </Row>
)

const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

const Avatar = styled.div`
  display: flex;
  background-color: white;
  width: 128px;
  height: 128px;
  background-image: url(${(props: AvatarProps) => props.image});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-shadow: 0px 0px 1px 5px orange;

  @media (max-width: 600px) {
    width: 64px;
    height: 64px;
  }

  border-radius: 50%;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-right: 100px; */
  /* background-color: red; */
`

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
  max-width: 300px;

  @media (max-width: 600px) {
    max-width: 220px;
  }
`

export default UserSection
