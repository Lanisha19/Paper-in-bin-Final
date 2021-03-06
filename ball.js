class Ball {
    constructor(x, y, radius) {
      var options = {
          'isStatic':false,
         'restitution':0.3,
          'friction':0,
          'density':1.2
      }
      this.x=x
      this.y=y
      this.radius = radius;
      this.image=loadImage("sprites/paperEDIT.png");
      this.body = Bodies.circle(x, y, radius, options);
      World.add(myWorld,this.body)
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(RADIUS)
      image(this.image,0, 0, this.radius,this.radius);
      pop();
    }
  }
  