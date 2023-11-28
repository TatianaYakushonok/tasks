'use strict';

(() => {
  const FIGURE_ENG = ['rock', 'scissors', 'paper'];
  const FIGURE_RU = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const lang =
      language === 'EN' || language === 'ENG' ? FIGURE_ENG : FIGURE_RU;

    return function start() {
      const randomNumber = getRandomIntInclusive(0, lang.length - 1);
      const computerFigure = lang[randomNumber];
      const str = prompt(`${lang.join(', ')}?`);
      let winner;

      if (str === null) return;

      // prettier-ignore
      const playerFigure = lang
          .filter((word) => !word.indexOf(str.toLowerCase()))
          .join('');

      if (!playerFigure) {
        alert('Введите корректное значение');
        return start();
      }

      switch (true) {
        case (computerFigure === 'камень' && playerFigure === 'ножницы') ||
          (computerFigure === 'ножницы' && playerFigure === 'бумага') ||
          (computerFigure === 'бумага' && playerFigure === 'камень'):
          alert(`
            Компьютер: ${computerFigure}
            Вы: ${playerFigure}
            Компьютер выиграл!`);
          result.computer++;
          break;
        case (computerFigure === 'ножницы' && playerFigure === 'камень') ||
          (computerFigure === 'бумага' && playerFigure === 'ножницы') ||
          (computerFigure === 'камень' && playerFigure === 'бумага'):
          alert(`
            Компьютер: ${computerFigure}
            Вы: ${playerFigure}
            Вы выиграли!`);
          result.player++;
          break;
        default:
          alert(`
            Компьютер: ${computerFigure}
            Вы: ${playerFigure}
            Ничья!`);
          break;
      }

      const play = confirm('Играем еще?');
      if (play) {
        return start();
      } else {
        if (result.computer < result.player) {
          winner = 'Вы победитель!';
        } else if (result.computer > result.player) {
          winner = 'Компьютер победитель!';
        } else {
          winner = 'Ничья!';
        }

        alert(`
          Результат игры:
          ---------------------------
          Компьютер: ${result.computer}
          Вы: ${result.player}
          ---------------------------
          ${winner}`);
        return;
      }
    };
  };

  window.RPS = game;
})();
