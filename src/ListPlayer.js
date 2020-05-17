import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function ListPlayer(props) {
  let players = props.players;
  let playerList = players.map((player) => (
    <ListGroup.Item key={player.name} onClick={props.handleRemovePlayer}>
      {player.name}
    </ListGroup.Item>
  ));
  return (
    <div>
      Players
      <ListGroup>{playerList}</ListGroup>
    </div>
  );
}

export default ListPlayer;
