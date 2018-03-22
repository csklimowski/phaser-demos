import game from '../game';

export class ParallaxState extends Phaser.State {
	preload() {
		game.load.image('bg1', 'img/bg1.png');
		game.load.image('bg2', 'img/bg2.png');
		game.load.image('bg3', 'img/bg3.png');
	}

	create() {
		game.world.setBounds(0, 0, 1200, 400);
		game.stage.backgroundColor = 0x666666;

		this.player = {
			x: 0,
			y: 350,
			vx: 0,
			vy: 0,
			skew: 0,
		}
		
		let bg3 = game.add.image(0, 0, 'bg3');
		let bg2 = game.add.image(0, 0, 'bg2');
		let bg1 = game.add.image(0, 0, 'bg1');

		bg1.depth = 0;
		bg2.depth = 0.2;
		bg3.depth = 0.4;
		
		this.backgrounds = [bg1, bg2, bg3];

		this.graphics = game.add.graphics(0, 0);
	}

	update() {
		let dt = game.time.elapsedMS / 1000;
		let p = this.player;

		let targetVx   = 0;
		let targetSkew = 0;
		let leftDown   = game.input.keyboard.isDown(Phaser.KeyCode.LEFT);
		let rightDown  = game.input.keyboard.isDown(Phaser.KeyCode.RIGHT);

		if (leftDown && rightDown) {
			targetVx   = 0; 
			targetSkew = 0;
		} else if (leftDown) {
			targetVx   = -300;
			targetSkew = 8;
		} else if (rightDown) {
			targetVx   = 300;
			targetSkew = -8;
		} else {
			targetVx   = 0;
			targetSkew = 0;
		}

		p.vx   += 6*(targetVx - p.vx)*dt;
		p.skew += 6*(targetSkew - p.skew)*dt;
		p.x += p.vx*dt;
		p.y += p.vy*dt;
		
		game.camera.x = p.x - 275;
		for (let bg of this.backgrounds) {
			bg.x = game.camera.x*bg.depth;
		}
		
		let g = this.graphics;
		g.clear();
		g.beginFill(0xffffff);
		g.moveTo(p.x      + p.skew, p.y     );
		g.lineTo(p.x + 50 + p.skew, p.y     );
		g.lineTo(p.x + 50         , p.y + 50);
		g.lineTo(p.x              , p.y + 50);
	}
}