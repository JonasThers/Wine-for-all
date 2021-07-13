import React from 'react';
import { Typography, Button, Grid, Box } from '@material-ui/core';
import FadeIn from 'react-fade-in';

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
                    <Box component="i" marginRight=".5rem" className="fab fa-facebook" />
                </Button>
                <Button
                    variant="contained"
                    href="https://www.instagram.com/wineforall_aarhus/"
                >
                    Link
                </Button>
            </Grid>
        </FadeIn>
    )
}

export default Welcome;