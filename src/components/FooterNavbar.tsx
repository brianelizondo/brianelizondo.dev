import React from 'react';
import './FooterNavbar.css';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkedinIcon, GithubIcon, TwitterIcon } from '../helpers/NavbarIcons';


const FooterNavbar: React.FC = () => {
    return (
    <Container className="FooterNavbar">
        <Row>
            <Col xs={12} md={12}>
                <LinkedinIcon />
                <GithubIcon />
                <TwitterIcon />
            </Col>
        </Row>
    </Container>
  );
}

export default FooterNavbar;