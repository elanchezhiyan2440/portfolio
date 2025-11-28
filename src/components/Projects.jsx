import { useEffect, useRef, useState } from "react";
import './Projects.css'
import webicon from '../assets/web.svg'
import github from '../assets/github.svg'

function ProjectTile({ projectName, projectDesc, projectGithubLink, projectDemoLink, isDemoAvailable }) {
    const myRef = useRef(null);

    const [isScrolledIntoView, setIsScrolledIntoView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];

            setIsScrolledIntoView(entry.isIntersecting);

        }, { threshold: 0.1 });

        const currentRef = myRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
            observer.disconnect();
        };

    }, []);

    return (
        <article className={`projectTile ${isScrolledIntoView ? "pop-up-visible-project" : "pop-up-hidden-project"}`} ref={myRef}>
            <h1>{projectName}</h1>
            <div className="projectTileLine"></div>
            <p className="projectTileDesc">{projectDesc}</p>
            <div className="projectButtons">
                <a href={projectGithubLink}>
                    <div className="projectTileButton">
                        <img src={github} alt="Go to the code repo" />
                        <p>Github</p>
                    </div>
                </a>
                <a href={projectDemoLink} className={!isDemoAvailable ? "disabledButton" : "enabledButton"}>
                    <div className="projectTileButton">
                        <img src={webicon} alt="Visit the web" />
                        <p>Demo</p>
                    </div>
                </a>
            </div>
        </article>
    )
};

function MoreProjectsText({ githubUrl }) {
    return (
        <div className="moreProjectsTextDiv">
            <p>For more projects checkout my <a href={githubUrl} className="moreProjectsTextUrl">github</a>.</p>
        </div>
    )
}

function Projects() {
    return (
        <>
            <div id="allProjects">
                <ProjectTile
                    projectName={"Predictive Maintenance of PV Panels using GRU and IoT"}
                    projectDesc={"Developed an advanced Photovoltaic maintenace system combining Deep Learning and IoT for tracking environmental impacts on panel performance to automate schedule optimization for MCA final year thesis."}
                    projectGithubLink={"https://github.com/wraththevengeful/finaldraft-ss.git"}
                    projectDemoLink={"#"}
                    isDemoAvaialble={false}
                ></ProjectTile>
                <ProjectTile
                    projectName={"test project"}
                    projectDesc={"A robust application powered by literal bullshit styled with more BS and a bunch of pain."}
                    projectGithubLink={"#"}
                    projectDemoLink={"#"}
                    isDemoAvaialble={false}
                ></ProjectTile>
                <ProjectTile
                    projectName={"Test project to check if overflow works"}
                    projectDesc={"A robust application powered by literal bullshit styled with more BS and a bunch of pain."}
                    projectGithubLink={"#"}
                    projectDemoLink={"#"}
                    isDemoAvaialble={false}
                ></ProjectTile>
                <ProjectTile
                    projectName={"test project"}
                    projectDesc={"A robust application powered by literal bullshit styled with more BS and a bunch of pain."}
                    projectGithubLink={"#"}
                    projectDemoLink={"#"}
                    isDemoAvaialble={false}
                ></ProjectTile>
                <ProjectTile
                    projectName={"test project"}
                    projectDesc={"A robust application powered by literal bullshit styled with more BS and a bunch of pain."}
                    projectGithubLink={"#"}
                    projectDemoLink={"#"}
                    isDemoAvaialble={false}
                ></ProjectTile>
                <ProjectTile
                    projectName={"test project"}
                    projectDesc={"A robust application powered by literal bullshit styled with more BS and a bunch of pain."}
                    projectGithubLink={"#"}
                    projectDemoLink={"#"}
                    isDemoAvaialble={false}
                ></ProjectTile>
            </div>
            <MoreProjectsText githubUrl={"#"}></MoreProjectsText>
        </>
    )
}

export default Projects