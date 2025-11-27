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
        "builds GenAI applications.",
        "works for a better future."
    ];

    const baseText = <>I am Elanchezhiyan E,<br /> a <span className="redText">developer</span> who</>;

    const [isWriting, changeIsWriting] = useState(true);

    const [currText, changeCurrText] = useState("");

    const [mainIndex, changeMainIndex] = useState(0);

    const [subIndex, changeSubIndex] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {

            if (isWriting) {
                changeCurrText(textsToConcat[mainIndex].substring(0, subIndex));
                changeSubIndex((prev) => prev + 1);

                if (currText.length == textsToConcat[mainIndex].length) {
                    changeIsWriting(false);
                }
            }

            if (!isWriting) {
                changeSubIndex((prev) => prev - 1);
                changeCurrText(textsToConcat[mainIndex].substring(0, subIndex));
                if (subIndex == 0) {
                    changeIsWriting(true);
                    changeMainIndex((prev) => {
                        if(prev < textsToConcat.length-1){
                            return prev+1;
                        } else {
                            return 0;
                        }
                    });
                }
            }

        }, 150);
        return () => clearInterval(intervalId);
    }, [subIndex, mainIndex, currText]);


    return (
        <MouseCircle
            textcontent={
                <>{baseText} <span className="redText">{currText}</span> <span className="blinkingCursor">|</span></>
            }
            customClassNames={"dynamicAboutSection"}
            animateOnScroll={true}
        ></MouseCircle>
    )
}

export default DynamicAbout