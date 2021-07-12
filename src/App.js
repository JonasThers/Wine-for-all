import React, { useState, useMemo } from 'react';
import "./styles/styles.scss";
import { Container, Box } from '@material-ui/core';
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
        <DisplayContext.Provider value={displayValue}>
            <Navigation />
            <Container maxWidth="sm">
                <Box className="content">
                    {display === 1 && <Welcome />}
                    {display === 2 && <About />}
                    {display === 3 && <SignUp />}
                    {display === 4 && <Contact />}
                </Box>
            </Container>
        </DisplayContext.Provider>
    )
}

export default App;