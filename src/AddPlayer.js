import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Form className="add-player-form" onSubmit={this.props.onSubmit}>
        <Form.Group controlId="formNewPlayer">
          <Form.Control type="text" placeholder="Enter player name" />
        </Form.Group>
        <Button variant="primary" onClick={this.props.onSubmit}>
          Add Player
        </Button>
      </Form>
    );
  }
}

export default AddPlayer;
