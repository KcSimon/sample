function drawRect(x, y, w, h, fillColour)
{
    canvasContext.fillStyle = fillColour;
    canvasContext.fillRect(x, y, w, h);
}

function distanceFromCentre(py, ph, by, bh)
{
    var paddleCentre = py + (ph / 2);
    var ballCentre = by + (bh / 2);
    var distance = Math.abs(paddleCentre - ballCentre);
	return distance;
}