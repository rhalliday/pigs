import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import PlayerDisplay from "./PlayerDisplay";

function BankPlayers(props) {
  let players = props.players;
  let currentPlayer = props.currentPlayer;
  let bankPlayers = players
    .filter((player) => player.name !== currentPlayer)
    .sort((player1, player2) => player2.score - player1.score);
  let displayPlayers = bankPlayers.map((player) => {
    return (
      <ListGroup.Item key={player.name}>
        <PlayerDisplay player={player} displayScore={true} />
      </ListGroup.Item>
    );
  });
  return (
    <>
      <Row className="bank-header">
        <h4>Bank</h4>
      </Row>
      <Row>
        <ListGroup>{displayPlayers}</ListGroup>
      </Row>
    </>
  );
}

export default BankPlayers;
