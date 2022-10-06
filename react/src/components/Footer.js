import { Container, Grid, Typography, Button, Divider } from '@mui/material'
import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const pages = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Catologue', link: '/catologue' },
  { name: 'Blog', link: '/blog' },
];

const contactDetails = [
  { content: "Email : john.doe@gmail.com", link: "" },
  { content: "Phone : 02266229911", link: "" },
  { content: "Address : 00 King street, Auckland, New Zealand", link: "" },
]

const socialMedia = [
  <FacebookIcon sx={{
    color: '#F7D633',
    display: 'block',
    mx: 1,
    "&:hover": {
      color: '#F7D633',
      cursor: 'pointer'
    }
  }} href="" />,
  <InstagramIcon sx={{
    color: '#F7D633',
    display: 'block',
    mx: 1,
    "&:hover": {
      color: '#F7D633',
      cursor: 'pointer'
    }
  }} href="" />,
  <LinkedInIcon sx={{
    color: '#F7D633',
    display: 'block',
    mx: 1,
    "&:hover": {
      color: '#F7D633',
      cursor: 'pointer'
    }
  }} href="" />,
  <TwitterIcon sx={{
    color: '#F7D633',
    display: 'block',
    mx: 1,
    "&:hover": {
      color: '#F7D633',
      cursor: 'pointer'
    }
  }} href="" />,
]

export default function Footer() {
  /* -------------------------------- Variable -------------------------------- */
  const navigator = useNavigate()

  /* -------------------------------- COMPONENT ------------------------------- */

  const link = (page) => {
    return (
      <Button
        key={page.name}
        onClick={() => navigator(page?.link)}
        sx={{
          color: '#F7D633',
          display: 'block',
          letterSpacing: '.3rem',
        }}
      >
        {page?.name}
      </Button>
    )
  }

  const firstColumn = () => {
    return (
      <Grid item md={3} sm={0}
        justifyContent="center"
        sx={{ my: 'auto', mx: 'auto', display: { xs: 'none', sm: 'flex' } }}>
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
    )
  }

  const secondColumn = () => {
    return (
      <Grid item xs={12} md={3} sm={6}
        container spacing={3}
        direction="column"
        justifyContent="center"
        sx={{ my: 2, }}>
        {contactDetails.map((detail,i) => {
          return (
            <Typography
              key={i}
              variant="h6"
              component="a"
              href={detail.link}
              sx={{
                ml: 5,
                mb: 1,
                fontSize: 15,
                fontFamily: 'monospace',
                fontWeight: 300,
                letterSpacing: '.1rem',
                color: '#F7D633',
                textDecoration: 'none',
                lineHeight: "1.3rem"
              }}
            >
              {detail.content} <br />
            </Typography>
          )
        })}
      </Grid>
    )
  }

  const thirdColumn = () => {
    return (
      <Grid item md={3} xs={6}
        container spacing={2}
        direction="column"
        justifyContent="center" >
        {pages.map((page) => {
          return (
            link(page)
          )
        })}
      </Grid>
    )
  }

  const fourthColumn = () => {
    return (
      <Grid item xs={6} md={3}
        container spacing={2}
        direction="column"
        justifyContent="center" >
        {pages.map((page) => {
          return (
            link(page)
          )
        })}
      </Grid>
    )
  }

  const topSection = (
    <Container maxWidth="xl" sx={{ backgroundColor: 'black', color: 'white', display: 'block', pt: 4, pb: 3 }}>
      <Grid container spacing={3}
        direction="row">
        {firstColumn()}
        {secondColumn()}
        {thirdColumn()}
        {fourthColumn()}
      </Grid>
    </Container>)

  const socialMediaLinks = () => {
    return (
      <Grid item xs={12}
        container direction='row'
        alignItems="center"
        justifyContent="center">
        {socialMedia.map((platform, i) => {
          return (
            <div key={i}>
              {platform}
            </div>
          )
        })}
      </Grid>
    )
  }

  const copyRight = () => {
    return (
      <Grid item xs={12}>
        <Typography
          variant="h6"
          sx={{
            mb: 1,
            fontSize: 15,
            fontFamily: 'monospace',
            fontWeight: 300,
            letterSpacing: '.1rem',
            color: '#F7D633',
            textDecoration: 'none',
          }}
        >
          Lorem ipsum dolor sit amet,
        </Typography>
      </Grid>
    )
  }
  const bottomSection = (
    <Container maxWidth="xl" sx={{ backgroundColor: 'black', color: '#FEEDD9', display: 'block', pt: 3, pb: 2 }}>
      <Grid
        container spacing={3}
        direction="column"
        alignItems="center"
        justifyContent="center">
        {socialMediaLinks()}
        {copyRight()}
      </Grid>
    </Container>)

  /* --------------------------------- RENDER --------------------------------- */
  return (
    <>
      {topSection}
      <Divider />
      {bottomSection}
    </>
  )
}
