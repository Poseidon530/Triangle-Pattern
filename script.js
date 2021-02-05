function draw() {
	var canvas = document.getElementById('canvas');
	if (canvas.getContext) {
	  var ctx = canvas.getContext('2d');
  
	  // var red = Math.floor(Math.random() * 255);
	  // var green = Math.floor(Math.random() * 255);
	  // var blue = Math.floor(Math.random() * 255);
  
	  ctx.beginPath();
	  ctx.moveTo(100, 300);
	  ctx.lineTo(300, 300);
	  ctx.stroke()
	  ctx.lineTo(200, 100);
	  ctx.stroke()
	  ctx.lineTo(100, 300);
	  ctx.stroke()
	  ctx.fillStyle = "blue";
	// ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + " )";  
	  ctx.fill();
	}
  }
  
  draw()
  
  // setInterval(function(){ draw(); }, 500);
  