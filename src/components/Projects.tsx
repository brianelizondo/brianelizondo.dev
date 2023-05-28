import React from 'react';
import './Projects.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ProjectsIcon } from '../helpers/NavbarIcons';

import projects from '../helpers/ProjectsData';
import ProjectsCard from './ProjectsCard';

const Projects: React.FC = () => {
    let divInfoFloatAlign = "start";
    return (
    <Container id="project" className="Projects">
        <Row className="ProjectsTitle">
            <h4><ProjectsIcon /> Some of My Projects</h4>
        </Row>
        <Row className="ProjectsContent">
            <Col xs={12} md={12}>
                <div className="ProjectsText">Here are some of the personal and client projects I've created.</div>
                { projects.map((project, index) => {
                    divInfoFloatAlign = divInfoFloatAlign === "start" ? "end" : "start";
                    return (
                        <Row key={index}>
                            <ProjectsCard project={project} align={divInfoFloatAlign} />
                        </Row>
                    )
                })}
            </Col>
        </Row>
    </Container>
    );
}

export default Projects;