$(window).load(function() {
	chartbuild();
});

function chartbuild() {
	
	var canvas = document.getElementById('chart');
	if (canvas.getContext) {

		var context = canvas.getContext('2d');

		//角丸四角の基本変数定義
		var x = 100;  //左上の頂点x座標
		var y = 100;  //左上の頂点y座標
		var w = 300;  //横の長さ
		var h = 150;  //縦の長さ
		var r　= 20;  //角丸の半径
		var color = "#0404B4";  //塗りつぶし色
		var color2 = "#819FF7";  //塗りつぶし色２

		//入力値を反映
		x = parseInt(document.getElementById("x").value);
		y = parseInt(document.getElementById("y").value);
		w = parseInt(document.getElementById("width").value);
		h = parseInt(document.getElementById("height").value);
		r = parseInt(document.getElementById("radius").value);
		color = document.getElementById("color").value;
		color2 = document.getElementById("color2").value;	
		
		reset();

		function reset() {
			context.clearRect(0,0,canvas.width,canvas.height);
			drawsq(x,y,w,h,r,color,color2);
		}
		
		function drawsq(x,y,w,h,r,color,color2) {
			var r_color;
			r_color = context.createLinearGradient(x,y+h,x,y);
			r_color.addColorStop(0,color);
			r_color.addColorStop(1,color2);
			context.beginPath();
			context.lineWidth = 3;
			context.strokeStyle = r_color;
			context.fillStyle = r_color;
			context.moveTo(x,y + r);
			context.arc(x+r,y+h-r,r,Math.PI,Math.PI*0.5,true);
			context.arc(x+w-r,y+h-r,r,Math.PI*0.5,0,1);
			context.arc(x+w-r,y+r,r,0,Math.PI*1.5,1);
			context.arc(x+r,y+r,r,Math.PI*1.5,Math.PI,1);		
			context.closePath();
			context.stroke();
			context.fill();
		}
	    
	}
}
