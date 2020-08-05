import React from 'react'

import styled from 'styled-components'

interface TabProps {
  label: string;
  onClick(tab: string | number): void;
}

const Tab: React.FC<TabProps> = ({ label, onClick }: TabProps) => {
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
