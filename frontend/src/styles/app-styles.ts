import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface LinkProps {
  underline: boolean
}

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: rgb(22, 20, 26);
    --color-primary-lighter: #9871F5;
    --color-primary-light: #916BEA;
    --color-primary: rgb(33, 34, 44);
    --color-primary-dark: #774DD6;
    --color-primary-darker: #6842C2;
    --color-secondary: #04D361;
    --color-secondary-dark: #04BF58;
    --color-title-in-primary: #FFFFFF;
    --color-text-in-primary: #D4C2FF;
    --color-text-title: #32264D;
    --color-text-complement: #9C98A6;
    --color-text-base: #ffffff;
    --color-line-in-white: #E6E6F0;
    --color-input-background: #F8F8FC;
    --color-button-text: #FFFFFF;
    --color-box-base: #FFFFFF;
    --color-box-footer: #FAFAFC;
    font-size: 14px;
  } 
  * {
      /* Fixes a bug where "width: 100%" is larger than actual viewport width */
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    /* -webkit-box-pack: center; */

    /* Default margin and padding for all elements */
    margin: 0;
    padding: 0;
    
    /* Removes highlighting on touch for mobile devices */
    -webkit-tap-highlight-color: transparent;
    /* -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none; */
    /* user-select: none; */
  }
  html, body, #root {
    height: 100vh;
    width: 100vw;
  }
  body {
    background-color: var(--color-background)
  } 
  body,
  input,
  textarea,
  button {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: var(--color-text-base);
  }
  @media (max-width: 700px) {
    :root {
      font-size: 14px;
    }
  }
`

export const StyledLink = styled(Link)<LinkProps>`
  display: flex;
  text-decoration: none;
  color: white;

  :hover {
    text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  }
`
