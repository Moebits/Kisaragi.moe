import React, {useEffect, useState} from "react"
import {HashLink as Link} from "react-router-hash-link"
import laffeyKimono from "../assets/images/laffeykimono.png"
import github from "../assets/icons/github.png"
import inviteBot from "../assets/icons/invitebot.png"
import themeImg from "../assets/icons/theme.png"
import themeInvert from "../assets/icons/theme-invert.png"
import discord from "../assets/icons/discord.png"
import "../styles/footer.less"

interface Props {
    fanart?: boolean
    reRender: () => void
}

const Footer: React.FunctionComponent<Props> = (props) => {
    const [themeIcon, setThemeIcon] = useState(themeInvert)

    const themeChange = () => {
        if (themeIcon === themeInvert) {
            setThemeIcon(themeImg)
        } else {
            setThemeIcon(themeInvert)
        }
        const theme = localStorage.getItem("theme")
        if (theme === "dark") {
            localStorage.setItem("theme", "light")
        } else {
            localStorage.setItem("theme", "dark")
        }
        props.reRender()
    }

    const fanartSection = () => {
        return (
            <>
            <div className="fanart-credits">
                <div className="fanart-text">
                    <h3 className="footer-text fanart-header">Fanart Credits</h3>
                    <ul className="fanart-links">
                        <li><a href="https://www.pixiv.net/en/users/786200" className="footer-link" target="_blank">Tsukimi</a></li>
                        <li><a href="https://www.pixiv.net/en/users/869368" className="footer-link" target="_blank">Hiyoyo</a></li>
                        <li><a href="https://www.pixiv.net/en/users/39617326" className="footer-link" target="_blank">Toro</a></li>
                        <li><a href="https://www.pixiv.net/en/users/2075334" className="footer-link" target="_blank">Shirayu</a></li>
                        <li><a href="https://www.pixiv.net/en/users/1422579" className="footer-link" target="_blank">Saru</a></li>
                        <li><a href="https://www.pixiv.net/en/users/3312169" className="footer-link" target="_blank">Hecha</a></li>
                        <li><a href="https://danbooru.donmai.us/posts/3545368" className="footer-link" target="_blank">Memorii</a></li>
                        <li><a href="https://www.pixiv.net/en/users/12089469" className="footer-link" target="_blank">Wan</a></li>
                    </ul>
                </div>
                <img src={laffeyKimono} alt="Laffey Kimono" height="591" width="244" className="laffeykimono no-ios-preview"/>
            </div>
            <h5 className="footer-text copyright">Copyright © {new Date().getFullYear()} Moebits</h5>
            </>
        )
    }

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <div className="footer-box navigation">
                        <h3 className="footer-text">Navigation</h3>
                        <ul>
                            <li className="footer-li"><Link to="/" className="footer-link">Features</Link></li>
                            <li className="footer-li"><Link to="/commands" className="footer-link">Commands</Link></li>
                            <li className="footer-li"><Link to="/terms" className="footer-link">Terms of Service</Link></li>
                            <li className="footer-li"><Link to="/terms#privacy" className="footer-link">Privacy Policy</Link></li>
                            <li className="footer-li"><Link to="/about" className="footer-link">About</Link></li>
                        </ul>
                    </div>
                    <div className="footer-box">
                        <h3 className="footer-text">Source Code</h3>
                        <img src={github} alt="Github" height="94" width="94" className="footer-img github no-ios-preview" onClick={() => window.open("https://github.com/Moebits/Kisaragi", "_blank")}/>
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-box">
                        <h3 className="footer-text">Invite the bot!</h3>
                        <img src={inviteBot} alt="Invite Bot" height="77" width="77" className="footer-img invitebot" onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=593838271650332672&scope=bot&permissions=543279148279", "_blank")}/>
                    </div>
                    <div className="footer-box site-theme">
                        <h3 className="footer-text">Site Theme</h3>
                        <img src={themeIcon} alt="Site Theme" height="80" width="80" className="footer-img theme-img" onClick={() => themeChange()}/>
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-box">
                        <h3 className="footer-text">Join our Discord Server!</h3>
                        <img src={discord} alt="Discord" height="89" width="78" className="footer-img discord" onClick={() => window.open("https://discord.gg/sNhUu5JN6y", "_blank")}/>
                    </div>
                    <div className="footer-box other-links">
                        <h3 className="footer-text">Other Links</h3>
                        <ul>
                            <li className="footer-li"><a href="https://discord.com/discovery/applications/593838271650332672" className="footer-link" target="_blank">Discovery</a></li>
                            <li className="footer-li"><a href="https://top.gg/bot/593838271650332672/vote" className="footer-link" target="_blank">Upvote</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {props.fanart ? fanartSection() : null}
        </footer>
    )
}

export default Footer