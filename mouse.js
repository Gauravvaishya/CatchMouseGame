var a=0;
var count = 0;
var cookies;
var cook = {};
funCookie();
var loop = 50;



function star(){
	document.getElementById('score').innerHTML ="Score: " + count;
    // document.getElementById('highscore').innerHTML ="High Score: " + count;
    
	document.getElementById('shed').style.display = "block";
	document.getElementById('wel').style.display = "none";
	document.getElementById('but').style.display = "none";
	document.getElementById('but1').style.display = "block";
    setInterval(disp,2000);
	setInterval(non,1600);
	document.getElementById('score').style.display = "block";
	document.getElementById('highscore').style.display = "block";
	document.getElementById('timer').style.display = "block";
}


function disp(){
    a = Math.floor(Math.random() * 21);
    document.getElementsByClassName('img1')[a].style.display = "block";
    loop--;
    document.getElementById('timer').innerHTML ="Timer: " + loop;
    // document.getElementById('timer').value =store;
    if(loop == 0){
    	stop();
    }
}


function non(){
	document.getElementsByClassName('img1')[a].style.display = "none";
}


function tap(){

	count++;
	document.getElementById('score').innerHTML ="Score: " + count;

	if(count>z){
	document.cookie = "Highscore = " + count ;
    }
}



function stop(){

	 
	document.getElementById('but1').style.display = "none";
	document.getElementById('shed').style.display = "none";
	document.getElementById("over").style.transform = "scale(1,1)";
	document.getElementById('score').style.display = "none";
	document.getElementById('highscore').style.display = "none";
    document.getElementById('timer').style.display = "none";

}


function funCookie(){
    cookies = document.cookie;
    
    cookiearray = cookies.split("; ");
    for (var i = 0; i < cookiearray.length; i++) {
    	name = cookiearray[i].split("=")[0];
    	value = cookiearray[i].split("=")[1];
    	cook[name] = value; 

    }
    if(cook.Highscore ==  undefined ){
    	document.cookie = "Highscore = "+0;
    }
    
    z = cook.Highscore;
    
}


document.getElementById('highscore').innerHTML = "High Score: "+z;


// function timer(){
// 	timer = document.getElementById('timer');
// 	setInterval(show,1000);
// }


// function funCookie(){
// 	cookie = document.cookie;
// 	cookiearray = 
// }
// function show(){
// 	var m  = 0 ;
// 	var s = 0 ;
// 	if(s == 0){
// 		if(m > 0){
// 			s = 59 ;
// 			m-- ;
// 		}
// 		else{
// 			s-- ;
// 		}
// 		time  = m +":"+ s ;
// 		document.getElementById('timer').innerHTML = time;
// 	}
// }

