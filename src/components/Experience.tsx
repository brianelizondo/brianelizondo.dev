import React from 'react';
import './Experience.css';

import { Container, Row, Col } from 'react-bootstrap';
import { ExperienceIcon } from '../helpers/NavbarIcons';
import experiences from '../helpers/ExperiencesData';
import ExperienceCard from './ExperienceCard';


const Experience: React.FC = () => {
    return (
    <Container id="experience" className="Experience">
        <Row className="ExperienceTitle">
            <h4><ExperienceIcon /> Professional Experience</h4>
        </Row>
        <Row className="ExperienceContent">
            { experiences.map((experience, index) => (
            <div key={index} className="ExperienceCard">
                <ExperienceCard experience={experience} />
            </div>
            )) }
        </Row>
    </Container>
  );
}

export default Experience;