import React from 'react';
import './Contact.css';
import { Container, Row } from 'react-bootstrap';
import { ContactIcon } from '../helpers/NavbarIcons';

const Contact: React.FC = () => {
    const handleEmailClick = () => {
        window.location.href = "mailto:me@brianelizondo.dev";
    };
    
    return (
    <Container id="contact" className="Contact">
        <Row className="ContactTitle">
            <h4><ContactIcon /> Get In Contact</h4>
        </Row>
        <Row className="ContactContent">
            <div className="ContactText">
                <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
                <p>I am currently open to new opportunities!</p>
            </div>
            <div className="ContactButton" onClick={handleEmailClick}>Say Hello</div>
        </Row>
    </Container>
  );
}

export default Contact; 