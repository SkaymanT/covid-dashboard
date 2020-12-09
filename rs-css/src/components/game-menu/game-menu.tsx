import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import './game-menu.scss';
import GameHelp from '../game-help';
import GameMenuLevel from '../game-menu-level';
import { changeLevel, changeGame, resetLevel } from '../../redux-store';
import { updateGame } from '../../utils';

export const GameMenu: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  const gameState: IGameState = useSelector((state: IGameState) => state, shallowEqual);
  const changeLevelGame = React.useCallback(
    (gameState: IGameState) => dispatch(changeLevel(gameState)),
    [dispatch]
  );

  const changeGameLevel = (newLevel: number) => {
    changeLevelGame({
      ...gameState,
      currentLevel: newLevel,
    });
  };

  const changeCurrentGame = React.useCallback(
    (gameState: IGameState) => dispatch(changeGame(gameState)),
    [dispatch]
  );

  const changeGameCurrent = (game: IGame, games: IGame[]) => {
    changeCurrentGame({
      ...gameState,
      game: game,
      games: games,
    });
  };

  const resetLevelGame = React.useCallback((game: IGameState) => dispatch(resetLevel(game)), [
    dispatch,
  ]);

  const resetGameLevel = () => {
    resetLevelGame({
      ...gameState,
      currentLevel: 1,
      game: {
        ...gameState.game,
        menu: { ...gameState.game.menu, checked: false },
      },
      games: gameState.games.map((item) => {
        return {
          ...item,
          menu: { ...item.menu, checked: false },
        };
      }),
    });
  };

  useEffect(() => {
    let cancelled = false;
    if (gameState.games.length === 0) {
      fetch('assets/info.json')
        .then((res) => res.json())
        .then((result) => {
          if (!cancelled) {
            changeGameCurrent(
              updateGame(result[gameState.currentLevel - 1]),
              result.map((item: any) => updateGame(item))
            );
          }
        });
    } else {
      changeGameCurrent(gameState.games[gameState.currentLevel - 1], gameState.games);
    }
    saveLevel();
    return () => {
      cancelled = true;
    };
  }, [gameState.currentLevel]);

  const saveLevel = () => {
    localStorage.setItem(`currentLevel`, JSON.stringify(gameState.currentLevel));
  };

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
  } else {
    return <div className="menu">Loading...</div>;
  }
};
