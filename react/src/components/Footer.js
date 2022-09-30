import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';

export default function Footer() {

  const firstColumn = (<>
    <Grid item xs={4} sx={{ my: 'auto', mx: 'auto', display: { xs: 'none', md: 'flex' } }}>
      <AdbIcon sx={{ ml: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          ml: 1,
          mb: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        LOGO2
      </Typography>
    </Grid>
  </>)
  const secondColumn = (
    <Grid item xs={4}
      container spacing={2}
      direction="column"
      justifyContent="center" >
      <Typography sx={{
        mr: 2,
        mx: 'auto',
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }} textAlign="center"
        noWrap
        component="a"
        href="/"
        children="Home" />
      <Typography sx={{
        mr: 2,
        mx: 'auto',
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }} textAlign="center"
        noWrap
        component="a"
        href="/blog"
        children="Blog" />
      <Typography sx={{
        mr: 2,
        mx: 'auto',
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }} textAlign="center"
        noWrap
        component="a"
        href="/catologue"
        children="Catologue" />
      <Typography sx={{
        mr: 2,
        mx: 'auto',
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }} textAlign="center"
        noWrap
        component="a"
        href="/about"
        children="About" />
    </Grid>)

  const thirdColumn = (<Grid item xs={4} container spacing={2}
    direction="column"
    justifyContent="center" >
    <Typography sx={{
      mr: 2,
      mx: 'auto',
      flexGrow: 1,
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
    }} textAlign="center"
      noWrap
      component="a"
      href="/"
      children="Home" />
    <Typography sx={{
      mr: 2,
      mx: 'auto',
      flexGrow: 1,
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
    }} textAlign="center"
      noWrap
      component="a"
      href="/blog"
      children="Blog" />
    <Typography sx={{
      mr: 2,
      mx: 'auto',
      flexGrow: 1,
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
    }} textAlign="center"
      noWrap
      component="a"
      href="/catologue"
      children="Catologue" />
    <Typography sx={{
      mr: 2,
      mx: 'auto',
      flexGrow: 1,
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
    }} textAlign="center"
      noWrap
      component="a"
      href="/about"
      children="About" />
  </Grid>)

  const topSection = (
    <Container maxWidth="xl" sx={{ backgroundColor: 'black', color: 'white', display: 'block', mt: 5, pt: 3 }}>
      <Grid container spacing={2}
        direction="row"
        justifyContent="center" >
        {firstColumn}
        {secondColumn}
        {thirdColumn}
      </Grid>
    </Container>)

  const bottomSection = (
    <Container maxWidth="xl" sx={{ backgroundColor: 'black', color: 'white', display: 'block', pt: 3, pb: 2 }}>
      <Grid 
        container  spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center">
        <Grid 
        container 
        direction="row" 
        item xs={12} 
        alignItems="center"
        justifyContent="center">
          <AdbIcon sx={{ ml: 1 }} />
          <AdbIcon sx={{ ml: 1 }} />
          <AdbIcon sx={{ ml: 1 }} />
          <AdbIcon sx={{ ml: 1 }} />
        </Grid>
        <Grid item xs={12}>
          @2022
        </Grid>
      </Grid>
    </Container>)
  return (
    <>
      {topSection}
      {bottomSection}
    </>
  )
}
