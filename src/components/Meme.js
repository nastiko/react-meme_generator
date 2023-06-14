 import React from "react"
import defaultData from "../data";

export default function Meme() {

    const [memeItems, getMemeItems] = React.useState("");

    function getMemeImg() {
        const memesArray = defaultData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);

        getMemeItems(prevState => memesArray[randomNumber].url);

    }

    return (
        <section>
            <form action="#" className="form">
                <input className="form--input" type="text" placeholder="Some text"/>
                <input className="form--input" type="text" placeholder="Another text"/>
                <button onClick={getMemeImg} className="form--button">Get a new meme image</button>
                <img className="img--style" src={memeItems} alt="Meme" />
            </form>
        </section>
    )
}