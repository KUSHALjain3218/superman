class ball{
    constructor(x,y,width,height){
    var    groundOptions={
            density:1,
            frictionAir:0.006
        }
        this.body=Bodies.rectangle(x,y,width,height,groundOptions);

        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.image=loadImage("iii.png");
        World.add(world,this.body);
 }
 display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
   
    imageMode(CENTER);
    image(this.image, 0, 0,300,300);
    
    pop();
  }
};