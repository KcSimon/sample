var Ball = (function Ball () {

  Ball.prototype.reset = function ()
  {
    this._moving = false;
    this._xMoveSpeed = 0;
    this._yMoveSpeed = 0;
    this._x = (canvas.width - this._w) / 2;
    this._y = (canvas.height - this._h) / 2;
    this._startText = "Press space to start";
  };
    
  Ball.prototype.restart = function ()
  {
    var temp = Math.random();
    if (temp < 0.5)
    {
      this._xMoveSpeed = -this._moveSpeed;
    }
    else
    {
      this._xMoveSpeed = this._moveSpeed;
    }
      
    temp = Math.random();
    if (temp > 0.4 && temp < 0.6)
    {
      this._yMoveSpeed = 0;
    }
    else if (temp < 0.4)
    {
      this._yMoveSpeed = -this._moveSpeed / 2;
    }
    else
    {
      this._yMoveSpeed = this._moveSpeed / 2; 
    }
    
    this._startText = "";
    this._moving = true;
  };
    
  Ball.prototype.setSpeed = function ()
  {	
	if (this._yMoveSpeed < 0)
	{
		return -this._moveSpeed;
	}
	else
	{
		return this._moveSpeed;
	}
  };
	
  function Ball () {      
    this._w = 16;
    this._h = 16;
    this._x;
    this._y;
    this._moveSpeed = 4;
      
    this._x = (canvas.width - this._w) / 2;
    this._y = (canvas.height - this._h) / 2;
      
    this._startText = "Press space to start";
    this._moving = false;
  };
  
    
  Ball.prototype.move = function (px, py, pw, ph, cx, cy, cw, ch) 
  {    
      if (this._moving)
      {
          if (this._y < 0)
          {
            this._yMoveSpeed *= -1;
            this._y = 0;
          }
          else if((this._y + this._h) > canvas.height)
          {
            this._yMoveSpeed *= -1;
            this._y = canvas.height - this._h;
          }

          if (this._x < 0)
          {
            this._xMoveSpeed *= -1;
            this._x = 0;
          }
          else if((this._x + this._w) > canvas.width)
          {
            this._xMoveSpeed *= -1;
            this._x = canvas.width - this._w;
          }

          //player collision
          if ((this._x + this._w) >= px && this._x <= (px + pw) &&
              (this._y + this._h) >= py && this._y <= (py + ph)
             )
          {

			this._x += this._xMoveSpeed * 1.05;


			this._xMoveSpeed = (this._moveSpeed * (Math.cos(180/Math.PI) * distanceFromCentre(py, ph, this._y, this._h))) / 32;
			this._yMoveSpeed = (this.setSpeed() * (Math.sin(180/Math.PI) * distanceFromCentre(py, ph, this._y, this._h))) / 32;
          }

          //computer collision

          if ((this._x + this._w) >= cx && (this._x + this._w) <= (cx + cw) &&
              (this._y  + this._h) >= cy && this._y <= (cy + ch)
             )
          {			  
			this._x -= this._xMoveSpeed * 1.05;

			this._x = canvas.width - (this._w * 3) - 1;

			
			this._xMoveSpeed = -(this._moveSpeed * (Math.cos(180/Math.PI) * distanceFromCentre(cy, ch, this._y, this._h))) / 32;
			this._yMoveSpeed = (this.setSpeed() * (Math.sin(180/Math.PI) * distanceFromCentre(cy, ch, this._y, this._h))) / 32;
          }
		  
          if (this._x < px || (this._x + this._w) > (cx + cw))
          {
			  if (this._x < px)
			  {
				  scores.setScore(0, 1);
			  }
			  else
			  {
				  scores.setScore(1, 0);
			  }
              this.reset();
          }

            this._x += this._xMoveSpeed;
            this._y += this._yMoveSpeed;

      }
      else
      {
           if (keysDown[32] === true)
           {
               this.restart();
           }
      }
  };
    
  Ball.prototype.draw = function () 
  {
    drawRect(this._x, this._y, this._w, this._h, 'white');
    canvasContext.fillText(this._startText,  (canvas.width/2)- 128, canvas.height -64 );
  };

    
  return Ball;
})();
