import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Hero() {
  const heroPhoto = {
    description: "hero picture",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
  }
  /* -------------------------------- COMPONENT ------------------------------- */
  const image = () => {
    return (
      <Grid xs={12} sm={6}>
        <Box
          component="img"
          alt={heroPhoto.description}
          sx={{
            minWidth: '250px', mx: 'auto', my: '50px', width: '100%'
          }}
          src={heroPhoto.url}
        />
      </Grid>
    )
  }

  const description = () => {
    return (
      <Grid item container xs={12} sm={6} 
        alignContent="center" justifyContent='center' direction='column'  >
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            ml: 3,
            mb: 3,
            fontSize: 15,
            fontFamily: 'monospace',
            fontWeight: 300,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
            textAlign: 'center'
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </Typography>
        <Button
          onClick={() => console.log('/')}
          sx={{
            mx: 'auto',
            px: 2,
            color: 'black',
            display: 'block',
            fontSize: 11,
            backgroundColor: '#F7D633',
            letterSpacing: '.3rem',
            "&:hover": {
              backgroundColor: "black",
              fontSize: 12,
              color: '#F7D633',
              cursor: 'pointer'
            }
          }}>
          Contact us
        </Button>
      </Grid>
    )
  }
  /* --------------------------------- RENDER --------------------------------- */
  return (
    <Grid container direction="row" sx={{ py: 3, px: 3, backgroundColor: "#FEEDD9", minHeight: "190px" }}>
      {image()}
      {description()}
    </Grid>
  )
}

export default Hero