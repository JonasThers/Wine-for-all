import React from 'react';
import { Typography } from '@material-ui/core';
import FadeIn from 'react-fade-in';

const Welcome = () => {
    return (
        <FadeIn>
            <Typography variant="h4">Welcome</Typography>
            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate est nec maximus gravida. Cras ultricies eros lacus, at condimentum justo molestie vitae. Phasellus ac magna felis. In vehicula euismod leo non scelerisque. Ut at diam turpis. In sollicitudin, lectus in porttitor ullamcorper, augue lacus efficitur lacus, sed ultricies augue massa in est</Typography>
        </FadeIn>
    )
}

export default Welcome;