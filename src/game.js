import { ParallaxState } from './states/parallax';
import { AnglesState } from './states/angles';
import { EasingState } from './states/easing';
import { EasingState2 } from './states/easing2';
import { ShakeState } from './states/shake';

var game = new Phaser.Game(600, 400, Phaser.AUTO, 'game');

game.state.add('parallax', ParallaxState);
game.state.add('angles', AnglesState);
game.state.add('easing', EasingState);
game.state.add('easing2', EasingState2);
game.state.add('shake', ShakeState);

game.state.start('parallax');

export default game;