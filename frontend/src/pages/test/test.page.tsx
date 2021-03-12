import React from 'react'

import styled from 'styled-components'

const TestPage = () => {
  return (
    <div>
      <WaveBG>
        <h1>Hello World</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgb(34,34,44)"
            fill-opacity="1"
            d="M0,64L34.3,53.3C68.6,43,137,21,206,48C274.3,75,343,149,411,176C480,203,549,181,617,149.3C685.7,117,754,75,823,74.7C891.4,75,960,117,1029,112C1097.1,107,1166,53,1234,32C1302.9,11,1371,21,1406,26.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </WaveBG>
    </div>
  )
}

const WaveBG = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 80px;
  height: 100vh;
  text-align: center;
`

export default TestPage
