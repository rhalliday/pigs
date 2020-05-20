import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import PlayerDisplay from "./PlayerDisplay";

function ListPlayer(props) {
  let players = props.players;
  let playerList = players.map((player) => {
    let clickHandler = (event) => {
      props.handleRemovePlayer(player.name);
    };
    return (
      <ListGroup.Item key={player.name} onClick={clickHandler}>
        <PlayerDisplay player={player} />
      </ListGroup.Item>
    );
  });
  return (
    <div>
      <h4>Players</h4>
      <ListGroup>{playerList}</ListGroup>
    </div>
  );
}

export default ListPlayer;
