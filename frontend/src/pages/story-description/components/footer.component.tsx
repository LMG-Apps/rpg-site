import React from 'react'

import styled from 'styled-components'

import EditIcon from '@material-ui/icons/Edit'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import DeleteIcon from '@material-ui/icons/Delete'

interface FooterProps {
  width?: number;
}

const Footer: React.FC<FooterProps> = ({ width }: FooterProps) => (
  <StyledDiv>
    <Action>
      <MenuBookIcon />
      <Description>Escrever</Description>
    </Action>
    <Action>
      <EditIcon />
      <Description>Editar</Description>
    </Action>
    <Action>
      <DeleteIcon />
      <Description>Apagar</Description>
    </Action>
  </StyledDiv>
)

const StyledDiv = styled.div`
  /* Makes div float */
  position: fixed;
  /* Makes div stay at the top */
  bottom: 0px;
  /* Makes div stay in front of almost everything else in the screen */
  z-index: 9998;
  /* Dimensions */
  height: 80px;
  width: 100%;
  /* Defines itens arrangement in the div */
  display: flex;
  justify-content: space-around;
  /* Styling */
  color: white;
  padding: 0 30px;
  background-color: rgb(34, 34, 44);
  transition: 300ms;
  visibility: hidden;

  @media (max-width: 600px) {
    visibility: visible;
    height: 60px;
  }
`
const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* background-color: red; */
  /* margin-right: 2px; */
`

const Description = styled.div`
  display: flex;
`

export default Footer
