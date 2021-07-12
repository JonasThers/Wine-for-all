import React, { useState, useMemo } from 'react';
import "./styles/styles.scss";
import { Container } from '@material-ui/core';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import About from './components/About';
import SignUp from './components/SignUp';
import Contact from './components/Contact';
import { DisplayContext } from "./components/DisplayContext";

const App = () => {
    const [display, setDisplay] = useState(1);

    const displayValue = useMemo(() => ({ display, setDisplay }));

    return (
        <Container maxWidth="sm">
            <DisplayContext.Provider value={displayValue}>
                {display === 1 && <Welcome />}
                {display === 2 && <About />}
                {display === 3 && <SignUp />}
                {display === 4 && <Contact />}
                <Navigation />
            </DisplayContext.Provider>
        </Container>
    )
}

export default App;