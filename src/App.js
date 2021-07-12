import React from 'react';
import "./styles/styles.scss";
import { Container } from '@material-ui/core';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import About from './components/About';
import SignUp from './components/SignUp';
import Contact from './components/Contact';

const App = () => {
    return (
        <Container>
            <Welcome />
            <About />
            <SignUp />
            <Contact />
            <Navigation />
        </Container>
    )
}

export default App;