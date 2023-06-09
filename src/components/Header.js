import React from "react"

export default function Header() {
    return (
        <nav>
            <div className="nav--logo">
                <img className="nav--icon" src="./icons/troll-face_logo.svg" alt="Troll face logo" />
                <p className="nav--logo_name">Meme Generator</p>
            </div>
            <p className="nav--title_course">React Course</p>
        </nav>
    )
}