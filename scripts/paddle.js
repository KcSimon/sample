var Paddle = (function Paddle () {
    
  function Paddle (x) {      
    this._w = 16;
    this._h = 128;
    this._x;
    this._y;
    this._moveSpeed = 6;
      
    this._x = x;
    this._y = (canvas.height - this._h) / 2;
  };
    
  Paddle.prototype.move = function (ballMove) 
  {
      if (ballMove)
      {
        if (this._y < 0)
      
        {
          this._moveSpeed *= -1;
          this._y = 0;
        }
        else if((this._y + this._h) > canvas.height)
        {
          this._moveSpeed *= -1;
          this._y = canvas.height - this._h;
        }
     
        this._y += this._moveSpeed;
      }
      else
      {
        this._y = (canvas.height - this._h) / 2;
      }
  };
    
  Paddle.prototype.playerMove = function ()
  {
    if (keysDown[87] === true)
    {
      if (this._y < 0)
      {
        this._y = 0;
      }
      this._y += -this._moveSpeed;
    }
    
    if (keysDown[83] === true)
    {
      if((this._y + this._h) > canvas.height)
      {
        this._y = canvas.height - this._h;
      }
      this._y += this._moveSpeed;
    }
  };
    
  Paddle.prototype.draw = function () 
  {
    drawRect(this._x, this._y, this._w, this._h, 'white');  
  };
    
  return Paddle;
})();