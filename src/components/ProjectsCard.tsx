import React from 'react';
import './ProjectsCard.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { GithubIcon, LinkIcon } from '../helpers/NavbarIcons';

interface ProjectCardProps {
    project: {
        name: string,
        description: string,
        skills: string[],
        image: string,
        links: {
            github: string | false,
            website: string |false
        }
    }
}

const ProjectsCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
    <Container>
        <Row>
            <Col xs={12} md={6}>
                <Image src={ `./images/${ project.image }` } alt={ project.name } fluid />
            </Col>
            <Col xs={12} md={6}>
                <div >
                    <div >
                        <div className="ProjectCardContentInfo-name">{ project.name }</div>
                        <div className="ProjectCardContentInfo-description">{ project.description }</div>
                        <div className="ProjectCardContentInfo-links">
                            { project.links.github && <a href={project.links.github} target="_blank" title={ `GitHub - ${project.name}` }><GithubIcon /></a> }
                            { project.links.website && <a href={project.links.website} target="_blank" title={ project.name }><LinkIcon /></a> }
                        </div>
                        <div className="ProjectCardContentInfo-skills">
                            { project.skills.map((skill, index) => <div key={index} className={`ProjectCardContentInfo-skills-item float-start`}>{ skill }</div>) }                
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default ProjectsCard;