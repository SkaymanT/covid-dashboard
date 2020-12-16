import * as actionTypes from './actionTypes';

export function changeLevel(game: IGameState): GameAction {
  const action: GameAction = {
    type: actionTypes.CHANGE_LEVEL,
    payload: game,
  };

  return action;
}

export function changeCheck(game: IGameState): GameAction {
  const action: GameAction = {
    type: actionTypes.CHANGE_CHECK,
    payload: game,
  };

  return action;
}

export function changeFocus(game: IGameState): GameAction {
  const action: GameAction = {
    type: actionTypes.CHANGE_FOCUS,
    payload: game,
  };

  return action;
}

export function changeGame(game: IGameState): GameAction {
  const action: GameAction = {
    type: actionTypes.CHANGE_GAME,
    payload: game,
  };

  return action;
}

export function resetLevel(game: IGameState): GameAction {
  const action: GameAction = {
    type: actionTypes.RESET_LEVEL,
    payload: game,
  };

  return action;
}

export function changeHelp(game: IGameState): GameAction {
  const action: GameAction = {
    type: actionTypes.CHANGE_HELP,
    payload: game,
  };

  return action;
}
