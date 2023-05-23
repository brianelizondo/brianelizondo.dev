import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

import Hero from './components/Hero';

const App: React.FC = () => {
    return (
        <Container fluid>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={4}>
                    <Hero />
                </Col>
                <Col xs={1} md={1}></Col>
                <Col xs={12} md={6}>
                
                </Col>
            </Row>
            
            
            
            
        </Container>
  );
}

export default App;