import React from "react";
import Button from "react-bootstrap/Button";
import AddPlayer from "./AddPlayer";
import ListPlayer from "./ListPlayer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

function StartGame(props) {
  return (
    <>
      <Col>
        <Row>
          <Col xs lg="8">
            <AddPlayer onSubmit={props.handleAddPlayer} />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs lg="8">
            <Form.Group>
              <Form.Label>Set the winning line</Form.Label>
              <Form.Control
                type="text"
                id="winning-line"
                defaultValue="50"
                onChange={(event) => {
                  props.handleWinningLine(event.target.value);
                }}
              />
            </Form.Group>
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
      <Col xs lg="3">
        <ListPlayer
          players={props.players}
          handleRemovePlayer={props.handleRemovePlayer}
        />
      </Col>
    </>
  );
}

export default StartGame;
