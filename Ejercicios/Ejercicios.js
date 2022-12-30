/**
 * 
 */

 
 var nomejer = [];				// nombre del ejercicio
 nomejer[0] = [""];
 nomejer[1] = ["Conceptos b\u00e1sicos"];
 nomejer[2] = ["Desinencias"];
 nomejer[3] = ["des(a) y des(b) I"];
 nomejer[4] = ["des(a) y des(b) II"];
 nomejer[5] = ["Pronombres de conjugaci\u00f3n"];
 nomejer[6] = ["Conjugando I"];
 nomejer[7] = ["Conjugando II"];
 nomejer[8] = ["Conjugando III"];
 nomejer[9] = ["Y regularidades I"];
 nomejer[10] = ["Y regularidades II"];
 nomejer[11] = ["Y regularidades III"];
 nomejer[12] = ["Marca de plural I"];
 nomejer[13] = ["Marca de plural II"];
 nomejer[14] = ["Marca de plural III"];
 nomejer[15] = ["Terminaci\u00f3n I"];
 nomejer[16] = ["Marca de plural IV"];
 nomejer[17] = ["Marca de plural V"];
 nomejer[18] = ["Marca de plural VI"];
  
var video = [];							// videos que es necesario haber visto para realizar el ejercicio
video[1] = ["1", "14"];					// el 2do elemento corresponde a las paginas del libro que es necesario haber leido
video[2] = ["1", "14"];
video[3] = ["1", "14"];
video[4] = ["1", "14"];
video[5] = ["2", "17"];
video[6] = ["2", "17"];
video[7] = ["2", "17"];
video[8] = ["3", "17"];
video[9] = ["3", "17"];
video[10] = ["3", "17"];
video[11] = ["3", "17"];
video[12] = ["4", "21"];
video[13] = ["4", "21"];
video[14] = ["4", "21"];
video[15] = ["5", "22"];
video[16] = ["5", "22"];
video[17] = ["5", "22"];
video[18] = ["5", "22"];


 var cantejer = nomejer.length - 1;				// cantidad de ejercicios disponibles

  
 var solucion = [];				// solucion a los ejercicios
 solucion[1] = ["-er","travaill-", "des(pl)", "des(sing)"]; //solalt[1] = ["-er","travaill-", "des(pl)", "des(sing)"]; 
 solucion[2] = ["des(pl)","des(b)", "des(b)", "des(pl)", "des(a)", "des(a)", "des(pl)"]; //solalt[2] = ["des(pl)","des(b)", "des(b)", "des(pl)", "des(a)", "des(a)", "des(pl)"];
 solucion[3] = ["des(b)","des(a)", "des(b)","des(b)", "des(a)", "des(a)", "des(a)", "des(b)"]; //solalt[3] = ["des(b)","des(a)", "des(b)","des(b)", "des(a)", "des(a)", "des(a)", "des(b)"];
 solucion[4] = ["salue","parcours", "offre","tressaille", "ris", "salues", "parcours", "offres", "tressailles", "ris", "salue", "parcourt", "offre", "tressaille", "rit" ]; //solalt[4] = ["salue","parcours", "offre","tressaille", "ris", "salues", "parcours", "offres", "tressailles", "ris", "salue", "parcourt", "offre", "tressaille", "rit" ];
 solucion[5] = ["ils / elles","il / elle / on", "je / tu","nous", "je / il / elle / on", "tu", "vous"]; //solalt[5] = ["ils / elles","il / elle / on", "je / tu","nous", "je / il / elle / on", "tu", "vous"];
 solucion[6] = ["pleure","pleures", "pleurons","inclus", "inclut", "incluent", "rouvres", "rouvre", "rouvrez", "assaille", "assailles", "assaillent", "cours", "court", "courons" ]; //solalt[6] = ["pleure","inclus", "rouvres","assaille", "cours", "pleures", "inclut", "rouvre", "assailles", "court", "pleurons", "incluent", "rouvrez", "assaillent", "courons" ];
 solucion[7] = ["prends","regardons", "souffre","travaillent", "ouvres", "rit", "allez", "cours", "semblent", "inclut"]; //solalt[7] = ["prends","regardons", "souffre","travaillent", "ouvres", "rit", "allez", "cours", "semblent", "inclut"];
 solucion[8] = ["entre","quitte", "vend","d\u00e9missionne", "d\u00e9filent", "publie", "est", "introduit", ["na\u00eet", "nait"], "compte", "signe"]; //solalt[8] = ["entre","quitte", "vend","d\u00e9missionne", "d\u00e9filent", "publie", "est", "introduit", "nait", "compte", "signe"];
 solucion[9] = ["nage","fonds", "fais","est", "dis", "nageons", "fond", "font", "sommes", "dites"];
 solucion[10] = ["fais","convaincs", "s\u00e8mes","place", "vais", "faites", "convainc", "semez", "pla\u00e7ons", "vont"];
 solucion[11] = ["p\u00e8le","as", "appelles","d\u00e9place", "pr\u00e9c\u00e8de", "pelez", "ont", "appelons", "d\u00e9placez", "pr\u00e9c\u00e9dez"];
 solucion[12] = ["-re","-ire", "s","introduis", "introduisez"];
 solucion[13] = ["-re","-crire", "v","circonscris", "circonscrivons"];
 solucion[14] = ["\u00e9cris","disons", "souris","proscrit", "cuis", "\u00e9crivons", "dites", "sourient", "proscrivons", "cuisez"];
 solucion[15] = ["re","ir", "re","re", "ir", "tre", "r", "r"];
 solucion[16] = ["v","\u00d8", "\u00d8","s", "\u00d8", "ss", "ss", "ss"];
 solucion[17] = ["transcris","suffis", "enorgueillis","nais", "m\u00e9dit", "transcrivons", "suffisent", "enorgueillissez", "naissent", "médisez"];
 solucion[18] = [["pa\u00eet", "pait"], "disent", "assaille","prescrit", "vieillis", "paissent", "dites", "assaillent", "prescrivez", "vieillissons"]; //solalt[18] = ["pait","disent", "assaille","prescrit", "vieillis", "paissent", "dites", "assaillent", "prescrivez", "vieillissons"]
 

 
var textofijo = [];					// Parte de ejercicios aleatorios que acompaña al cuadro de respuesta
textofijo[2] = ["travaillent", "court", "inclus", "\u00e9tudions", "arrive", "m\u00e8nes", "regardez" ];
textofijo[3] = ["interrompre", "supposer", "na\u00eetre", "appauvrir", "d\u00e9couvrir", "cueillir", "mijoter", "mettre" ];
textofijo[5] = ["travaillent", "court", "inclus", "\u00e9tudions", "arrive", "m\u00e8nes", "regardez" ];
textofijo[15] = ["souscrire", "accueillir", "sourire", "produire", "d\u00e9couvrir", "para\u00eetre", "vieillir", "choisir"  ];
textofijo[16] = ["souscrire", "accueillir", "sourire", "produire", "d\u00e9couvrir", "para\u00eetre", "vieillir", "choisir"  ];



var ayuda = [];
ayuda[1] = ["La terminaci\u00f3n son las dos \u00faltimas letras del infinitivo", "El radical se obtiene quitando la terminaci\u00f3n al infinitivo", "Lo que se agrega al radical para obtener la forma conjugada es la desinencia", "Lo que se agrega al radical para obtener la forma conjugada es la desinencia"]
ayuda[2] = ["-ent corresponde siempre a ils/elles", "-t es siempre 3ra persona", "-s puede corresponder a 'je' o 'tu'", "-ons corresponde siempre a 'nous'", "-e puede corresponder a 'je' o 'il/elle/on'", "-es corresponde a 'tu'", "-ez es siempre 'vous'" ];
ayuda[3] = ["No es un verbo en -er ni en -illir ni en -ffrir ni en -ouvrir", "Verbo en -er", "No es un verbo en -er ni en -illir ni en -ffrir ni en -ouvrir", "No es un verbo en -ouvrir", "Es un verbo en -ouvrir", "Verbo en -illir", "Verbo en -er", "No es un verbo en -er ni en -illir ni en -ffrir ni en -ouvrir" ];      
ayuda[4] = ["Los verbos en -er, -illir, -ffrir y -ouvrir utilizan des(a)", "No es un verbo ni en -er ni en -illir -ni en ffrir ni en -ouvrir", "Verbo en -ffrir", "Verbo en -illir", "\u00bfEs alguno de los 4 casos de des(a)? Porque si no es des(a) es des(b)"];
ayuda[5] = ["-ent es siempre desinencia de 3ra persona plural", "-t es siempre desinencia de 3ra persona", "-s es des(b) para dos pronombres",  "-ons es siempre desinencia del mismo pronombre",  "-e es des(a)", "-es es des(a) y es caracter\u00edstico de un pronombre en particular. En espa\u00f1ol tambi\u00e9n.", "-ez es siempre desinencia del mismo pronombre", ]; 
ayuda[6] = ["Los verbos en -er, -illir, -ffrir y -ouvrir utilizan des(a)", "Si no es des(a) es des(b)", "Los verbos en -er, -illir, -ffrir y -ouvrir utilizan des(a)", "Los verbos en -er, -illir, -ffrir y -ouvrir utilizan des(a)", "Si no es des(a) es des(b)"];
ayuda[7] = ["Si no es des(a) es des(b)", "Las des(pl) son las mismas para todos los verbos", "Los verbos en -er, -illir, -ffrir y -ouvrir utilizan des(a)", "'Pierre et Marie' = ils", "Los verbos en -er, -illir, -ffrir y -ouvrir utilizan des(a)", "Si no es des(a) es des(b)", "La terminaci\u00f3n son las dos \u00faltimas letras del infinitivo", "Si no es des(a) es des(b)", "Las des(pl) son las mismas para todos los verbos","Si no es des(a) es des(b)"];
ayuda[8] = ["Los verbos en -er, -illir, -ffrir y -ouvrir utilizan des(a)", "El sujeto del verbo sigue siendo el mismo que el del verbo anterior", "Cuando el radical del verbo termina en 't', 'd' o 'c' no se agrega la desinencia '-t'.", "Hay que poner los acentos", "El sujeto del verbo es 'les \u00e9minences grises de la NRF'", "Ya no necesit\u00e1s ayuda para conjugar un verbo como \u00e9ste", "Uno de los tres verbos irregulares del franc\u00e9s. Hay que conjugarlo a la 3ra persona del singular", "El sujeto del verbo es 'qui'' que hace referencia a L\u00e9on-Paul Fargue.", "Los verbos en '-a\u00eetre / -o\u00eetre', \u00bfqu\u00e9 terminaci\u00f3n tienen?", "El sujeto del verbo es 'qui' que hace referencia a Gallimard.", "El sujeto del verbo sigue siendo Gallimard"]; 
ayuda[9] = ["A veces hay que variar la escritura para conservar la misma pronunciaci\u00f3n", "Cuando el radical termina en 't', 'd' o 'c' no se agrega la desinencia -t", "Los tres verbos irregulares utilizan la misma desinencia para la 3ra pers. del plural, caracter\u00edstica que comparte el verbo 'faire'", "Uno de los tres verbos irregulares. Es el \u00fanico verbo que utiliza esa desinencia para 'nous'", "Tres verbos utilizan esta desinencia para 'vous'. Dato curioso: siempre va precedida de la letra 't'"];
ayuda[10] = ["Tres verbos utilizan esta desinencia para 'vous'. Dato curioso: siempre va precedida de la letra 't'", "Cuando el radical termina en 't', 'd' o 'c' no se agrega la desinencia -t", "'e' final de s\u00edlaba en el escrito pero no en el oral lleva acento grave.", "A veces hay que variar la escritura para conservar la misma pronunciaci\u00f3n", "Los tres verbos irregulares utilizan la misma desinencia para la 3ra pers. del plural, caracter\u00edstica que comparte el verbo 'faire'"];  
ayuda[11] = ["'e' final de s\u00edlaba al escrito pero no al oral lleva acento grave.", "Los tres verbos irregulares utilizan la misma desinencia para la 3ra pers. del plural, característica que comparte el verbo 'faire'", "'appeler' y 'jeter' son los únicos verbos que duplican la consonante final del radical en lugar de utilizar el acento grave", "Ya no necesitas ayuda para conjugar un verbo como este", "'e' final de s\u00edlaba al escrito pero no al oral lleva acento grave."]; 
ayuda[12] = ["La terminaci\u00f3n son las dos \u00faltimas letras del infinitivo", "Las letras finales que indican a qu\u00e9 grupo pertenece el verbo", "No es un verbo en 'crire' ni en 'rire'.", "\u00bfMiraste los videos?", "Para el plural hay que agregar la mp"];
ayuda[13] = ["La terminaci\u00f3n son las dos \u00faltimas letras del infinitivo", "Las letras finales que indican a qu\u00e9 grupo pertenece el verbo. Record\u00e1 la prioridad de mayor a menor", "No es un verbo en 'rire' ni en 'ire'", "Habr\u00e1 que repasar 'Los conceptos b\u00e1sicos'.", "Para el plural hay que agregar la mp"];
ayuda[14] = ["\u00bfEs un verbo en '-crire', en 'rire' o en '-ire'", "Tres verbos tienen una desinencia para 'vous' distinta a '-ez'. Dato curioso: siempre precedida de la misma consonante.", "Un verbo que sab\u00e9s conjugar desde el video 1", "\u00bfEs un verbo en '-crire', en 'rire' o en '-ire'", "Hay que agregar la mp. \u00bfCu\u00e1l?"];		
ayuda[15] = ["RG", "RG", "RG", "RG", "RG", "La terminaci\u00f3n de los verbos en '-a\u00eetre / o\u00eetre' son las ... \u00faltimas letras del infinitivo-", "Cuatro verbos en 'illir' pertenecen al grupo de verbos en '-ir [ir]'.", "Los verbos en '-ir [ir]' no siguen la RG"];
ayuda[16] = ["\u00bfEs un verbo en '-crire', en 'rire' o en '-ire'?", "Verbo en '-illir'", "\u00bfEs un verbo en '-crire', en 'rire' o en '-ire'? \n Es un verbo que sab\u00e9s conjugar desde el video 1", "\u00bfEs un verbo en '-crire', en 'rire' o en '-ire'?", "Verbo en '-ouvrir'.", "Verbo en '-a\u00eetre / o\u00eetre'" , "Cuatro verbos en 'illir' pertenecen al grupo de verbos en '-ir [ir]'.", "Verbo en '-ir [ir].'"]; 
ayuda[17] = ["\u00bfEs un verbo en '-crire', en 'rire' o en '-ire'?", "\u00bfEs un verbo en '-crire', en 'rire' o en '-ire'?", 	"Cuatro verbos en 'illir' pertenecen al grupo de verbos en '-ir [ir]'.", "Verbo en '-a\u00eetre / o\u00eetre'" , "\u00bfEs un verbo en '-crire', en 'rire' o en '-ire'?"];
ayuda[18] = [ "Verbo en '-a\u00eetre / o\u00eetre'" , 	 "Tres verbos tienen una desinencia para 'vous' distinta a '-ez'. \n Dato curioso: siempre precedida de la misma consonante.", "Verbo en '-illir'", "\u00bfEs un verbo en '-crire', en 'rire' o en '-ire'?",  "Cuatro verbos en 'illir' pertenecen al grupo de verbos en '-ir [ir]'."];
			

 var yacorreg = false;
 var cantit; 										// cantidad de items del ejercicio
 var caso;											// ultimo campo seleccionado
 var respuesta;										// respuesta sin espacios en blanco
 var ejercicio;									// ejercicio elegido
 var salieron = [];								// orden de items aleatorios
 var mostrado = false;							// indica si se mostraron las respuestas


  // Correccion de las respuestas
  
function corregir(ej, tipo, aleat) {
	var blancos = 0;							// items sin completar
	var correctos = 0;							// cantidad de respuestas correctas
	var errores = 0;							// cantidad de errores

	
	
	
		
	for (var x = 0; x < cantit; x++) {
		respuesta = document.forms[0].elements[x].value.replace(/ /g, "");  // quita todo espacio en blanco en la respuesta
		if ( respuesta == "") {												// si no hay respuesta...
			blancos++;														// cuenta blancos
		}	
	}

	
	
	if (blancos > 0) {														// si hay blancos... 
		var s;
		if (blancos == 1) {s = "";} else {s = "s";}
		if (!confirm("Hay " + blancos + " \u00edtem" + s + " sin completar. \u00bfCorregir de todas maneras?")) {
		return;
		}
	}
		
		
	
		for (var x = 0; cantit > x; x++) { 
			if (tipo == "i") {										// si son de tipo input...
				respuesta = document.forms[0].elements[x].value.trim(); //... elimina espacios en blanco
				respuesta = respuesta.toLowerCase();
			} else {respuesta = document.forms[0].elements[x].value;}
			
			
			
			if (aleat == "aleat") {									// si es un ejercicio aleatorio..
																	// ... ¡¡NO HACE NADA!!
			} else {salieron[x] = x;}							// y si no, el orden aleatorio es igual al secuencial
			
			
			if (Array.isArray(solucion[ej][salieron[x]]) == false) {	
				if ( respuesta != solucion[ej][salieron[x]]) {
					errores++; document.forms[0].elements[x].style.backgroundColor = "red";
				} else {correctos++; document.forms[0].elements[x].style.backgroundColor = "green";}
			} else {	
				if ( respuesta == solucion[ej][salieron[x]][0] || respuesta == solucion[ej][salieron[x]][1]) {
					correctos++; document.forms[0].elements[x].style.backgroundColor = "green";
				} else {errores++; document.forms[0].elements[x].style.backgroundColor = "red";
					}
			}
	
			
		}	

	

		
		document.getElementById("botverde").value = correctos;
		document.getElementById("botrojo").value = errores;
	
	if (yacorreg == false) {
		yacorreg = true; 
		if (correctos / cantit == 1) {alert("\u00a1\u00a1\u00a1 Felicitaciones !!!");}
		else if (correctos / cantit >= 0.8) { alert("\u00a1\u00a1 Muy bien !! \u00a1\u00a1Casi perfecto!!");}
		else if (correctos / cantit >= 0.6) { alert("\u00a1\u00a1Bien! \u00a1\u00a1Ya lo estamos entendiendo! S\u00f3lo hay que practicar un poco m\u00e1s.")}
		else {alert("Bueno, a no desanimarse. Hay que repasar y volver a practicar.")}
		
	}
}




  // Muestra las respuestas correctas
function mostrar(ej, aleat) {
	
		for (var x = 0; cantit > x; x++) { 
			if (aleat == "aleat") {									// si es un ejercicio aleatorio..
																	// ... ¡¡NO HACE NADA!!
			} else {salieron[x] = x;}								// y si no, el orden aleatorio es igual al secuencial
		
			if (Array.isArray(solucion[ej][salieron[x]]) == false) {
				document.forms[0].elements[x].value = solucion[ej][salieron[x]];
				} else {document.forms[0].elements[x].value = solucion[ej][salieron[x]][0];}
				 
			if (document.forms[0].elements[x].style.backgroundColor == "red") {  // cambia el color de las respuestas incorrectas de rojo a blanco
				document.forms[0].elements[x].style.backgroundColor = "white";
			}
		}
			
		
	
	yacorreg = true; mostrado = true;

} // Fin mostrar



function borrar(ej, aleat) {

	colorejercicio(ej); 
	cantit = solucion[ej].length; 						// cantit es la cantidad de items que tiene el ejercicio
	ejercicio = ej;
						
	
	for (var x = 0; x < cantit; x++) {
		document.forms[0].elements[x].selectedIndex = 0;	// deja los selects en blanco
		document.forms[0].elements[x].value = "";			// borra los inputs
		document.forms[0].elements[x].style.backgroundColor = "white"; // pone los fondos en blanco
		
	}
	
	
	
	document.getElementById("botverde").value = 0;				// resetea contador de aciertos
	document.getElementById("botrojo").value = 0;				// resetea contador de errores
	
	yacorreg = false;											// ejercicio sin corregir
	
	
	if (aleat == "aleat") {
	
	// Ubica en orden aleatorio los items
	 var ubicacion;
	 salieron = [];
		
		for (var x = 0; x < cantit ; x++) {
		
			ubicacion = Math.random() * cantit ; 
			ubicacion = Math.floor(ubicacion);
			
				if (!salieron.includes(ubicacion)) {
					salieron.push(ubicacion);
					} else {x--;}
		} 
			
		for (var x = 0; cantit > x; x++) { 
			document.getElementById("verbo" + x).innerHTML = textofijo[ej][salieron[x]];
		}
	
	} else {for (var x = 0; x < cantit ; x++) {
			salieron[x] = x;
			}
	}
	
	
	
	if (document.getElementById("ayuda").length > 1) {
		for (var x = cantit + 1; x > 0; x--) {
		document.getElementById("ayuda").childNodes[x].remove();
		}
	}
	 crearayuda();
	
	
	
	
	document.getElementById("kejerc").innerHTML = ej + ". " + nomejer[ej];
	document.getElementById("previo").innerHTML ="(Es necesario haber visto el video " + video[ej][0] + " o haber le\u00eddo hasta la p\u00e1gina " + video[ej][1] + " del libro.)" ;
	document.forms[0].elements[0].focus(); 



	window.scrollTo(0, document.body.scrollHeight);   			// Hace scroll para que el ejercicio se muestre completo
}

	
function impayuda() {
	alert(ayuda[ejercicio][salieron[document.getElementById("ayuda").selectedIndex - 1]]);
	document.getElementById("ayuda").selectedIndex = 0;
}



  // crea la lista de ejercicios
  function crearlista() {
  var itemlist; var nomit;
  
  for (var x = 1; cantejer >= x ; x++ ) {
	
	itemlist = document.createElement("li"); 
	itemlist.setAttribute("onclick", "window.location.href='Ejercicio" + x + ".html'");
	nomit = document.createTextNode(nomejer[x]);
	itemlist.appendChild(nomit);
		
	document.getElementById("listas").appendChild(itemlist);
	
	}
	
}


function crearayuda() {
	
	// genera las opciones de ayuda
		var itemlist;
		var nomit;
		
		itemlist = document.createElement("option"); 
		nomit = document.createTextNode("Ayuda");
		itemlist.appendChild(nomit);
		document.getElementById("ayuda").appendChild(itemlist);
	for (var x = 0; ayuda[ejercicio].length > x; x++) { 
		itemlist = document.createElement("option"); 
		nomit = document.createTextNode(document.getElementById("verbo" + x).textContent);
		itemlist.appendChild(nomit);
		document.getElementById("ayuda").appendChild(itemlist);
	}
	
}

  // Cambia el color del ejercicio seleccionado en la lista de ejercicios 
function colorejercicio(il) {
	document.getElementById("listas").childNodes[il].style.color = "yellow";
}



  // Agrega caracteres especiales desde teclado virtual
function agregarcar(letra) {
	var car;
	if (letra == "c") {car = "\u00e7";}
	if (letra == "egr") {car = "\u00e8";}
	if (letra == "eag") {car = "\u00e9";}
	if (letra == "icirc") {car = "\u00ee";}
	var pos = document.forms[0].elements[caso].selectionStart; // Obtiene la posicion inicial de seleccion
	var fin = document.forms[0].elements[caso].selectionEnd;	// Obtiene la posicion final de seleccion
	var pal = document.forms[0].elements[caso].value;			// Asigna la palabra del input
	var palcor = pal.substring(0, pos).concat(car).concat(pal.substring(fin, pal.length)); // Elimina la seleccion e inserta caracter en su lugar
	document.forms[0].elements[caso].value = palcor;            // Imprime la nueva palabra
	document.forms[0].elements[caso].setSelectionRange(pos + 1, pos + 1); document.forms[0].elements[caso].focus(); // Ubica el cursor a la derecha del caracter añadido
	
}


  // Registra el último campo activo en caso de agregacar();
function input(nro) {
	caso = nro;
}


 // Vuelve blanco el fondo al cambiar la respuesta
 function blanco(itch) {
	
		document.forms[0].elements[itch].style.backgroundColor = "white";//}
 }

