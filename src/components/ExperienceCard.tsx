import React from 'react';
import './ExperienceCard.css';
import { Container, Row, Col } from 'react-bootstrap';

interface ExperienceCardProps {
    experience: {
        period: string,
        company: string,
        position: string,
        description: string,
        skills: string[]
    };
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
    <Container>
        <Row>
            <Col xs={12} md={3}>
                <div className="ExperienceCard-period">{experience.period}</div>
            </Col>
            <Col xs={12} md={9}>
                <div className="ExperienceCard-position">{ experience.position }</div>
                <div className="ExperienceCard-company">{ experience.company }</div>
                <div className="ExperienceCard-description">{ experience.description }</div>
                <div className="ExperienceCard-skills">
                    { experience.skills.map((skill, index) => <div key={index} className="ExperienceCard-skills-item">{ skill }</div>) }                
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default ExperienceCard;