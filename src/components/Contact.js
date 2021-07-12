import React from 'react';
import { Box, Typography } from '@material-ui/core';
import FadeIn from 'react-fade-in';

const Contact = () => {
    return (
        <FadeIn>
            <Typography variant="h4">Contact</Typography>
            <Typography variant="body1">For enquiries, booking and additional questions
                feel free to contact us at:</Typography>
            <Typography variant="body1">wineforall.aarhus@gmail.com</Typography>
        </FadeIn>
    )
}

export default Contact;