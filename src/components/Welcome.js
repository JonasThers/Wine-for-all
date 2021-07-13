import React from 'react';
import { Typography, Button, Grid, Box } from '@material-ui/core';
import FadeIn from 'react-fade-in';
import { FaFacebookF } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si'

const Welcome = () => {
    return (
        <FadeIn>
            <Box mb={2}>
                <Typography variant="h4">Welcome</Typography>
            </Box>
            <Box mb={2}>
                <Typography variant="body1">What you're seeing is the new page for the Wine for All© workshops!</Typography>
                <Typography variant="body1">For information regarding future events, feel free to follow us on social media,
                    or sign up for our newsletter.</Typography>
            </Box>
            <Grid>
                <Button
                    variant="contained"
                    color="primary"
                    href="https://www.facebook.com/wineforallaarhus"
                >
                    <FaFacebookF />
                </Button>
                <Button
                    variant="contained"
                    href="https://www.instagram.com/wineforall_aarhus/"
                    className="ig"
                >
                    <SiInstagram />
                </Button>
            </Grid>
        </FadeIn>
    )
}

export default Welcome;