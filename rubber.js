class rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.2,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("blue");
     ellipseMode(CENTER);
      ellipse(0, 0, this.radius);
      pop();
      
    }
  };