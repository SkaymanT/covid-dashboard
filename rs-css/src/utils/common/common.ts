export const updateGame = (game: any) => {
  return {
    ...game,
    gameLevel: {
      ...game.gameLevel,
      boardMarkup: game.gameLevel.boardMarkup.map((item: any) => {
        return {
          ...item,
          focus: [false, false, false],
        };
      }),
    },
  };
};
