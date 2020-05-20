import React from "react";
import Card from "react-bootstrap/Card";

function CurrentPlayer(props) {
  return (
    <Card bg="light">
      <Card.Body>Current score: {props.score}</Card.Body>
    </Card>
  );
}

export default CurrentPlayer;
