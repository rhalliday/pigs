import React from "react";
import { SpriteSheet } from "react-spritesheet";
import diceSprite from "./img/dice-sprite.jpg";

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faceValue: 6,
      rollCount: 1,
      isRolling: false,
    };
    this.DiceRoll = this.DiceRoll.bind(this);
    this.HandleDiceThrow = this.HandleDiceThrow.bind(this);
  }

  spriteSheet = {
    1: {
      x: 0,
      y: 105,
      width: 105,
      height: 110,
    },
    2: {
      x: 106,
      y: 105,
      width: 105,
      height: 110,
    },
    3: {
      x: 213,
      y: 105,
      width: 105,
      height: 110,
    },
    4: {
      x: 322,
      y: 105,
      width: 105,
      height: 110,
    },
    5: {
      x: 428,
      y: 105,
      width: 105,
      height: 110,
    },
    6: {
      x: 535,
      y: 105,
      width: 105,
      height: 110,
    },
  };

  DiceRoll() {
    let faceValue = GenerateRandomInt(0, 5);
    this.setState({
      rollCount: this.state.rollCount - 1,
      isRolling: this.state.rollCount > 0,
      faceValue: faceValue,
    });
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
        <SpriteSheet
          filename={diceSprite}
          data={this.spriteSheet}
          sprite={this.state.faceValue}
        />
      </div>
    );
  }
}

function GenerateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Dice;
