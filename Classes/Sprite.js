class Sprite {
    constructor({position, velocity, imageSrc, frames = { max: 1, hold: 10 }, sprites, animate, rotation = 0, map }) {
        this.position = position
        this.image = new Image()
        this.frames = { ...frames, val: 0, elapsed: 0 }
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
            this.loaded = true;
        }
        this.image.src = imageSrc
        this.animate = animate
        this.sprites = sprites
        this.opacity = 1
        this.rotation = rotation
        this.loaded = false;
        this.imageSrc = imageSrc;
        this.class = 'sprite';
        this.map = map;

        // function to make sprites work
        if (this.sprites) {
            for (let key in this.sprites) {
                const image = new Image();
                image.src = this.sprites[key].imageSrc;
                this.sprites[key].image = image;
            }
        }
    }

    // function to switch sprites
    switchSprites(name) {
        this.image = this.sprites[name].image;
        this.frames = this.sprites[name].frames;
    }

    draw() {
        if (!this.loaded) return;
        context.save()
        context.translate(this.position.x + this.width / 2, this.position.y + this.height / 2)
        context.rotate(this.rotation)
        context.translate(-this.position.x - this.width / 2, -this.position.y - this.height / 2)
        context.globalAlpha = this.opacity
        context.drawImage(
            this.image,
            this.frames.val * this.width,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height
        );
        context.restore()

        if (!this.animate) return

        if (this.frames.max > 1) {
            this.frames.elapsed++
        }

        if (this.frames.elapsed % this.frames.hold === 0)
        if (this.frames.val < this.frames.max - 1) this.frames.val++
        else this.frames.val = 0
    }

    update() {
            // function to update the position of the player
        this.draw();
    }

}