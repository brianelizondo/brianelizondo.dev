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
                <p>I am a highly motivated Information Engineer, specializing in developing websites and applications. With over 12 years of experience designing and developing software, front-end and back-end, payment gateways, and mobile applications, I have worked with a wide variety of programming languages, frameworks and libraries to create and improve projects under development.</p>
                <p>My passion for programming has allowed me to develop skills to solve any type of problem in a creative and efficient way, always with the goal of obtaining better results than expected.</p> 
                <p>If you are looking for someone who is passionate about technology, creative, a problem solver, and has excellent interpersonal skills...<span>Hi, I'm Brian!</span></p>
            </div>
        </Row>
    </Container>
  );
}

export default About;