import React from "react";

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faceValue: 0,
      face: "&#x2680;",
      rollCount: 1,
      isRolling: false,
    };
    this.DiceRoll = this.DiceRoll.bind(this);
    this.HandleDiceThrow = this.HandleDiceThrow.bind(this);
  }

  DiceRoll() {
    let faceValue = GenerateRandomInt(0, 5);
    this.setState({
      rollCount: this.state.rollCount - 1,
      isRolling: this.state.rollCount > 0,
      faceValue: faceValue,
      face: "&#x" + String(2680 + faceValue) + ";",
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
      <div>
        <div
          onClick={this.HandleDiceThrow}
          id="diceFace"
          dangerouslySetInnerHTML={{ __html: `${this.state.face}` }}
        ></div>
      </div>
    );
  }
}

function GenerateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Dice;
