var draw = () => {
	var c = document.getElementById('canvas');
	var ctx = c.getContext('2d')
	ctx.beginPath();
	ctx.moveTo(500, 50);
	ctx.lineTo(50, 500);
	ctx.stroke();
}
draw();