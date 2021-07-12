import React from 'react';
import { Box } from '@material-ui/core';

const Navigation = () => {

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
        <Box>
            {links.map((link, index) => {
                return (
                    <Box key={index}>
                        {link.name}
                    </Box>
                );
            })}
        </Box>
    )
}

export default Navigation;