import MouseCircle from "./MouseCircle"
import './DynamicAbout.css'
import { useEffect, useState } from "react";

function DynamicAbout() {
    const textsToConcat = [
        "is now struggling with this code!",
        "programs Web apps.",
        "trains cutting edge ML models.",
        "builds Android Apps.",
        "contributes to Open Source.",
        "programs Java Apps.",
        "builds backend infrastructures.",
        "builds GenAI applications.",
        "works for a better future."
    ];

    const baseText = <>I am Elanchezhiyan E, a <span className="redText">developer</span> who</>;

    const [isWriting, changeIsWriting] = useState(true);

    const [currText, changeCurrText] = useState(null);

    const [mainIndex, changeMainIndex] = useState(0);

    const [subIndex, changeSubIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {

        }, 500);
        return clearInterval(intervalId);
    }, []);


    return (
        <MouseCircle
            textcontent={
                <>{baseText} <span className="redText">{currText}</span></>
            }
            customClassNames={"dynamicAboutSection"}
        ></MouseCircle>
    )
}

export default DynamicAbout