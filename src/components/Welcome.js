import React from 'react';
import { Typography, Button, Grid, Box } from '@material-ui/core';
import FadeIn from 'react-fade-in';

const Welcome = () => {
    return (
        <FadeIn>
            <Typography variant="h4">Welcome</Typography>
            <Typography variant="body1">What you're seeing is the new page for the Wine for All© workshops!</Typography>
            <Typography variant="body1">For information regarding future events, feel free to follow us on social media,
                or sign up for our newsletter.</Typography>
            <Grid>
                <Button variant="contained">
                    Facebook
                </Button>
                <Button variant="contained">
                    Link
                </Button>
            </Grid>
        </FadeIn>
    )
}

export default Welcome;