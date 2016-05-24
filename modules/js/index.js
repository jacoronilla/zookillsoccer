/**
 * Create the game. Import the primary classes, and 'composit'
 * the overall Game object out of instances of the classes.
 */
import GamePiece from './GamePiece.js';
import Screen from './Screen.js';
import StartScreen from './StartScreen.js';
import GameScreen from './GameScreen.js';
import EndScreen from './EndScreen.js';

/**
 * Set up the game.
 */
var config = {
    name:'Forest Trump or Donald Gump rulz'
}

// Make some test game objects
var game = new GamePiece(config);
console.log(game.getName());

var configScreen1 = {
  name: 'Opening Screen'
}
var ascreen = new Screen(configScreen1);
console.log(ascree.getName());

//var area = new Area(config);
//console.log(area.getName());

//var character = new Character(config);
//var player = new Player(config);
