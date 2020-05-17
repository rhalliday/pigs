import React from "react";
import Button from "react-bootstrap/Button";
import AddPlayer from "./AddPlayer";
import ListPlayer from "./ListPlayer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function StartGame(props) {
  return (
    <>
      <Col>
        <Row>
          <Col xs lg="4">
            <AddPlayer onSubmit={props.handleAddPlayer} />
          </Col>
        </Row>
        <Row className="mb-2">
          <Button
            variant="success"
            size="lg"
            className="StartButton"
            onClick={props.handleStartGame}
          >
            Start Game
          </Button>
        </Row>
      </Col>
      <Col xs lg="2">
        <ListPlayer
          players={props.players}
          handleRemovePlayer={props.handleRemovePlayer}
        />
      </Col>
    </>
  );
}

export default StartGame;
