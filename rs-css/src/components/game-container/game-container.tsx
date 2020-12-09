import * as React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Typography, message, Modal } from 'antd';
import './game-container.scss';
import GameEditor from '../game-editor';
import GameTable from '../game-table';
import { changeCheck, changeHelp } from '../../redux-store';

export const GameContainer: React.FC = () => {
  const { Title } = Typography;
  const dispatch: Dispatch = useDispatch();
  const gameState: IGameState = useSelector((state: IGameState) => state, shallowEqual);

  const changeCheckLevelGame = React.useCallback(
    (gameState: IGameState) => dispatch(changeCheck(gameState)),
    [dispatch]
  );

  const error = () => {
    message.error('Incorrect answer');
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
    } else {
      error();
    }
  };

  const isFinishedGame = (gameState: IGameState) => {
    let isFinished = true;
    gameState.games.forEach((element, index) => {
      if (!element.menu.checked && index !== gameState.currentLevel - 1) {
        isFinished = false;
        return false;
      }
      return false;
    });
    return isFinished;
  };

  const changeFocusSelector = React.useCallback(
    (gameState: IGameState) => dispatch(changeCheck(gameState)),
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

  const changeHelpGame = React.useCallback(
    (gameState: IGameState) => dispatch(changeHelp(gameState)),
    [dispatch]
  );

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
  } else {
    return (
      <div className="game-container">
        <div className="game-container-title">
          <Title level={1}>Loading...</Title>
        </div>
      </div>
    );
  }
};
