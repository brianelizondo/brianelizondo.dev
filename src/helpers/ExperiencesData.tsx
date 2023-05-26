interface Experience {
    id: number,
    period: string,
    company: string,
    position: string,
    description: string,
    skills: string[]
}

const experiences: Experience[] = [
    {
        id: 1,
        period: "SEP 2019 - Present",
        company: "Amazon",
        position: "Fulfillment Center and Robotics Associate",
        description: "I am an associate of a Fulfillment Center responsible for carrying out various tasks related to the reception and storage of products.",
        skills: ["Android", "Problem Solving", "Lead", "Robotics"]
    },
    {
        id: 2,
        period: "JAN 2014 - JUL 2018",
        company: "MODO DesignWorks",
        position: "Lead Software Engineer",
        description: "I am an associate of a Fulfillment Center responsible for carrying out various tasks related to the reception and storage of products.",
        skills: ["PHP", "JavaScript", "Java", "Node.js" , "React", "MySQL", "PostgreSQL", "noSQL", "APIs", "Testing", "Debugging"]
    },
    {
        id: 3,
        period: "OCT 2014 - JUL 2018",
        company: "MODO Store",
        position: "Senior Software Engineer",
        description: "I am an associate of a Fulfillment Center responsible for carrying out various tasks related to the reception and storage of products.",
        skills: ["PHP", "JavaScript", "jQuery", "AJAX", "Bootstrap", "MySQL", "APIs", "Front-End", "Back-End"]
    }
    ,
    {
        id: 4,
        period: "OCT 2007 - OCT 2013",
        company: "Siragon",
        position: "Full Stack Web Developer",
        description: "I am an associate of a Fulfillment Center responsible for carrying out various tasks related to the reception and storage of products.",
        skills: ["PHP", "JavaScript", "jQuery", "AJAX", "Bootstrap", "HTML", "CSS", "MySQL", "UX"]
    }
]

export default experiences;