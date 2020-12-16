import { Typography, Modal } from 'antd';
import * as React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import './game-container.scss';
import { changeCheck, changeHelp } from '../../redux-app';
import GameEditor from '../game-editor';
import GameTable from '../game-table';

const GameContainer: React.FC = () => {
  const { Title } = Typography;
  const dispatch: Dispatch = useDispatch();
  const gameState: IGameState = useSelector((state: IGameState) => state, shallowEqual);

  const changeCheckLevelGame = React.useCallback(
    (state: IGameState) => dispatch(changeCheck(state)),
    [dispatch]
  );
  const isFinishedGame = (state: IGameState) => {
    let isFinished = true;
    state.games.forEach((element, index) => {
      if (!element.menu.checked && index !== state.currentLevel - 1) {
        isFinished = false;
        return false;
      }
      return true;
    });
    return isFinished;
  };

  const changeCheckCurrent = (value: string) => {
    if (value === gameState.game.gameLevel.selector[0]) {
      if (isFinishedGame(gameState)) {
        Modal.success({
          content: 'You finished!',
        });
      }
      changeCheckLevelGame({
        ...gameState,
        currentLevel:
          gameState.currentLevel < gameState.games.length
            ? gameState.currentLevel + 1
            : gameState.currentLevel,
        game: {
          ...gameState.game,
          menu: { ...gameState.game.menu, checked: true },
        },

        games: [
          ...gameState.games.slice(0, gameState.currentLevel - 1),
          {
            ...gameState.game,
            menu: { ...gameState.game.menu, checked: true },
          },
          ...gameState.games.slice(gameState.currentLevel),
        ],
      });
    }
  };

  const changeFocusSelector = React.useCallback(
    (state: IGameState) => dispatch(changeCheck(state)),
    [dispatch]
  );

  const changeFocus = (value: IBoardMarkup[]) => {
    changeFocusSelector({
      ...gameState,
      game: {
        ...gameState.game,
        gameLevel: { ...gameState.game.gameLevel, boardMarkup: value },
      },
    });
  };

  const changeHelpGame = React.useCallback((state: IGameState) => dispatch(changeHelp(state)), [
    dispatch,
  ]);

  const changeHelpLevelGame = () => {
    changeHelpGame({
      ...gameState,
      game: {
        ...gameState.game,
        menu: { ...gameState.game.menu, ishelp: true },
      },

      games: [
        ...gameState.games.slice(0, gameState.currentLevel - 1),
        {
          ...gameState.game,
          menu: { ...gameState.game.menu, ishelp: true },
        },
        ...gameState.games.slice(gameState.currentLevel),
      ],
    });
  };

  if (gameState.game.gameLevel !== undefined) {
    return (
      <div className="game-container">
        <div className="game-container-title">
          <Title level={1}>{gameState.game.gameLevel.title}</Title>
        </div>
        <GameTable changeFocus={changeFocus} boardMarkup={gameState.game.gameLevel.boardMarkup} />
        <GameEditor
          gameLevel={gameState.game.gameLevel}
          currentLevel={gameState.game.menu.checked ? -1 : gameState.currentLevel}
          changeHelp={changeHelpLevelGame}
          changeCheck={changeCheckCurrent}
          changeFocus={changeFocus}
        />
      </div>
    );
  }
  return (
    <div className="game-container">
      <div className="game-container-title">
        <Title level={1}>Loading...</Title>
      </div>
    </div>
  );
};

export default GameContainer;
