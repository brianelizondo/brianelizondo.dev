import React from 'react';
import './Skills.css';

import { Container, Row } from 'react-bootstrap';
import { SkillsIcon } from '../helpers/NavbarIcons';
import skills from '../helpers/SkillsData';

const Skills: React.FC = () => {
    return (
    <Container id="skills" className="Skills">
        <Row className="SkillsTitle">
            <h4><SkillsIcon /> Technical Skills</h4>
        </Row>
        <Row className="SkillsContent">
            <div className="SkillsText">
                <p>In my spare time I continue developing projects for myself or for clients. I've been working on a side project (AI-Connectify) that allows developers to work with multiple AI services at the same time using a single library.</p>
                <p>Here are some technologies I've been working with recently and before:</p>
            </div>
        </Row>
        <Row className="SkillsTags">
            { Object.entries(skills).map((([skillCategory, skills], index) => (
                <div className="SkillsTagsCategory" key={index}>
                    <h6>{skillCategory}</h6>
                    {skills.map((skill, idx) => (<div key={idx} className="SkillsTags-item">{skill}</div>))}
                </div>
            )))}
        </Row>
    </Container>
  );
}

export default Skills;