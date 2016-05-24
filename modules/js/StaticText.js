/**
 * StaticText.js
 * Creates text object that will not change
 * @inherits GamePiece, Info, Text
 */
import GamePiece from './GamePiece.js';
import Info from './Info.js';
import Text from './Text.js';

export default class StaticText extends Text {

  constructor(config) {
    super(config);
  }

};
