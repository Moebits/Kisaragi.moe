import React from "react"
import kisaragiCute from "../assets/images/kisaragicute.png"
import hammann from "../assets/images/hammann.png"
import akashiNewYear from "../assets/images/akashinewyear.png"
import $33 from "../assets/images/33.png"
import laffeyChibi from "../assets/images/laffeychibi.png"
import "../styles/section2.less"

const Section2: React.FunctionComponent = (props) => {
    return (
        <section className="section2">
            <h1 className="section2-heading"><span className="section2-hover" id="features">Features</span></h1>
            <div className="section2-container" id="anime">
                <img src={kisaragiCute} alt="Kisaragi Cute" height="456" width="327" className="fanart"/>
                <div className="section2-vertical">
                    <h2 className="section2-title"><span className="section2-hover">Search for fanart of cute anime girls!</span></h2>
                    <p className="section2-paragraph">
                        <span className="section2-hover">
                            There are commands for searching Pixiv, Deviantart, Safebooru, and other sites!
                            Check the help documentation to view sub-options like searching for lewd pictures.
                            There is also a download reaction that will pack all of the images into a zip file.
                        </span>
                    </p>
                </div>
            </div>
            <div className="section2-container" id="music">
                <div className="section2-vertical">
                    <h2 className="section2-title"><span className="section2-hover">Photoshop images! Play music with effects!</span></h2>
                    <p className="section2-paragraph">
                        <span className="section2-hover">
                            You can add adjustments to images such as brightness and hue/saturation,
                            similar to Photoshop! Play music from Soundcloud, Youtube, or an attachment.
                            There are many cool audio effects that you can apply, such as reverse, speed,
                            pitch, reverb, and highpass.
                        </span>
                    </p>
                </div>
                <img src={hammann} alt="Hammann" height="633" width="383" className="fanart hammann"/>
            </div>
            <div className="section2-container" id="utility">
                <img src={akashiNewYear} alt="Akashi New Year" height="671" width="548" className="fanart akashinewyear"/>
                <div className="section2-vertical">
                    <h2 className="section2-title"><span className="section2-hover">Extra moderation and utility features!</span></h2>
                    <p className="section2-paragraph">
                        <span className="section2-hover">
                            There is basic moderation such as word filtering, ban, and kick.
                            There are helpful utilities like reaction roles, captcha verification,
                            starboard, and welcome/leave messages. You can also receive notifications
                            for Youtube and Twitch.
                        </span>
                    </p>
                </div>
            </div>
            <div className="section2-container" id="games">
                <div className="section2-vertical">
                    <h2 className="section2-title"><span className="section2-hover">Game commands such as Azur Lane and Osu!</span></h2>
                    <p className="section2-paragraph">
                        <span className="section2-hover">
                            Search for Kancolle and Azur Lane shipgirls and get information on
                            Osu! beatmaps and players. There is also a command for playing a
                            game of minesweeper, which can be played in either reactions or
                            spoiler tags.
                        </span>
                    </p>
                </div>
                <img src={$33} alt="33" height="716" width="422" className="fanart"/>
            </div>
            <div className="section2-container" id="website">
                <img src={laffeyChibi} alt="Laffey Chibi" height="595" width="625" className="fanart laffeychibi"/>
                <div className="section2-vertical">
                    <h2 className="section2-title"><span className="section2-hover">Browse Reddit and Twitter posts!</span></h2>
                    <p className="section2-paragraph">
                        <span className="section2-hover">
                            Connect your Reddit and Twitter account with Oauth2 to like, comment,
                            and retweet posts with your account. There are also many commands that
                            are subreddit specific.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Section2