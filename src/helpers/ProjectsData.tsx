interface Project {
    name: string,
    description: string,
    skills: string[],
    image: string,
    links: {
        github: string | false,
        website: string | false
    }
}

const projects: Project[] = [
    {
        name: "brianelizondo.dev (v1)",
        description: "I developed my own portfolio website as a Full-Stack Software Engineer. It showcases my projects and skills using some top technologies. It's interactive, responsive, and visually impactful, reflecting my passion for software development and ability to create innovative solutions.",
        skills: ["TypeScript", "JavaScript", "React", "CSS Animations", "CSS Transitions"],
        image: "brianelizondo_v1.png",
        links: {
            github: "https://www.github.com/brianelizondo/my-portfolio-v1",
            website: "https://www.brianelizondo.dev"
        }
    },
    {
        name: "AI-Connectify",
        description: "Beta JavaScript library for connecting to various AI services at the same time, including Tensor Flow Node, ChatGPT and DALL-E. With AI-Connectify, you can easily access to AI services to perform a variety of tasks, including natural language processing, image processing, and more.",
        skills: ["TypeScript", "JavaScript", "Node.js", "TensorFlow", "OpenAI", "ChatGPT", "DALL-E"],
        image: "ai_connectify.png",
        links: {
            github: "https://github.com/brianelizondo/ai-connectify",
            website: "https://www.npmjs.com/package/ai-connectify"
        }
    },
    {
        name: "Quiniela 2022 Capstone Project",
        description: "The project is a web page that is in charge of registering the people who are going to participate in a kind of 'guessing game' in which they must register and predict the results of the soccer matches that will take place in the next World Cup Qatar 2022.",
        skills: ["JavaScript", "Node.js", "React", "PostgreSQL", "Redux", "Bootstrap", "JWT", "Heroku", "APIs", "Front-End", "Back-End"],
        image: "quinielas_2022.png",
        links: {
            github: "https://www.github.com/brianelizondo/capstone-project-quiniela-2022",
            website: false
        }
    },
    {
        name: "Jobly",
        description: "This application is a job application dashboard, it will have component hierarchy, functional database, API helper, routing, jobs page, authentication, user profile, ongoing applications and was deployed using Heroku.",
        skills: ["JavaScript", "Node.js", "React", "PostgreSQL", "JWT", "Heroku", "APIs", "Front-End", "Back-End"],
        image: "jobly.png",
        links: {
            github: "https://www.github.com/brianelizondo/react-jobly",
            website: false
        }
    },
    {
        name: "MODO DesignWorks",
        description: "Website for an agency specialized in digital agency in Web Design and Development, Graphic Design, Mobile Application Development, Branding, Social Media and SEO.",
        skills: ["JavaScript", "HTML", "CSS3", "Bootstrap"],
        image: "modo_designworks.png",
        links: {
            github: false,
            website: "https://www.mmodo-store.com/designworks"
        }
    }
]

export default projects;