import { actionTypes } from '../actions';

const currentGame = localStorage.getItem('currentLevel');

const initialState: IGameState = {
  currentLevel: currentGame !== null ? +JSON.parse(currentGame) : 1,
  games: [] as IGame[],
  game: {} as IGame,
} as IGameState;

const reducer = (state: IGameState = initialState, action: GameAction): IGameState => {
  switch (action.type) {
    case actionTypes.CHANGE_LEVEL:
      return {
        ...state,
        currentLevel: action.payload.currentLevel,
      };
    case actionTypes.CHANGE_GAME:
      return {
        ...state,
        game: action.payload.game,
        games: action.payload.games,
      };
    case actionTypes.CHANGE_FOCUS:
      return {
        ...state,
        game: action.payload.game,
      };
    case actionTypes.CHANGE_CHECK:
      return {
        ...state,
        currentLevel: action.payload.currentLevel,
        game: action.payload.game,
        games: action.payload.games,
      };
    case actionTypes.RESET_LEVEL:
      return {
        ...state,
        currentLevel: action.payload.currentLevel,
        game: action.payload.game,
        games: action.payload.games,
      };
    case actionTypes.CHANGE_HELP:
      return {
        ...state,
        currentLevel: action.payload.currentLevel,
        game: action.payload.game,
        games: action.payload.games,
      };
    default:
      return {
        ...state,
      };
  }
  return state;
};

export default reducer;
