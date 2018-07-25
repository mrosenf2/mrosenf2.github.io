export default class Turret {
  constructor(){
  this.length = 30;
  this.fullLength = this.length + 60;
  this.width = 5;
  this.angle = 0; //scaler: -180 to 180, 0 being center
  this.pos = new Vector(
    -this.fullLength*Math.sin(this.angle*Math.PI/180),
    this.fullLength*Math.cos(this.angle*Math.PI/180)
  );
  this.speed = 0;
  this.acc = 15;
  this.balls = [];
  this.newBall = true;
  }
  draw(ctx) {
    ctx.save();
    ctx.rotate(this.angle*Math.PI/180);
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillRect(-.5*this.width, 60, 5, this.length);
    ctx.restore();
  }
  act (step, keys) {
    if (keys.left){
      this.speed += this.acc;
    }
    if (keys.right) {
      this.speed -= this.acc;
    }
    if (keys.space) {
      if(this.newBall){
        this.balls.push(new Ball(this));
        this.newBall = false
      }
    } else {
      this.newBall = true;
    }
    this.speed *= .9;
    if (this.angle < 0){
      this.angle = Math.max(this.angle + this.speed*step, -85); //speed*time=dist
    } else if (this.angle > 0){
      this.angle = Math.min(this.angle + this.speed*step, 85); //speed*time=dist
    } else {
      this.angle += this.speed*step;
    }
    if (Math.abs(this.angle) >= 85){
      this.speed = 0;
    }
    this.pos = new Vector(
      -this.fullLength*Math.sin(this.angle*Math.PI/180),
      this.fullLength*Math.cos(this.angle*Math.PI/180)
    );
    if(this.balls.length > 0 && this.balls[this.balls.length-1].pos.y > 1000) //removes last ball when out of range.
      this.balls.pop();
  };

};
