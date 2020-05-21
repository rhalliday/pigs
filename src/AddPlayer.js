import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";

import avatar1 from "./img/avatar-1.jpg";
import avatar2 from "./img/avatar-2.jpg";
import avatar3 from "./img/avatar-3.jpg";
import avatar4 from "./img/avatar-4.jpg";
import avatar5 from "./img/avatar-5.jpg";
import avatar6 from "./img/avatar-6.jpg";
import avatar7 from "./img/avatar-7.jpg";
import avatar8 from "./img/avatar-8.jpg";
import avatar9 from "./img/avatar-9.png";
import avatar10 from "./img/avatar-10.jpg";
import avatar11 from "./img/avatar-11.jpg";
import avatar12 from "./img/avatar-12.jpg";

class AddPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerAvatar: avatar2,
    };
    this.playerRef = React.createRef();
    this.HandleAvatarSelect = this.HandleAvatarSelect.bind(this);
    this.HandleKeyPress = this.HandleKeyPress.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }

  getAvatars() {
    const images = [
      { name: "avatar-1.jpg", image: avatar1 },
      { name: "avatar-2.jpg", image: avatar2 },
      { name: "avatar-3.jpg", image: avatar3 },
      { name: "avatar-4.jpg", image: avatar4 },
      { name: "avatar-5.jpg", image: avatar5 },
      { name: "avatar-6.jpg", image: avatar6 },
      { name: "avatar-7.jpg", image: avatar7 },
      { name: "avatar-8.jpg", image: avatar8 },
      { name: "avatar-9.jpg", image: avatar9 },
      { name: "avatar-10.jpg", image: avatar10 },
      { name: "avatar-11.jpg", image: avatar11 },
      { name: "avatar-12.jpg", image: avatar12 },
    ];

    return images.map((img) => {
      return (
        <Dropdown.Item
          href="#"
          key={img.name}
          eventKey={img.image}
          onSelect={this.HandleAvatarSelect}
        >
          <Image src={img.image} width="70" height="70" roundedCircle />
        </Dropdown.Item>
      );
    });
  }
  HandleAvatarSelect(eventKey) {
    this.setState({
      playerAvatar: eventKey,
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
          <DropdownButton
            variant="outline-secondary"
            title={
              <Image
                src={this.state.playerAvatar}
                width="70"
                height="70"
                roundedCircle
              />
            }
            id="input-group-dropdown-1"
          >
            {images}
          </DropdownButton>
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

export default AddPlayer;
