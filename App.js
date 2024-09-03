import React from "react"
import Id from "./components/Id"
import Contact from "./components/Contact"
import Bio from "./components/Bio"
import Social from "./components/Social"

export default function App() {
    return (
        <main>
            <img src="./dan_nat.jpg"/>
            <div id="main-content">
                <Id />
                <Contact />
                <Bio />
                <Social />
            </div>
        </main>
    )
}