import React, { useContext } from 'react';
import { DisplayContext } from './DisplayContext';
import { Grid, Box } from '@material-ui/core';

const Navigation = () => {

    const { setDisplay } = useContext(DisplayContext);

    const links = [
        {
            name: 'Welcome',
            value: 1
        },
        {
            name: 'About',
            value: 2
        },
        {
            name: 'Sign up',
            value: 3
        },
        {
            name: 'Contact',
            value: 4
        }
    ];

    return (
        <Grid>
            {links.map((link, index) => {
                return (
                    <Box
                        key={index}
                        onClick={() => setDisplay(link.value)}
                    >
                        {link.name}
                    </Box>
                );
            })}
        </Grid>
    )
}

export default Navigation;