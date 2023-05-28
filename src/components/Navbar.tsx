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
        <div className="CustomNavbarMobile d-block d-sm-block d-md-none">
            <div onClick={() => handleClick('about')} className="CustomNavbarItem"><AboutIcon /></div>
            <div onClick={() => handleClick('skills')} className="CustomNavbarItem"><SkillsIcon /></div>
            <div onClick={() => handleClick('projects')} className="CustomNavbarItem"><ProjectsIcon /></div>
            <div onClick={() => handleClick('experience')} className="CustomNavbarItem"><ExperienceIcon /></div>
            <div onClick={() => handleClick('contact')} className="CustomNavbarItem"><ContactIcon /> </div>
        </div>
        <div className="d-none d-sm-none d-md-block">
            <div onClick={() => handleClick('about')} className="CustomNavbarItem"><AboutIcon />About</div>
            <div onClick={() => handleClick('skills')} className="CustomNavbarItem"><SkillsIcon />Skills</div>
            <div onClick={() => handleClick('projects')} className="CustomNavbarItem"><ProjectsIcon />Projects</div>
            <div onClick={() => handleClick('experience')} className="CustomNavbarItem"><ExperienceIcon />Experience</div>
            <div onClick={() => handleClick('contact')} className="CustomNavbarItem"><ContactIcon /> Contact</div>
        </div>
    </Container>
    );
}

export default CustomNavbar;