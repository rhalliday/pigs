import React from "react";
import Dice from "./Dice";
import CurrentScore from "./CurrentScore";
import BankPlayers from "./BankPlayers";
import PlayerDisplay from "./PlayerDisplay";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const MAX_SCORE = 50;
const DEFAULT_MESSAGE = "Roll the dice or bank when you're done";

class PlayGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 0,
      currentScore: 0,
      gamePlayMessage: DEFAULT_MESSAGE,
      winner: false,
    };
    this.NextPlayer = this.NextPlayer.bind(this);
    this.HandleBank = this.HandleBank.bind(this);
    this.HandleDiceRoll = this.HandleDiceRoll.bind(this);
    this.HandleRestart = this.HandleRestart.bind(this);
  }
  HandleRestart() {
    this.props.players.forEach((element) => {
      element.score = 0;
    });
    this.setState({
      winner: false,
    });
    this.NextPlayer();
  }
  HandleWin(player) {
    this.setState({
      gamePlayMessage: player.name + " has won the game!",
      winner: true,
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
  getBankButton() {
    return (
      <Button variant="primary" onClick={this.HandleBank}>
        Bank
      </Button>
    );
  }
  getRestartButton() {
    return (
      <Button variant="primary" onClick={this.HandleRestart}>
        Restart
      </Button>
    );
  }
  render() {
    let currentPlayer = this.props.players[this.state.currentPlayer] || {
      name: "___test",
      score: 0,
    };
    return (
      <>
        <Col>
          <Row>
            <Col>
              <Dice handleDiceRoll={this.HandleDiceRoll} />
            </Col>
            <Col>
              <Row className="mb-2">{this.state.gamePlayMessage}</Row>
              <Row className="mb-2">
                <Card border="success" style={{ width: "18rem" }}>
                  <Card.Body>
                    <PlayerDisplay player={currentPlayer} displayScore={true} />
                  </Card.Body>
                </Card>
              </Row>
              <Row className="mb-2">
                <Col>
                  <CurrentScore score={this.state.currentScore} />
                </Col>
                <Col>
                  {this.state.winner
                    ? this.getRestartButton()
                    : this.getBankButton()}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs lg="2">
          <BankPlayers
            players={this.props.players}
            currentPlayer={currentPlayer.name}
          />
        </Col>
      </>
    );
  }
}

export default PlayGame;
