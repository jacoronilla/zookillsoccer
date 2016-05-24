(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Animal.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Character objects that Player is fighting against
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Animal = function (_Character) {
  _inherits(Animal, _Character);

  function Animal(config) {
    _classCallCheck(this, Animal);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Animal).call(this, config));
  }

  return Animal;
}(_Character3.default);

exports.default = Animal;
;

},{"./Character.js":6,"./GamePiece.js":9}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Area2 = require('./Area.js');

var _Area3 = _interopRequireDefault(_Area2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AnimalArea.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game area where Animal objects move
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Area
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var AnimalArea = function (_Area) {
  _inherits(AnimalArea, _Area);

  function AnimalArea(config) {
    _classCallCheck(this, AnimalArea);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AnimalArea).call(this, config));
  }

  return AnimalArea;
}(_Area3.default);

exports.default = AnimalArea;
;

},{"./Area.js":3,"./GamePiece.js":9}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Area.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Generic game area object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Area = function (_GamePiece) {
  _inherits(Area, _GamePiece);

  function Area(config) {
    _classCallCheck(this, Area);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Area).call(this, config));
  }

  return Area;
}(_GamePiece3.default);

exports.default = Area;
;

},{"./GamePiece.js":9}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Bear.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Animal object that does xxx
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character, Animal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Bear = function (_Animal) {
  _inherits(Bear, _Animal);

  function Bear(config) {
    _classCallCheck(this, Bear);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Bear).call(this, config));
  }

  return Bear;
}(_Animal3.default);

exports.default = Bear;
;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":9}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Area2 = require('./Area.js');

var _Area3 = _interopRequireDefault(_Area2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game area that retains Animal objects
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Area
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Cage = function (_Area) {
  _inherits(Cage, _Area);

  function Cage(config) {
    _classCallCheck(this, Cage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Cage).call(this, config));
  }

  return Cage;
}(_Area3.default);

exports.default = Cage;
;

},{"./Area.js":3,"./GamePiece.js":9}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Character.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Generic game character object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Character = function (_GamePiece) {
  _inherits(Character, _GamePiece);

  function Character(config) {
    _classCallCheck(this, Character);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Character).call(this, config));
  }

  return Character;
}(_GamePiece3.default);

exports.default = Character;
;

},{"./GamePiece.js":9}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text2 = require('./Text.js');

var _Text3 = _interopRequireDefault(_Text2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * DynamicText.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Text that can be changed by user (e.g. input field), or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * updated by the game itself
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Info, Text
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var DynamicText = function (_Text) {
  _inherits(DynamicText, _Text);

  function DynamicText(config) {
    _classCallCheck(this, DynamicText);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DynamicText).call(this, config));
  }

  return DynamicText;
}(_Text3.default);

exports.default = DynamicText;
;

},{"./GamePiece.js":9,"./Info.js":14,"./Text.js":23}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * EndScreen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Generic Screen object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @import GamePiece, Screen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StartScreen = function (_Screen) {
  _inherits(StartScreen, _Screen);

  function StartScreen(config) {
    _classCallCheck(this, StartScreen);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(StartScreen).call(this, config));
  }

  return StartScreen;
}(_Screen3.default);

exports.default = StartScreen;

},{"./GamePiece.js":9,"./Screen.js":20}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * GamePiece.js
 * Basic Game object
 *
 * To make this work, you must be running the Babel transpiler,
 * and watching for changes in this file with browserify. Two
 * Terminal windows need to be open:
 * 1. one window where you typed the command "grunt"
 * 2. one window where you typed the command "npm start"
 */

var GamePiece = function () {
    function GamePiece(config) {
        _classCallCheck(this, GamePiece);

        //TODO: use super();
        this.name = config.name;
        this.uuid = this.setId();
    }

    /**
     * Generate a unique ID for every game object.
     * @link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */


    _createClass(GamePiece, [{
        key: 'setId',
        value: function setId() {
            var d = new Date().getTime();
            if (window.performance && typeof window.performance.now === "function") {
                d += performance.now(); //use high-precision timer if available
            }
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
            });
            return uuid;
        }

        /**
         * Return the given name of this object.
         */

    }, {
        key: 'getName',
        value: function getName() {
            return this.name;
        }

        /**
         * Return the unique id of this object.
         */

    }, {
        key: 'getId',
        value: function getId() {
            return this.uuid;
        }
    }]);

    return GamePiece;
}();

exports.default = GamePiece;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * GameScreen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Main game screen object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Screen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var GameScreen = function (_Screen) {
  _inherits(GameScreen, _Screen);

  function GameScreen(config) {
    _classCallCheck(this, GameScreen);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GameScreen).call(this, config));
  }

  return GameScreen;
}(_Screen3.default);

exports.default = GameScreen;

},{"./GamePiece.js":9,"./Screen.js":20}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Gorilla.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Animal object that does xxx
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character, Animal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Gorilla = function (_Animal) {
  _inherits(Gorilla, _Animal);

  function Gorilla(config) {
    _classCallCheck(this, Gorilla);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Gorilla).call(this, config));
  }

  return Gorilla;
}(_Animal3.default);

exports.default = Gorilla;
;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":9}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Health.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Character object that regenerate Player HP
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Health = function (_Character) {
  _inherits(Health, _Character);

  function Health(config) {
    _classCallCheck(this, Health);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Health).call(this, config));
  }

  return Health;
}(_Character3.default);

exports.default = Health;
;

},{"./Character.js":6,"./GamePiece.js":9}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText2 = require('./StaticText.js');

var _StaticText3 = _interopRequireDefault(_StaticText2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Identity.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Displays game logo or indentity
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Info, Text, StaticText
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Identity = function (_StaticText) {
  _inherits(Identity, _StaticText);

  function Identity(config) {
    _classCallCheck(this, Identity);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Identity).call(this, config));
  }

  return Identity;
}(_StaticText3.default);

exports.default = Identity;
;

},{"./GamePiece.js":9,"./Info.js":14,"./StaticText.js":22,"./Text.js":23}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Info.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Generic information object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Info = function (_GamePiece) {
  _inherits(Info, _GamePiece);

  function Info(config) {
    _classCallCheck(this, Info);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Info).call(this, config));
  }

  return Info;
}(_GamePiece3.default);

exports.default = Info;
;

},{"./GamePiece.js":9}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText2 = require('./StaticText.js');

var _StaticText3 = _interopRequireDefault(_StaticText2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Instructions.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Displays game instructions
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Info, Text, StaticText
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Instructions = function (_StaticText) {
  _inherits(Instructions, _StaticText);

  function Instructions(config) {
    _classCallCheck(this, Instructions);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Instructions).call(this, config));
  }

  return Instructions;
}(_StaticText3.default);

exports.default = Instructions;
;

},{"./GamePiece.js":9,"./Info.js":14,"./StaticText.js":22,"./Text.js":23}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Lion.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Animal object that does xxx
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character, Animal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Lion = function (_Animal) {
  _inherits(Lion, _Animal);

  function Lion(config) {
    _classCallCheck(this, Lion);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Lion).call(this, config));
  }

  return Lion;
}(_Animal3.default);

exports.default = Lion;
;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":9}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Player.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Character that user can control
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Player = function (_Character) {
  _inherits(Player, _Character);

  function Player(config) {
    _classCallCheck(this, Player);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, config));
  }

  return Player;
}(_Character3.default);

exports.default = Player;
;

},{"./Character.js":6,"./GamePiece.js":9}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Area2 = require('./Area.js');

var _Area3 = _interopRequireDefault(_Area2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * PlayerArea.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game area where the Player moves
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Area
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var PlayerArea = function (_Area) {
  _inherits(PlayerArea, _Area);

  function PlayerArea(config) {
    _classCallCheck(this, PlayerArea);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PlayerArea).call(this, config));
  }

  return PlayerArea;
}(_Area3.default);

exports.default = PlayerArea;
;

},{"./Area.js":3,"./GamePiece.js":9}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _DynamicText2 = require('./DynamicText');

var _DynamicText3 = _interopRequireDefault(_DynamicText2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Score.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Displays user game score
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Info, Text, DynamicText
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Score = function (_DynamicText) {
  _inherits(Score, _DynamicText);

  function Score(config) {
    _classCallCheck(this, Score);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Score).call(this, config));
  }

  return Score;
}(_DynamicText3.default);

exports.default = Score;
;

},{"./DynamicText":7,"./GamePiece.js":9,"./Info.js":14,"./Text.js":23}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Screen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Generic Screen object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Screen = function (_GamePiece) {
  _inherits(Screen, _GamePiece);

  function Screen(config) {
    _classCallCheck(this, Screen);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Screen).call(this, config)); //init 'parent' GamePiece
  }

  return Screen;
}(_GamePiece3.default);

exports.default = Screen;
;

},{"./GamePiece.js":9}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * StartScreen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Generic Screen object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Screen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StartScreen = function (_Screen) {
  _inherits(StartScreen, _Screen);

  function StartScreen(config) {
    _classCallCheck(this, StartScreen);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(StartScreen).call(this, config));
  }

  return StartScreen;
}(_Screen3.default);

exports.default = StartScreen;

},{"./GamePiece.js":9,"./Screen.js":20}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text2 = require('./Text.js');

var _Text3 = _interopRequireDefault(_Text2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * StaticText.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Creates text object that will not change
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Info, Text
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StaticText = function (_Text) {
  _inherits(StaticText, _Text);

  function StaticText(config) {
    _classCallCheck(this, StaticText);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(StaticText).call(this, config));
  }

  return StaticText;
}(_Text3.default);

exports.default = StaticText;
;

},{"./GamePiece.js":9,"./Info.js":14,"./Text.js":23}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info2 = require('./Info.js');

var _Info3 = _interopRequireDefault(_Info2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Text.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Creates a text-type Info object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Info
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Text = function (_Info) {
  _inherits(Text, _Info);

  function Text(config) {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Text).call(this, config));
  }

  return Text;
}(_Info3.default);

exports.default = Text;
;

},{"./GamePiece.js":9,"./Info.js":14}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Tiger.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Animal object that does xxx
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character, Animal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Tiger = function (_Animal) {
  _inherits(Tiger, _Animal);

  function Tiger(config) {
    _classCallCheck(this, Tiger);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tiger).call(this, config));
  }

  return Tiger;
}(_Animal3.default);

exports.default = Tiger;
;

},{"./Animal.js":1,"./Character.js":6,"./GamePiece.js":9}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Trump.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Character object that Player uses to feed Animals
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Trump = function (_Character) {
  _inherits(Trump, _Character);

  function Trump(config) {
    _classCallCheck(this, Trump);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Trump).call(this, config));
  }

  return Trump;
}(_Character3.default);

exports.default = Trump;
;

},{"./Character.js":6,"./GamePiece.js":9}],26:[function(require,module,exports){
'use strict';

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen = require('./Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Area = require('./Area.js');

var _Area2 = _interopRequireDefault(_Area);

var _StartScreen = require('./StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('./GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _EndScreen = require('./EndScreen.js');

var _EndScreen2 = _interopRequireDefault(_EndScreen);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _DynamicText = require('./DynamicText.js');

var _DynamicText2 = _interopRequireDefault(_DynamicText);

var _Score = require('./Score.js');

var _Score2 = _interopRequireDefault(_Score);

var _StaticText = require('./StaticText.js');

var _StaticText2 = _interopRequireDefault(_StaticText);

var _Identity = require('./Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

var _Instructions = require('./Instructions.js');

var _Instructions2 = _interopRequireDefault(_Instructions);

var _Trump = require('./Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('./Player.js');

var _Player2 = _interopRequireDefault(_Player);

var _Animal = require('./Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

var _Health = require('./Health.js');

var _Health2 = _interopRequireDefault(_Health);

var _Lion = require('./Lion.js');

var _Lion2 = _interopRequireDefault(_Lion);

var _Tiger = require('./Tiger.js');

var _Tiger2 = _interopRequireDefault(_Tiger);

var _Bear = require('./Bear.js');

var _Bear2 = _interopRequireDefault(_Bear);

var _Gorilla = require('./Gorilla.js');

var _Gorilla2 = _interopRequireDefault(_Gorilla);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _AnimalArea = require('./AnimalArea.js');

var _AnimalArea2 = _interopRequireDefault(_AnimalArea);

var _PlayerArea = require('./PlayerArea.js');

var _PlayerArea2 = _interopRequireDefault(_PlayerArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Set up the game.
 */

/**
 * TESTBED
 */

// TEST GamePiece

//Screen inheritance

//GamePiece inheritance
var game = new _GamePiece2.default({ name: "Game Time" });
//Area inheritance

//Character inheritance

//Info inheritance
/**
 * Create the game. Import the primary classes, and 'composit'
 * the overall Game object out of instances of the classes.
 */

console.log(game.getName());

// TEST Screens
var aScreen = new _Screen2.default({ name: "An Open Screen" });
console.log(aScreen.getName());
var myStartScreen = new _StartScreen2.default({ name: "Start Screen" });
console.log(myStartScreen.getName());
var myGameScreen = new _GameScreen2.default({ name: "My Game" });
console.log(myGameScreen.getName());
var theEnd = new _EndScreen2.default({ name: "The End: scrub" });
console.log(theEnd.getName());

// TEST Info Objects
var myInfo = new _Info2.default({ name: "Welcome to ZooKill!" });
console.log(myInfo.getName());
var myText = new _Text2.default({ name: "Blah Blah Blah" });
console.log(myText.getName());
var myDynamicText = new _DynamicText2.default({ name: "woooo Dynamic~" });
console.log(myDynamicText.getName());
var myScore = new _Score2.default({ name: "SCOREEE: You Suck" });
console.log(myScore.getName());
var myStatic = new _StaticText2.default({ name: "S-S-Static!" });
console.log(myStatic.getName());
var myIdentity = new _Identity2.default({ name: "Where am I?" });
console.log(myIdentity.getName());
var myInstructions = new _Instructions2.default({ name: "TODO" });
console.log(myInstructions.getName());

// TEST Characters
var myCharacter = new _Character2.default({ name: "New Character" });
console.log(myCharacter.getName());
var noTrump = new _Trump2.default({ name: "Forest Trump or Donald Gump" });
console.log(noTrump.getName());
var newPlayer = new _Player2.default({ name: "New Player" });
console.log(newPlayer.getName());
var myAnimal = new _Animal2.default({ name: "animals galore" });
console.log(myAnimal.getName());
var myHealth = new _Health2.default({ name: "no game, no life" });
console.log(myHealth.getName());
var myLion = new _Lion2.default({ name: "Mufasa" });
console.log(myLion.getName());
var myTiger = new _Tiger2.default({ name: "Tigger" });
console.log(myTiger.getName());
var myBear = new _Bear2.default({ name: "Baloo" });
console.log(myBear.getName());
var myGorilla = new _Gorilla2.default({ name: "Spunky" });
console.log(myGorilla.getName());

// TEST Areas
var myArea = new _Area2.default({ name: "Area here" });
console.log(myArea.getName());
var myCage = new _Cage2.default({ name: "lemme out!" });
console.log(myCage.getName());
var myAnimalArea = new _AnimalArea2.default({ name: "Where the animals roam" });
console.log(myAnimalArea.getName());
var myPlayerArea = new _PlayerArea2.default({ name: "You move HERE" });
console.log(myPlayerArea.getName());
//========= END TESTBED =========

//var area = new Area(config);
//console.log(area.getName());

//var character = new Character(config);
//var player = new Player(config);

},{"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":4,"./Cage.js":5,"./Character.js":6,"./DynamicText.js":7,"./EndScreen.js":8,"./GamePiece.js":9,"./GameScreen.js":10,"./Gorilla.js":11,"./Health.js":12,"./Identity.js":13,"./Info.js":14,"./Instructions.js":15,"./Lion.js":16,"./Player.js":17,"./PlayerArea.js":18,"./Score.js":19,"./Screen.js":20,"./StartScreen.js":21,"./StaticText.js":22,"./Text.js":23,"./Tiger.js":24,"./Trump.js":25}]},{},[26])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyIsIm1vZHVsZXMvanMvQXJlYS5qcyIsIm1vZHVsZXMvanMvQmVhci5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvQ2hhcmFjdGVyLmpzIiwibW9kdWxlcy9qcy9EeW5hbWljVGV4dC5qcyIsIm1vZHVsZXMvanMvRW5kU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9HYW1lUGllY2UuanMiLCJtb2R1bGVzL2pzL0dhbWVTY3JlZW4uanMiLCJtb2R1bGVzL2pzL0dvcmlsbGEuanMiLCJtb2R1bGVzL2pzL0hlYWx0aC5qcyIsIm1vZHVsZXMvanMvSWRlbnRpdHkuanMiLCJtb2R1bGVzL2pzL0luZm8uanMiLCJtb2R1bGVzL2pzL0luc3RydWN0aW9ucy5qcyIsIm1vZHVsZXMvanMvTGlvbi5qcyIsIm1vZHVsZXMvanMvUGxheWVyLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzIiwibW9kdWxlcy9qcy9TY29yZS5qcyIsIm1vZHVsZXMvanMvU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhdGljVGV4dC5qcyIsIm1vZHVsZXMvanMvVGV4dC5qcyIsIm1vZHVsZXMvanMvVGlnZXIuanMiLCJtb2R1bGVzL2pzL1RydW1wLmpzIiwibW9kdWxlcy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0tBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLE07OztBQUVuQixrQkFBWSxNQUFaLEVBQW9CO0FBQUE7O0FBQUEscUZBQ1osTUFEWTtBQUVuQjs7Ozs7a0JBSmtCLE07QUFNcEI7Ozs7Ozs7OztBQ1REOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLFU7OztBQUVuQixzQkFBWSxNQUFaLEVB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LE9BQU8sT0FBUCxFQUFaO0FBQ0YsSUFBSSxTQUFTLG1CQUFVLEVBQUMsTUFBTSxZQUFQLEVBQVYsQ0FBYjtBQUNFLFFBQVEsR0FBUixDQUFZLE9BQU8sT0FBUCxFQUFaO0FBQ0YsSUFBSSxlQUFlLHlCQUFnQixFQUFDLE1BQU0sd0JBQVAsRUFBaEIsQ0FBbkI7QUFDRSxRQUFRLEdBQVIsQ0FBWSxhQUFhLE9BQWIsRUFBWjtBQUNGLElBQUksZUFBZSx5QkFBZ0IsRUFBQyxNQUFNLGVBQVAsRUFBaEIsQ0FBbkI7QUFDRSxRQUFRLEdBQVIsQ0FBWSxhQUFhLE9BQWIsRUFBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIEFuaW1hbC5qc1xuICogQ2hhcmFjdGVyIG9iamVjdHMgdGhhdCBQbGF5ZXIgaXMgZmlnaHRpbmcgYWdhaW5zdFxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hbCBleHRlbmRzIENoYXJhY3RlciB7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBBbmltYWxBcmVhLmpzXG4gKiBHYW1lIGFyZWEgd2hlcmUgQW5pbWFsIG9iamVjdHMgbW92ZVxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQXJlYVxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hbEFyZWEgZXh0ZW5kcyBBcmVhIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbn07XG4iLCIvKipcbiAqIEFyZWEuanNcbiAqIEdlbmVyaWMgZ2FtZSBhcmVhIG9iamVjdFxuICogQGluaGVyaXRzIEdhbWVQaWVjZVxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJlYSBleHRlbmRzIEdhbWVQaWVjZSB7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBCZWFyLmpzXG4gKiBBbmltYWwgb2JqZWN0IHRoYXQgZG9lcyB4eHhcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlciwgQW5pbWFsXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5pbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVhciBleHRlbmRzIEFuaW1hbCB7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBDYWdlLmpzXG4gKiBHYW1lIGFyZWEgdGhhdCByZXRhaW5zIEFuaW1hbCBvYmplY3RzXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBBcmVhXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIEFyZWEge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxufTtcbiIsIi8qKlxuICogQ2hhcmFjdGVyLmpzXG4gKiBHZW5lcmljIGdhbWUgY2hhcmFjdGVyIG9iamVjdFxuICogQGluaGVyaXRzIEdhbWVQaWVjZVxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbn07XG4iLCIvKipcbiAqIER5bmFtaWNUZXh0LmpzXG4gKiBUZXh0IHRoYXQgY2FuIGJlIGNoYW5nZWQgYnkgdXNlciAoZS5nLiBpbnB1dCBmaWVsZCksIG9yXG4gKiB1cGRhdGVkIGJ5IHRoZSBnYW1lIGl0c2VsZlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgSW5mbywgVGV4dFxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljVGV4dCBleHRlbmRzIFRleHQge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxufTtcbiIsIi8qKlxuICogRW5kU2NyZWVuXG4gKiBHZW5lcmljIFNjcmVlbiBvYmplY3RcbiAqIEBpbXBvcnQgR2FtZVBpZWNlLCBTY3JlZW5cbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBzdXBlciAoY29uZmlnKTtcbiAgfVxuXG59XG4iLCIvKipcbiAqIEdhbWVQaWVjZS5qc1xuICogQmFzaWMgR2FtZSBvYmplY3RcbiAqXG4gKiBUbyBtYWtlIHRoaXMgd29yaywgeW91IG11c3QgYmUgcnVubmluZyB0aGUgQmFiZWwgdHJhbnNwaWxlcixcbiAqIGFuZCB3YXRjaGluZyBmb3IgY2hhbmdlcyBpbiB0aGlzIGZpbGUgd2l0aCBicm93c2VyaWZ5LiBUd29cbiAqIFRlcm1pbmFsIHdpbmRvd3MgbmVlZCB0byBiZSBvcGVuOlxuICogMS4gb25lIHdpbmRvdyB3aGVyZSB5b3UgdHlwZWQgdGhlIGNvbW1hbmQgXCJncnVudFwiXG4gKiAyLiBvbmUgd2luZG93IHdoZXJlIHlvdSB0eXBlZCB0aGUgY29tbWFuZCBcIm5wbSBzdGFydFwiXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVQaWVjZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgXHQvL1RPRE86IHVzZSBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZTtcbiAgICAgICAgdGhpcy51dWlkID0gdGhpcy5zZXRJZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciBldmVyeSBnYW1lIG9iamVjdC5cbiAgICAgKiBAbGluayBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNTAzNC9jcmVhdGUtZ3VpZC11dWlkLWluLWphdmFzY3JpcHRcbiAgICAgKi9cbiAgICBzZXRJZCAoKSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgZCArPSBwZXJmb3JtYW5jZS5ub3coKTsgLy91c2UgaGlnaC1wcmVjaXNpb24gdGltZXIgaWYgYXZhaWxhYmxlXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgciA9IChkICsgTWF0aC5yYW5kb20oKSoxNiklMTYgfCAwO1xuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZC8xNik7XG4gICAgICAgICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBnaXZlbiBuYW1lIG9mIHRoaXMgb2JqZWN0LlxuICAgICAqL1xuICAgIGdldE5hbWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgdW5pcXVlIGlkIG9mIHRoaXMgb2JqZWN0LlxuICAgICAqL1xuICAgIGdldElkICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXVpZDtcbiAgICB9XG59XG4iLCIvKipcbiAqIEdhbWVTY3JlZW4uanNcbiAqIE1haW4gZ2FtZSBzY3JlZW4gb2JqZWN0XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBTY3JlZW5cbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cbiAgXG59XG4iLCIvKipcbiAqIEdvcmlsbGEuanNcbiAqIEFuaW1hbCBvYmplY3QgdGhhdCBkb2VzIHh4eFxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyLCBBbmltYWxcbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb3JpbGxhIGV4dGVuZHMgQW5pbWFsIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbn07XG4iLCIvKipcbiAqIEhlYWx0aC5qc1xuICogQ2hhcmFjdGVyIG9iamVjdCB0aGF0IHJlZ2VuZXJhdGUgUGxheWVyIEhQXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhbHRoIGV4dGVuZHMgQ2hhcmFjdGVyIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbn07XG4iLCIvKipcbiAqIElkZW50aXR5LmpzXG4gKiBEaXNwbGF5cyBnYW1lIGxvZ28gb3IgaW5kZW50aXR5XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBJbmZvLCBUZXh0LCBTdGF0aWNUZXh0XG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZGVudGl0eSBleHRlbmRzIFN0YXRpY1RleHQge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxufTtcbiIsIi8qKlxuICogSW5mby5qc1xuICogR2VuZXJpYyBpbmZvcm1hdGlvbiBvYmplY3RcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UuanNcbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm8gZXh0ZW5kcyBHYW1lUGllY2Uge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cbiAgXG59O1xuIiwiLyoqXG4gKiBJbnN0cnVjdGlvbnMuanNcbiAqIERpc3BsYXlzIGdhbWUgaW5zdHJ1Y3Rpb25zXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBJbmZvLCBUZXh0LCBTdGF0aWNUZXh0XG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVjdGlvbnMgZXh0ZW5kcyBTdGF0aWNUZXh0IHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbn07XG4iLCIvKipcbiAqIExpb24uanNcbiAqIEFuaW1hbCBvYmplY3QgdGhhdCBkb2VzIHh4eFxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyLCBBbmltYWxcbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW9uIGV4dGVuZHMgQW5pbWFsIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbn07XG4iLCIvKipcbiAqIFBsYXllci5qc1xuICogQ2hhcmFjdGVyIHRoYXQgdXNlciBjYW4gY29udHJvbFxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIENoYXJhY3RlciB7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBQbGF5ZXJBcmVhLmpzXG4gKiBHYW1lIGFyZWEgd2hlcmUgdGhlIFBsYXllciBtb3Zlc1xuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQXJlYVxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckFyZWEgZXh0ZW5kcyBBcmVhIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbn07XG4iLCIvKipcbiAqIFNjb3JlLmpzXG4gKiBEaXNwbGF5cyB1c2VyIGdhbWUgc2NvcmVcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEluZm8sIFRleHQsIER5bmFtaWNUZXh0XG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi9EeW5hbWljVGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlIGV4dGVuZHMgRHluYW1pY1RleHQge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxufTtcbiIsIi8qKlxuICogU2NyZWVuLmpzXG4gKiBHZW5lcmljIFNjcmVlbiBvYmplY3RcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UuanNcbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbiBleHRlbmRzIEdhbWVQaWVjZSB7XG5cbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7IC8vaW5pdCAncGFyZW50JyBHYW1lUGllY2VcbiAgfVxufTtcbiIsIi8qKlxuICogU3RhcnRTY3JlZW4uanNcbiAqIEdlbmVyaWMgU2NyZWVuIG9iamVjdFxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgU2NyZWVuXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0U2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIgKGNvbmZpZyk7XG4gIH1cbiAgXG59XG4iLCIvKipcbiAqIFN0YXRpY1RleHQuanNcbiAqIENyZWF0ZXMgdGV4dCBvYmplY3QgdGhhdCB3aWxsIG5vdCBjaGFuZ2VcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEluZm8sIFRleHRcbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGljVGV4dCBleHRlbmRzIFRleHQge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxufTtcbiIsIi8qKlxuICogVGV4dC5qc1xuICogQ3JlYXRlcyBhIHRleHQtdHlwZSBJbmZvIG9iamVjdFxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgSW5mb1xuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBJbmZvIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcpO1xuICB9XG5cbn07XG4iLCIvKipcbiAqIFRpZ2VyLmpzXG4gKiBBbmltYWwgb2JqZWN0IHRoYXQgZG9lcyB4eHhcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlciwgQW5pbWFsXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5pbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlnZXIgZXh0ZW5kcyBBbmltYWwge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKGNvbmZpZyk7XG4gIH1cblxufTtcbiIsIi8qKlxuICogVHJ1bXAuanNcbiAqIENoYXJhY3RlciBvYmplY3QgdGhhdCBQbGF5ZXIgdXNlcyB0byBmZWVkIEFuaW1hbHNcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcnVtcCBleHRlbmRzIENoYXJhY3RlciB7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKTtcbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBDcmVhdGUgdGhlIGdhbWUuIEltcG9ydCB0aGUgcHJpbWFyeSBjbGFzc2VzLCBhbmQgJ2NvbXBvc2l0J1xuICogdGhlIG92ZXJhbGwgR2FtZSBvYmplY3Qgb3V0IG9mIGluc3RhbmNlcyBvZiB0aGUgY2xhc3Nlcy5cbiAqL1xuaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4vL0dhbWVQaWVjZSBpbmhlcml0YW5jZVxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5pbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuLy9TY3JlZW4gaW5oZXJpdGFuY2VcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuL1N0YXJ0U2NyZWVuLmpzJztcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4vR2FtZVNjcmVlbi5qcyc7XG5pbXBvcnQgRW5kU2NyZWVuIGZyb20gJy4vRW5kU2NyZWVuLmpzJztcbi8vSW5mbyBpbmhlcml0YW5jZVxuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuL0R5bmFtaWNUZXh0LmpzJztcbmltcG9ydCBTY29yZSBmcm9tICcuL1Njb3JlLmpzJztcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XG5pbXBvcnQgSWRlbnRpdHkgZnJvbSAnLi9JZGVudGl0eS5qcyc7XG5pbXBvcnQgSW5zdHJ1Y3Rpb25zIGZyb20gJy4vSW5zdHJ1Y3Rpb25zLmpzJztcbi8vQ2hhcmFjdGVyIGluaGVyaXRhbmNlXG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi9UcnVtcC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuaW1wb3J0IEhlYWx0aCBmcm9tICcuL0hlYWx0aC5qcyc7XG5pbXBvcnQgTGlvbiBmcm9tICcuL0xpb24uanMnO1xuaW1wb3J0IFRpZ2VyIGZyb20gJy4vVGlnZXIuanMnO1xuaW1wb3J0IEJlYXIgZnJvbSAnLi9CZWFyLmpzJztcbmltcG9ydCBHb3JpbGxhIGZyb20gJy4vR29yaWxsYS5qcyc7XG4vL0FyZWEgaW5oZXJpdGFuY2VcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XG5pbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuL0FuaW1hbEFyZWEuanMnO1xuaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi9QbGF5ZXJBcmVhLmpzJztcblxuLyoqXG4gKiBTZXQgdXAgdGhlIGdhbWUuXG4gKi9cblxuIC8qKlxuICAqIFRFU1RCRURcbiAgKi9cblxuLy8gVEVTVCBHYW1lUGllY2VcbnZhciBnYW1lID0gbmV3IEdhbWVQaWVjZSh7bmFtZTogXCJHYW1lIFRpbWVcIn0pO1xuICBjb25zb2xlLmxvZyhnYW1lLmdldE5hbWUoKSk7XG5cbi8vIFRFU1QgU2NyZWVuc1xudmFyIGFTY3JlZW4gPSBuZXcgU2NyZWVuKHtuYW1lOiBcIkFuIE9wZW4gU2NyZWVuXCJ9KTtcbiAgY29uc29sZS5sb2coYVNjcmVlbi5nZXROYW1lKCkpO1xudmFyIG15U3RhcnRTY3JlZW4gPSBuZXcgU3RhcnRTY3JlZW4oe25hbWU6IFwiU3RhcnQgU2NyZWVuXCJ9KTtcbiAgY29uc29sZS5sb2cobXlTdGFydFNjcmVlbi5nZXROYW1lKCkpO1xudmFyIG15R2FtZVNjcmVlbiA9IG5ldyBHYW1lU2NyZWVuKHtuYW1lOiBcIk15IEdhbWVcIn0pO1xuICBjb25zb2xlLmxvZyhteUdhbWVTY3JlZW4uZ2V0TmFtZSgpKTtcbnZhciB0aGVFbmQgPSBuZXcgRW5kU2NyZWVuKHtuYW1lOiBcIlRoZSBFbmQ6IHNjcnViXCJ9KTtcbiAgY29uc29sZS5sb2codGhlRW5kLmdldE5hbWUoKSk7XG5cbi8vIFRFU1QgSW5mbyBPYmplY3RzXG52YXIgbXlJbmZvID0gbmV3IEluZm8gKHtuYW1lOiBcIldlbGNvbWUgdG8gWm9vS2lsbCFcIn0pO1xuICBjb25zb2xlLmxvZyhteUluZm8uZ2V0TmFtZSgpKTtcbnZhciBteVRleHQgPSBuZXcgVGV4dCAoe25hbWU6IFwiQmxhaCBCbGFoIEJsYWhcIn0pO1xuICBjb25zb2xlLmxvZyhteVRleHQuZ2V0TmFtZSgpKTtcbnZhciBteUR5bmFtaWNUZXh0ID0gbmV3IER5bmFtaWNUZXh0ICh7bmFtZTogXCJ3b29vbyBEeW5hbWljflwifSk7XG4gIGNvbnNvbGUubG9nKG15RHluYW1pY1RleHQuZ2V0TmFtZSgpKTtcbnZhciBteVNjb3JlID0gbmV3IFNjb3JlICh7bmFtZTogXCJTQ09SRUVFOiBZb3UgU3Vja1wifSk7XG4gIGNvbnNvbGUubG9nKG15U2NvcmUuZ2V0TmFtZSgpKTtcbnZhciBteVN0YXRpYyA9IG5ldyBTdGF0aWNUZXh0ICh7bmFtZTpcIlMtUy1TdGF0aWMhXCJ9KVxuICBjb25zb2xlLmxvZyhteVN0YXRpYy5nZXROYW1lKCkpO1xudmFyIG15SWRlbnRpdHkgPSBuZXcgSWRlbnRpdHkgKHtuYW1lOiBcIldoZXJlIGFtIEk/XCJ9KTtcbiAgY29uc29sZS5sb2cobXlJZGVudGl0eS5nZXROYW1lKCkpO1xudmFyIG15SW5zdHJ1Y3Rpb25zID0gbmV3IEluc3RydWN0aW9ucyh7bmFtZTogXCJUT0RPXCJ9KTtcbiAgY29uc29sZS5sb2cobXlJbnN0cnVjdGlvbnMuZ2V0TmFtZSgpKTtcblxuLy8gVEVTVCBDaGFyYWN0ZXJzXG52YXIgbXlDaGFyYWN0ZXIgPSBuZXcgQ2hhcmFjdGVyICh7bmFtZTogXCJOZXcgQ2hhcmFjdGVyXCJ9KTtcbiAgY29uc29sZS5sb2cobXlDaGFyYWN0ZXIuZ2V0TmFtZSgpKTtcbnZhciBub1RydW1wID0gbmV3IFRydW1wICh7bmFtZTogXCJGb3Jlc3QgVHJ1bXAgb3IgRG9uYWxkIEd1bXBcIn0pO1xuICBjb25zb2xlLmxvZyhub1RydW1wLmdldE5hbWUoKSk7XG52YXIgbmV3UGxheWVyID0gbmV3IFBsYXllciAoe25hbWU6IFwiTmV3IFBsYXllclwifSk7XG4gIGNvbnNvbGUubG9nKG5ld1BsYXllci5nZXROYW1lKCkpO1xudmFyIG15QW5pbWFsID0gbmV3IEFuaW1hbCAoe25hbWU6IFwiYW5pbWFscyBnYWxvcmVcIn0pO1xuICBjb25zb2xlLmxvZyhteUFuaW1hbC5nZXROYW1lKCkpO1xudmFyIG15SGVhbHRoID0gbmV3IEhlYWx0aCAoe25hbWU6IFwibm8gZ2FtZSwgbm8gbGlmZVwifSk7XG4gIGNvbnNvbGUubG9nKG15SGVhbHRoLmdldE5hbWUoKSk7XG52YXIgbXlMaW9uID0gbmV3IExpb24gKHtuYW1lOiBcIk11ZmFzYVwifSk7XG4gIGNvbnNvbGUubG9nKG15TGlvbi5nZXROYW1lKCkpO1xudmFyIG15VGlnZXIgPSBuZXcgVGlnZXIgKHtuYW1lOiBcIlRpZ2dlclwifSk7XG4gIGNvbnNvbGUubG9nKG15VGlnZXIuZ2V0TmFtZSgpKTtcbnZhciBteUJlYXIgPSBuZXcgQmVhciAoe25hbWU6IFwiQmFsb29cIn0pO1xuICBjb25zb2xlLmxvZyhteUJlYXIuZ2V0TmFtZSgpKTtcbnZhciBteUdvcmlsbGEgPSBuZXcgR29yaWxsYSAoe25hbWU6IFwiU3B1bmt5XCJ9KTtcbiAgY29uc29sZS5sb2cobXlHb3JpbGxhLmdldE5hbWUoKSk7XG5cbi8vIFRFU1QgQXJlYXNcbnZhciBteUFyZWEgPSBuZXcgQXJlYSAoe25hbWU6IFwiQXJlYSBoZXJlXCJ9KTtcbiAgY29uc29sZS5sb2cobXlBcmVhLmdldE5hbWUoKSk7XG52YXIgbXlDYWdlID0gbmV3IENhZ2UgKHtuYW1lOiBcImxlbW1lIG91dCFcIn0pO1xuICBjb25zb2xlLmxvZyhteUNhZ2UuZ2V0TmFtZSgpKTtcbnZhciBteUFuaW1hbEFyZWEgPSBuZXcgQW5pbWFsQXJlYSAoe25hbWU6IFwiV2hlcmUgdGhlIGFuaW1hbHMgcm9hbVwifSk7XG4gIGNvbnNvbGUubG9nKG15QW5pbWFsQXJlYS5nZXROYW1lKCkpO1xudmFyIG15UGxheWVyQXJlYSA9IG5ldyBQbGF5ZXJBcmVhICh7bmFtZTogXCJZb3UgbW92ZSBIRVJFXCJ9KTtcbiAgY29uc29sZS5sb2cobXlQbGF5ZXJBcmVhLmdldE5hbWUoKSk7XG4vLz09PT09PT09PSBFTkQgVEVTVEJFRCA9PT09PT09PT1cblxuLy92YXIgYXJlYSA9IG5ldyBBcmVhKGNvbmZpZyk7XG4vL2NvbnNvbGUubG9nKGFyZWEuZ2V0TmFtZSgpKTtcblxuLy92YXIgY2hhcmFjdGVyID0gbmV3IENoYXJhY3Rlcihjb25maWcpO1xuLy92YXIgcGxheWVyID0gbmV3IFBsYXllcihjb25maWcpO1xuIl19
