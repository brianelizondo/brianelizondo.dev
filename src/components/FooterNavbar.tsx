import React from 'react';
import './FooterNavbar.css';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkedinIcon, GithubIcon, TwitterIcon } from '../helpers/NavbarIcons';

const FooterNavbar: React.FC = () => {
    return (
    <Container className="FooterNavbar d-none d-sm-block d-sm-none d-md-block">
        <a href="https://www.linkedin.com/in/brian-elizondo" target="_blank" title="Brian Elizondo LinkedIn Profile"><LinkedinIcon /></a>
        <a href="https://www.github.com/brianelizondo" target="_blank" title="Brian Elizondo GitHub profile"><GithubIcon /></a>
        <a href="https://www.twitter/elchebrian" target="_blank" title="Brian Elizondo Twitter"><TwitterIcon /></a>
    </Container>
  );
}

export default FooterNavbar;