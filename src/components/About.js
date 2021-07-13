import React from 'react';
import { Box, Typography } from '@material-ui/core';
import FadeIn from 'react-fade-in';

const About = () => {
    return (
        <FadeIn>
            <Box mb={2}>
                <Typography variant="h4">About</Typography>
            </Box>
            <Typography variant="body1">Wine for All© is an Aarhus-based wine tasting innitiative led by Luísa Teixeira, started in 2020.
                Our goal is to make the knowledge of wine available to the public at a reasonable price.
                The tastings will be hosted at the youth house of Aarhus (Ungdomskulturhuset), located in the center of Aarhus and great place to meet new people
            </Typography>
        </FadeIn>
    )
}

export default About;