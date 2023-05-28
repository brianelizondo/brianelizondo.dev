import React from 'react';
import './Navbar.css';
import { Container  } from 'react-bootstrap'; 
import { AboutIcon, ContactIcon, ExperienceIcon, ProjectsIcon, SkillsIcon } from '../helpers/NavbarIcons';

const CustomNavbar: React.FC = () => {
    return (
    <Container className="CustomNavbar">
        <div className="CustomNavbarItem mb-3"><AboutIcon />About</div>
        <div className="CustomNavbarItem mb-3"><SkillsIcon />Skills</div>
        <div className="CustomNavbarItem mb-3"><ProjectsIcon />Projects</div>
        <div className="CustomNavbarItem mb-3"><ExperienceIcon />Experience</div>
        <div className="CustomNavbarItem"><ContactIcon /> Contact</div>
    </Container>
    );
}

export default CustomNavbar;