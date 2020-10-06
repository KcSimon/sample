var canvas;
var canvasContext;
var player;
var computer;
var ball;
var keysDown = {};
var scores;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = "white";
    canvasContext.font = '32px serif';
    
    var fps = 60;
    setInterval(update, 1000 / fps);
    
    player = new Paddle(16);
    computer = new Paddle(canvas.width - 32);
    ball = new Ball();
	scores = new Score();
    
    document.addEventListener("keydown", function (e)
    {
      keysDown[e.keyCode] = true;
    });
    
    document.addEventListener("keyup", function (e)
    {
       delete keysDown[e.keyCode] ;
    });
};

function update() {
    player.playerMove();
    ball.move(player._x, player._y, player._w, player._h, computer._x, computer._y, computer._w, computer._h);
    computer.move(ball._moving);
    draw();
}


function draw() {
    drawRect(0, 0, canvas.width, canvas.height, 'black');
    player.draw();
    computer.draw();
    ball.draw();
    scores.displayScore();
}
