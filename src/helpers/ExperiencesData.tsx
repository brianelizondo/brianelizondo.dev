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
        position: "Fulfillment Center and Robotics Associate",
        description: "I work as a stower and also contribute to the Amazon Robotics team within the facility. As a stower, I receive and process products efficiently, ensuring precise storage and organization. Additionally, in the Amazon Robotics team, I operate and maintain robotic systems to facilitate the seamless flow of products throughout the center. I troubleshoot technical issues and collaborate with cross-functional teams to optimize the performance of the robotic systems. I actively contribute to enhancing the functionality and efficiency of the robotic systems. My focus is on maintaining a safe and efficient work environment, adhering to standard operating procedures, and ensuring customer satisfaction.",
        skills: ["Android", "Problem Solving", "Lead", "Robotics"]
    },
    {
        period: "JAN 2014 - JUL 2018",
        company: "MODO DesignWorks",
        position: "Lead Software Engineer",
        description: "As a Lead Software Engineer in a development company, I played a pivotal role in the success of projects. My main responsibility was to guide and oversee a team of engineers in creating high-quality software. I worked closely with stakeholders to understand project requirements and ensure the delivery of innovative and efficient solutions. Additionally, I ensured adherence to best software development practices, such as implementing testing and adopting agile methodologies. Through my leadership, I fostered a collaborative and motivating work environment that drove excellence and professional growth for each team member.",
        skills: ["PHP", "JavaScript", "Java", "Node.js" , "React", "MySQL", "PostgreSQL", "noSQL", "APIs", "Testing", "Debugging"]
    },
    {
        period: "OCT 2014 - JUL 2018",
        company: "MODO Store",
        position: "Senior Software Engineer",
        description: "I played a critical role in the development and continuous improvement of the system. My expertise allowed me to lead the design and implementation of key features, as well as optimize the performance and scalability of the platform. I collaborated closely with cross-functional teams, such as design and product, to ensure an exceptional user experience and meet business objectives. Additionally, I had an active role in solving complex technical issues and implementing efficient development practices, such as continuous integration and automated testing. As a senior engineer, I also shared my knowledge and mentored junior team members, fostering a learning environment and professional growth.",
        skills: ["PHP", "JavaScript", "jQuery", "AJAX", "Bootstrap", "MySQL", "APIs", "Front-End", "Back-End"]
    }
    ,
    {
        period: "OCT 2007 - OCT 2013",
        company: "Siragon",
        position: "Full Stack Web Developer",
        description: "I was involved in all stages of the software development life cycle. I specialized in both front-end and back-end development, utilizing a wide range of technologies and frameworks to build robust and scalable applications. I collaborated with cross-functional teams to understand business requirements and translated them into functional software solutions. Whether it was designing user interfaces, implementing database systems, or optimizing application performance, I strived to deliver high-quality code and exceptional user experiences. With a strong attention to detail and a passion for continuous learning, I stayed up-to-date with the latest industry trends and technologies to ensure the company remained at the forefront of innovation.",
        skills: ["PHP", "JavaScript", "jQuery", "AJAX", "Bootstrap", "HTML", "CSS", "MySQL", "UX"]
    }
]

export default experiences;