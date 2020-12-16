import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import './game-menu.scss';
import { changeLevel, changeGame, resetLevel } from '../../redux-app';
import updateGame from '../../utils';
import GameHelp from '../game-help';
import GameMenuLevel from '../game-menu-level';

const GameMenu: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  const gameState: IGameState = useSelector((state: IGameState) => state, shallowEqual);
  const changeLevelGame = React.useCallback((state: IGameState) => dispatch(changeLevel(state)), [
    dispatch,
  ]);

  const changeGameLevel = (newLevel: number) => {
    changeLevelGame({
      ...gameState,
      currentLevel: newLevel,
    });
  };

  const changeCurrentGame = React.useCallback((state: IGameState) => dispatch(changeGame(state)), [
    dispatch,
  ]);

  const changeGameCurrent = (game: IGame, games: IGame[]) => {
    changeCurrentGame({
      ...gameState,
      game,
      games,
    });
  };

  const resetLevelGame = React.useCallback((game: IGameState) => dispatch(resetLevel(game)), [
    dispatch,
  ]);

  const saveLevel = () => {
    localStorage.setItem('currentLevel', JSON.stringify(gameState.currentLevel));
  };

  const resetGameLevel = () => {
    resetLevelGame({
      ...gameState,
      currentLevel: 1,
      game: {
        ...gameState.game,
        menu: { ...gameState.game.menu, checked: false },
      },
      games: gameState.games.map(item => ({
        ...item,
        menu: { ...item.menu, checked: false },
      })),
    });
  };

  useEffect(() => {
    let cancelled = false;
    if (gameState.games.length === 0) {
      fetch('/info.json')
        .then(res => res.json())
        .then((result: IGame[]) => {
          if (!cancelled) {
            changeGameCurrent(
              updateGame(result[gameState.currentLevel - 1]),
              result.map((item: IGame) => updateGame(item))
            );
          }
        })
        .catch(() => {});
    } else {
      changeGameCurrent(gameState.games[gameState.currentLevel - 1], gameState.games);
    }
    saveLevel();
    return () => {
      cancelled = true;
    };
  }, [gameState.currentLevel]);

  if (gameState.games.length !== 0 && gameState.game.menu !== undefined) {
    return (
      <div className="menu">
        <GameMenuLevel
          games={gameState.games}
          currentLevel={gameState.currentLevel}
          changeGameLevel={changeGameLevel}
          resetGameLevel={resetGameLevel}
        />
        <GameHelp menu={gameState.game.menu} />
      </div>
    );
  }
  return <div className="menu">Loading...</div>;
};

export default GameMenu;
