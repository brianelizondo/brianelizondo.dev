import React from 'react';
import './Contact.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ContactIcon } from '../helpers/NavbarIcons';


const Contact: React.FC = () => {
    return (
    <Container id="contact" className="Contact">
        <Row className="ContactTitle">
            <h4><ContactIcon /> Get In Contact</h4>
        </Row>
        <Row className="ContactContent">
            <Col xs={12} md={12}>
                <div className="ContactText">
                    <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
                    <p>I am currently open to new opportunities!</p>
                </div>
                <div className="ContactButton"><a href="mailto:me@brianelizondo.dev">Say Hello</a></div>
            </Col>
        </Row>
    </Container>
  );
}

export default Contact;