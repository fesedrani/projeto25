class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:0.5
        }
        this.body = Bodies.circle(x,y,70, options);
        this.radius = 70;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.image , 0 , 0 , this.radius , this.radius);
        pop()
    }
}