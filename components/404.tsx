import React, {Component} from "react"
import img404 from "../assets/images/404.png"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/404.less"

interface Props {
    reRender: () => void
}

export default class $404 extends Component<Props> {
    public componentDidMount = () => {
        document.title = "404"
    }

    public render = () => {
        return (
            <>
            <Navbar/>
            <section className="section-404">
                <h1 className="text-404"><span>404 Error</span></h1>
                <img className="img-404" src={img404} alt="404" width="479" height="362"/>
            </section>
            <Footer reRender={this.props.reRender}/>
            </>
        )
    }
}