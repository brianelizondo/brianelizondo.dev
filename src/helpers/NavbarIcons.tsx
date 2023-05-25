import * as React from 'react';

interface SGVprops {
    viewBox: string,
    fill: string,
    height: string,
    width: string
}

const sgvProps: SGVprops = {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "1.65em",
    width: "1.65em"
}

const AboutIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
    <span className="CustomNavbarIcon">
        <svg
            viewBox={ sgvProps.viewBox }
            fill={ sgvProps.fill }
            height={ sgvProps.height }
            width={ sgvProps.width }
            {...props}
        >
            <path d="M12 12a5 5 0 110-10 5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6zm9 11a1 1 0 01-2 0v-2a3 3 0 00-3-3H8a3 3 0 00-3 3v2a1 1 0 01-2 0v-2a5 5 0 015-5h8a5 5 0 015 5v2z" />
        </svg>
    </span>
    );
}

const ExperienceIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
    <span className="CustomNavbarIcon">
        <svg
            viewBox={ sgvProps.viewBox }
            fill={ sgvProps.fill }
            height={ sgvProps.height }
            width={ sgvProps.width }
            {...props}
        >
            <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z" />
        </svg>
    </span>
    );
}

const SkillsIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
    <span className="CustomNavbarIcon">
        <svg
            viewBox={ sgvProps.viewBox }
            fill={ sgvProps.fill }
            height={ sgvProps.height }
            width={ sgvProps.width }
            {...props}
        >
            <path d="M20.59 12l-3.3-3.3a1 1 0 111.42-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 01-1.42 1.4l-4-4a1 1 0 010-1.4l4-4A1 1 0 016.7 8.7L3.4 12zm7.56 8.24a1 1 0 01-1.94-.48l4-16a1 1 0 111.94.48l-4 16z" />
        </svg>
    </span>
    );
}

const ProjectsIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
    <span className="CustomNavbarIcon">
        <svg
            viewBox={ sgvProps.viewBox }
            fill={ sgvProps.fill }
            height={ sgvProps.height }
            width={ sgvProps.width }
            {...props}
        >
            <path d="M2.5 18.5C2.5 20.43 4.07 22 6 22s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337v-3.488c.244.273.509.527.813.744 1.18.844 2.617 1.098 3.918 1.098.966 0 1.853-.14 2.506-.281a3.5 3.5 0 003.264 2.265c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5a3.5 3.5 0 00-3.404 2.718c-1.297.321-3.664.616-5.119-.426-.666-.477-1.09-1.239-1.306-2.236C8.755 7.96 9.5 6.821 9.5 5.5 9.5 3.57 7.93 2 6 2S2.5 3.57 2.5 5.5c0 1.58 1.06 2.903 2.5 3.337v6.326c-1.44.434-2.5 1.757-2.5 3.337zm15-8c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5S16 12.827 16 12s.673-1.5 1.5-1.5zm-10 8c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5S5.173 17 6 17s1.5.673 1.5 1.5zm-3-13C4.5 4.673 5.173 4 6 4s1.5.673 1.5 1.5S6.827 7 6 7s-1.5-.673-1.5-1.5z" />
        </svg>
    </span>
    );
}
const ContactIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
    <span className="CustomNavbarIcon">
        <svg
            viewBox={ sgvProps.viewBox }
            fill={ sgvProps.fill }
            height={ sgvProps.height }
            width={ sgvProps.width }
            {...props}
        >
            <path d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.233V16H4V4h16v12z" />
            <path d="M7 7h10v2H7zm0 4h7v2H7z" />
        </svg>
    </span>
    );
}

export { AboutIcon, ExperienceIcon, SkillsIcon, ProjectsIcon, ContactIcon };