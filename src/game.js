import { ParallaxState } from './states/parallax';
import { AnglesState } from './states/angles';

var game = new Phaser.Game(600, 400, Phaser.AUTO, 'game');

game.state.add('parallax', ParallaxState);
game.state.add('angles', AnglesState);

game.state.start('parallax');

export default game;