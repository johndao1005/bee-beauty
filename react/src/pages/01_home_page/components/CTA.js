import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

function CTA() {
    /* -------------------------------- COMPONENT ------------------------------- */
    const newsLetter = () =>{
        return (
            <Grid item xs={7} md={8} container alignContent="center" justifyContent='center'>
                <Typography
                    variant="h6"
                    component="a"
                    href="/"
                    sx={{
                        mb: 1,
                        fontSize: 15,
                        fontFamily: 'monospace',
                        fontWeight: 300,
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </Typography>
            </Grid>
        )
    }

    const buttons = () => {
        return (
            <Grid item xs={5} md={4} container
                alignContent="center" justifyContent='center' direction='column' >
                <Button
                    onClick={() => console.log('/')}
                    sx={{
                        mx: 'auto',
                        mb: 2,
                        px: 2,
                        display: 'block',
                        fontSize: 12,
                        backgroundColor: "black",
                        color: '#F7D633',
                        letterSpacing: '.3rem',
                        "&:hover": {
                            backgroundColor: '#F7D633',
                            fontSize: 13,
                            color: 'black',
                            cursor: 'pointer'
                        }
                    }}>
                    Subscribe
                </Button>
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
            {newsLetter()}
            {buttons()}
        </Grid>
    )
}

export default CTA