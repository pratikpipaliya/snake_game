let snake;
let rez = 30;
let food;
let w;
let h;
let score;

function setup() {
  createCanvas(600, 450);
  w = floor(width / rez);
  h = floor(height / rez);
  score = 0;
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW && snake.xdir == 0) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW && snake.xdir == 0) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW && snake.ydir == 0) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW && snake.ydir == 0) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(rez);
  background(220);
  if (snake.eat(food)) {
    score++;
    document.getElementById("scoreboard").innerHTML = score;
    foodLocation();
  }
  snake.update();
  snake.show();


  if (snake.endGame()) {
    print("END GAME");
    alert("Game Over");
    document.getElementById("scoreboard").innerHTML = 0;
    background(255, 0, 0);

    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}