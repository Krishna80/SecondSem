

function setoGhoda(){
	var setighoda = document.getElementById('horse1');
	seti = setighoda.offsetLeft; 
	var khairighoda = document.getElementById('horse2');
	khairi = khairighoda.offsetLeft; 
	var kalighoda = document.getElementById('horse3');
	kali = kalighoda.offsetLeft; 
	var gorighoda = document.getElementById('horse4');
	gori = gorighoda.offsetLeft; 

   	var munto = document.getElementsByTagName('td');

	if (seti > khairi && seti > kali && seti > gori){
		munto[1].className = 'horse1';
	}
	else if (seti > gori && seti > kali && seti < khairi){
		munto[3].className = 'horse1';}
	else if (seti > khairi && seti > gori && seti < kali){
		munto[3].className = 'horse1';
	}
	else if (seti > kali && seti > khairi && seti < gori){
		munto[3].className = 'horse1';
	}
	else if (seti < gori && seti < kali && seti > khairi){
		munto[5].className = 'horse1';		
	}
	else if (seti < khairi && seti < gori && seti > kali){
		munto[5].className = 'horse1';
	}
	else if (seti < kali && seti < khairi && seti > gori){
		munto[5].className = 'horse1';
	}
	else {
		munto[7].className = 'horse1';
	}
}
function khairoGhoda(){

    var setighoda = document.getElementById('horse1');
	seti = setighoda.offsetLeft; 
	var khairighoda = document.getElementById('horse2');
	khairi = khairighoda.offsetLeft; 
	var kalighoda = document.getElementById('horse3');
	kali = kalighoda.offsetLeft; 
	var gorighoda = document.getElementById('horse4');
	gori = gorighoda.offsetLeft; 

	var munto = document.getElementsByTagName('td');

	if (khairi > seti && khairi > kali && khairi > gori){
		munto[1].className = 'horse2';
	}
	else if (khairi > gori && khairi > kali && khairi < seti){
		munto[3].className = 'horse2';
	}
	else if (khairi > seti && khairi > gori && khairi < kali){
		munto[3].className = 'horse2';
	}
	else if (khairi > kali && khairi > seti && khairi < gori){
		munto[3].className = 'horse2';
	}
	else if (khairi < gori && khairi < kali && khairi > seti){
		munto[5].className = 'horse2';
	}
	else if (khairi < seti && khairi < gori && khairi > kali){
		munto[5].className = 'horse2';
	}
	else if (khairi < kali && khairi < seti && khairi > gori){
		munto[5].className = 'horse2';
	}
	else {
		munto[7].className = 'horse2';
	}
}
function kaloGhoda(){
	var setighoda = document.getElementById('horse1');
	seti = setighoda.offsetLeft; 
	var khairighoda = document.getElementById('horse2');
	khairi = khairighoda.offsetLeft; 
	var kalighoda = document.getElementById('horse3');
	kali = kalighoda.offsetLeft; 
	var gorighoda = document.getElementById('horse4');
	gori = gorighoda.offsetLeft; 

	var munto = document.getElementsByTagName('td');
	if (kali > khairi && kali > seti && kali > gori){
		munto[1].className = 'horse3';
	}
	else if (kali > gori && kali > seti && kali < khairi){
		munto[3].className = 'horse3';
	}
	else if (kali > khairi && kali > gori && kali < seti){
		munto[3].className = 'horse3';
	}
	else if (kali > seti && kali > khairi && kali < gori){
		munto[3].className = 'horse3';
	}
	else if (kali < gori && kali < seti && kali > khairi){
		munto[5].className = 'horse3';
	}
	else if (kali < khairi && kali < gori && kali > seti){
		munto[5].className = 'horse3';
	}
	else if (kali < seti && kali < khairi && kali > gori){
		munto[5].className = 'horse3';
	}
	else {
		munto[7].className = 'horse3';		
	}
}
function goroGhoda(){

    var setighoda = document.getElementById('horse1');
	seti = setighoda.offsetLeft; 
	var khairighoda = document.getElementById('horse2');
	khairi = khairighoda.offsetLeft; 
	var kalighoda = document.getElementById('horse3');
	kali = kalighoda.offsetLeft; 
	var gorighoda = document.getElementById('horse4');
	gori = gorighoda.offsetLeft; 

	var munto = document.getElementsByTagName('td');

	if (gori > khairi && gori > kali && gori > seti){
		munto[1].className = 'horse4';
	}
	else if (gori > seti && gori > kali && gori < khairi){
		munto[3].className = 'horse4';
	}
	else if (gori > khairi && gori > seti && gori < kali){
		munto[3].className = 'horse4';
	}
	else if (gori > kali && gori > khairi && gori < seti){
		munto[3].className = 'horse4';
	}
	else if (gori < seti && gori < kali && gori > khairi){
		munto[5].className = 'horse4';
	}
	else if (gori < khairi && gori < seti && gori > kali){
		munto[5].className = 'horse4';
	}
	else if (gori < kali && gori < khairi && gori > seti){
		munto[5].className = 'horse4';
	}
	else{
		munto[7].className = 'horse4';
	}
}
function talaMuud(){
  	for(i=1;i<5;i++){
		var element = document.getElementById('horse'+i);
		var top = element.offsetTop;
  		element.className = 'horse runDown';
  		if(top>=window.innerHeight*0.77 && top <= window.innerHeight *0.8){
  	 		clearInterval(int1);
  			element.className = 'horse runLeft';
  			int1 = setInterval(bayaJaa,2);
  
		}
		else
		element.style.top = top + Math.random()*4 + 'px';
	}
}
function bayaJaa(){
	for(i=1;i<5;i++){
 		var element = document.getElementById('horse'+i);
  		element.className = 'horse runLeft';
		var left = element.offsetLeft;
	 		if(left >= window.innerWidth * 0.01&& left <= window.innerWidth * 0.03){
			element.className = 'horse runUp';
			clearInterval(int1);
			int1 = setInterval(mathiJaa,2);
			}
		else
		element.style.left = left - Math.random()*3 + 'px';
	}
}
function mathiJaa(){
	for(i=1;i<5;i++){
  		element = document.getElementById('horse'+i);
  		element.className = 'horse runUp';
  		var top = element.offsetTop;
  		if(top==4){
  			clearInterval(int1);
  			int1 = setInterval(bisramGaar,2);
  		}
		else
		element.style.top = top - Math.random()*2 +"px";
	}
}
function bisramGaar(){
	for (i=1;i<5;i++){
 		var element = document.getElementById('horse'+i);
 		var left = element.offsetLeft;
 		element.className = 'horse runRight';
 		if(left >= window.innerWidth * 0.28 && left <= window.innerWidth * 0.3){
  	    	element.className = 'horse standRight';
     		clearInterval(int1);
    		setoGhoda();
    		khairoGhoda();
    		kaloGhoda();
    		goroGhoda();
    		hisabparinam();
        }
		else
		element.style.left = left +1 +"px";
	}	
}
 
function bayaMudd(){
	for(i=1;i<5;i++){
 		var element = document.getElementById('horse'+i);
  		element.className = 'horse runLeft';
		var left = element.offsetLeft;
		 if(left >= window.innerWidth * 0.1&& left <= window.innerWidth * 0.4){
			element.className = 'horse runDown';
			clearInterval(int1);
			int1 = setInterval(talaMuud,5);
		}
		else
		element.style.left = left - Math.random()*3 + 'px';
	}
}
function mathiMuud(){
	for(i=1;i<5;i++){
  		element = document.getElementById('horse'+i);
  		element.className = 'horse runUp';
  		var top = element.offsetTop;
		if(top==4){
			element.className = 'horse runLeft';
			clearInterval(int1);
			int1 = setInterval(bayaMudd,2);
  		}
  		else
		element.style.top = top - Math.random()*3 +"px";
  	}
}
function bisram(){
	for (i=1;i<5;i++){
		var element = document.getElementById('horse'+i);
		var left = element.offsetLeft;
  		element.className = 'horse runRight';
  			if(left >= window.innerWidth * 0.8 && left<= window.innerWidth * 1){
			  clearInterval(int1);
			  element.className = 'horse runUp';
			  int1 = setInterval(mathiMuud,2);
			}
  			
					
		element.style.left = left + Math.random()*4 + 'px';
	}
}
function talaJhar(){
	for(i=1;i<5;i++){
		var element = document.getElementById('horse'+i);
		var top = element.offsetTop;
  		element.className = 'horse runDown';
  		if(top >= window.innerWidth * 0.39 && top <= window.innerWidth * 0.8){
  			clearInterval(int1);
  			element.className = 'horse runRight';
  			int1 = setInterval(bisram,2);
  
		}else
		element.style.top = top + Math.random()*4 + 'px';
	}
}
function dayaMuud(){
	for (i=1;i<5;i++){
 		var element = document.getElementById('horse'+i);
 		var left = element.offsetLeft;
   		element.className = 'horse runRight';
   		if(left >= window.innerWidth * 0.43&& left <= window.innerWidth * 0.8){
   			clearInterval(int1);
   			element.className = 'horse runDown';
   			int1 = setInterval(talaJhar,5);
 		}
 			else	
 				element.style.left = left + Math.random()*4 + 'px'; 
}
	
	}	
function movie(){
	int1  = setInterval(dayaMuud,2);
}
function hisabkitab(){
    var deBit = document.getElementById('funds').innerText;
    var creDit = document.getElementById('amount').value;
    document.getElementById('funds').innerText = deBit - creDit;
    var surugar = document.getElementById('start');
	surugar.removeEventListener('click',hisabkitab);
    movie();
}
function hisabparinam(){
    var deBit = document.getElementById('funds').innerHTML;
    var creDit = document.getElementById('amount').value;
    var ghodas = document.getElementsByTagName('td');
    var bijaya = ghodas[1].className;

    var bets = document.getElementById('bethorse');
    var betsHorse = bets.options[bets.selectedIndex].value;
        if( bijaya == betsHorse ){
           document.getElementById('funds').innerHTML = parseInt(deBit) + (2*parseInt(creDit));
        }
        else {
            document.getElementById('funds').innerHTML = parseInt(deBit);
        }
}
function suruwat(){
	var surugar = document.getElementById('start');
	surugar.addEventListener('click',hisabkitab);
}
document.addEventListener('DOMContentLoaded', suruwat);














