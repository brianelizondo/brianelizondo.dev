import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

import Hero from './components/Hero';
import CustomNavbar from './components/Navbar';

const App: React.FC = () => {
    return (
    <Container fluid className="App">
        <Row className="justify-content-md-center">
            <Col xs={12} md={4}>
                <Hero />
                <CustomNavbar />
            </Col>
            <Col xs={1} md={1}></Col>
            <Col xs={12} md={6}>
            
            </Col>
        </Row>
    </Container>
  );
}

export default App;