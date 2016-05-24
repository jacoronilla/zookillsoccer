/**
 * Create the game. Import the primary classes, and 'composit'
 * the overall Game object out of instances of the classes.
 */
import GamePiece from './GamePiece.js';
//GamePiece inheritance
import Screen from './Screen.js';
import Info from './Info.js';
import Character from './Character.js';
import Area from './Area.js';
//Screen inheritance
import StartScreen from './StartScreen.js';
import GameScreen from './GameScreen.js';
import EndScreen from './EndScreen.js';
//Info inheritance
import Text from './Text.js';
import DynamicText from './DynamicText.js';
import Score from './Score.js';
import StaticText from './StaticText.js';
import Identity from './Identity.js';
import Instructions from './Instructions.js';
//Character inheritance
import Trump from './Trump.js';
import Player from './Player.js';
import Animal from './Animal.js';
import Health from './Health.js';
import Lion from './Lion.js';
import Tiger from './Tiger.js';
import Bear from './Bear.js';
import Gorilla from './Gorilla.js';
//Area inheritance
import Cage from './Cage.js';
import AnimalArea from './AnimalArea.js';
import PlayerArea from './PlayerArea.js';

/**
 * Set up the game.
 */

 /**
  * TESTBED
  */

// TEST GamePiece
var game = new GamePiece({name: "Game Time"});
  console.log(game.getName());

// TEST Screens
var aScreen = new Screen({name: "An Open Screen"});
  console.log(aScreen.getName());
var myStartScreen = new StartScreen({name: "Start Screen"});
  console.log(myStartScreen.getName());
var myGameScreen = new GameScreen({name: "My Game"});
  console.log(myGameScreen.getName());
var theEnd = new EndScreen({name: "The End: scrub"});
  console.log(theEnd.getName());

// TEST Info Objects
var myInfo = new Info ({name: "Welcome to ZooKill!"});
  console.log(myInfo.getName());
var myText = new Text ({name: "Blah Blah Blah"});
  console.log(myText.getName());
var myDynamicText = new DynamicText ({name: "woooo Dynamic~"});
  console.log(myDynamicText.getName());
var myScore = new Score ({name: "SCOREEE: You Suck"});
  console.log(myScore.getName());
var myStatic = new StaticText ({name:"S-S-Static!"})
  console.log(myStatic.getName());
var myIdentity = new Identity ({name: "Where am I?"});
  console.log(myIdentity.getName());
var myInstructions = new Instructions({name: "TODO"});
  console.log(myInstructions.getName());

// TEST Characters
var myCharacter = new Character ({name: "New Character"});
  console.log(myCharacter.getName());
var noTrump = new Trump ({name: "Forest Trump or Donald Gump"});
  console.log(noTrump.getName());
var newPlayer = new Player ({name: "New Player"});
  console.log(newPlayer.getName());
var myAnimal = new Animal ({name: "animals galore"});
  console.log(myAnimal.getName());
var myHealth = new Health ({name: "no game, no life"});
  console.log(myHealth.getName());
var myLion = new Lion ({name: "Mufasa"});
  console.log(myLion.getName());
var myTiger = new Tiger ({name: "Tigger"});
  console.log(myTiger.getName());
var myBear = new Bear ({name: "Baloo"});
  console.log(myBear.getName());
var myGorilla = new Gorilla ({name: "Spunky"});
  console.log(myGorilla.getName());

// TEST Areas
var myArea = new Area ({name: "Area here"});
  console.log(myArea.getName());
var myCage = new Cage ({name: "lemme out!"});
  console.log(myCage.getName());
var myAnimalArea = new AnimalArea ({name: "Where the animals roam"});
  console.log(myAnimalArea.getName());
var myPlayerArea = new PlayerArea ({name: "You move HERE"});
  console.log(myPlayerArea.getName());
//========= END TESTBED =========

//var area = new Area(config);
//console.log(area.getName());

//var character = new Character(config);
//var player = new Player(config);
