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
        case (computerFigure === 'камень' && playerFigure === 'ножницы') ||
          (computerFigure === 'rock' && playerFigure === 'scissors') ||
          (computerFigure === 'ножницы' && playerFigure === 'бумага') ||
          (computerFigure === 'scissors' && playerFigure === 'paper') ||
          (computerFigure === 'бумага' && playerFigure === 'камень') ||
          (computerFigure === 'paper' && playerFigure === 'rock'):
          alert(`
            ${computer}: ${computerFigure}
            ${player}: ${playerFigure}
            ${computerWinner}!`);
          result.computer++;
          break;
        case (computerFigure === 'ножницы' && playerFigure === 'камень') ||
          (computerFigure === 'scissors' && playerFigure === 'rock') ||
          (computerFigure === 'бумага' && playerFigure === 'ножницы') ||
          (computerFigure === 'paper' && playerFigure === 'scissors') ||
          (computerFigure === 'камень' && playerFigure === 'бумага') ||
          (computerFigure === 'rock' && playerFigure === 'paper'):
          alert(`
            ${computer}: ${computerFigure}
            ${player}: ${playerFigure}
            ${playerWinner}!`);
          result.player++;
          break;
        default:
          alert(`
            ${computer}: ${computerFigure}
            ${player}: ${playerFigure}
            ${draw}!`);
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
