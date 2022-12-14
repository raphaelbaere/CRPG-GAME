class Boundary {
    static class = 'boundary'
    constructor({ position, map, width = 32, height = 32 }) {
        this.position = position
        this.width = width
        this.height = height
        this.class = 'boundary';
        this.map = map;
    }

    draw () {
        context.fillStyle = 'rgb(255, 0, 0, 0)'
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}