import game from '../game';

export class AnglesState extends Phaser.State {
	preload() {
		game.load.image('ship', 'img/ship.png');
	}

	create() {
		game.stage.backgroundColor = 0x0077bb;
		this.ship = game.add.image(300, 200, 'ship');
		this.ship.anchor.set(0.5);
	}

	update() {
		let dt = game.time.elapsedMS / 1000;
		let ship = this.ship;

		let angleToMouse = Math.atan2(game.input.y - ship.y, game.input.x - ship.x);
		ship.rotation = angleToMouse;
		if (game.input.activePointer.isDown) {
			ship.x += Math.cos(angleToMouse)*200*dt;
			ship.y += Math.sin(angleToMouse)*200*dt;
		}
	}
}