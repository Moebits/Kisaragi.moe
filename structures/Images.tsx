import func from "./Functions"
import "../assets/icons/icon.gif"

export default class Images {
    public static animateFavicon = () => {
        const {Firefox} = func.getBrowser()
        if (Firefox) return
        const favURL = `${window.location.protocol}//${window.location.host}/assets/icons/icon.gif`
        console.log(favURL)
        // @ts-ignore Included in script file
        favloader.init({gif: favURL})
        // @ts-ignore Included in script file
        favloader.start()
    }

    public static appendFavicon = () => {
        const link = document.createElement("link")
        link.rel = "icon"
        link.href =  `${window.location.protocol}//${window.location.host}/assets/icons/icon.gif`
        document.head.appendChild(link)
    }
}