import React, {Component} from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Section1 from "./Section1"
import Section2 from "./Section2"

interface Props {
    reRender: () => void
}

export default class HomePage extends Component<Props> {
    public componentDidMount = () => {
        document.title = "Kisaragi Bot"
    }

    public render = () => {
        return (
            <>
            <Navbar/>
            <Section1/>
            <Section2/>
            <Footer fanart reRender={this.props.reRender}/>
            </>
        )
    }
}