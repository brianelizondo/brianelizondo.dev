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

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
    <span className="FooterNavbarIcon">
        <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
        </svg>
    </span>
    );
}
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
    <span className="FooterNavbarIcon">
        <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
        </svg>
    </span>
    );
}

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
    <span className="FooterNavbarIcon">
        <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0016 3.542a6.658 6.658 0 01-1.889.518 3.301 3.301 0 001.447-1.817 6.533 6.533 0 01-2.087.793A3.286 3.286 0 007.875 6.03a9.325 9.325 0 01-6.767-3.429 3.289 3.289 0 001.018 4.382A3.323 3.323 0 01.64 6.575v.045a3.288 3.288 0 002.632 3.218 3.203 3.203 0 01-.865.115 3.23 3.23 0 01-.614-.057 3.283 3.283 0 003.067 2.277A6.588 6.588 0 01.78 13.58a6.32 6.32 0 01-.78-.045A9.344 9.344 0 005.026 15z" />
        </svg>
    </span>
    );
}

const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
    <span className="FooterNavbarIcon">
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            {...props}
            >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M19.5 7A8.998 8.998 0 0012 3a8.991 8.991 0 00-7.484 4M11.5 3a16.989 16.989 0 00-1.826 4M12.5 3a16.989 16.989 0 011.828 4.004M19.5 17a8.998 8.998 0 01-7.5 4 8.991 8.991 0 01-7.484-4M11.5 21a16.989 16.989 0 01-1.826-4M12.5 21a16.989 16.989 0 001.828-4.004M2 10l1 4 1.5-4L6 14l1-4M17 10l1 4 1.5-4 1.5 4 1-4M9.5 10l1 4 1.5-4 1.5 4 1-4" />
        </svg>
    </span>
    );
}

export { 
    AboutIcon, 
    ExperienceIcon, 
    SkillsIcon, 
    ProjectsIcon, 
    ContactIcon,
    LinkedinIcon,
    GithubIcon,
    TwitterIcon,
    LinkIcon 
};