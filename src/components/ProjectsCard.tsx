import React from 'react';
import './ProjectsCard.css';
import { Container, Row, Col } from 'react-bootstrap';

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
    },
    align: string
}

const ProjectsCard: React.FC<ProjectCardProps> = ({ project, align }) => {
    return (
    <div className={`ProjectCardContent-${align}`}>
        <div className={`ProjectCardContentInfo text-${align}`}>
            <div>{ project.name }</div>
            <div>{ project.description }</div>
            <div>
                { project.skills.map((skill) => skill) }                
            </div>
            <div>
                { project.links.github && project.links.github }
                { project.links.website && project.links.website }
            </div>
        </div>
    </div>
  );
}

export default ProjectsCard;