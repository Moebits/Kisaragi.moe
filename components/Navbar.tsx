import React, {useEffect, useState} from "react"
import {HashLink as Link} from "react-router-hash-link"
import "../styles/navbar.less"
import kisaragiChibi from "../assets/images/kisaragichibi.png"
import hamburger from "../assets/icons/hamburger.png"
import $ from "jquery"

const Navbar: React.FunctionComponent = (props) => {
    const [featureDropdown, setFeatureDropdown] = useState(false)
    const [doubleLeave, setDoubleLeave] = useState(false)
    const [mobileNavbar, setMobileNavbar] = useState(false)

    let mobileNav: React.RefObject<HTMLDivElement>

    const toggleMobileNavbar = () => {
        setMobileNavbar((prev) => !prev)
    }

    const slide = () => {
        $(".mobile-navbar").slideToggle()
    }

    const toggleDropdown = (enable?: boolean) => {
        if (enable === true) {
            setFeatureDropdown(true)
        } else if (enable === false) {
            setFeatureDropdown(false)
        } else {
            setFeatureDropdown((prev) => !prev)
        }
    }

    const dropdown = () => {
        return (
            <div className="dropdown" onMouseLeave={() => toggleDropdown(false)}>
                    <ul>
                        <li><Link to="/home#anime">Anime</Link></li>
                        <li><Link to="/home#music">Music</Link></li>
                        <li><Link to="/home#utility">Utility</Link></li>
                        <li><Link to="/home#games">Games</Link></li>
                        <li><Link to="/home#website">Website</Link></li>
                    </ul>
            </div>
        )
    }

    const mobileNavbarJSX = () => {
        return (
            <div className="mobile-navbar">
                    <ul>
                        <li><Link to="/" className="navbar-mobile-text">Kisaragi</Link></li>
                        <li><Link to="/home#features" className="navbar-mobile-text">Features</Link></li>
                        <li><Link to="/commands" className="navbar-mobile-text">Commands</Link></li>
                        <li><Link to="/about" className="navbar-mobile-text">About</Link></li>
                        <li><a href="https://discord.com/oauth2/authorize?client_id=593838271650332672&scope=bot&permissions=543279148279" className="navbar-mobile-text" target="_blank">Invite</a></li>
                        <li><a href="https://discord.gg/77yGmWM" className="navbar-mobile-text" target="_blank">Discord</a></li>
                        <li><a href="https://github.com/Moebits/Kisaragi" className="navbar-mobile-text" target="_blank">Github</a></li>
                    </ul>
            </div>
        )
    }
    
    return (
        <div className="nav-fixed">
            <nav className="navbar">
                <div className="nav-left">
                    <Link to="/"><img src={kisaragiChibi} alt="Kisaragi Chibi" height="56" width="58" className="kisaragichibi no-ios-preview"/></Link>
                    <ul className="nav-ul">
                        <li className="nav-li" onMouseEnter={() => toggleDropdown(false)}><Link to="/" className="navbar-text drop-hide">Kisaragi</Link></li>
                        <li className="nav-li"><a className="navbar-text"><span className="features" onClick={() => toggleDropdown()}>Features</span></a></li>
                        <li className="nav-li" onMouseEnter={() => toggleDropdown(false)}><Link to="/commands" className="navbar-text drop-hide">Commands</Link></li>
                        <li className="nav-li"><Link to="/about" className="navbar-text drop-hide">About</Link></li>
                        <li className="nav-li"><a href="https://discord.com/oauth2/authorize?client_id=593838271650332672&scope=bot&permissions=543279148279" className="navbar-text" target="_blank">Invite</a></li>
                        <li className="nav-li"><a href="https://discord.gg/77yGmWM" className="navbar-text" target="_blank">Discord</a></li>
                        <li className="nav-li"><a href="https://github.com/Moebits/Kisaragi" className="navbar-text" target="_blank">Github</a></li>
                    </ul>
                </div>
                <img src={hamburger} alt="Hamburger Menu" height="50" width="50" className="hamburger" onClick={() => slide()}/>
            </nav>
            {/*state.mobileNavbar ? mobileNavbarJSX() : null*/}
            <div className="mobile-navbar">
                <ul>
                    <li><Link to="/" className="navbar-mobile-text">Kisaragi</Link></li>
                    <li><Link to="/home#features" className="navbar-mobile-text">Features</Link></li>
                    <li><Link to="/commands" className="navbar-mobile-text">Commands</Link></li>
                    <li><Link to="/about" className="navbar-mobile-text">About</Link></li>
                    <li><a href="https://discord.com/oauth2/authorize?client_id=593838271650332672&scope=bot&permissions=543279148279" className="navbar-mobile-text" target="_blank">Invite</a></li>
                    <li><a href="https://discord.gg/77yGmWM" className="navbar-mobile-text" target="_blank">Discord</a></li>
                    <li><a href="https://github.com/Moebits/Kisaragi" className="navbar-mobile-text" target="_blank">Github</a></li>
                </ul>
            </div>
            {featureDropdown ? dropdown() : null}
        </div>
    )
}

export default Navbar