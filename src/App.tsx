import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loading from './components/Loading';
import consoleMessage from './helpers/ConsoleMessage';

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [isLoading]);

    if(isLoading){
        console.log(consoleMessage);
        return <Loading />;
    }

    return (
    <Container fluid className="App">
        <div className="AppBgEffect"></div>
        <Row className="justify-content-md-center">
            <Col xs={12} md={3}>
                <Hero />
            </Col>
            <Col xs={1} md={1}></Col>
            <Col xs={12} md={7}>
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </Col>
        </Row>
    </Container>
    )
}

export default App;