import React from "react";
import Card from "react-bootstrap/Card";

class CurrentPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card>
        <Card.Header>Current Score</Card.Header>
        <Card.Body>10</Card.Body>
      </Card>
    );
  }
}

export default CurrentPlayer;
