import React from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function PlayerDisplay(props) {
  let player = props.player;
  return (
    <>
      <Row className="display-player">
        <Col>
          <Image src={player.avatar} width="50" height="50" roundedCircle />
        </Col>
        <Col>{player.name}</Col>
        <Col className={props.displayScore ? "" : "hide-score"}>
          {player.score}
        </Col>
      </Row>
    </>
  );
}

export default PlayerDisplay;
