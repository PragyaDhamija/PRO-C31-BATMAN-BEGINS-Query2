class drops{
    constructor(x, y, radius) {
        var options={
            'isStatic' : true,
            'friction' : 0.1,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius
        this.image = loadImage("raindrop.png")
        World.add(world,this.body);

        if(this.body.position.y > height) {
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

    display() {
        var posD = this.body.position;
        push()
        translate(posD.x, posD.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2, this.radius*2)
        pop()
    }
}