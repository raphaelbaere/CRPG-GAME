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
        paths,
        map,
    }) {
        super({
            position,
            velocity,
            imageSrc,
            frames,
            sprites,
            animate,
            rotation,
            map
            })
        this.isEnemy = isEnemy
        this.name = name
        this.dialogue = dialogue
        this.class = 'npc'
        this.dialogueCount = 0;
        this.dialogueSequency = 0;
        this.dialogueFinished = false;
        this.waypointIndex = 1;
        this.paths = paths;
        this.map = map;
    }
    update() {
        // function to update the position of the npc entity
        if (!this.paths) return;
        const waypoint = this.paths[this.waypointIndex]
        const yDistance = waypoint.position.y - this.position.y
        const xDistance = waypoint.position.x - this.position.x
        const angle = Math.atan2(yDistance, xDistance)
        this.position.x += Math.cos(angle);
        this.position.y += Math.sin(angle);

        if (Math.round(this.position.x) === Math.round(waypoint.position.x) && Math.round(this.position.y) === Math.round(waypoint.position.y) &&
            this.waypointIndex < this.paths.length - 1) {
            this.waypointIndex++
        }

        if (this.waypointIndex === this.paths.length - 1) {
            this.waypointIndex = 0
        }
    }

    move(direction) {
        //function to update the position of the path when I move with wasd
        if (!this.paths) return;
        switch (direction) {
            case 'w':
                this.paths.forEach((path) => {
                    path.position.y += 3
                })
            break;
            case 'a':
                this.paths.forEach((path) => {
                    path.position.x += 3
                })
            break;
            case 'd':
                this.paths.forEach((path) => {
                    path.position.x -= 3
                })
            break;
            case 's':
                this.paths.forEach((path) => {
                    path.position.y -= 3
                })
            break;
        }
    }
}