import React, { useState } from 'react'

import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import { CustomInput } from '../../components/filled-input.component'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ProfileBadge from '../../components/profile-badge.component'

import { getFriends } from '../../helpers/api-methods'
import { Checkbox } from '@material-ui/core'

interface Options {
  name: string
}

interface Friend {
  id: number
  username: string
  profileImage: string
}

const StoryCreationPage: React.FC = () => {
  const [expanded, setExpanded] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  // const [users, setUsers] = useState([])
  const [friends, setFriends] = useState<Friend[]>([])

  React.useEffect(() => {
    ;(async () => {
      setFriends(await getFriends())
    })()
  }, [])

  const handleFriends = (event) => {
    console.log(event.target.checked)
    console.log(event.target.value)
  }

  return (
    <Background>
      <Container>
        <Item>
          <h1>Crie sua historia!</h1>
        </Item>
        <Item>
          <CustomInput
            label="Nome da história"
            variant="filled"
            value={name}
            fullWidth
          />
        </Item>
        <Item>
          <CustomInput
            label="Descrição da história (Opcional)"
            value={description}
            variant="filled"
            multiline
            rows={4}
            fullWidth
          />
        </Item>
        <Item>
          <Button
            onClick={() => setExpanded(!expanded)}
            style={{ color: 'white', textTransform: 'none' }}
            endIcon={
              expanded ? (
                <ExpandMoreIcon
                  style={{ transform: 'rotate(180deg)', transition: '300ms' }}
                />
              ) : (
                <ExpandMoreIcon style={{ transition: '300ms' }} />
              )
            }
            fullWidth
          >
            Adicionar participantes
          </Button>
        </Item>
        <Collapse in={expanded}>
          <Item>
            {friends.map((friend) => (
              <Box key={friend.id}>
                <ProfileBadge name={friend.username} />
                <Actions>
                  <Checkbox
                    onChange={(event) => handleFriends(event)}
                    value={friend.id}
                    style={{ color: 'white' }}
                  />
                </Actions>
              </Box>
            ))}
          </Item>
        </Collapse>
        <Item>
          <Button
            style={{
              color: 'white',
              backgroundColor: 'rgb(33, 34, 44)',
              textTransform: 'none',
            }}
            fullWidth
          >
            Finalizar
          </Button>
        </Item>
      </Container>
    </Background>
  )
}
const Background = styled.div`
  padding-top: 80px;
  background-color: rgb(22, 20, 26);
  min-height: 100vh;
  color: white;

  @media (max-width: 600px) {
    padding-top: 60px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px 10px 20px;
`
const Item = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  min-width: 600px;

  @media (max-width: 650px) {
    min-width: 90vw;
    /* width: 100%; */
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid rgb(56, 68, 77);
  width: 100%;
`
const Actions = styled.div`
  display: flex;
  align-items: center;
`

export default StoryCreationPage
