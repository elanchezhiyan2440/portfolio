import { useState } from "react"
import reacticon from '../assets/techstack/react.svg'
import nodeicon from '../assets/techstack/nodejs.svg'
import expressicon from '../assets/techstack/express.svg'
import javaicon from '../assets/techstack/java.svg'
import cppicon from '../assets/techstack/cpp.svg'
import psqlicon from '../assets/techstack/psql.svg'
import htmlicon from '../assets/techstack/html.svg'
import cssicon from '../assets/techstack/css.svg'
import mongoicon from '../assets/techstack/mongo.svg'
import postman from '../assets/techstack/postman.svg'
import aws from '../assets/techstack/aws.svg'
import sqlite from '../assets/techstack/sqlite.svg'
import nodered from '../assets/techstack/nodered.svg'
import python from '../assets/techstack/python.svg'

import MouseCircle from "./MouseCircle"

import './TechStack.css'

function InfoBubble({ x, y, isVisible, infoText }) {
    return (
        <div
            className="customInfToolTip"
            style={{
                left: `${x}px`,
                top: `${y}px`,
                opacity: isVisible ? 1 : 0, // Hide when leaving the section
                transform: `translate(-50%, -85%) scale(${isVisible ? 1 : 0})`, // Optional pop effect
            }}
        >
            {infoText}
        </div>
    )
}

function SingleTechIcon({ techIcon, techName }) {
    const [toolTip, setToolTip] = useState({ x: 0, y: 0, isVisible: false, infoText: techName });

    const handleMouseMove = (e) => {
        setToolTip(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
    };

    const handleMouseEnter = () => {
        setToolTip(prev => ({ ...prev, isVisible: true }));
    };


    const handleMouseLeave = () => {
        setToolTip(prev => ({ ...prev, isVisible: false }));
    };

    return (
        <div className="singleTechIcon"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <InfoBubble
                x={toolTip.x}
                y={toolTip.y}
                isVisible={toolTip.isVisible}
                infoText={toolTip.infoText}
            />

            <img src={techIcon} alt={techName} />
        </div>
    )
}

function TechStack() {
    return (
        <section className="techStack">
            <SingleTechIcon techIcon={reacticon} techName={"ReactJS"}></SingleTechIcon>
            <SingleTechIcon techIcon={nodeicon} techName={"NodeJS"}></SingleTechIcon>
            <SingleTechIcon techIcon={expressicon} techName={"ExpressJS"}></SingleTechIcon>
            <SingleTechIcon techIcon={javaicon} techName={"Java"}></SingleTechIcon>
            <SingleTechIcon techIcon={cppicon} techName={"C++"}></SingleTechIcon>
            <SingleTechIcon techIcon={psqlicon} techName={"PostgreSQL"}></SingleTechIcon>
            <SingleTechIcon techIcon={htmlicon} techName={"HTML5"}></SingleTechIcon>
            <SingleTechIcon techIcon={cssicon} techName={"CSS3"}></SingleTechIcon>
            <SingleTechIcon techIcon={python} techName={"Python"}></SingleTechIcon>
            <SingleTechIcon techIcon={mongoicon} techName={"MongoDB"}></SingleTechIcon>
            <SingleTechIcon techIcon={postman} techName={"Postman"}></SingleTechIcon>
            <SingleTechIcon techIcon={aws} techName={"AWS"}></SingleTechIcon>
            <SingleTechIcon techIcon={sqlite} techName={"SQLite"}></SingleTechIcon>
            <SingleTechIcon techIcon={nodered} techName={"Node-Red"}></SingleTechIcon>
            <MouseCircle textcontent={"Using the latest technologies, I develop things like..."}
                customClassNames={"techStackText"}></MouseCircle>
        </section>
    )
}

export default TechStack