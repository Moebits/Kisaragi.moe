import React, {Component} from "react"
import {Link} from "react-router-dom"
import kisaragi from "../assets/images/kisaragi.png"
import "../styles/section1.less"
import func from "../structures/Functions"
import $ from "jquery"

interface State {
    chrome: boolean
}

export default class Section1 extends Component<{}, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            chrome: true
        }
    }
    public componentDidMount = () => {
        const {Chrome} = func.getBrowser()
        this.setState({
            chrome: Chrome
        })
    }

    public render = () => {
        return (
            <section className="section1">
                <img src={kisaragi} alt="Kisaragi" height="578" width="454" className="kisaragi no-ios-preview"/>
                <div className="section1-vertical">
                    <h2 className={!this.state.chrome ? "section1-text section1-title stroke-title" : "section1-text section1-title"}>A kawaii discord bot!</h2>
                    <h4 className={!this.state.chrome ? "section1-text section1-paragraph stroke-paragraph" : "section1-text section1-paragraph"}>
                        Kisaragi has over 370 commands that mainly focus on anime, music, and website searching.
                        She also has some utilities like anime picture detection, reaction roles, and welcome/leave messages!
                    </h4>
                    <div className="button-container">
                        <button className="blue-button" onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=593838271650332672&scope=bot&permissions=543279148279", "_blank")}><span className="section1-text button-text">Invite</span></button>
                        <Link to="/commands"><button className="blue-button"><span className="section1-text button-text">Commands</span></button></Link>
                        <button className="blue-button" onClick={() => window.open("https://github.com/Tenpi/Kisaragi", "_blank")}><span className="section1-text button-text">Source Code</span></button>
                    </div>
                </div>
            </section>
        )
    }
}