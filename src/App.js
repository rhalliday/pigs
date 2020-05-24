import React from "react";
import "./App.css";
import StartGame from "./StartGame";
import PlayGame from "./PlayGame";
import picPic from "./img/avatar-2.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Confetti from "react-confetti";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      isRunning: false,
      winningLine: 50,
      hasWon: false,
    };
    this.HandleAddPlayer = this.HandleAddPlayer.bind(this);
    this.HandleRemovePlayer = this.HandleRemovePlayer.bind(this);
    this.HandleStartGame = this.HandleStartGame.bind(this);
    this.HandleFinishGame = this.HandleFinishGame.bind(this);
    this.HandleWinningLineChange = this.HandleWinningLineChange.bind(this);
    this.HandleHasWon = this.HandleHasWon.bind(this);
    this.HandleRestart = this.HandleRestart.bind(this);
  }
  HandleHasWon() {
    this.setState({
      hasWon: true,
    });
  }
  HandleRestart() {
    this.setState({
      hasWon: false,
    });
  }
  HandleWinningLineChange(newLine) {
    this.setState({
      winningLine: newLine,
    });
  }
  HandleAddPlayer(player) {
    let players = this.state.players;
    players.push(player);
    this.setState({
      players: players,
    });
    player.value = "";
  }
  findPlayerPosition(player) {
    for (let i = 0; i < this.state.players.length; i++) {
      if (this.state.players[i].name === player) {
        return i;
      }
    }
    return -1;
  }
  HandleRemovePlayer(player) {
    let players = this.state.players;
    let position = this.findPlayerPosition(player);
    if (position >= 0) {
      players.splice(position, 1);
    }
    this.setState({ players: players });
  }
  HandleStartGame() {
    this.setState({ isRunning: true });
  }
  HandleFinishGame() {
    this.setState({ isRunning: false });
  }
  render() {
    return (
      <Container>
        {this.state.hasWon && (
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        )}
        <Row>
          <Col>
            <div className="page-header">Pigs</div>
          </Col>
          <Col className="header-pig">
            <img src={picPic} alt="Pig with glasses" width="100" height="100" />
          </Col>
        </Row>
        <Row
          id="start-game"
          style={this.state.isRunning ? { display: "none" } : {}}
        >
          <StartGame
            className="Opener"
            players={this.state.players}
            handleAddPlayer={this.HandleAddPlayer}
            handleRemovePlayer={this.HandleRemovePlayer}
            handleStartGame={this.HandleStartGame}
            handleWinningLine={this.HandleWinningLineChange}
          />
        </Row>
        <Row
          id="game-board"
          style={this.state.isRunning ? {} : { display: "none" }}
        >
          <PlayGame
            className="Game"
            players={this.state.players}
            handleFinishGame={this.HandleFinishGame}
            winningLine={this.state.winningLine}
            handleHasWon={this.HandleHasWon}
            handleRestart={this.HandleRestart}
          />
        </Row>
      </Container>
    );
  }
}

export default App;
