import game from '../game';

export class ShakeState extends Phaser.State {

    preload() {
        game.load.image('skyline', 'img/skyline.png');
    }

	create() {
        game.stage.backgroundColor = 0x78bbf4;
        game.world.setBounds(0, -100, 600, 600);
		game.add.image(0, 150, 'skyline');
        
        this.shakeFrequency = 50;
        this.shakeAmplitude = 30;
        this.shakeDuration = 0.5;
        this.shakeProgress = this.shakeDuration;

		game.input.onDown.add(this.onInputDown, this);
	}

	onInputDown() {
		this.shakeProgress = 0;
	}

	update() {
        let dt = game.time.elapsedMS / 1000;

        game.camera.y = Math.max(0, 1 - (this.shakeProgress / this.shakeDuration)) * Math.sin(this.shakeProgress*this.shakeFrequency) * this.shakeAmplitude;
        this.shakeProgress += dt;
	}
}