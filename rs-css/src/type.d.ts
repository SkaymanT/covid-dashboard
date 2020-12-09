interface IGameState {
  currentLevel: number;
  games: IGame[];
  game: IGame;
}

interface IGame {
  menu: IMenu;
  gameLevel: IGameLevel;
}

interface IGameLevel {
  id: string;
  title: string;
  boardMarkup: IBoardMarkup[];
  selector: string[];
}

interface IBoardMarkup {
  element: string[][];
  focus: boolean[];
  active: boolean[];
}

interface IElement {
  tag: string;
  class: string;
  id: string;
}

interface IMenu {
  id: string;
  checked: boolean;
  ishelp: boolean;
  name: string;
  title: string;
  syntax: string;
  hint: IHint;
  examples: IExamples[];
}

interface IHint {
  textOne: string;
  selectorOne: string;
  textTwo: string;
  selectorTwo: string;
  textThree: string;
  selectorThree: string;
  textFour: string;
  selectorFour: string;
  textFive: string;
  selectorFive: string;
}

interface IExamples {
  textOne: string;
  selectorOne: string;
  textTwo: string;
  selectorTwo: string;
  textThree: string;
  selectorThree: string;
}

type GameAction = {
  type: string;
  payload: IGameState;
};

type DispatchType = (args: GameAction) => GameAction;
