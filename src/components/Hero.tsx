import React from 'react';
import './Hero.css';
import { Container, Row } from 'react-bootstrap';

import CustomNavbar from './Navbar';

const Hero: React.FC = () => {
    return (
    <Container className="Hero position-sticky top-0 pt-5">
        <Row>
            <h1>Brian Elizondo</h1>
        </Row>
        <Row>
            <h3>Full-Stack Software Engineer</h3>
        </Row>
        <Row>
            <p>A passionate Full-Stack Software Engineer with love for solving any type of problem or idea in a creative and efficient way, always with the goal of obtaining better results than expected.</p>
        </Row>
        <Row>
            <CustomNavbar />
        </Row>
    </Container>
  );
}

export default Hero;