
import React from "react";

type GreetingsProps = {
    userName :string;
    age :number;
    height :number;
}

export default function GreetingsIlker(props : GreetingsProps) {
    return (
        <div>
            <img src="https://www.pikpng.com/pngl/b/49-495132_swirl-clipart-transparent-background-spiral-with-no-background.png" className="App-logo" alt="scheiße...hat wohl irgendwie nicht funktioniert"/>
            <h1>Hello: {props.userName} </h1>
            <p> Alter ist: {props.age} </p>
            <p> Größe (in metern) ist: {props.height} </p>
        </div>
    )
}

