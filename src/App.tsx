import React from 'react';
import './App.css';
import GreetingsIlker from './GreetingsIlker';
import GreetingsJutta from "./GreetingsJutta";
import GreetingsValentina from './GreetingsValentina';


function App() {

    const userName : string = "Ilker Yildirim";
    const age :number = 30
    const height :number = 1.25

    const userName2 : string = "Jutta Müller";
    const age2 :number = 66
    const height2 :number = 1.92

    const userName3 : string = "Valentina Schneider";
    const age3 :number = 22
    const height3 :number = 2.04

    return (
    <div className="App">
      <header className="App-header">

          <GreetingsIlker userName={userName} age={age} height={height}/>
          <GreetingsJutta userName={userName2} age={age2} height={height2}/>
          <GreetingsValentina userName={userName3} age={age3} height={height3}/>

      </header>
    </div>
  );
}

export default App;
