import { Grid } from '@mui/material'
import { Box, Container } from '@mui/system';
import React, { useState } from 'react'
import Carousel from "react-material-ui-carousel";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

var itemsList = [
    {
        name: "Random Name #1",
        description: "1 - Probably the most random thing you have ever seen!",
    },
    {
        name: "Random Name #2",
        description: "2- Hello World!"
    },
    {
        name: "Random Name #3",
        description: "3 - Hello World!"
    }
];

function Carosuel() {
    const [index, setIndex] = useState(0);
    const [items, setItems] = useState(itemsList)

    const handleChange = (cur, prev) => {
        setIndex(cur);
    };

    const carousel = () => {
        return (
            <Container maxWidth='sm'>
                <Carousel
                    index={index}
                    onChange={handleChange}
                    interval={5000}
                    animation="slide"
                    indicators={false}
                    stopAutoPlayOnHover
                    swipe
                    className="my-carousel"
                    sx={{my:2}}>
                    {items.map((item, i) => (
                        <Box
                            key={i}
                            component="img"
                            alt={item.description}
                            sx={{
                                width: '100%',mx:'auto', minHeight: '200px'
                            }}
                            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                        />
                    ))}
                </Carousel>
            </Container>
        )
    }

    const navigate = () => {
        return (
            <Grid
                container
                direction='row'
                justifyContent='center'>
                {items.map((item, i) => (
                    <FiberManualRecordIcon
                        key={i}
                        onClick={() => setIndex(i)}
                        style={{ color: i === index ? "#F7D633" : "#fff", fontSize: 14, margin: 12 }}
                    />
                ))}
            </Grid>
        )
    }
    return (
        <Container maxWidth="xl" sx={{ backgroundColor: 'black', color: '#FEEDD9', display: 'block', pt: 3, pb: 2 }}>
            <Grid sx={{py: 2}} alignContent='center' justifyContent='center' container direction='column'>
                {carousel()}
                {navigate()}
            </Grid>
        </Container>
    )
}

export default Carosuel