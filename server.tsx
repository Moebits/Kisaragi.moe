import path from "path"
import mime from "mime"
import cors from "cors"
import bodyParser from "body-parser"
import express, {Request} from "express"
import webpack from "webpack"
import middleware from "webpack-dev-middleware"
import hot from "webpack-hot-middleware"
import config from "./webpack.config"
import favicon from "express-favicon"
import dotenv from "dotenv"
import ReactDOMServer from "react-dom/server"
import {StaticRouter as Router} from "react-router-dom"
import React from "react"
import App from "./App"
import fs from "fs"
const __dirname = path.resolve()

const app = express()
const compiler = webpack(config({platform: "web"}) as any)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.disable("x-powered-by")
app.set("trust proxy", true)

if (process.env.TESTING === "yes") {
  dotenv.config()
  app.use(middleware(compiler, {
    serverSideRender: true,
    writeToDisk: false
  }))
  app.use(hot(compiler))
}

app.use(express.static(path.join(__dirname, "./public")))
app.use(express.static(path.join(__dirname, "./assets")))
app.use(express.static(path.join(__dirname, "./dist"), {index: false}))
app.use(favicon(__dirname + "/assets/icons/favicon.gif"))

const writePictures = () => {
  const indexImages: string[] = []
  const indexPath = path.join(__dirname, "assets/waifu")
  const folders = fs.readdirSync(indexPath)
  for (let i = 0; i < folders.length; i++) {
      if (folders[i] === "files.json") continue
      if (folders[i] === ".DS_Store") continue
      const images: string[] = []
      const folderPath = path.join(__dirname, `assets/waifu/${folders[i]}`)
      const files = fs.readdirSync(folderPath)
      for (let j = 0; j < files.length; j++) {
          if (files[j] === "files.json") continue
          images.push(encodeURI(`https://kisaragi.moe/${folders[i]}/${path.basename(files[j])}`))
      }
      indexImages.push(...images)
      fs.writeFileSync(path.join(folderPath, "files.json"), JSON.stringify(images, undefined, 4))
  }
  fs.writeFileSync(path.join(indexPath, "files.json"), JSON.stringify(indexImages, undefined, 4))
}
//writePictures()

app.get("*", function(req, res) {
  res.setHeader("Content-Type", mime.getType(req.path) ?? "")
  if (process.env.TESTING === "yes") {
    res.sendFile(path.join(__dirname, "./dist/index.html"))
  } else {
    const html = ReactDOMServer.renderToString(<Router location={req.url}><App/></Router>)
    const data = fs.readFileSync(path.join(__dirname, "./dist/index.html"), {encoding: "utf-8"})
    const document = data.replace(`<div id="app"></div>`, `<div id="app">${html}</div>`)
    res.send(document)
  }
})

app.listen(process.env.PORT || 8090, () => console.log("Started the website server!"))
