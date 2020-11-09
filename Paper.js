class Paper {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.img = loadImage("paper.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        // strokeWeight(2);
        // stroke("yellow");
        // ellipse(pos.x, pos.y, 25, 25);
        imageMode(CENTER);
        image(this.img, pos.x, pos.y, 55, 55);
        pop();
    }
}