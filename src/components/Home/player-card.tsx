import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import 'font-awesome/css/font-awesome.min.css';

import {
  removePlayerAction,
  toggleActiveAction,
  toggleInactiveAction,
} from "../../store/Players/actions";

interface Player {
  name: string;
  ability: string;
  active: boolean;
}

interface PlayerProps {
  name: string;
  ability: string;
  active: boolean;
  removePlayer: (name: string) => void;
  toggleActive: (player: Player) => void;
  toggleInactive: (player: Player) => void;
  id: number;
}

const PlayerCard = (props: PlayerProps) => {
  const handleRemove = () => {
    props.removePlayer(props.name);
  };

  const toggleActive = () => {
    if (props.active) {
      props.toggleInactive({
        name: props.name,
        ability: props.ability,
        active: props.active,
      });
    } else {
      props.toggleActive({
        name: props.name,
        ability: props.ability,
        active: props.active,
      });
    }
  };

  return (
    <Container className={props.active ? "active" : "inactive"}>
      <PlayerName>{props.name}</PlayerName>

      <PlayerAbility>{props.ability}</PlayerAbility>
      <Icon className={"toggle " + (props.active ? "fa fa-check-circle btn btn-success" : "fa fa-times-circle btn btn-danger")} onClick={toggleActive}/>
      <Icon className="remove fa fa-trash fa-2x btn btn-danger" onClick={handleRemove}/>
    </Container>
  );
};

function mapDispatchToProps(dispatch: any) {
  return {
    removePlayer: (name: string): void => {
      dispatch(removePlayerAction(name));
    },

    toggleActive: (player: Player): void => {
      dispatch(toggleActiveAction(player));
    },

    toggleInactive: (player: Player): void => {
      dispatch(toggleInactiveAction(player));
    },
  };
}

export default connect(null, mapDispatchToProps)(PlayerCard);

const Container = styled.div`
  display: block;
  //border-radius: 20px;
  color: black;
  background-color: lightgrey;

  height: fit-content;
  word-wrap: break-word;

  padding: 20px;
  padding-right: 10px;
  z-index: 1000;

  width: 100%;
  max-width: 800px;

  margin: auto;

  //margin-bottom: 20px;

  //box-shadow: 0px 0px 10px 10px rgba(0,0,0,0.8);

  &.active {
    //background-color: green;
    //background-image: linear-gradient(0deg, green 10%, lightgrey 40%);
    border: 2px solid green;
  }

  &.inactive {
    //background-color: red;
    //background-image: linear-gradient(0deg, red 10%, lightgrey 40%);
    border: 2px solid red;
  }
`;

const PlayerName = styled.label`
  display: inline-block;
  margin-right: 10vw;
  width: 20%;

  font-weight: bold;

  margin-right: 5%;

  word-break: break-all;
`;

const PlayerAbility = styled.label`
  display: inline-block;
  width: 30%;

  margin-right: 20%;
`;

const Icon = styled.i`
  display: inline;
  padding: 1% 2%;
  font-size: 20px;

  &.toggle {
    margin-right: 20px;
  }

`;
