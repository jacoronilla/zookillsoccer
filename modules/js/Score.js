/**
 * Score.js
 * Displays user game score
 * @inherits GamePiece, Info, Text, DynamicText
 */
import GamePiece from './GamePiece.js';
import Info from './Info.js';
import Text from './Text.js';
import DynamicText from './DynamicText';

export default class Score extends DynamicText {

  constructor(config) {
    super(config);
  }

};
