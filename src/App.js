import React from 'react';
import "./styles/styles.scss"
import { Container } from '@material-ui/core';
import Navigation from './components/Navigation';
const App = () => {
    return (
        <Container>
            Hello world
            <Navigation />
        </Container>
    )
}

export default App;