import React from 'react';
import './FooterNavbar.css';
import { Container } from 'react-bootstrap';
import { LinkedinIcon, GithubIcon, TwitterIcon } from '../helpers/NavbarIcons';

const FooterNavbar: React.FC = () => {
    return (
    <Container className="FooterNavbar">
        <a href="https://www.linkedin.com/in/brian-elizondo" target="_blank" title="Brian Elizondo LinkedIn Profile" rel="noreferrer"><LinkedinIcon /></a>
        <a href="https://www.github.com/brianelizondo" target="_blank" title="Brian Elizondo GitHub profile" rel="noreferrer"><GithubIcon /></a>
        <a href="https://www.twitter.com/elchebrian" target="_blank" title="Brian Elizondo Twitter" rel="noreferrer"><TwitterIcon /></a>
    </Container>
  );
}

export default FooterNavbar;