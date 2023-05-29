import React from 'react';
import './Projects.css';
import { Container, Row } from 'react-bootstrap';
import { ProjectsIcon } from '../helpers/NavbarIcons';

import projects from '../helpers/ProjectsData';
import ProjectsCard from './ProjectsCard';

const Projects: React.FC = () => {
    let divInfoFloatAlign = "end";
    return (
    <Container id="projects" className="Projects">
        <Row className="ProjectsTitle">
            <h4><ProjectsIcon /> Some of My Projects</h4>
        </Row>
        <Row className="ProjectsContent">
            <div className="ProjectsText">Here are some of the personal and client projects I've created.</div>
            { projects.map((project, index) => {
                divInfoFloatAlign = divInfoFloatAlign === "start" ? "end" : "start";
                return (
                <div className="ProjectsCard" key={index}>
                    <ProjectsCard project={project} />
                </div>
                )
            })}
        </Row>
    </Container>
    );
}

export default Projects;