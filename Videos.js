/**
 * 
 */
 
 var dirvideo = []; var titvideo = [];
 dirvideo[0] = "https://www.youtube.com/embed/BF_JDIyioJo"; titvideo[0] = "Conceptos b&#225;sicos";
 dirvideo[1] = "https://www.youtube.com/embed/xUPHQvJVguk"; titvideo[1] = "Los pronombres de conjugaci&#243;n";
 dirvideo[2] = "https://www.youtube.com/embed/OwMY3nhu8X8"; titvideo[2] = "Lo regular de los verbos irregulares";
 dirvideo[3] = "https://www.youtube.com/embed/TrKNfaSaocg"; titvideo[3] = "La marca plural (1ra parte)";
 dirvideo[4] = "https://www.youtube.com/embed/Z9ny7_tFKfE"; titvideo[4] = "La marca plural (2da parte)";
 dirvideo[5] = "https://www.youtube.com/embed/_Tvh3RfjLo4"; titvideo[5] = "La marca plural (3ra parte)";
 
 function cargarvideo(nrovideo) {
	document.getElementById("titvideo").innerHTML = nrovideo + ". " + titvideo[nrovideo - 1];
	
	var videoamostrar = document.getElementById("frame");
	videoamostrar.src = dirvideo[nrovideo - 1];
	
}



