import React, {Component} from "react"
import {HashLink as Link} from "react-router-hash-link"
import "../styles/navbar.less"
import kisaragiChibi from "../assets/images/kisaragichibi.png"
import hamburger from "../assets/icons/hamburger.png"
import $ from "jquery"

interface State {
    featureDropdown: boolean
    doubleLeave: boolean
    mobileNavbar: boolean
}

export default class Navbar extends Component<{}, State> {
    private readonly mobileNav: React.RefObject<HTMLDivElement>
    constructor(props: {}) {
        super(props)
        this.state = {
            featureDropdown: false,
            doubleLeave: false,
            mobileNavbar: false
        }
        this.mobileNav = React.createRef()
    }

    public toggleMobileNavbar = () => {
        this.setState((prev: State) => ({
            mobileNavbar: !prev.mobileNavbar
        }))
    }

    public slide = () => {
        $(".mobile-navbar").slideToggle()
    }

    public toggleDropdown = (enable?: boolean) => {
        if (enable === true) {
            this.setState((prev: State) => ({
                featureDropdown: true
            }))
        } else if (enable === false) {
            this.setState((prev: State) => ({
                featureDropdown: false
            }))
        } else {
            this.setState((prev: State) => ({
                featureDropdown: !prev.featureDropdown
            }))
        }
    }

    public dropdown = () => {
        return (
            <div className="dropdown" onMouseLeave={() => this.toggleDropdown(false)}>
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

    public mobileNavbar = () => {
        return (
            <div className="mobile-navbar">
                    <ul>
                        <li><Link to="/" className="navbar-mobile-text">Kisaragi</Link></li>
                        <li><Link to="/home#features" className="navbar-mobile-text">Features</Link></li>
                        <li><Link to="/commands" className="navbar-mobile-text">Commands</Link></li>
                        <li><Link to="/about" className="navbar-mobile-text">About</Link></li>
                        <li><a href="https://discord.com/oauth2/authorize?client_id=593838271650332672&scope=bot&permissions=543279148279" className="navbar-mobile-text" target="_blank">Invite</a></li>
                        <li><a href="https://discord.gg/77yGmWM" className="navbar-mobile-text" target="_blank">Discord</a></li>
                        <li><a href="https://github.com/Tenpi/Kisaragi" className="navbar-mobile-text" target="_blank">Github</a></li>
                    </ul>
            </div>
        )
    }

    public render = () => {
        return (
            <div className="nav-fixed">
                <nav className="navbar">
                    <div className="nav-left">
                        <Link to="/"><img src={kisaragiChibi} alt="Kisaragi Chibi" height="56" width="58" className="kisaragichibi no-ios-preview"/></Link>
                        <ul className="nav-ul">
                            <li className="nav-li" onMouseEnter={() => this.toggleDropdown(false)}><Link to="/" className="navbar-text drop-hide">Kisaragi</Link></li>
                            <li className="nav-li"><a className="navbar-text"><span className="features" onClick={() => this.toggleDropdown()} onMouseEnter={() => this.toggleDropdown(true)}>Features</span></a></li>
                            <li className="nav-li" onMouseEnter={() => this.toggleDropdown(false)}><Link to="/commands" className="navbar-text drop-hide">Commands</Link></li>
                            <li className="nav-li"><Link to="/about" className="navbar-text drop-hide">About</Link></li>
                            <li className="nav-li"><a href="https://discord.com/oauth2/authorize?client_id=593838271650332672&scope=bot&permissions=543279148279" className="navbar-text" target="_blank">Invite</a></li>
                            <li className="nav-li"><a href="https://discord.gg/77yGmWM" className="navbar-text" target="_blank">Discord</a></li>
                            <li className="nav-li"><a href="https://github.com/Tenpi/Kisaragi" className="navbar-text" target="_blank">Github</a></li>
                        </ul>
                    </div>
                    <img src={hamburger} alt="Hamburger Menu" height="50" width="50" className="hamburger" onClick={() => this.slide()}/>
                </nav>
                {/*this.state.mobileNavbar ? this.mobileNavbar() : null*/}
                <div className="mobile-navbar">
                    <ul>
                        <li><Link to="/" className="navbar-mobile-text">Kisaragi</Link></li>
                        <li><Link to="/home#features" className="navbar-mobile-text">Features</Link></li>
                        <li><Link to="/commands" className="navbar-mobile-text">Commands</Link></li>
                        <li><Link to="/about" className="navbar-mobile-text">About</Link></li>
                        <li><a href="https://discord.com/oauth2/authorize?client_id=593838271650332672&scope=bot&permissions=543279148279" className="navbar-mobile-text" target="_blank">Invite</a></li>
                        <li><a href="https://discord.gg/77yGmWM" className="navbar-mobile-text" target="_blank">Discord</a></li>
                        <li><a href="https://github.com/Tenpi/Kisaragi" className="navbar-mobile-text" target="_blank">Github</a></li>
                    </ul>
                </div>
                {this.state.featureDropdown ? this.dropdown() : null}
            </div>
        )
    }
}