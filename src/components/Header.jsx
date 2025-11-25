import './Header.css'

function Header(){
    return(
        <header>
            <div className="line"></div>
            <div id='headerLinks'>
                <a href="#">Projects</a>
                <a href="#">Resume</a>
                <a href="#">Education</a>
                <a href="#">Contact Me</a>
            </div>
            <div className="line"></div>
        </header>
    )
}

export default Header