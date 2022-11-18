class Boundary {
    static width = 32
    static height = 32
    static class = 'boundary'
    constructor({ position, map }) {
        this.position = position
        this.width = 32
        this.height = 32
        this.class = 'boundary';
        this.map = map;
    }

    draw () {
        context.fillStyle = 'rgb(255, 0, 0, 0)'
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}