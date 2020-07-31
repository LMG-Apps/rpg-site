import React from 'react'

import styled from 'styled-components'

interface TabsProps {
  children?: JSX.Element;
}

const Tabs: React.FC<TabsProps> = ({ children }: TabsProps) => {
  return (
    <StyledDiv>
      <Header>
        <Tab>Historias</Tab>
        <Tab>Amigos</Tab>
      </Header>
      {children}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  border-bottom: 1px solid #ccc;
`

const Tab = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;

  :hover {
    filter: brightness(85%);
  }
`

const Content = styled.div``

export default Tabs
