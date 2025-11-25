import './Intro.css'

function Intro({portfolioIntroName, portfolioIntroQualifications, portfolioIntroDesc}){
    return(
        <section id="portfolioIntro">
            <h1 id="portfolioIntroName">{portfolioIntroName}</h1>
            <h2 id="portfolioIntroQualifications">{portfolioIntroQualifications}</h2>
            <h3 id="portfolioIntroDesc">{portfolioIntroDesc}</h3>
            <h2></h2>
        </section>
    )
}

export default Intro