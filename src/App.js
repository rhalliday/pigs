import React from "react";
import Dice from "./Dice";
import "./App.css";
import picPic from "./img/cartoon-pig-with-glasses.jpg";

function App() {
  return (
    <div className="App">
      <h1>Pigs</h1>
      <img src={picPic} alt="Pig with glasses" width="100" height="100" />
      <Dice />
    </div>
  );
}

export default App;
