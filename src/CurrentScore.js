import React from "react";
import Card from "react-bootstrap/Card";

function CurrentPlayer(props) {
  return (
    <Card>
      <Card.Header>Current Score</Card.Header>
      <Card.Body>{props.score}</Card.Body>
    </Card>
  );
}

export default CurrentPlayer;
