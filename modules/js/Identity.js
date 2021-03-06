/**
 * Identity.js
 * Displays game logo or indentity
 * @inherits GamePiece, Info, Text, StaticText
 */
import GamePiece from './GamePiece.js';
import Info from './Info.js';
import Text from './Text.js';
import StaticText from './StaticText.js';

export default class Identity extends StaticText {

  constructor(config) {
    super(config);
  }

};
