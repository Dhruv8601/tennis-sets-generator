import { actionTypes as at } from "./constants";

export interface Player {
  name: string;
  ability: string;
  active: boolean;
}

// export function fetchPlayersBeginAction() {
//     return (dispatch: any) => {
//         fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
//             return res.json()
//     }).then( json => {
//         console.log(json);
//         const players = json.map((t: any) => {
//             const player: Player = {name: t.title, ability: t.body}
//             return player;
//         })
//         dispatch(fetchPlayersSuccessAction(players)
//         )})
//     }
// }

export const fetchPlayersBeginAction = () => {
  // return dispatch(
  //     fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
  //         dispatch(fetchPlayersSuccessAction(([{name: 'Chris', ability: "Nothing"}]))
  //     )})
  // )
  return {
    type: at.FETCH_PLAYERS_BEGIN,
  };
};

export const fetchPlayersSuccessAction = (players: Player[]) => {
  return {
    type: at.FETCH_PLAYERS_SUCCESS,
    payload: players,
  };
};

export const fetchAllPlayersAction = () => {
  return {
    type: at.FETCH_ALL_PLAYERS,
  };
};

export const fetchActivePlayersAction = () => {
  return {
    type: at.FETCH_ACTIVE_PLAYERS,
  };
};

export const addPlayerAction = (player: Player) => {
  return {
    type: at.ADD_PLAYER,
    payload: player,
  };
};

export const removePlayerAction = (name: string) => {
  return {
    type: at.REMOVE_PLAYER,
    payload: name,
  };
};

export const toggleActiveAction = (player: Player) => {
  return {
    type: at.TOGGLE_ACTIVE,
    payload: player,
  };
};

export const toggleInactiveAction = (player: Player) => {
  return {
    type: at.TOGGLE_INACTIVE,
    payload: player,
  };
};
