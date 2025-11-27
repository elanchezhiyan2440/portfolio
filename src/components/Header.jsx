import './Header.css'

function Header(){
    return(
        <header>
            <div className="line"></div>
            <div id='headerLinks'>
                <a href="#allProjects">Projects</a>
                <a href="#">Resume</a>
                <a href="#EducationSection">Education</a>
                <a href="#contactMe">Contact Me</a>
            </div>
            <div className="line"></div>
        </header>
    )
}

export default Header