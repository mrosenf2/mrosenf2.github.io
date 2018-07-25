
class Turret {
  constructor(){
    this.name = 'Turret'
    this.length = 30;
    this.fullLength = this.length + 60;
    this.radius = 0;
    this.width = 5;
    this.angle = 90; //scaler: 0 to 180, 90 being center
    this.pos = new Vector(
      this.fullLength*Math.cos(this.angle*Math.PI/180),
      this.fullLength*Math.sin(this.angle*Math.PI/180)
    );
    this.speed = 0;
    this.acc = 15;
    this.balls = [];
    this.newBall = true;
  }
  draw(ctx) {
    ctx.save();
    ctx.rotate((this.angle - 90)*Math.PI/180);
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillRect(-.5*this.width, 60, 5, this.length);
    ctx.restore();
  }
  fire(keys) {
    if (keys.space) {
      if(this.newBall){
        this.balls.push(new Ball(this));
        this.newBall = false
      }
    } else {
      this.newBall = true;
    }
    if(this.balls.length > 0
      && Math.abs(this.balls[this.balls.length-1].pos.y) > 1000){
      this.balls.pop();
      console.log('popped');
    } //removes last ball when out of range.

  }
  move(step, keys) {
    if (keys.left){
      this.speed += this.acc;
    }
    if (keys.right) {
      this.speed -= this.acc;
    }
    this.speed *= .9;
    if (this.angle < 90){
      this.angle = Math.max(this.angle + this.speed*step, 5); //speed*time=dist
    } else if (this.angle > 90){
      this.angle = Math.min(this.angle + this.speed*step, 175); //speed*time=dist
    } else {
      this.angle += this.speed*step;
    }
    if (this.angle >= 175 || this.angle <= 5){
      this.speed = 0;
    }
    this.pos = new Vector(
      this.fullLength*Math.cos(this.angle*Math.PI/180),
      this.fullLength*Math.sin(this.angle*Math.PI/180)
    );
  }
  act (step, keys) {
    this.move(step, keys);
    this.fire(keys);
  }

};

class Actor {
  constructor() {
  }

  static collide(actor1, actor2) {
    //console.log(actor1, '\n', actor2);
    var v1 = actor1.velocity, v2 = actor2.velocity;
    var m1 = actor1.mass, m2 = actor2.mass;
    function newV(v1, v2, x1, x2, m1, m2) {
      var m = (2*m2)/(m1+m2);
      var v = v1.minus(v2);
      var x = x1.minus(x2);
      return v1.minus(x.times(m*((Vector.dot(v, x))/Math.pow(x.magnitude, 2))));
    }
    actor1.velocity = newV(actor1.velocity, actor2.velocity, actor1.pos, actor2.pos, actor1.mass, actor2.mass);
    actor2.velocity = newV(actor2.velocity, actor1.velocity, actor2.pos, actor1.pos, actor2.mass, actor1.mass);

  }
}

class Vector {
  constructor(x, y) {
    this.x = x; this.y = y;
  }

  plus(other) {
    return new Vector(this.x + other.x, this.y + other.y);
  }
  minus(other) {
    return this.plus(other.times(-1));
  }
  times(factor){
    return new Vector(this.x * factor, this.y * factor);
  }
  get magnitude() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  get angle() {
    return (Math.atan(this.y/this.x))*(180/Math.PI) + 180;
  }
  unit(){
    return this.times(1/this.magnitude);
  }

  static dist(vec1, vec2){
    return Math.sqrt(Math.pow((vec2.x - vec1.x), 2) +
    Math.pow((vec2.y - vec1.y), 2));
  }
  static dot(v1, v2) {
    return v1.x*v2.x + v1.y*v2.y;
  }

}

class Asteroid {
  constructor(start, vel, size) {
    this.name = 'Asteroid'
    this.radius = size;
    this.velocity = vel;
    this.pos = new Vector(start, 600); //start is the horizontal position Asteroid originates from
    this.speed = 10;
    this.color = "rgb(100, 100, 100)";
  }
  get mass() {
    return Math.pow(this.radius, 2);
  }
  draw(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI);
    ctx.fill();
  }
  change() {
    this.color = "rgb(10, 100, 255)";
  }
  act(step, _) {
    this.pos = this.pos.plus((this.velocity.times(this.speed)).times(step));

  }
}


class Ball extends Actor {

  constructor(turret) {
    super();
    this.name = 'Ball';
    this.radius = 7;
    this.turret = turret;
    this.pos = this.turret.pos;
    this.speed = 20;
    this.velocity = (this.pos.unit().times(this.speed));
    this.color = "rgb(255, 255, 255)";
  }
  get mass() {
    return Math.pow(this.radius, 2);
  }
  draw(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI);
    ctx.fill();
  }
  change() {
    this.color = "rgb(255, 100, 10)";
  }
  act(step, _) {
    this.pos = this.pos.plus((this.velocity.times(this.speed)).times(step));
  }
}

var rand = function(max) {

  return(Math.floor(max*Math.random()));

}

class Game {
  constructor(parent) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = 600;
    this.canvas.height = 600;
    this.canvas.lost = false;
    parent.appendChild(this.canvas);
    this.cx = this.canvas.getContext('2d');
    this.cx.translate(0.5*(this.canvas.width), 0.8*(this.canvas.height));
    this.cx.scale(1, -1);
    this.animationTime = 0;
    this.turret = new Turret();
    this.balls = this.turret.balls
    this.asteroids = [new Asteroid(0, new Vector(0, -5), 50)];
    this.actors = [this.turret].concat(this.asteroids);
    this.drawFrame(0);
  }

  drawFrame(step) {
    this.animationTime += step;
    this.clearDisplay();
    this.drawBackground();
    this.getActors();
    if(!this.lost){
      this.drawActors();
    }
  }

  clearDisplay() {
    this.cx.fillStyle = "rgb(52, 166, 251)";
    this.cx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  interact() {
    var j = 1;
    this.actors.forEach(function(actor1){
      for (var i = j; i < this.actors.length; i++) {
        var actor2 = this.actors[i];
        if(actor1.name == 'Asteroid' || actor2.name == 'Asteroid') {
          var sep =
            Vector.dist(actor1.pos, actor2.pos) - actor1.radius - actor2.radius;
          if (sep < 2){
            if(actor1.name == 'Turret' || actor2.name == 'Turret'){
              this.gameOver();
            } else {
              Actor.collide(actor1, actor2);
            }
            //console.log(actor1.name, actor2.name, sep);
          }
        }
      }
      j ++;
    }, this)
  }

  getActors() {

    if(rand(700) < 10){
      var vel = new Vector(rand(30)-15, -1*rand(20));
      this.asteroids.push(new Asteroid(600*Math.random(), vel, rand(30)));
    }
    if(this.asteroids.length > 0
      && Math.abs(this.asteroids[this.asteroids.length-1].pos.y) > 1000){
      this.asteroids.pop();
      console.log('popped astr');
    } //removes last asteroid when out of range.
    this.actors = [this.turret].concat(this.asteroids).concat(this.balls);
    //check proximity to all other Objects, react if needed.
    this.interact();
  }

  drawActors() {
    this.actors.forEach(function(actor){
      actor.draw(this.cx);
    }, this);
  }

  gameOver() {
    this.cx.setTransform(1, 0, 0, 1, 0, 0);
    this.cx.fillStyle = "rgb(52, 110, 251)";
    this.cx.fillRect(0, 0, this.canvas.width, 0.8*(this.canvas.height));
    this.cx.fillStyle = "rgb(252, 110, 51)";
    this.cx.fillRect(0, 0.8*(this.canvas.height), this.canvas.width, 0.2*(this.canvas.height));
    this.cx.font="48px Georgia";
    this.cx.fillText("Game Over",10,50);
    this.lost=true
  }

  drawBackground() {
    this.cx.save();
    //background is drawn from original coordinates
    //everything else is drawn with modified coordinates
    this.cx.scale(1, -1);
    this.cx.translate(-0.5*(this.canvas.width), -0.8*(this.canvas.height));

    this.cx.fillStyle = "rgb(52, 110, 251)";
    this.cx.fillRect(0, 0, this.canvas.width, 0.8*(this.canvas.height));
    this.cx.fillStyle = "rgb(252, 110, 51)";
    this.cx.fillRect(0, 0.8*(this.canvas.height), this.canvas.width, 0.2*(this.canvas.height));
    this.cx.restore();
    this.cx.fillStyle = "rgb(252, 50, 51)";
    this.cx.beginPath();
    this.cx.arc(0, 0, 0.1*(this.canvas.width), 0, Math.PI);
    this.cx.fill();
  }

  animate(step, keys) {
    while (step > 0 && !this.canvas.lost) {
      var thisStep = Math.min(step, maxStep);
      //console.log(this.actors.length);
      this.actors.forEach(function(actor) {
        actor.act(thisStep, keys);
      }, this);
      step -= thisStep;
    }
  }

  clear() {
    this.canvas.parentNode.removeChild(this.canvas);
  }
}





function trackKeys(codes) {
  var pressed = Object.create(null);
  var delay = 10;
  pressed["times"] = delay;
  function handler(event) {

    if (codes.hasOwnProperty(event.keyCode)) {
      var down = event.type == "keydown";
      pressed[codes[event.keyCode]] = down;
      event.preventDefault();
    }
  }
  addEventListener("keydown", handler);
  addEventListener("keyup", handler);
  return pressed;
}
var maxStep = 0.05;




//frameFunc: animate; drawFrame;
function runAnimation(frameFunc) {
  var lastTime = null;
  function frame(time) {
    var stop = false;
    if (lastTime != null) {
      var timeStep = Math.min(time - lastTime, 100) / 1000;
      stop = frameFunc(timeStep) === false;
    }
    lastTime = time;
    if (!stop)
      requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
function runGame() {

  var display = new Game(document.body.getElementsByClassName('game')[0]);
  var codes = {32: 'space', 37: 'left', 39: 'right'};
  var keys = trackKeys(codes);
  runAnimation(function(step) {
    if(!display.lost){
    display.animate(step, keys);
    display.drawFrame(step);
    }
  });
}

var newGame = function(){
  runGame();
}
