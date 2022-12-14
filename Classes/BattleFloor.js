class BattleFloor {
    static width = 32
    static height = 32
    static class = 'battleFloor'
    constructor({ position, map }) {
        this.position = position
        this.width = 32
        this.height = 32
        this.size = 32;
        this.class = 'battleFloor';
        this.map = map;
        this.color = 'rgba(255, 255, 255, 0)'
    }

    draw () {
        context.fillStyle = this.color
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(mouse) {
        this.draw();

        if (mouse.x > this.position.x && mouse.x < this.position.x + this.size && 
            mouse.y > this.position.y && mouse.y < this.position.y + this.size) {
        } else {
            this.color = 'rgba(255, 255, 255, 0)'
        }
    }
}