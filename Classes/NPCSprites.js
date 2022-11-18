class NPCSprites extends Sprite {
    constructor({
        position,
        velocity,
        imageSrc,
        frames = { max: 1, hold: 10 },
        sprites, 
        animate,
        rotation = 0,
        name,
    }) {
        super({
            position,
            velocity,
            imageSrc,
            frames,
            sprites,
            animate,
            rotation
            })
        this.animate = true;
        this.name = name
        this.class = 'npcSprites';
        this.waypointIndex = 1;
        this.lastSprite = '';
    }

    update() {
        this.draw();

        const waypoint = adamPath[this.waypointIndex]
        const yDistance = waypoint.position.y - this.position.y
        const xDistance = waypoint.position.x - this.position.x
        const angle = Math.atan2(yDistance, xDistance)
        this.position.x += Math.cos(angle);
        this.position.y += Math.sin(angle);

        if (this.waypointIndex === 1) {
            this.switchSprites('walkLeft')
            this.lastSprite = 'idleLeft'

        } else if (this.waypointIndex === 0) {
            this.switchSprites('walkRight')
            this.lastSprite = 'idleRight'
        }

        if (Math.round(this.position.x) === Math.round(waypoint.position.x) && Math.round(this.position.y) === Math.round(waypoint.position.y) &&
            this.waypointIndex < adamPath.length - 1) {
            this.waypointIndex++
        }

        if (this.waypointIndex === adamPath.length - 1) {
            this.waypointIndex = 0
        }
    }
}