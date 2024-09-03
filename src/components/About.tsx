import React from 'react';
import './About.css';
import { Container, Row } from 'react-bootstrap';

const About: React.FC = () => {
    return (
    <Container id="about" className="About">
        <Row className="AboutTitle">
            <h4>Hi, my name is</h4>
            <h1>Brian Elizondo</h1>
            <h2>I'm a Full-Stack Software Engineer</h2>
            <div className="AboutText">
                <p>I am a highly motivated Information Engineer with over 12 years of experience in developing websites, applications, payment gateways, and mobile applications. My expertise spans both Front-End and Back-End development, utilizing a wide variety of programming languages, frameworks, and libraries to create and enhance projects.</p>
                <p>My passion for programming drives me to solve problems creatively and efficiently, always aiming to exceed expectations. I thrive on tackling challenges and delivering outstanding results.</p> 
                <p>If you are looking for someone who is passionate about technology, creative, a problem solver, and possesses excellent interpersonal skills...<span>Hi, I'm Brian!</span></p>
            </div>
        </Row>
    </Container>
  );
}

export default About;