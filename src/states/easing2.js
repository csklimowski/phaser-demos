import game from '../game';

export class EasingState2 extends Phaser.State {

	create() {
        game.stage.backgroundColor = 0xDDDDDD;
        
        // current position
        this.x = 300;
        this.y = 200;
        // starting position
        this.x0 = 300;
        this.y0 = 200;
        // final position
        this.xf = 300;
        this.yf = 200;
        // time elapsed
        this.t = 0;
        // total movement time
        this.tf = 1;

        this.graphics = game.add.graphics(0, 0);
        this.easingFunction = this.linear;

		game.input.onDown.add(this.onInputDown, this);
	}

	onInputDown() {
		this.xf = game.input.activePointer.x;
        this.yf = game.input.activePointer.y;
        this.x0 = this.x;
        this.y0 = this.y;
        this.t = 0;
	}

	update() {
        let dt = game.time.elapsedMS / 1000;
        
        this.t = Math.min(this.tf, this.t + dt);
        this.x = this.x0 + this.easingFunction(this.t / this.tf) * (this.xf - this.x0);
        this.y = this.y0 + this.easingFunction(this.t / this.tf) * (this.yf - this.y0);
		
		let g = this.graphics;
		g.clear();
		g.beginFill(0x00AA44, 0.3);
		g.drawCircle(this.xf, this.yf, 50);
		g.beginFill(0x00AA44, 1.0);
		g.drawCircle(this.x, this.y, 50);
    }
    
    linear(t) {
        return t;
    }

    easeOutQuad(t) {
        return t*t;
    }

    easeInQuad(t) {
        return t*(2-t);
    }

    easeInOutSin(t) {
        return 0.5*Math.cos(Math.PI*t + Math.PI) + 0.5;
    }
}