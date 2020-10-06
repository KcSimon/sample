var Score = (function Score () {
    
  function Score () {      
	  this._player = 0;
	  this._computer = 0;
  };
  
  Score.prototype.setScore = function (p, c){
	  this._player += p;
	  this._computer += c;
  };
  
  Score.prototype.displayScore = function () {
      canvasContext.fillText("player - " + this._player + " : " +"computer - " + this._computer,  (canvas.width/2)- 128, 64 );
  };
  
  return Score;
})();
