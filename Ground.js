class Ground {
    constructor(x, y, w, h) {

        var ground__options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, w, h, ground__options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("gray");
        strokeWeight(2);
        stroke("black");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}