import React from "react";

import diceOne from "./img/dice-1.svg";
import diceTwo from "./img/dice-2.svg";
import diceThree from "./img/dice-3.svg";
import diceFour from "./img/dice-4.svg";
import diceFive from "./img/dice-5.svg";
import diceSix from "./img/dice-6.svg";

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.dice = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
    this.state = {
      faceValue: 1,
      rollCount: 1,
      isRolling: false,
      diceFace: this.dice[0],
    };
    this.DiceRoll = this.DiceRoll.bind(this);
    this.HandleDiceThrow = this.HandleDiceThrow.bind(this);
  }

  DiceRoll() {
    let faceValue = GenerateRandomInt(1, 6);
    this.setState({
      rollCount: this.state.rollCount - 1,
      isRolling: this.state.rollCount > 0,
      faceValue: faceValue,
      diceFace: this.dice[faceValue - 1],
    });
    if (this.state.isRolling <= 0) {
      this.props.handleDiceRoll(faceValue);
    }
  }
  HandleDiceThrow() {
    if (this.state.isRolling) return;
    let val = GenerateRandomInt(5, 15);
    this.setState({ rollCount: val });
    for (let i = 0; i <= val; i++) {
      setTimeout(this.DiceRoll, 250 * i);
    }
  }
  render() {
    return (
      <div className="dieFace" onClick={this.HandleDiceThrow} id="dieFace">
        <img
          src={this.state.diceFace}
          alt={this.state.faceValue}
          width="400"
          height="400"
        />
      </div>
    );
  }
}

function GenerateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Dice;
