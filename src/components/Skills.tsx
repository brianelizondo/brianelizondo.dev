import React from 'react';
import './Skills.css';

import { Container, Row, Col } from 'react-bootstrap';
import { SkillsIcon } from '../helpers/NavbarIcons';
import skills from "../helpers/SkillsData";

const Skills: React.FC = () => {
    return (
    <Container id="skills" className="Skills">
        <Row className="ExperienceTitle">
            <h4><SkillsIcon /> Technical Skills</h4>
        </Row>
        <Row className="SkillsContent">
            { skills.map((skill, index) => (<div key={index}>{skill}</div>)) }
        </Row>
    </Container>
  );
}

export default Skills;