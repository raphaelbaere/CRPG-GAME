class BACKGROUND extends Sprite {
    constructor({
        position,
        velocity,
        imageSrc,
        frames = { max: 1, hold: 10 },
        sprites, 
        animate,
        rotation = 0,
        map
    }) {
        super({
            position,
            velocity,
            imageSrc,
            frames,
            sprites,
            animate,
            rotation,
            map,
            })
        this.class = 'background'
        this.map = map;
    }
}