import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Avatars from "./Avatar";

class AddPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerAvatar: Avatars[1].image,
      showModal: false,
    };
    this.playerRef = React.createRef();
    this.HandleAvatarSelect = this.HandleAvatarSelect.bind(this);
    this.HandleKeyPress = this.HandleKeyPress.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.HandleImageSelect = this.HandleImageSelect.bind(this);
    this.avatars = chunkArray(Avatars, 2);
  }

  getAvatars() {
    let i = 0;
    return this.avatars.map((avatars) => {
      let items = avatars.map((avatar) => {
        let selectHelper = () => this.HandleAvatarSelect(avatar.image);
        return (
          <Col key={avatar.name}>
            <Image
              onClick={selectHelper}
              src={avatar.image}
              width="70"
              height="70"
              roundedCircle
            />
          </Col>
        );
      });
      let rowKey = "imageSelectRow-" + i++;
      return <Row key={rowKey}>{items}</Row>;
    });
  }
  HandleImageSelect() {
    this.setState({
      showModal: true,
    });
  }
  HandleAvatarSelect(eventKey) {
    this.setState({
      playerAvatar: eventKey,
      showModal: false,
    });
  }
  HandleKeyPress(target) {
    if (target.charCode === 13) {
      return this.HandleSubmit();
    }
  }
  HandleSubmit() {
    let playerName = this.playerRef.current.value;
    if (playerName.length === 0) {
      return;
    }
    let player = {
      name: playerName,
      score: 0,
      avatar: this.state.playerAvatar,
    };
    this.playerRef.current.value = "";
    return this.props.onSubmit(player);
  }
  render() {
    let images = this.getAvatars();
    return (
      <>
        <InputGroup className="mb-3">
          <Image
            src={this.state.playerAvatar}
            width="70"
            height="70"
            roundedCircle
            onClick={this.HandleImageSelect}
          />
          <Modal show={this.state.showModal}>
            <Modal.Body>{images}</Modal.Body>
          </Modal>
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            placeholder="Enter player name"
            id="player-input"
            ref={this.playerRef}
            onKeyPress={this.HandleKeyPress}
          />
          <InputGroup.Append>
            <Button variant="primary" onClick={this.HandleSubmit}>
              Add Player
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </>
    );
  }
}

function chunkArray(myArray, chunk_size) {
  let results = [];
  let localArray = [];
  myArray.forEach((element) => localArray.push(element));
  while (localArray.length) {
    results.push(localArray.splice(0, chunk_size));
  }
  return results;
}

export default AddPlayer;
