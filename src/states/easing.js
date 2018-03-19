import game from '../game';

export class EasingState extends Phaser.State {

	create() {
		game.stage.backgroundColor = 0xDDDDDD;
		this.object = {
            x: 300,
            y: 200,
        }
        this.target = {
            x: 300,
            y: 200
        }
        this.graphics = game.add.graphics(0, 0);
        game.input.onDown.add(this.onInputDown, this);
    }

    onInputDown() {
        let target = this.target;
        target.x = game.input.activePointer.x;
        target.y = game.input.activePointer.y;
    }

	update() {
        let dt = game.time.elapsedMS / 1000;
        let object = this.object;
        let target = this.target;

        // instant
        object.x = target.x;
        object.y = target.y;

        // ease-out
        // object.x += 5*(target.x - object.x)*dt;
        // object.y += 5*(target.y - object.y)*dt;
        
        let g = this.graphics;
        g.clear();
        g.beginFill(0x00AA44, 0.3);
        g.drawCircle(target.x, target.y, 50);
        g.beginFill(0x00AA44, 1.0);
        g.drawCircle(object.x, object.y, 50);
	}
}