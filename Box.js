class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
           'friction':1.0,
            'density':1.0,
            isStatic:false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.image=loadImage("brick.png")
        this.width = width;
        this.height = height;
        this.Visibility=255;
      }

     

      display(){
        var angle = this.body.angle;
        if(this.body.speed<3){
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image,0, 0, this.width, this.height);
          pop();
        }
          else{
            World.remove(world,this.body);
            this.Visibility -=5;
            push();
            tint(255,this.Visibility)
            image(this.image,this.body.position.x, this.body.position.y, this.width, this.height)
            pop();
          }
      }

      score(){
        if(this.Visibility<0&& this.Visibility>-15){
          score++;
        }
      }
}