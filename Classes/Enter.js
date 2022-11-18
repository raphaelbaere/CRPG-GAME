class Enter {
    static width = 32
    static height = 32
    constructor({ position, map }) {
        this.position = position
        this.width = 32
        this.height = 32
        this.class = 'enter';
        this.map = map;
    }

    draw () {
        context.fillStyle = 'rgb(0, 255, 0, 0)'
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}