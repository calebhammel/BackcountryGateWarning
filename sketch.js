var weather
var temp

function setup() {
	createCanvas(400, 100);
	background(0);
	loadJSON('https://api.openweathermap.org/data/2.5/weather?q=boulder&appid=46bde2aec3f96d966ad3317f3346b9ed', gotData);
	}
   
function gotData(data) {
	 console.log(data);
	 weather = data;
	 //temp = (weather.main.temp - 273.15) * 9/5 + 32
	 temp = (weather.main.temp - 273.15) * 9/5 + 32;
		//if (temp > 32) {
  		//console.log('warm');
		//} else {
  		//console.log('cold');
		//}

		if (temp > 32) {
			background(255,0,0);
			textSize(30);
			text('Avalnche Danger High',50,50);
			textAlign(CENTER);
		  } else {
			background(0,255,0);
		  }
   }

function draw(){

}


	 