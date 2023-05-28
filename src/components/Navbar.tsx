import React from 'react';
import './Navbar.css';
import { Container  } from 'react-bootstrap'; 
import { AboutIcon, ContactIcon, ExperienceIcon, ProjectsIcon, SkillsIcon } from '../helpers/NavbarIcons';

const CustomNavbar: React.FC = () => {
    const handleClick = (id: string) => {
        const sectionDiv = document.getElementById(id);
        if(sectionDiv) {
            sectionDiv.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
    <Container className="CustomNavbar">
        <div onClick={() => handleClick('about')} className="CustomNavbarItem mb-3"><AboutIcon />About</div>
        <div onClick={() => handleClick('skills')} className="CustomNavbarItem mb-3"><SkillsIcon />Skills</div>
        <div onClick={() => handleClick('projects')} className="CustomNavbarItem mb-3"><ProjectsIcon />Projects</div>
        <div onClick={() => handleClick('experience')} className="CustomNavbarItem mb-3"><ExperienceIcon />Experience</div>
        <div onClick={() => handleClick('contact')} className="CustomNavbarItem"><ContactIcon /> Contact</div>
    </Container>
    );
}

export default CustomNavbar;