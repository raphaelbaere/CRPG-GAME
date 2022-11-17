class NPC extends Sprite {
    constructor({
        position,
        velocity,
        imageSrc,
        frames = { max: 1, hold: 10 },
        sprites, 
        animate,
        rotation = 0,
        isEnemy = false,
        dialogue,
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
        this.isEnemy = isEnemy
        this.name = name
        this.dialogue = dialogue
        this.class = 'npc'
        this.dialogueCount = 0;
        this.dialogueSequency = 0;
        this.dialogueFinished = false;
        this.waypointIndex = 0;
    }
    update() {
        const waypoint = adamPath[this.waypointIndex]
        const yDistance = waypoint.position.y - this.position.y
        const xDistance = waypoint.position.x - this.position.x
        const angle = Math.atan2(yDistance, xDistance)
        this.position.x += Math.cos(angle);
        this.position.y += Math.sin(angle);

        if (Math.round(this.position.x) === Math.round(waypoint.position.x) && Math.round(this.position.y) === Math.round(waypoint.position.y) &&
            this.waypointIndex < adamPath.length - 1) {
            this.waypointIndex++
        }

        if (this.waypointIndex === adamPath.length - 1) {
            this.waypointIndex = 0
        }
    }
}