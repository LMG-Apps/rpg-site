import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import AddIcon from '@material-ui/icons/Add'

import styled from 'styled-components'

interface StoryCardProps {
  empty?: boolean | false;
  image?: string;
}

const StyledPaper = styled(Paper)`
  width: 220px;
  height: 220px;

  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  align-items: center;

  font-family: "Grenze Gotisch", cursive;
  font-size: 20px;

  :hover {
    cursor: pointer;
    transform: scale(1.05, 1.05);
  }
`

const BackgroundImage = styled(Grid)`
  width: 100%;
  height: 85%;
  border-radius: 20px 20px 0px 0px;
  background-image: url(${(props) => props.image});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* background-color: blue; */
`

const StoryCard: React.FC<StoryCardProps> = ({
  empty,
  image
}: StoryCardProps) => (
  <>
    {empty ? (
      <StyledPaper elevation={0}>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: '100%', width: '100%', borderRadius: '20px' }}
        >
          <Grid item>
            <AddIcon style={{ width: '64px', height: '64px' }} />
          </Grid>
        </Grid>
      </StyledPaper>
    ) : (
      <StyledPaper elevation={0}>
        <Grid
          container
          justify="center"
          direction="row"
          //   alignItems="flex-end"
          style={{ height: '100%', width: '100%', borderRadius: '20px' }}
        >
          <BackgroundImage item image={image} />
          <Grid item>Titulo do RPG pouco longo</Grid>
        </Grid>
      </StyledPaper>
    )}
  </>
)

export default StoryCard