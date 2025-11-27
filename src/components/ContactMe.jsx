import MouseCircle from "./MouseCircle"
import './ContactMe.css'
import uparrow from '../assets/up.svg'
import linkedin from '../assets/linkedin.svg'
import leetcode from '../assets/leetcode.svg'

function GradientButton({ text, hrefUri }) {
    return (
        <div className="gradientButton">
            <p>{text}</p>
        </div>
    )
}

function BackToTopToggle() {
    return (
        <a href="#">
            <div className="backToTop">
                <img src={uparrow} alt="" />
                <p>Back to Top</p>
            </div>
        </a>

    )
}

function FinalContacts({ yourName, linkedInURL, leetcodeURL }) {
    return (
        <div className="finalContacts">
            <p>© {new Date().getFullYear()} {yourName}</p>
            <div className="finalContactsLinks">
                <a href={linkedInURL} target="blank">
                    <img src={linkedin} alt="linkedIn" />
                </a>
                <a href={leetcodeURL} target="blank">
                    <img src={leetcode} alt="Leetcode" />
                </a>
            </div>
        </div>
    )
}

function ContactMe({ email }) {
    return (
        <section id="contactMe">
            <MouseCircle textcontent={`Lets work together.`}></MouseCircle>
            <p id="contactMeEmail">{email}</p>
            <a href={`mailto:${email}`} target="blank">
                <GradientButton text={"Contact Me"}></GradientButton>
            </a>
            <BackToTopToggle></BackToTopToggle>
            <FinalContacts yourName={"Elanchezhiyan E"} linkedInURL={"https://www.linkedin.com/in/elanchezhiyan2440/"}
            leetcodeURL={"https://leetcode.com/u/wraththevengeful/"}></FinalContacts>
        </section>
    )
}

export default ContactMe