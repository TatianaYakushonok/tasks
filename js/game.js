'use strict';

(() => {
  const FIGURE_ENG = ['rock', 'scissors', 'paper'];
  const FIGURE_RU = ['камень', 'ножницы', 'бумага'];
  const i18Obj = {
    en: {
      figure: FIGURE_ENG,
      computer: 'PC',
      player: 'You',
      computerWinner: 'PC winner',
      playerWinner: 'You winner',
      correctValue: 'Enter the correct value',
      draw: 'Draw',
      playGame: 'Playing more',
      res: 'Game Result',
    },
    ru: {
      figure: FIGURE_RU,
      computer: 'Компьютер',
      player: 'Вы',
      computerWinner: 'Компьютер победитель',
      playerWinner: 'Вы победитель',
      correctValue: 'Введите корректное значение',
      draw: 'Ничья',
      playGame: 'Играем еще',
      res: 'Результат игры:',
    },
  };

  const getRandomIntInclusive = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const lang = language === 'EN' || language === 'ENG' ? 'en' : 'ru';
    const {
      figure,
      computer,
      player,
      computerWinner,
      playerWinner,
      correctValue,
      draw,
      playGame,
      res,
    } = i18Obj[lang];

    return function start() {
      const randomNumber = getRandomIntInclusive(0, figure.length - 1);
      const computerFigure = figure[randomNumber];
      const str = prompt(`${figure.join(', ')}?`);
      let winner;

      if (str === null) return;

      // prettier-ignore
      const playerFigure = figure
          .filter((word) => !word.indexOf(str.toLowerCase()))
          .join('');

      if (!playerFigure) {
        alert(correctValue);
        return start();
      }

      switch (true) {
        case computerFigure === playerFigure:
          alert(`
            ${computer}: ${computerFigure}
            ${player}: ${playerFigure}
            ${draw}!`);
          break;
        case (['камень', 'rock'].includes(computerFigure) &&
          ['ножницы', 'scissors'].includes(playerFigure)) ||
          (['ножницы', 'scissors'].includes(computerFigure) &&
            ['бумага', 'paper'].includes(playerFigure)) ||
          (['бумага', 'paper'].includes(computerFigure) &&
            ['камень', 'rock'].includes(playerFigure)):
          alert(`
            ${computer}: ${computerFigure}
            ${player}: ${playerFigure}
            ${computerWinner}!`);
          result.computer++;
          break;
        default:
          alert(`
            ${computer}: ${computerFigure}
            ${player}: ${playerFigure}
            ${playerWinner}!`);
          result.player++;
          break;
      }

      const play = confirm(`${playGame}?`);
      if (play) {
        return start();
      } else {
        if (result.computer < result.player) {
          winner = `${playerWinner}!`;
        } else if (result.computer > result.player) {
          winner = `${computerWinner}!`;
        } else {
          winner = `${draw}!`;
        }

        alert(`
          ${res}:
          ---------------------------
          ${computer}: ${result.computer}
          ${player}: ${result.player}
          ---------------------------
          ${winner}`);
        return;
      }
    };
  };

  window.RPS = game;
})();
