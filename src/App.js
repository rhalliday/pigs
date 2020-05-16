import React from "react";
import Dice from "./Dice";
import "./App.css";
import picPic from "./img/cartoon-pig-with-glasses.jpg";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>Pigs</h1>
        <img src={picPic} alt="Pig with glasses" width="100" height="100" />
      </div>
      <div className="Opener">
        <AddPlayer />
        <ListPlayer />
        <button className="StartButton">Start Game</button>
      </div>
      <div className="Game">
        <Dice />
      </div>
    </div>
  );
}

export default App;
