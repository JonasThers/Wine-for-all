import React, { useContext } from 'react';
import { DisplayContext } from './DisplayContext';
import { Grid, Typography } from '@material-ui/core';

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
        <Grid className="navigation">
            {links.map((link, index) => {
                return (
                    <Typography
                        variant="h5"
                        key={index}
                        onClick={() => setDisplay(link.value)}
                    >
                        {link.name}
                    </Typography>
                );
            })}
        </Grid>
    )
}

export default Navigation;