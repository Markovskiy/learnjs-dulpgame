import '../css/main.css';

import Circle from './components/Circle.js';
import Interface from './components/Interface.js';
import Game from './components/game.js';

//const circle = new Circle({
//  name: '1',
//  colorCount: 5,
//  colorSlice: [45, 45, 90, 150, 30],
//  colors: ['#26C6DA', '#D4E157', '#FF7043', '#7E57C2', '#B2DFDB'],
//  circleSpeed: 1,
//  bulletSpeed: 1,
//});

const game = new Game();
//const userInterface = new Interface();

const startButton = document.querySelector('.btn__start');

//circle.renderSlices();
//game.initGame();
//startButton.addEventListener('click', userInterface.showGameScreen.bind(userInterface));
startButton.addEventListener('click', game.initGame.bind(game));
