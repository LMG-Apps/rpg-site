import React from 'react'

import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import { CustomInput } from '../../components/filled-input.component'
import Friends from '../profile/components/friends.component'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const StoryEditionPage: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false)
  const [data, setData] = React.useState('')

  React.useEffect(() => {
    // Get data
    // Set data
  })

  return (
    <Background>
      <Container>
        <Item>
          <h1>Editar dados da história</h1>
        </Item>
        <Item>
          <CustomInput label="Nome da história" variant="filled" fullWidth />
        </Item>
        <Item>
          <CustomInput
            label="Descrição da história (Opcional)"
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
            <Friends />
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

export default StoryEditionPage
