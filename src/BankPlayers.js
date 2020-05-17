import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class BankPlayers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          <ListGroup>
            <ListGroup.Item>Amber</ListGroup.Item>
            <ListGroup.Item>Rob</ListGroup.Item>
            <ListGroup.Item>Jen</ListGroup.Item>
            <ListGroup.Item>Imogen</ListGroup.Item>
            <ListGroup.Item>Grandma</ListGroup.Item>
          </ListGroup>
        </div>
      </>
    );
  }
}

export default BankPlayers;
