const updateGame = (game: IGame): IGame => ({
  ...game,
  gameLevel: {
    ...game.gameLevel,
    boardMarkup: game.gameLevel.boardMarkup.map(item => ({
      ...item,
      focus: [false, false, false],
    })),
  } as IGameLevel,
} as IGame);

export default updateGame;
