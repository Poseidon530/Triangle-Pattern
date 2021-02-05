var draw = () => {
	var c = document.getElementById('canvas');
	var ctx = c.getContext('2d')
	ctx.beginPath();
	ctx.moveTo(500, 50);
	ctx.lineTo(50, 500);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(50,500);
    ctx.lineTo(550,500);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(550,500);
    ctx.lineTo(500,50);
	ctx.stroke();
	ctx.fillStyle("rgb(255, 0, 0)")
	ctx.fill();
}
draw();
    