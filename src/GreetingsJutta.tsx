import logo from "./logoIlker.svg";
import React from "react";

type GreetingsProps = {
    userName :string;
    age :number;
    height :number;
}

export default function GreetingsJutta(props : GreetingsProps) {
    return (
        <div>
            <img src="https://user-images.githubusercontent.com/10260230/93533501-53aa0d80-f943-11ea-90d1-e6e70eca2e29.gif" className="App-logo" alt="scheiße...hat wohl irgendwie nicht funktioniert"/>
            <h1>Schönen guten Tag Frau :{props.userName} </h1>
            <p> Sind sie wirklich: {props.age} ? </p>
            <p> Größe (in metern) ist: {props.height} </p>
        </div>
    )
}
