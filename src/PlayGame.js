import React from "react";
import Dice from "./Dice";
import CurrentScore from "./CurrentScore";
import BankPlayers from "./BankPlayers";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class PlayGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Col>
          <Row>
            <Dice />
          </Row>
          <Row>
            <Col>
              <CurrentScore />
            </Col>
            <Col xs lg="2">
              <Button variant="primary">Bank</Button>
            </Col>
          </Row>
        </Col>
        <Col xs lg="2">
          <BankPlayers />
        </Col>
      </>
    );
  }
}

export default PlayGame;
