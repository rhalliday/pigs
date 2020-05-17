import React from "react";
import Dice from "./Dice";
import CurrentScore from "./CurrentScore";
import BankPlayers from "./BankPlayers";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MAX_SCORE = 50;
const DEFAULT_MESSAGE = "Roll the dice or bank when you're done";

class PlayGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 0,
      currentScore: 0,
      gamePlayMessage: DEFAULT_MESSAGE,
    };
    this.NextPlayer = this.NextPlayer.bind(this);
    this.HandleBank = this.HandleBank.bind(this);
    this.HandleDiceRoll = this.HandleDiceRoll.bind(this);
  }

  HandleWin(player) {
    this.setState({
      gamePlayMessage: player.name + " has won the game!",
    });
  }
  NextPlayer() {
    let currentPlayer = this.state.currentPlayer;
    let nextPlayer = (currentPlayer + 1) % this.props.players.length;
    this.setState({
      currentPlayer: nextPlayer,
      gamePlayMessage: DEFAULT_MESSAGE,
    });
  }
  HandleBank() {
    let currentScore = this.state.currentScore;
    let players = this.props.players;
    players[this.state.currentPlayer].score += currentScore;
    if (players[this.state.currentPlayer].score >= MAX_SCORE) {
      return this.HandleWin(players[this.state.currentPlayer]);
    }
    this.setState({
      currentScore: 0,
      players: players,
    });
    this.NextPlayer();
  }
  HandleDiceRoll(value) {
    if (value === 1) {
      this.setState({
        currentScore: 0,
        gamePlayMessage: "Sorry you lost it all!",
      });
      return setTimeout(this.HandleBank, 3000);
    }
    let currentScore = this.state.currentScore + value;
    this.setState({
      currentScore: currentScore,
    });
  }
  render() {
    return (
      <>
        <Col>
          <Row>
            <Col>
              <Dice handleDiceRoll={this.HandleDiceRoll} />
            </Col>
            <Col>{this.state.gamePlayMessage}</Col>
          </Row>
          <Row>
            <Col>
              <CurrentScore score={this.state.currentScore} />
            </Col>
            <Col xs lg="2">
              <Button variant="primary" onClick={this.HandleBank}>
                Bank
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs lg="2">
          <BankPlayers
            players={this.props.players}
            currentPlayer={this.state.currentPlayer}
          />
        </Col>
      </>
    );
  }
}

export default PlayGame;
