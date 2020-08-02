import React from 'react'

import styled from 'styled-components'

interface TabProps {
  label: string;
  activeTab: string | number;
  onClick(tab: string | number): any;
}

const Tab: React.FC<TabProps> = ({ label, activeTab, onClick }: TabProps) => {
  const handleOnClick = () => {
    onClick(label)
  }

  return (
    <StyledDiv onClick={handleOnClick}>
      {label}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;

  :hover {
    filter: brightness(85%);
  }
`

export default Tab
