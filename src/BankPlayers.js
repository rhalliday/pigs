import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function BankPlayers(props) {
  let players = props.players;
  let currentPlayer = players[props.currentPlayer] || {
    name: "___test",
    score: 0,
  };
  let bankPlayers = players
    .filter((player) => player.name !== currentPlayer.name)
    .sort((player1, player2) => player2.score - player1.score);
  let displayPlayers = bankPlayers.map((player) => {
    return (
      <ListGroup.Item key={player.name}>
        <Card style={{ width: "18rem" }}>
          <Card.Header>{player.name}</Card.Header>
          <Card.Body>{player.score}</Card.Body>
        </Card>
      </ListGroup.Item>
    );
  });
  return (
    <>
      <Row className="current-player-header">Current Player</Row>
      <Row>
        <Card border="success" style={{ width: "18rem" }}>
          <Card.Header>{currentPlayer.name}</Card.Header>
          <Card.Body>{currentPlayer.score}</Card.Body>
        </Card>
      </Row>
      <Row className="bank-header">Bank</Row>
      <Row>
        <ListGroup>{displayPlayers}</ListGroup>
      </Row>
    </>
  );
}

export default BankPlayers;
