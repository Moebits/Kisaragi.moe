import React, {useEffect, useReducer} from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import HomePage from "./components/HomePage"
import Commands from "./components/Commands"
import TermsOfService from "./components/TermsOfService"
import $404 from "./components/404"
import About from "./components/About"
import ScrollToTop from "./components/ScrollToTop"
import "./index.less"
import functions from "./structures/Functions"

require.context("./assets/icons", true)

const App: React.FunctionComponent = () => {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0)

  useEffect(() => {
    functions.preventDoubleClick()
    functions.preventDragging()
    functions.dragScroll(true)
  }, [])

  const reRender = () => {
    forceUpdate()
  }

  let theme: string | null = null
    if (typeof window !== "undefined") {
      theme = localStorage.getItem("theme")
      if (!theme) {
        theme = "dark"
        localStorage.setItem("theme", "dark")
      }
    } else {
      theme = "dark"
    }
    return (
      <div className={theme === "dark" ? "app dark-theme" : "app"} onTouchStart={() => ""}>
          <ScrollToTop>
            <Switch>
              <Route exact path={["/", "/home", "/index", "/index.html", "/kisaragi"]}><HomePage reRender={reRender}/></Route>
              <Route exact path={["/commands", "/commands.html"]}><Commands reRender={reRender}/></Route>
              <Route exact path={["/privacy", "/privacypolicy"]}><Redirect to="/terms#privacy"/></Route>
              <Route exact path={["/terms", "/termsofservice"]}><TermsOfService reRender={reRender}/></Route>
              <Route exact path={["/about", "/about.html"]}><About reRender={reRender}/></Route>
              <Route path="*"><$404 reRender={reRender}/></Route>
            </Switch>
          </ScrollToTop>
      </div>
    )
}

export default App