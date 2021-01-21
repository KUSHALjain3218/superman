class box{
    constructor(x,y,width,height){
    var    groundOptions={
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,groundOptions);

        this.x=x
        this.y=y
        this.width=width
        this.height=height
       this.image=loadImage("ubc4.png");
        World.add(world,this.body);
 }
 display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0,520,400);
    
    pop();
  }
  score(){
      if(this.body.speed>7){
score=score+10

      }
      
  }
};