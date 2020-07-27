import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: white;

  :hover {
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
  }
`
