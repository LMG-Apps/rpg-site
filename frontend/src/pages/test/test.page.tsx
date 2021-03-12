import React from 'react'

import styled from 'styled-components'

import waveBG from '../../assets/images/wave.svg'

const TestPage = () => {
  return (
    <WaveBG>
      {/* <img src={waveBG} /> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgb(34,34,44)"
            fill-opacity="1"
            d="M0,64L34.3,53.3C68.6,43,137,21,206,48C274.3,75,343,149,411,176C480,203,549,181,617,149.3C685.7,117,754,75,823,74.7C891.4,75,960,117,1029,112C1097.1,107,1166,53,1234,32C1302.9,11,1371,21,1406,26.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#19ac5b"
          fill-opacity="1"
          d="M0,64L120,256L240,288L360,64L480,0L600,160L720,224L840,192L960,160L1080,128L1200,64L1320,128L1440,160L1440,320L1320,320L1200,320L1080,320L960,320L840,320L720,320L600,320L480,320L360,320L240,320L120,320L0,320Z"
        ></path>
      </svg> */}
    </WaveBG>
  )
}

// const WaveBG = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding-top: 80px;
//   height: 100vh;
//   text-align: center;
// `

const WaveBG = styled.div`
  background-image: url('/src/assets/images/campire2.jpeg');
  /*justify-content: space-between; */
  /* padding-top: 80px; */
  height: 100vh;
  width: 100vw;
  /* text-align: center; */
`

export default TestPage
