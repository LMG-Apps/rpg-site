import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface LinkProps {
  underline: boolean
}

export const StyledLink = styled(Link)<LinkProps>`
  display: flex;
  text-decoration: none;
  color: white;

  :hover {
    text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  }
`
