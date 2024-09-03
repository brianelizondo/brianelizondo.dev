interface Experience {
    period: string,
    company: string,
    position: string,
    description: string,
    skills: string[]
}

const experiences: Experience[] = [
    {
        period: "SEP 2019 - Present",
        company: "Amazon",
        position: "Fulfillment Center Robotics Associate",
        description: "As a Fulfillment Center Robotics Associate, I oversaw and improved the performance of robotic systems in a warehouse setting, enhancing overall workflow efficiency. I troubleshooted issues related to automation to maintain the operation of robotic systems and addressed complex challenges, implementing improvements and integrating robotic systems into the broader warehouse infrastructure in coordination with various departments. I executed intricate examinations of all operational facets to discern and rectify process bottlenecks within the system, offering recommendations that resulted in an 18% improvement in efficiency over six months. Additionally, I ensured precision throughout order fulfillment, maintaining an order accuracy rate exceeding 99% in a fast-paced center.",
        skills: ["Android", "Problem Solving", "Lead", "Robotics"]
    },
    {
        period: "JAN 2014 - MAR 2018",
        company: "MODO DesignWorks",
        position: "Senior Software Engineer",
        description: "As a Senior Software Engineer, I guided an agile team of 5 developers and designers in creating customer-facing web and mobile applications tailored to meet the needs of over 100K active users. By implementing CI/CD pipelines, optimizing code review processes, and integrating automated testing best practices, I enhanced software quality and decreased production defects by 40%. I collaborated with a cross-functional team to redesign the flagship web app, resulting in a 22% surge in customer engagement. I tracked the timely delivery of features, met service level agreements, and maintained productive relationships with 3 strategic enterprise clients. Additionally, I mentored 2 junior team members in JavaScript, React.js, Node.js, REST APIs, unit testing, and web accessibility standards, achieving over a 60% increase in their self-assessed capabilities.",
        skills: ["PHP", "JavaScript", "Java", "Node.js", "React", "MySQL", "PostgreSQL", "noSQL", "APIs", "Testing", "Debugging"]
    },
    {
        period: "OCT 2014 - MAR 2018",
        company: "MODO Store",
        position: "Software Engineer",
        description: "As a Software Engineer, I achieved a 35% upswing in mobile conversion rates within 6 months of launch by conceptualizing a responsive mobile-first UI. I created a secure environment for credit card payments by deploying payment pathways integration as per PCI standards. By optimizing caching and fine-tuning performance, I elevated SEO and user experience, resulting in a 52% reduction in page load times. I fortified the reliability and performance of the infrastructure by establishing automated testing suites and monitoring solutions, contributing to high availability, system resiliency, and efficient issue recovery. Leading a team of 4 developers, I directed the creation, launch, and expansion of a React/Node/PostgreSQL e-commerce platform, processing over 300 monthly sales with an uptime of 99,95%.",
        skills: ["PHP", "JavaScript", "React", "Node.js","jQuery", "AJAX", "Bootstrap", "MySQL", "APIs", "Front-End", "Back-End"]
    }
    ,
    {
        period: "OCT 2007 - OCT 2013",
        company: "Siragon",
        position: "Full-Stack Web Developer",
        description: "As a Full-Stack Web Developer, I led the phased and incremental migration of a legacy PHP monolith to a decoupled microservices architecture, resulting in a 35% reduction in application downtime. I enhanced the team's delivery velocity twofold by implementing CI/CD pipelines, optimizing the code review process, and introducing automated testing. My efforts to improve front-end performance with caching, minification, and compression methodologies led to a 65% decrease in load times. I provided guidance to 2 junior developers on web standards, security, and best practices, facilitating their onboarding and accelerating their skill development. Managing a user base of over 25K monthly users, I led a team of three developers in the creation of public-facing web applications, utilizing jQuery for the front-end and PHP/MySQL for the Back-End architecture.",
        skills: ["PHP", "JavaScript", "jQuery", "AJAX", "Bootstrap", "HTML", "CSS", "MySQL", "UX"]
    }
]

export default experiences;