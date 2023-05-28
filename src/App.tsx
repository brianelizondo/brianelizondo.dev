import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
    return (
    <Container fluid className="App">
        <div className="AppBgEffect"></div>
        <Row className="justify-content-md-center">
            <Col xs={12} md={4}>
                <Hero />
            </Col>
            <Col xs={1} md={1}></Col>
            <Col xs={12} md={6}>
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </Col>
        </Row>
    </Container>
  );
}

export default App;