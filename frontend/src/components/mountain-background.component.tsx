import React from 'react'

import styled from 'styled-components'

interface MountainBGProps {
  name?: string
}

const MountainBG: React.FC<MountainBGProps> = (props) => (
  <WaveBG>
    {props.children}
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#19ac5b"
        fill-opacity="1"
        d="M0,64L120,256L240,288L360,64L480,0L600,160L720,224L840,192L960,160L1080,128L1200,64L1320,128L1440,160L1440,320L1320,320L1200,320L1080,320L960,320L840,320L720,320L600,320L480,320L360,320L240,320L120,320L0,320Z"
      ></path>
    </svg> */}
  </WaveBG>
)

const WaveBG = styled.div`
  background-image: url(/src/assets/images/wave.svg);
  background-repeat: no-repeat;
  /*justify-content: space-between; */
  padding-top: 80px;
  height: 100vh;
  width: 100vw;
  /* text-align: center; */
`

export default MountainBG
