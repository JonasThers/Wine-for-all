import React from 'react';
import { Box,  Typography } from '@material-ui/core';
import FadeIn from 'react-fade-in';

const SignUp = () => {
    return (
        <FadeIn>
            <Typography variant="h4">Sign up</Typography>
            <Typography variant="body1">We appreciate you taking interest in learning about the world of wines.</Typography>
            <Typography variant="body1">Your door to knowledge and community is just a small sign-up away!</Typography>
        </FadeIn>
    )
}

export default SignUp;