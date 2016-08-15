import Game from './components/Game.js';
import './../css/_normalize.css';
import './../css/app.css';
import viewportUnitsBuggyfill from 'viewport-units-buggyfill';

const xhr = new XMLHttpRequest();
xhr.open('GET', '/data/levels.json', true);
xhr.send();

xhr.onreadystatechange = () => {
	if (xhr.readyState !== 4) return; // TODO: страница загрузки
	if (xhr.status === 200) {
		viewportUnitsBuggyfill.init();
		const game = new Game();
		game.levels = JSON.parse(xhr.responseText);
		game.checkLocation();
		window.addEventListener('hashchange', game.checkLocation.bind(game));
		document.body.addEventListener('click', game.onClick.bind(game));
		game.interface.gameScreen.addEventListener('click', game.fire.bind(game));
		document.body.addEventListener('keydown', game.initKeyboardEvents.bind(game));
	} else {
		console.log(`${xhr.status}: ${xhr.statusText}`); // TODO: страница ошибки
	}
};
