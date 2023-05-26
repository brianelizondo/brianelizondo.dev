import React from 'react';
import './ExperienceCard.css';
import { Container, Row, Col } from 'react-bootstrap';

interface ExperienceCardProps {
    experience: {
        id: number,
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
                <div>{experience.period}</div>
            </Col>
            <Col xs={12} md={9}>
                <div>{ experience.position }</div>
                <div>{ experience.company }</div>
                <div>{ experience.description }</div>
                <div>
                    { experience.skills.map((skill) => skill) }                
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default ExperienceCard;