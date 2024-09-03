type SkillCategory = {
    [category: string]: string[];
};

const skills: SkillCategory = {
    "Programming Languages": [
        "JavaScript",
        "TypeScript",
        "Java",
        "Python",
        "PHP"
    ],
    "Frontend & Backend Technologies": [
        "Node.js",
        "Express.js",
        "React",
        "Flask",
        "Next.js",
        "HTML",
        "CSS",
        "SASS/SCSS",
        "Bootstrap"
    ],
    "Testing & QA": [
        "Unit Testing",
        "Integration Testing",
        "Test-Driven Development TDD",
        "Jest",
        "Jasmine",
        "Mocha",
        "React Testing Library",
        "Software Debugging"
    ],
    "Version Control Systems & CI/CD": [
        "Git",
        "GitHub",
        "GitHub Actions",
        "Docker",
        "Continuous Integration (CI)",
        "Continuous Delivery (CD)"
    ],
    "Web Development & APIs": [
        "CRUD APIs",
        "RESTful APIs",
        "Data Structures",
        "Algorithms",
        "Object Oriented Programming (OOP)"
    ],
    "Databases": [
        "SQL Databases",
        "MySQL",
        "PostgreSQL",
        "noSQL Databases",
        "MongoDB"
    ],
    "Libraries & Frameworks": [
        "Redux",
        "Redux ToolKit",
        "Axios",
        "Passport.js", 
        "JSON Web Token JWT", 
        "OAuth 2.0", 
        "Formik", 
        "Yup"
    ],
    "OS / Tools / Misc": [
        "Windows", 
        "Linux", 
        "macOS", 
        "Visual Studio Code",
        "Software Development Life Cycle (SDLC)"
    ]
}

export default skills;