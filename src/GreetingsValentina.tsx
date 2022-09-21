
import React from "react";

type GreetingsProps = {
    userName :string;
    age :number;
    height :number;
}

export default function GreetingsValentina(props : GreetingsProps) {
    return (
        <div>
            <img src="https://gifuu.agency/wp-content/uploads/2020/12/GIFuu-Agentur-GIF-Marketing-Maskottchen-Olaf.gif" className="App-logo" alt="scheiße...hat wohl irgendwie nicht funktioniert"/>
            <h1>Öyyy: {props.userName} </h1>
            <p> Erst: {props.age} Jahre alt... </p>
            <p> Größe (in metern) ist: {props.height} </p>
        </div>
    )
}
