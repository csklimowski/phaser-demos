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

		// 8-directional movement
		if (game.input.activePointer.isDown) {
			if (Math.abs(ship.x - game.input.x) > 10) {
				if (ship.x < game.input.x) {
					ship.rotation = 0;
					ship.x += 200*dt;
				} else {
					ship.rotation = Math.PI;
					ship.x -= 200*dt;
				}
			}
			if (Math.abs(ship.y - game.input.y) > 10) {
				if (ship.y < game.input.y) {
					ship.y += 200*dt;
				} else {
					ship.y -= 200*dt;
				}
			}
		}

		// 360-degree movement
		// let angleToMouse = Math.atan2(game.input.y - ship.y, game.input.x - ship.x);
		// ship.rotation = angleToMouse;
		// if (game.input.activePointer.isDown) {
		// 	ship.x += Math.cos(angleToMouse)*200*dt;
		// 	ship.y += Math.sin(angleToMouse)*200*dt;
		// }
	}
}