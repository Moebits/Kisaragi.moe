import React, {Component} from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/about.less"
import kisaragiChibi from "../assets/images/kisaragichibi2.png"
import developer from "../assets/icons/developer.png"
import discordJS from "../assets/icons/discordjs.png"
import nodeJS from "../assets/icons/nodejs.png"
import typescript from "../assets/icons/typescript.png"
import postgreSQL from "../assets/icons/postgresql.png"
import react from "../assets/icons/react.png"
import youtube from "../assets/icons/youtube.png"
import twitter from "../assets/icons/twitter.png"
import soundcloud from "../assets/icons/soundcloud.png"
import pixiv from "../assets/icons/pixiv.png"
import github from "../assets/icons/github-hover.png"

interface Props {
    reRender: () => void
}

export default class About extends Component<Props> {
    public componentDidMount = () => {
        document.title = "About"
    }

    public render = () => {
        return (
            <>
            <Navbar/>
            <section className="about">
                <h1 className="about-header">About</h1>
                <div className="about-paragraph-container">
                    <p className="about-paragraph">
                        <a href="https://azurlane.koumakan.jp/Kisaragi" className="about-link" target="_blank">Kisaragi</a> was a Mutsuki-class destroyer of the Imperial Japanese Navy during World War II.
                        She was sunken at the <a href="https://en.wikipedia.org/wiki/Battle_of_Wake_Island" className="about-link" target="_blank">Battle of Wake Island</a> by American aircraft. Kisaragi is part of
                        <a href="https://en.wikipedia.org/wiki/Azur_Lane" className="about-link" target="_blank"> Azur Lane</a>, which is basically a game where cute anime girl personifications of World War II battleships
                        battle each other. Azur Lane also has an <a href="https://myanimelist.net/anime/38328/Azur_Lane" className="about-link" target="_blank">anime</a> series.
                    </p>
                    <img src={kisaragiChibi} width="150" height="150" className="about-img"/>
                </div>
                <ul className="about-ul">
                    <li className="about-list"><span>Creator: Tenpi#2238</span> <img src={developer} width="30" height="30"/></li>
                    <li className="about-list"><span>Library: Discord.js</span> <img src={discordJS} width="30" height="30"/></li>
                    <li className="about-list"><span>Runtime: Node.js</span> <img src={nodeJS} width="30" height="30"/></li>
                    <li className="about-list"><span>Language: Typescript</span> <img src={typescript} width="30" height="30"/></li>
                    <li className="about-list"><span>Database: PostgreSQL</span> <img src={postgreSQL} width="30" height="30"/></li>
                    <li className="about-list"><span>Website: React.js</span> <img src={react} width="30" height="30"/></li>
                </ul>
            </section>
            <Footer reRender={this.props.reRender}/>
            </>
        )
    }
}