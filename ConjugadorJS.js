/******************************************************************************************************
 * 																									   *
 *			======================================================================					   *
 *			||																	||					   *
 *			||	------>>>>   CONJUGADOR DE VERBOS FRANCESES 	<<<<----------	||					   *
 *			||																	||					   *
 *			=======================================================================					   *
 *																		(c) Andres Varela 2022							   *
 *******************************************************************************************************
 */
 // Declaracion de variables
 
 
var verbo = {} ; 						// Declara objeto verbo
resetearVerbo();						// Crea el objeto sin datos

var cons = ["b", "c", "d", "f", "g", "h", "j", "k", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z" ]
var desin = [["e", "es", "e"], ["s", "s", "t"], ["x", "x", "t"]];					// desinencias del singular
var desinpl;													// desinencias del plural

var pers;								// pronombres de conjugación
var persesp = "<br>Yo<br>T\u00fa<br>\u00c9l / Ella<br>Nosotros<br>Vosotros<br>Ellos / Ellas<br>"; // pronombres del español
var pronombres;
var seg_msg = [];																			// mensaje de alerta
var large = Boolean;
var codigo = "<b>C\u00f3digo de colores: </b><font color = 'red'>\u{1F7E5}</font> Radical || <font color = 'yellow'>\u{1F7E8}</font> Terminaci\u00f3n || <font color = 'green'>\u{1F7E9}</font> Desinencia singular || <font color = 'blue'>\u{1f7e6}</font> Desinencia plural ||	<font color = 'black'>\u{2b1b}</font> Marca de Plural"
var ayuda = "<b>Tips: </b>"; 														// publica datos de la conjugación

																					// datos de la conjugación
var dato=[
"Es uno de los tres verbos irregulares del franc\u00e9s junto a <span class='ital'>avoir</span> y <span class='ital'>aller</span>.", 	// 0
"Es uno de los tres verbos irregulares del franc\u00e9s junto a <span class='ital'>\u00eatre</span>  y <span class='ital'>aller</span> .",		// 1
"Es uno de los tres verbos irregulares del franc\u00e9s junto a <span class='ital'>\u00eatre</span>  y <span class='ital'>avoir</span> .", 	// 2
"Los verbos en -er tienen terminaci\u00f3n = RG, utilizan des(a) y no tienen mp.",	// 3
"Los verbos <span class='ital'>appeler</span>  y <span class='ital'>jeter</span>  duplican la consonante final del radical cuando est\u00e1 seguida de desinencia muda.",	// 4
"Pero los verbos en -oyer y en -uyer siguen la regla de la yod: la 'y' s\u00f3lo se utiliza si est\u00e1 seguida de vocal pronunciada, si no, se escribe 'i', como en <span class='ital'>voir</span> y <span class='ital'>croire</span>.",			// 5
"Verbos en -illir: terminaci\u00f3n = RG, utilizan des(a) excepto <span class='ital'>bouillir</span> (que tiene una conjugaci\u00f3n propia), <span class='ital'>vieillir</span>, <span class='ital'>jaillir</span>, <span class='ital'>faillir</span> y <span class='ital'>s'enorgueillir</span> que se conjugan como <span class='ital'>finir</span>", 
"Verbos en -ffrir y en -ouvrir: terminaci\u00f3n = RG, utilizan des(a). Se conjugan como <span class='ital'>parler</span>", // 7
"Los verbos en -ire que se pronuncien [ir] (como en <span class='ital'>lire</span>, lo que excluye a verbos como <span class='ital'>croire</span>) y los verbos en -aire tienen terminaci\u00f3n = RG, utilizan des(b) y su mp es 's'.", // 8
"Los verbos en -crire tienen terminaci\u00f3n = RG, utilizan des(b) y su mp es 'v'", 			// 9
"Los verbos en -rire, al igual que los verbos en -courir y en -ure, tienen terminaci\u00f3n = RG , utilizan des(b) y no usan mp",				// 10
"Los verbos vie<i>illir<i/>, fa<i>illir</i>, ja<i>illir</i> y s'enorgue<i>illir</i> pertenecen al grupo de los verbos en -ir [ir]: terminaci\u00f3n = RG y mp = 'ss'",  // 11
"Verbo con conjugaci\u00f3n propia: terminaci\u00f3n = RG, utiliza des(b) y la mp es 'ill'", //12
"",//["Los verbos en -aire al igual que los verbos en -ire (pronunciación [ir]) tienen terminación RG, utilizan des(b) y la mp es 's'.", // 13
"Los verbos en -ure, en -rire y en -courir tienen terminaci\u00f3n = RG, utilizan des(b) y no tienen mp.", // 14
"Los verbos en -o\u00eetre o -a\u00eetre tienen terminaci\u00f3n -tre (las tre \u00faltimas letras del infinitivo \u{1F92a} ), utilizan des(b) y la mp es 'ss'.", // 15
"Los verbos en -ayer pueden conjugarse siguiendo la regla de la yod o tambi\u00e9n considerar que la y forma parte del radical",  // 16
"Acento grave: 'e' final de s\u00edlaba al escrito pero no al oral deviene '\u00e8'", // 17
"Los verbos con h aspirada no provocan la elisi\u00f3n de los pronombres.", // 18
"El verbo <span class='ital'>assoir</span> (nueva graf\u00eda para <span class='ital'>asseoir</span> desde la reforma de la ortograf\u00eda) tiene term -r y puede conjugarse como <span class='ital'>voir</span> aunque tiene una segunda conjugaci\u00f3n m\u00e1s utilizada que cuenta con dos radicales.",
"Los verbos en -eyer tienen una sola conjugaci\u00f3n: la 'y' es parte del radical", // 20
"Los verbos en -ger agregan una 'e' al final del radical cuando est\u00e1 seguida de la desinencia '-ons' para mantener el sonido de la 'g'", // 21
"Los verbos en '-cer' cambian la 'c' por '\u00e7' delante de la desinencia '-ons' para matener su sonido.", 
"Los verbos en '-ouvoir' se conjugan como <span class='ital'>poder</span> o <span class='ital'>mover</span> del espa\u00f1ol, y el verbo <span class='ital'>vouloir</span> (querer) como el verbo <span class='ital'>volar</span> del espa\u00f1ol. S\u00f3lo que cuando en espa\u00f1ol usamos <span class='ital'>ue</span> en franc\u00e9s se usa <span class='ital'>eu</span>",
"Los verbos en '-revoir' se conjugan como <span class='ital'>voir</span>", // 24
"El verbo <span class='ital'>savoir</span> opone un radical para el singular y otro para el plural. Este \u00faltimo se obtiene del infinitivo y el primero se pronincia como en espa\u00f1ol: je sais, yo s\u00e9" , //25
"El verbo <span class='ital'>valoir</span> opone un radical para el singular y otro para el plural", // 26 
"Los verbos en '-oir' y en '-oire' siguen la regla de la yod: i seguida de vocal pronunciada se escribe y", // 27
"El verbo <span class='ital'>fuir</span> y los verbos en '-raire' siguen la regla de la yod: i seguida de vocal pronunciada se escribe y", // 28"
"El verbo <span class='ital'>mourir</span> se conjuga como 'morir' en espa\u00f1ol", // 29
"La 'e' de los verbos en <span class='ital'>-evoir</span> pasa de ser \u00e1tona (no acentuada) en el infinitivo y en nous y vous (ya que en franc\u00e9s todas las palabras se acent\u00faan en la \u00faltima s\u00edlaba) a t\u00f3nica (acentuada) cuando las desinencias no se pronuncian, ya que pasa a estar en la \u00faltima s\u00edlaba. Y cuando la 'e' se acent\u00faa se convierte en 'oi'", // 30
"<span class='ital'>dire </span> es uno de los tres verbos que utilizan -es como desinencia de vous junto a \u00eatre y faire. En ese caso, la mp es t, la que permite por ejemplo distinguir el imperativo singular del plural.", // 31
"<span class='ital'>faire</span> utiliza -es como desinencia de vous (igual que \u00eatre y dire). En ese caso, la mp es t, que permite distinguir el imperativo singular del plural. Y faire es uno de los cuatro verbos que utilizan -ont como desinencia de ils junto a \u00eatre, avoir y aller.", // 32
"Los verbos en <span class='ital'>-ecevoir</span> adem\u00e1s cambian la 'c' por '\u00e7' delante de la 'o' para conservar el sonido [s] del radical.", // 33
"Los verbos impersonales s\u00f3lo se conjugan con 'il'.", // 34
"En sentido figurado se puede usar en plural: Les coups pleuvaient sur son dos <cite>(Le Petit Robert)</cite>", // 35
"S\u00f3lo se conjuga en las 3ras personas.", // 36
"Verbo defectivo.", //37
"Los verbos en -qu\u00e9rir y en -enir tienen terminaci\u00f3n = RG y el radical cambia igual que en espa\u00f1ol.", // 38
"En la 3ra persona del plural, la e del radical es final de s\u00edlaba al escrito pero no al oral, por lo que se pronuncia [\u0190] y se escribe \u00e8", // 39
"En la 3ra persona del plural, la e del radical es final de s\u00edlaba al escrito pero no al oral, por lo que se pronuncia [\u0190] y normalmente se escribir\u00eda \u00e8, pero los verbos en -prendre y en -enir utilizan otro recurso: duplican la consonante final del radical, como los verbos <span class='ital'>appeler</span> y <span class='ital'>jeter</span>.", // 40
"7 verbos (<span class='ital'>dormir, mentir, partir, sentir, servir, sortir</span> y <span class='ital'>se repentir</span>) f\u00e1ciles de recordar ya que en su mayor\u00eda son iguales al espa\u00f1ol, tienen terminaci\u00f3n = RG y la mp indicada en el infinitivo.", // 41
"Este verbo se comporta como los verbos en -dre, -pre y -cre: terminaci\u00f3n = RG y la consonante final del Grupo Radical (GR) se mantiene en el escrito. ", // 42
"Si bien tiene similitudes con el grupo de verbos en -ir [ir], se diferencia en tener un radical diferente para el singular.", // 43
"Los verbos en -raire tienen terminac\u00f3n = RG y se conjugan siguiendo la regla de la yod.", // 44
"El verbo <span class='ital'>boire</span> tiene terminac\u00f3n = RG y en lugar de seguir la regla de la yod utiliza mp = v con un radical diferente para <span class='ital'>nous-vous</span>.", // 45
"Los verbos en -oir(e) tienen terminac\u00f3n = RG y siguen la regla de la yod.", //46
"El verbo <span class='ital'>maudire</span> deber\u00eda conjugarse como <span class='ital'>dire</span> pero \u00a1maldici\u00f3n! \u00a1no es as\u00ed! Se conjuga como los verbos en -ir [ir].", // 47
"El verbo <span class='ital'>cro\u00eetre</span> mantiene el acento circunflejo en las formas del singular para distinguirlas de las del verbo <span class='ital'>croire</span>", // 48
"Los verbos en -indre tienen como terminac\u00f3n las tres \u00faltimas letras del infinitivo. Luego, la \u00fanica particularidad ser\u00eda que la n que no se pronuncia en el radical del singular se transforma en \u00f1 en el plural. S\u00f3lo que la \u00f1 en franc\u00e9s se escribe gn. Y como gn pasa a pronunciarse, cumple la función de mp.", // 49 
"Los verbos en -prendre se conjugan como los verbos en -dre pero con la particularidad de que no conservan la d en el plural-", // 50
"Los vervous en -soudre tienen como terminac\u00f3n las tres \u00faltimas letras del infinitivo. La mp = lv, que generalmente se puede deducir de su traducci\u00f3n al espa\u00f1ol.", // 51
"Los verbos en -dre, -pre y -cre tienen terminac\u00f3n = RG. La consonante final del radical se conserva en el singular como consonante muda y pasa a pronunciarse en el plural, por lo que en el escrito no cumple funci\u00f3n pero en el oral es en realidad la mp.", // 52
"Para los verbos en -cre, el sonido de la c del radical es [k] y para conservar ese sonido en el plural debe escribirse qu pero eso no implica que tenga dos radicales "] // 53
 
 
 // *****************************************************
 

 // Borra el cuadro de conjugacion

 function borrar() {
	resetearVerbo();	
	desinpl = ["ons", "ez", "ent"];	
	pers = ["Je", "Tu", "Il / Elle / On", "Nous", "Vous", "Ils / Elles"];	
	pronom = ["me ", "te ", "se ", "nous ", "vous ", "se ","m'", "t'", "s'", "nous ", "vous ", "s'"];														// crea el objeto verbo vacío
	conjugacion = document.getElementById("conjugacion");
	conjugacion.innerHTML = "";													// borra conjugación anterior
	conjugacion = document.getElementById("personas");
	conjugacion.innerHTML = "";													// borra pronombres anterior
	conjugacion = document.getElementById("segundaconj");
	conjugacion.innerHTML = "";													// borra cuadro derecha
	conjugacion = document.getElementById("segundapers");
	conjugacion.innerHTML = "";													// borra pronombres derecha
	conjugacion = document.getElementById("headtabsec");
	conjugacion.innerHTML = "";													// borra titulo derecha
	conjugacion = document.getElementById("aclara");
	conjugacion.innerHTML = "";	
	document.getElementById("aclara").style.zIndex = 0;
													// borra ayuda
	conjugacion = document.getElementById("parraf");							// borra codigo de colores
	conjugacion.innerHTML = "";	
	ayuda = "<b>Tips: </b>"; 													// resetea ayuda
	conjugacion = document.getElementById("datos");								// borra Tips
	conjugacion.innerHTML = "";	
	
} // Fin de borrar()

function resetearVerbo() {														// crea objeto verbo en blanco
	
	verbo = {
	input : "",				// palabra ingresada	
	minusculas : "",		// palabra ingresada en minusculas
	term : 2,				// terminación las dos últimas (RG)
	gr : "",				// Grupo Radical (GR)
	radical1 : "",		
	radical2 : "",
	radical3 : [],			// Radicales para verbos con segunda conjugación
	opRad : "",				// oposicion de radicales
	invRad: false,			// invertir radicales
	des : 1,				// desinencia b x defecto
	mp : ["",""],			// Marca Plural mp[0] --> tomada del infinitivo, mp[1] --> asignada 
	pronom : false,			// Verbo no pronominal x defecto
	elision: false,			// Sin elisión x defecto
	caso_part : "",			// Caso específico del verbo
	agregaLetra : ["",0],	// Agrega una letra al radical
	cambiaLetra : ["",0,0],  //  [la letra a colocar, la cant de letras a eliminar desde el final, la persona a la que se le realiza el cambio]
	conj1 : "",				// Conjugación del verbo
	conj2 : "",				// Conjugación alternativa
	coment : []				// Tips sobre la conjugación 
	
	}

}




//************************************************************ */
 
 
 // Verifica que se haya ingresado un verbo
 
 function controlar() {
	borrar();																		// borra datos anteriores
	var cuadroDeTexto = document.getElementById("verbo");							// Campo del INPUT
	verbo.input = cuadroDeTexto.value;												// Palabra ingresada

  // elimina espacios en blanco al final del verbo	
	var espacio = true;
	while (espacio == true) {
		if (ultima_s(verbo.input, 1) == " ") {
			verbo.input = primera_s(verbo.input, 1);
		} else {espacio = false;}
	}
	
	
	
 	verbo.minusculas = verbo.input.toLowerCase(); 										// convierte la palabra ingresada a minusculas
	
										
	
													
	var esinf = esinfinitivo();								// verifica que se haya ingresado un verbo en infinitivo
	if (esinf == false) { return;}
	
	verbopron();
	
	verbo.minusculas = verbo.minusculas.replace(/ /g,"");																	// Analiza si es pronominal
																		
	empvocal();															// Analiza si empieza con vocal
	
	var esirreg = esirregular(); 										// Analiza si es verbo irregular
	if (esirreg == false) { 
		triage();														// clasifica verbo
		nuevaConj();
														
	} else {impConj();}											// Imprime conj irregular
	
	
} // Fin de controlar()

//*****************************************************************
function nuevaConj() {
	
	
	
	verbo.gr = primera_s(verbo.minusculas, verbo.term) ; 								// determina GR
	
	
	//******* CODIGO EN PRUEBA
	
	
	if (verbo.mp[1] == "" && verbo.des != 0) {          // si no se estableció mp y el verbo no es des(a)...
		if (verbo.mp[0] == "") {
			verbo.mp[0] = ultima_s(verbo.gr, 1);		// la mp es la ultima letra del GR
			switch (verbo.mp[0]) {
				case "a":
				case "\u00e2":
				case "e":
				case "\u00ea":
				case "\u00e9":
				case "\u00e8":
				case "i":
				case "\u00ee":
				case "\u00ef":
				case "o":
				case "\u00f4":
				case "u":
				case "\u00fb":
				case "r":
				case "n":
				case "d":
				case "p":
				case "c":
				verbo.mp[0] = ""; 						// excepto que sea vocal, r, n, d, p o c
				break;
					
			} verbo.mp[1] = verbo.mp[0]
		
		} else {verbo.mp[1] = verbo.mp[0]; }
	
	} else {verbo.gr = verbo.gr + verbo.mp[1]; }
		
	verbo.radical1 = primera_s(verbo.gr, verbo.mp[1].length); 
	
	if (ultima_s(verbo.minusculas, 3) == "yer" && ultima_s(verbo.minusculas, 4) != "eyer") {
		verbo.mp[0] = verbo.mp[1] = "y";
		verbo.radical1 = primera_s(verbo.gr, 1) + "i"; 
	}
	
	
	



	verbo.radical2 = verbo.radical1; 													// determina provisoriamente un radical2 = radical1
																					
	if (verbo.cambiaLetra[2] == 8 ) {													// modifica radical verbos con 2 radicales
		ubi = verbo.radical1.lastIndexOf(verbo.cambiaLetra[3]); 						// ubica el indice de la letra a cambiar
		last = ultima_s(verbo.radical1, verbo.radical1.length - ubi - verbo.cambiaLetra[1]) ;	   // determina letras a consevar
		verbo.radical1 = primera_s(verbo.radical1, verbo.radical1.length - ubi) + "<span class='ital'>" + verbo.cambiaLetra[0] + "</span>" + last ; // construye el nuevo radical 
	} 
			
	if ( verbo.invRad == true) {
		prov = verbo.radical1; verbo.radical1 = verbo.radical2; verbo.radical2 = prov;	// invierte radicales
	} 	



			
			switch (verbo.caso_part) {													// casos particulares de cada verbo
				case "appeler":															// APPELER y JETER
					verbo.radical2 = verbo.radical1;												
					verbo.radical1 = verbo.radical1 + ultima_s(verbo.radical1, 1);		// duplica consonate
					verbo.opRad = "nv";
					break;
				case "acc_grave" : 
					last = ultima_s(verbo.radical1, 1);
					verbo.radical1 = primera_s(verbo.radical1, 2) + "<span class='subray'>\u00e8</span>" + last;
					verbo.opRad = "nv";
					break;
				case "acc_grave2" :
					last = ultima_s(verbo.radical1, 2);
					verbo.radical1 = primera_s(verbo.radical1, 3) + "<span class='subray'>\u00e8</span>" + last;
					verbo.opRad = "nv";
					break;	
				case "ayer" : 
					verbo.radical3[0] = primera_s(verbo.minusculas, verbo.term) ;	
					verbo.radical3[1] = verbo.radical3[0] ;		// establece radical para segunda conjugacion
					break;
				case "indre":
					verbo.radical2 = primera_s(verbo.radical1, 1);
					break;
				case "prendre" :														// PRENDRE
					verbo.radical2 = primera_s(verbo.radical2, 1);						// establece radical2
					break;
				case "soudre" :															// SOUDRE
					verbo.radical2 = primera_s(verbo.radical2, 1);						// establece radical2
					break;																
				case "coudre" :
					verbo.radical2 = primera_s(verbo.radical2, 1); 
					break;
				case "moudre" :
					verbo.radical2 = primera_s(verbo.radical2, 1); 
					break;
				case "cre" :															// tipo VAINCRE
					if (ultima_s(verbo.radical2, 1) == "c") {							// elimina la c del radical2
						verbo.radical2 = primera_s(verbo.radical2, 1);
 					}
 					break;
 				case "hair":
 					verbo.radical1 = primera_s(verbo.radical1,2) + "ai";
 					verbo.radical2 = primera_s(verbo.radical2,2) + "a\u00ef";
 					break;
 				case "ouir" :
 					verbo.radical1 = verbo.radical2 = primera_s(verbo.radical1,2) + "i";
 					break;
 				case "seoir":
 					
 					if (ultima_s(verbo.minusculas, 4) == "eoir") {
						verbo.minusculas = primera_s(verbo.minusculas, 4) + "oir";
						verbo.radical1 = primera_s(verbo.minusculas, verbo.term);
						verbo.radical2 = verbo.radical1; }
					if (ultima_s(verbo.minusculas, 6) == "assoir")	{
						verbo.radical3[0] = primera_s(verbo.radical1,2) + "ied";
						verbo.radical3[1] = primera_s(verbo.radical3[0],3) + "ey"; }
 					break;
 				case "tistre":
 					verbo.radical1 = primera_s(verbo.radical1, 1);
 					break;
 				case "vetir" :
 					verbo.mp[0] = verbo.mp[1] = ""; 
 					var nuevo = verbo.minusculas.replace("etir", "\u00eatir"); 
 					verbo.minusculas = nuevo;
 					verbo.radical1 = verbo.radical2 = primera_s(verbo.minusculas, verbo.term) ;
 					break;
 				case "croitre" : 
 					verbo.radical1 = primera_s(verbo.radical1, 1) + "\u00ee"; 
 					verbo.radical2 = primera_s(verbo.radical2, 1) + "i"; 
 					break;	
				default :
					break;
				
	}
	
	
	
	
	
	
	var verboC = "";
	var verboC2 = "";
	var des;
	var des2;
	var mp;																	// verbo para la conjugación
	var mpeninf;																		// MP del infinitivo
	
	mpeninf = verbo.mp[0]; 
	
	verbo.conj1 =   "<strong><span class='rojo'>" + primera_s(verbo.minusculas, verbo.mp[0].length + verbo.term) + "</span><span class='negro'>" + mpeninf + "</span><span class='naranja'>" + ultima_s(verbo.minusculas, verbo.term) + "</span></strong><br>";
	verbo.conj2 =	"<strong><span class='rojo'>" + primera_s(verbo.minusculas, verbo.term) + "</span><span class='naranja'>" + ultima_s(verbo.minusculas, verbo.term) + "</span></strong><br>"; 
	
	

	
	for (x=0; x < 6; x++) {
		if (x < 3) {verboC = verbo.radical1; verboC2 = verbo.radical3[0]; mp = ""; des = desin[verbo.des][x]; des2 = des; color = "verde";} // establece punto del partida para conjugación singular
		else {verboC = verbo.radical2; verboC2 = verbo.radical3[1]; mp = verbo.mp[1]; des = desinpl[x - 3]; des2 = des; color = "azul";	}		// lo mismo para plural
	
		if (x == 2) {																				// evita des t para verbos en t, d, c
			if (des == "t" && (ultima_s(verboC,1) == "t" || ultima_s(verboC,1) == "d" || ultima_s(verboC,1) == "c")) {
				des = "";
			}
		}	
		
		if (verboC2 != undefined && x == 2) {
			if (des2 == "t" && (ultima_s(verboC2,1) == "t" || ultima_s(verboC2,1) == "d" || ultima_s(verboC2,1) == "c")) {
				des2 = "";
			}
			
		}
		
		if ((ultima_s(verboC, 2) == "oi" || ultima_s(verbo.minusculas, 5) == "payer") &&
			(x == 3 || x == 4) && (verbo.mp[1] == "")) {                                                     
			 mp = "y"; } //verbo.opRad = "nv"; 													// casos con MP = yod
	
		if (verbo.opRad == "nv" && x == 5) {verboC = verbo.radical1;								// permuta radical en la 3ra pl
		} 
		
		if (mp == "y") {																			// elimina i del radical si MP = yod
			if (x == 3 || x == 4) {
				if (ultima_s(verboC, 1) == "i") {
				verboC = primera_s(verboC,1);		
				} 
			} else if (x == 5) {mp = "";}
		} 
		
		if (x == 4 && des == "<span class='subray'>es</span>") {mp = "<span class='subray'>t</span>";}
		if (des == "<span class='subray'>ont</span>") {mp = "";}
			
		if (verbo.cambiaLetra[2] == x + 1) {														// cambia letra casos particulares
			letra = ultima_s(verboC, verbo.cambiaLetra[1]);
			verboC = primera_s(verbo.radical2, verbo.cambiaLetra[1]) + verbo.cambiaLetra[0];
			verbo.cambiaLetra[0] = letra; verbo.cambiaLetra[1] = x + 1; } 
			
			
		if (verbo.agregaLetra[1] == x + 1) {														// agrega letra casos particulares
			verboC = verboC + verbo.agregaLetra[0];
			verbo.cambiaLetra[0] = ""; verbo.cambiaLetra[1] = x + 1; }
			
		if (x == 5) {	prov = verboC.replace("</span>", "");																	// alternancia del acento grave
			if ((prov.charAt(prov.length-2) == "e" || prov.charAt(prov.length-2) == "\u00e9") && 
			mp == "" && verboC.charAt(verboC.length - 1) != "y") { 
			prov = verboC.lastIndexOf("e"); cadena = verboC.replace(verboC[prov], "<span class='subray'>\u00e8</span>"); verboC = cadena;
			}
		}
			
			verbo.conj1 = verbo.conj1 + "<strong><span class='rojo'>" + verboC + "</span>" + mp + "<span class='" + color + "'>" + des + "</span></strong><br>";
			verbo.conj2 = verbo.conj2 + "<strong><span class='rojo'>" + verboC2 + "</span>" + "<span class='" + color + "'>" + des2 + "</span></strong><br>" ;
		}
		impConj();
		
} // Fin NuevaConj

// Imprime en pantalla
function impConj() {
		
		for (y = 0; y < verbo.coment.length; y++ ) {								// constriye mensaje de ayuda
		ayuda = ayuda + verbo.coment[y] + " "; }
		
		pronombres = detpron(); 													// establece pronombres
		conjugacion = document.getElementById("personas");
		conjugacion.innerHTML = pronombres; 										// imprime pronombres
		
		conjugacion = document.getElementById("conjugacion");
		conjugacion.innerHTML = verbo.conj1;										// imprime conjugación principal
		
		
		
		
		if (verbo.radical3 != "") {
			seg_msg[0] = "Conjugaci\u00f3n alternativa";							// titulo para conjugacion alternativa
			seg_msg[1] = verbo.conj2; 												// conjugacion alternativa
			proder = pronombres;										
			} else {mensaje();}
			
		
		conjugacion = document.getElementById("headtabsec");
		conjugacion.innerHTML = seg_msg[0];											// imprime tirulo cuadro derecha
		
		if (large == true) {
			large = false;
			conjugacion = document.getElementById("aclara");
			conjugacion.innerHTML = seg_msg[1];; 
		} else {
			document.getElementById("aclara").style.zIndex = -1;

			conjugacion = document.getElementById("segundapers");		// imprime pronombres para conjugacion alternativa 
			conjugacion.innerHTML = proder; 

			conjugacion = document.getElementById("segundaconj");
			conjugacion.innerHTML = seg_msg[1];											// imprime texto cuadro derecha
		}

		codcol = document.getElementById("parraf");
		codcol.innerHTML = codigo;														// imprime codigo de colores

		conjugacion = document.getElementById("datos");
		conjugacion.innerHTML = ayuda;													// imprime ayuda
			
		
		
		
		
		
		resetearVerbo();						
}


//***************************************************************** */

 // Verifica que se ingresó un verbo en infinitivo

 function esinfinitivo() {
	
	
	// elimina espacios en blanco en la anteúltima posición	
	var espacio = true;
	while (espacio == true) {
		if (verbo.minusculas.charAt(verbo.minusculas.length-2) == " ") {
			var prov = ultima_s(verbo.minusculas,1);
			verbo.minusculas = primera_s(verbo.minusculas, 2);
			verbo.minusculas = verbo.minusculas + prov;
		} else {espacio = false;}
	}
	
		var terminacion = ultima_s(verbo.minusculas, 2); 										// Recorta las últimas 2 letras
	if ((terminacion=="er" || terminacion=="ir" || terminacion=="\u00efr" || terminacion =="re") && verbo.minusculas.length > 3) {			// Verifica terminacion de inf
		return true;
	} else {msg = "'" + verbo.input + "' no es un verbo en infinitivo";
		imprimiralerta(msg); return false}
	
} // Fin de esinfinitivo

//*******************************************************


	// Determina si comienza con vocal
	
	function empvocal() { 
		var ini = verbo.minusculas.charAt(0);											// Si empieza por vocal cambia JE x J'
	if (ini == "a" || ini == "e" || ini == "\u00e9" || ini == "i" || ini == "o" || ini == "u"){
		verbo.elision = true; 
	} 
	else if (ini == "h") {
		switch (verbo.minusculas) {
			case "hacher":
			case "ha\u00efr":
			case "hair":
			case "haler":
			case "haleter":
			case "handicaper":
			case "hanter":
			case "happer":
			case "haranguer":
			case "harasser":
			case "harceler":
			case "harnacher":
			case "harponner":
			case "hasarder":
			case "hausser":
			case "haver":
			case "heler":
			case "h\u00e9ler":
			case "hennir":
			case "herisser":
			case "h\u00e9risser":
			case "heurter":
			case "hisser":
			case "hocher":
			case "honnir":
			case "houspiller":
			case "huer":
			case "hululer":
			case "humer":
			case "hurler":
				verbo.elision = false;
				verbo.coment.push(dato[18]);
				break;
			default:
				verbo.elision = true;
				break;
			
			
		}
	} return;
	
	//else {verbo.elision = false}
			
	} // Fin empvocal

//************************************************************ */


// Determina si es un verbo pronominal
  
  function verbopron() { 
	
	// elimina espacios en blanco al comienzo del verbo	
	var espacio = true;
	while (espacio == true) {
		if (verbo.minusculas.charAt(0) == " ") {
			verbo.minusculas = verbo.minusculas.substring(1, verbo.minusculas.length);
		} else {espacio = false;}
	}
	
	var verbo2 = verbo.minusculas.charAt(0) + verbo.minusculas.charAt(1); 
	var verbo3 = verbo.minusculas.charAt(0) + verbo.minusculas.charAt(1) + verbo.minusculas.charAt(2); 
	
	if (verbo2 == "s'") {
		verbo.pronom = true; verbo.elision = true; verbo.minusculas = verbo.minusculas.substring(2,verbo.minusculas.length); 	// verbo pronom con vocal inicial
		return ;
	} else {}
		if (verbo3 == "se ") {
		verbo.pronom = true; verbo.elision = false; verbo.minusculas = verbo.minusculas.substring(3,verbo.minusculas.length);	// verbo pronom con cons inicial
		return verbo3;
	} else {return ;}
	
	
} // Fin de verbopron

//************************************************************* */


  // Separa verbos irregulares
function esirregular() {
	
	var irreg;
	
	switch(verbo.minusculas) {
		case "etre":
			verbo.conj1 ="<strong>\u00eatre<br>suis<br>es<br>est<br>sommes<br>\u00eates<br>sont</strong>"; 
			verbo.elision = false;
			irreg = true; verbo.coment.push(dato[0]);
			break;
		case "\u00eatre":
			verbo.conj1 ="<strong>\u00eatre<br>suis<br>es<br>est<br>sommes<br>\u00eates<br>sont</strong>"; 
			verbo.elision = false;
			irreg = true; verbo.coment.push(dato[0]);
			break;
		case "avoir":
			verbo.conj1 ="<strong>" + verbo.minusculas + "<br>ai<br>as<br>a<br>avons<br>avez<br>ont</strong>";
			irreg = true; verbo.coment.push(dato[1]);
			break;
		case "aller":
			verbo.conj1 ="<strong>" + verbo.minusculas + "<br>vais<br>vas<br>va<br>allons<br>allez<br>vont";
			verbo.elision = false; irreg = true; verbo.coment.push(dato[2]);
			break;
		case "falloir":
			verbo.conj1 = "<strong>" + verbo.minusculas + "<br><br><br>faut"; 
			pers = ["", "", "Il", "", "", ""];	
			irreg = true; verbo.coment.push(dato[34]); 
			break;
		case "pleuvoir":
			verbo.conj1 = "<strong>" + verbo.minusculas + "<br><br><br>pleut<br><br><br>pleuvent"; 
			pers = ["", "", "Il", "", "", "Ils / Elles"];	
			irreg = true; verbo.coment.push(dato[34], dato[35]); 
			break;
		case "messeoir" :
		case "seoir":
			verbo.radical1 = primera_s(verbo.minusculas, 4) + "ied";
			verbo.radical2 = primera_s(verbo.minusculas, 4) + "i\u00e9ent";
			verbo.conj1 = "<strong>" + verbo.minusculas + "<br><br><br>" + verbo.radical1 + "<br><br><br>" + verbo.radical2; 
			pers = ["", "", "Il", "", "", "Ils / Elles"];	
			irreg = true; verbo.coment.push(dato[36]); 
			break;			
		case "advenir":
			verbo.conj1 = "<strong>" + verbo.minusculas + "<br><br><br>advient"; 
			pers = ["", "", "Il", "", "", ""];	
			irreg = true; verbo.coment.push(dato[34]); 
			break;
		case "bruiner":
			verbo.conj1 = "<strong>" + verbo.minusculas + "<br><br><br>bruine"; 
			pers = ["", "", "Il", "", "", ""];	
			irreg = true; verbo.coment.push(dato[34]); 
			break;
		case "greler":
			
		case "gr\u00ealer":
			verbo.conj1 = "<strong>" + verbo.minusculas + "<br><br><br>gr\u00e8le"; 
			pers = ["", "", "Il", "", "", ""];	
			irreg = true; verbo.coment.push(dato[34], dato[17]); 
			break;
		case "neiger":
			verbo.conj1 = "<strong>" + verbo.minusculas + "<br><br><br>neige"; 
			pers = ["", "", "Il", "", "", ""];	
			irreg = true; verbo.coment.push(dato[34]); 
			break;
		case "tonner":
			verbo.conj1 = "<strong>" + verbo.minusculas + "<br><br><br>tonne"; 
			pers = ["", "", "Il", "", "", ""];	
			irreg = true; verbo.coment.push(dato[34]); 
			break;
		case "y avoir":
			verbo.conj1 = "<strong>" + verbo.minusculas + "<br><br><br>y a"; 
			pers = ["", "", "Il", "", "", ""];	
			irreg = true; verbo.coment.push(dato[34]); 
			break;	
		case "agir":
			if (verbo.input.toLowerCase() == "se agir") {verbo.elision = true; }
			if (verbo.pronom == true) {
			verbo.conj1 = "<strong>" + verbo.minusculas + "<br><br><br>agit"; 
			pers = ["", "", "Il", "", "", ""];	
			pronom = ["", "", "", "", "", "","", "", "s'", "", "", ""];
			irreg = true; verbo.coment.push(dato[34]); }
			else {irreg = false;  }
			break;	
		case "echoir":
			
		case "\u00e9choir":
			verbo.conj1 = "<strong>" + verbo.minusculas + "<br><br><br>\u00e9choit<br><br><br>\u00e9choient"; 
			pers = ["", "", "Il", "", "", "Ils / Elles"];	
			irreg = true; verbo.coment.push(dato[37]); 
			break;	
		
		default:
			irreg = false;
			break;
		}
	
	if (irreg == false) {return false;}
		else {return ;}
		
} // Fin de triage(x;y)

//********************************************************


  // Determina clase de verbo
  
 function triage() { 
	
		
		// Caso ER
	if (ultima_s(verbo.minusculas, 2)=="er")	{	
		verbo.des = 0; verbo.coment.unshift(dato[3]);
		 if ((verbo.minusculas.charAt(verbo.minusculas.length-4)  ==  "e" || 	 // verbos con cambio de acento
					verbo.minusculas.charAt(verbo.minusculas.length-4)  ==  "\u00e9") && 
					verbo.minusculas.charAt(verbo.minusculas.length-3)  !=  "y") {
					verbo.caso_part = "acc_grave";	verbo.coment.push(dato[17]);						// clave para cambiar acento
				 }
		if (ultima_s(verbo.minusculas, 5) =="\u00e9brer" || ultima_s(verbo.minusculas, 5) =="ebrer" ||
				 ultima_s(verbo.minusculas, 5) =="\u00e9cher" || ultima_s(verbo.minusculas, 5) =="echer" ||
				 ultima_s(verbo.minusculas, 5) =="\u00e9crer" || ultima_s(verbo.minusculas, 5) =="ecrer" ||
				 ultima_s(verbo.minusculas, 5) =="\u00e9gler" || ultima_s(verbo.minusculas, 5) =="egler" ||
				 ultima_s(verbo.minusculas, 5) =="\u00e9gner" || ultima_s(verbo.minusculas, 5) =="egner" ||
				 ultima_s(verbo.minusculas, 5) =="\u00e9grer" || ultima_s(verbo.minusculas, 5) =="egrer" ||
				 ultima_s(verbo.minusculas, 5) =="\u00e9guer" || ultima_s(verbo.minusculas, 5) =="eguer" ||
				 ultima_s(verbo.minusculas, 5) =="\u00e9trer" || ultima_s(verbo.minusculas, 5) =="etrer" ||
				 ultima_s(verbo.minusculas, 5) =="\u00e9vrer" || ultima_s(verbo.minusculas, 5) =="evrer" ) {
				verbo.caso_part = "acc_grave2";	verbo.coment.push(dato[17]);		
				}
		
		if (ultima_s(verbo.minusculas, 7) =="appeler" || ultima_s(verbo.minusculas, 5) =="jeter") {
			verbo.caso_part = "appeler"; verbo.coment.push(dato[4]);
		 } 	else if (ultima_s(verbo.minusculas, 4) =="ayer") {
					verbo.caso_part = "ayer"; verbo.coment.push(dato[16]); }//verbo.mpenInf = true;}
						 else if (ultima_s(verbo.minusculas, 3) =="yer"){
								if (ultima_s(verbo.minusculas, 4) != "eyer") {
									verbo.caso_part = "yer"; //verbo.mpenInf = true; //verbo.opRad = "nv";
									verbo.coment.push(dato[5]);} else {verbo.coment.push(dato[20]);}
								}
								
											
					   else if (ultima_s(verbo.minusculas, 3) =="ger") { verbo.coment.push(dato[21]);
																							// verbo.caso_part = "ger"; NO SE PUEDE PONER PORQUE REESCRIBE EL CASO ACC GRAVE
								verbo.agregaLetra = ["<span class='subray'>e</span>", 4];
								  } else if (ultima_s(verbo.minusculas, 3) =="cer") { 
										verbo.coment.push(dato[22]);						// verbo.caso_part = "cer"; NO SE PUEDE PONER PORQUE REESCRIBE EL CASO ACC GRAVE
										verbo.cambiaLetra = ["<span class='subray'>\u00e7</span>", 1,4];
										  }
	return;	 
	}	
				 		
	
		
	// Casos en --IR
	if 	(ultima_s(verbo.minusculas, 2)=="ir") {	
		
	
		if (ultima_s(verbo.minusculas, 5)=="illir") {				// Verbos en -ILLIR
			if (ultima_s(verbo.minusculas, 8)=="bouillir") {			// Bouillir
			verbo.mp[0] = "ill"; //verbo.mpenInf = true;
			verbo.coment.push(dato[12]);
			} else {	
				if (ultima_s(verbo.minusculas, 12)=="enorgueillir" ||		// Excepciones en -ILLIR des b
						ultima_s(verbo.minusculas, 7)=="faillir" || 
						ultima_s(verbo.minusculas, 7)=="jaillir" ||
						ultima_s(verbo.minusculas, 8)=="vieillir") {
						verbo.caso_part = "illir_b"; verbo.term = 1; verbo.mp[1] = "ss"; verbo.coment.push(dato[11]);
				} else {verbo.des = 0; verbo.coment.push(dato[6]);}			// Verbos en -ILLIR des a
			   }
		} // Fin ILLIR
	
		else if (ultima_s(verbo.minusculas, 5)=="ffrir" || ultima_s(verbo.minusculas, 6)=="ouvrir") {  // -FFRIR y -OUVRIR
			verbo.des = 0; verbo.coment.push(dato[7]);
		} // Fin FFRIR - OUVRIR 
		
		
		
		
		else if (ultima_s(verbo.minusculas, 3)=="oir") {						// Verbos en -OIR
				
				if (ultima_s(verbo.minusculas, 6)=="ouvoir" ||  				// Verbos en -OUVOIR
					ultima_s(verbo.minusculas, 6)=="ouloir" ) {					// Verbos en -OULOIR
					verbo.caso_part ="pouvoir"; 
					verbo.term = 3; //verbo.mpenInf = true; 
					verbo.des = 2; verbo.opRad = "nv";
					verbo.cambiaLetra = ["eu",2,8,"ou"]; verbo.coment.push(dato[23]);				// 8 código para cambiar en todas las personas tonicas
				} else if (ultima_s(verbo.minusculas, 6)=="revoir") {		// Verbos en -REVOIR
						verbo.caso_part = "oir"; verbo.term = 1; verbo.coment.push(dato[24]);
						} else if (ultima_s(verbo.minusculas, 5)=="evoir" ) {		// Verbos en -EVOIR
								verbo.caso_part = "evoir"; verbo.term = 3; verbo.mpenInf = true; verbo.opRad = "nv";
								verbo.coment.push(dato[30]);
									if (ultima_s(verbo.minusculas, 6)=="cevoir" ) {
									verbo.cambiaLetra = ["\u00e7oi",2,8,"ce"];	verbo.coment.push(dato[33]);
									} else {verbo.cambiaLetra = ["oi",1,8,"e"];	
										}
										
								} else if (ultima_s(verbo.minusculas, 5) == "seoir" || ultima_s(verbo.minusculas, 4) == "soir") {
									
								
								
								
								
								
								// (ultima_s(verbo.minusculas, 7) == "asseoir" ||  ultima_s(verbo.minusculas, 6) == "assoir") 
										verbo.caso_part = "seoir", verbo.coment.push(dato[19]);
										verbo.term = 1;
								} else if (ultima_s(verbo.minusculas, 6)=="valoir") {
										verbo.term = 3; verbo.mpenInf = true; verbo.des = 2; verbo.opRad = "sp"; 
										verbo.cambiaLetra = ["au",1,8,"a"]; verbo.coment.push(dato[26]);
								} else if (ultima_s(verbo.minusculas, 6)=="savoir" ) {	 			// Verbo SAVOIR
										verbo.caso_part = "valsav"; 
										verbo.term = 3; verbo.mpenInf = true; 
										verbo.cambiaLetra = ["ai",1,8,"a"]; verbo.coment.push(dato[25]);
										} else {verbo.caso_part = "oir"; verbo.term = 1; verbo.coment.push(dato[27]);
															// Verbos en -OIR
											}
								
		} // Fin verbos en OIR
	
		else if (ultima_s(verbo.minusculas, 4)=="fuir") {verbo.caso_part = "fuir"; 
		verbo.term = 1; verbo.opRad = "nv"; verbo.mp[1] = "y"; verbo.coment.push(dato[28]);}	
	
		else if (ultima_s(verbo.minusculas, 5)=="ourir") {							// Verbos en -OURIR
				if (ultima_s(verbo.minusculas, 6)=="mourir") {					// Verbo MOURIR
				verbo.caso_part = "mourir";
				verbo.term = 2; verbo.opRad = "nv";
				verbo.cambiaLetra = ["eu",2,8,"ou"]; verbo.coment.push(dato[29]); 
				} else {verbo.caso_part = "ourir";}									// Verbos en -OURIR
			} //Fin verbos OURIR
	
		else if (ultima_s(verbo.minusculas, 6)=="querir") {  // Verbos en -querir y -enir
				verbo.caso_part = "querir"; verbo.opRad = "nv";
				verbo.cambiaLetra = ["ie",1,8,"e"]; verbo.coment.push(dato[38], dato[39]);
			}
		else if (ultima_s(verbo.minusculas, 6)=="qu\u00e9rir") {  // Verbos en -querir y -enir
				verbo.caso_part = "querir"; verbo.opRad = "nv";
				verbo.cambiaLetra = ["ie",1,8,"\u00e9"]; verbo.coment.push(dato[38], dato[39]);
			}	
			
		else if ( ultima_s(verbo.minusculas, 4)=="enir") {
				verbo.caso_part = "enir"; verbo.opRad = "nv";
				verbo.cambiaLetra = ["ie",1,8,"e"]; verbo.coment.push(dato[38], dato[40]);
				verbo.agregaLetra = ["<span class='subray'>n</span>", 6];
		}
	
		else if (ultima_s(verbo.minusculas, 6)=="partir" || ultima_s(verbo.minusculas, 6)=="dormir"		// Verbos 
				|| ultima_s(verbo.minusculas, 6)=="mentir" || ultima_s(verbo.minusculas, 6)=="sentir"
				|| ultima_s(verbo.minusculas, 6)=="servir" || ultima_s(verbo.minusculas, 6)=="sortir" 
				|| ultima_s(verbo.minusculas, 8)=="repentir" ) {
				verbo.caso_part = "KKir"; verbo.coment.push(dato[41]);
			}
	
		else if (ultima_s(verbo.minusculas, 5)=="vetir" || ultima_s(verbo.minusculas, 5)=="v\u00eatir" ) {	// Verbo VETIR
				verbo.caso_part = "vetir"; verbo.term = 2; verbo.coment.push(dato[42]);
			}
	
		else if(ultima_s(verbo.minusculas, 4)=="ouir") {verbo.caso_part = "ouir"; verbo.term = 1;}
			else {verbo.caso_part = "ir"; verbo.term = 1; verbo.mp[1] = "ss";
				if (verbo.minusculas == "hair") {
				verbo.caso_part = "hair"; verbo.coment.push(dato[43]);
				}
			
			}
		
	}	// Fin casos en IR
	
		if (verbo.minusculas == "ha\u00efr") {
			verbo.caso_part = "hair"; verbo.term = 1; verbo.mp[1] = "ss"; verbo.coment.push(dato[43]);
		}
		if(ultima_s(verbo.minusculas, 4)=="ou\u00efr") {verbo.caso_part = "ouir"; verbo.term = 1;}
	
	// Casos en RE
	
	if (ultima_s(verbo.minusculas, 2)=="re") {
	
		if (ultima_s(verbo.minusculas, 3)=="ire") {
			if (ultima_s(verbo.minusculas, 5)=="crire") {							// Verbos en -CRIRE
				verbo.caso_part = "crire";	verbo.mp[1] = "v";
				verbo.coment.push(dato[9]);
			} else if (ultima_s(verbo.minusculas, 5)=="raire") {
					verbo.caso_part = "raire";	verbo.mp[1] = "y"; verbo.coment.push(dato[44]);			// Verbos en -RAIRE
				} else  if (ultima_s(verbo.minusculas, 4)=="rire") {					// Verbos en -RIRE
						verbo.caso_part ="rire"; verbo.coment.push(dato[10]);
						} else if (ultima_s(verbo.minusculas, 4)=="oire") {								// Verbos en -OIRE
									if (ultima_s(verbo.minusculas, 5)=="boire") {						// Verbos en BOIRE
										verbo.caso_part = "boire"; verbo.mp[1] = "v"; verbo.opRad = "nv";
										verbo.cambiaLetra = ["u",2,8,"oi"]; verbo.invRad = true; verbo.coment.push(dato[45]);	
										} else {verbo.caso_part = "oir"; verbo.coment.push(dato[46]);}									
								  	}
								else { verbo.caso_part = "ire"; verbo.coment.push(dato[8]);
										verbo.mp[1] = "s";
										if (ultima_s(verbo.minusculas, 4)=="dire") {
											if (ultima_s(verbo.minusculas, 7)=="maudire") {
											verbo.caso_part = "maudire"; verbo.mp[1] = "ss"; verbo.coment.push(dato[47]);
											} else if (ultima_s(verbo.minusculas, 6)!="m\u00e9dire" && ultima_s(verbo.minusculas, 6)!= "medire") {
											verbo.caso_part = "dire"; desinpl[1] = "<span class='subray'>es</span>";
											verbo.coment.push(dato[31]);
											}
										}	
										if (ultima_s(verbo.minusculas, 5)=="faire") {
											verbo.caso_part = "faire"; desinpl[1] = "<span class='subray'>es</span>";
											desinpl[2] = "<span class='subray'>ont</span>";
											verbo.cambiaLetra = ["",2,6];
											verbo.coment.push(dato[32]);
										}
									}
								
					
		} else if (ultima_s(verbo.minusculas, 3)=="ure") {						// Verbos en -URE
		verbo.caso_part ="ure"; verbo.coment.push(dato[14]);
		
		} else if (ultima_s(verbo.minusculas, 3)=="ore") {						// Verbos en -URE
		verbo.caso_part ="ore"; verbo.coment.push(dato[13]);
		verbo.mp[1] = "s";
		
		
		} else if (ultima_s(verbo.minusculas, 6)=="tistre") {						// Verbos en -URE
		verbo.caso_part ="tistre"; verbo.coment.push(dato[13]);
				
		} else if (ultima_s(verbo.minusculas, 5)=="aitre" || ultima_s(verbo.minusculas, 5)=="a\u00eetre"		// Verbos en -aitre / -oitre
		|| ultima_s(verbo.minusculas, 5)=="oitre" || ultima_s(verbo.minusculas, 5)=="o\u00eetre") {
		verbo.term = 3; verbo.mp[1] = "ss"; verbo.coment.push(dato[15]);
		if (ultima_s(verbo.minusculas, 7)=="croitre" || ultima_s(verbo.minusculas, 7)=="cro\u00eetre") {
			verbo.caso_part = "croitre"; verbo.coment.push(dato[48]);
		} else {
		verbo.cambiaLetra = ["\u00ee",1,3]; verbo.caso_part ="aitre"; }
		} else if (ultima_s(verbo.minusculas, 3)=="pre") {
			verbo.coment.push(dato[52]);
				
		} else if (ultima_s(verbo.minusculas, 3)=="dre") {								// Verbos en DRE
		
				if (ultima_s(verbo.minusculas, 5)=="indre") {verbo.caso_part = "indre";		// Verbos en INDRE
					verbo.term = 3; verbo.mp[1] = "gn";  verbo.coment.push(dato[49]);
				} else if (ultima_s(verbo.minusculas, 7)=="prendre") {							// Verbos en -PRENDRE
					verbo.caso_part = "prendre"; verbo.agregaLetra = ["<span class='subray'>n</span>", 6];
					verbo.coment.push(dato[50], dato[40]);
				} else if (ultima_s(verbo.minusculas, 6)=="soudre") {							// Verbos en -SOUDRE
					verbo.caso_part = "soudre"; verbo.term = 3; verbo.mp[1] = "lv"; 
					 verbo.coment.push(dato[51]);
				} else if (ultima_s(verbo.minusculas, 5)=="oudre") {								// Verbos en -OUDRE
					verbo.caso_part = "oudre";
					if (ultima_s(verbo.minusculas, 6)=="coudre"){
						verbo.mp[1] = "s", verbo.coment.push(dato[15]);
						verbo.caso_part = "coudre"
					}
					if (ultima_s(verbo.minusculas, 6)=="moudre"){
						verbo.mp[1] = "l", verbo.coment.push(dato[15]);
						verbo.caso_part = "moudre"
					}
				} else if (ultima_s(verbo.minusculas, 3)=="dre" ) 
			 		{verbo.caso_part = "dre"; verbo.coment.push(dato[52]);}
		} else if (ultima_s(verbo.minusculas, 3)=="cre")		
					{verbo.caso_part = "cre"; verbo.cambiaLetra = ["qu",1,8,"c"]; verbo.invRad = true; // verbo.mp[1] = "qu";
					verbo.coment.push(dato[52], dato[53])}
		
						
					
				
	
	
	} // Fin verbos en RE
	
} // Fin funcion
/*	

	
	
//****************************************************** */


  // Imprimir los pronombres en pantalla
  
  function detpron() {
		if (verbo.elision == false) {y = 0;} else {y = 6;}					// Pronombres sin o con elisión
		var pron = "";
		if (verbo.pronom == false) {pron = "<br>";} 						// Eb blanco delante del infinitivo
			else if (verbo.elision == true) {pron = "s'<br>";				// s' delante del infinitivo'
			} else {pron = "se<br>";} 										// se delante del infinitivo
		for (z = 0; z < 6; z++) { 
			pron = pron + pers[z] ;
			if (verbo.pronom == true) { pron = pron + " " + pronom[z + y];}
			pron = pron + "<br>";
		}
	
		
  		if (verbo.elision == true && verbo.pronom == false) {var pron2 = pron.replace("Je", "J'");}
  		else {pron2 = pron;}
	
	
	return pron2;
	
		
  }
 
 
  //*************************************************************** */

	function mensaje() {
	
		seg_msg[0] = "Como en espa\u00f1ol";
		proder = persesp;
	
		switch (verbo.caso_part) {
			case "pouvoir" :
				if (ultima_s(verbo.minusculas, 7) == "mouvoir") {
				seg_msg[1] = "<strong><span class='rojo'>mov</span><span class='naranja'>er</span><br><span class='rojo'>m<span class='ital'>ue</span>v</span><span class='verde'>o</span><br><span class='rojo'>m<span class='ital'>ue</span>v</span><span class='verde'>es</span><br><span class='rojo'>m<span class='ital'>ue</span>v</span><span class='verde'>e</span><br><span class='rojo'>mov</span><span class='azul'>emos</span><br><span class='rojo'>mov</span><span class='azul'>\u00e9is</span><br><span class='rojo'>m<span class='ital'>ue</span>v</span><span class='azul'>en</span></strong>";	
				} else {
				seg_msg[1] = "<strong><span class='rojo'>pod</span><span class='naranja'>er</span><br><span class='rojo'>p<span class='ital'>ue</span>d</span><span class='verde'>o</span><br><span class='rojo'>p<span class='ital'>ue</span>d</span><span class='verde'>es</span><br><span class='rojo'>p<span class='ital'>ue</span>d</span><span class='verde'>e</span><br><span class='rojo'>pod</span><span class='azul'>emos</span><br><span class='rojo'>pod</span><span class='azul'>\u00e9is</span><br><span class='rojo'>p<span class='ital'>ue</span>d</span><span class='azul'>en</span></strong>";}
				break;
			case "mourir" :
				seg_msg[1] = "<strong><span class='rojo'>vol</span><span class='naranja'>ar</span><br><span class='rojo'>v<span class='ital'>ue</span>l</span><span class='verde'>o</span><br><span class='rojo'>v<span class='ital'>ue</span>l</span><span class='verde'>as</span><br><span class='rojo'>v<span class='ital'>ue</span>l</span><span class='verde'>a</span><br><span class='rojo'>vol</span><span class='azul'>amos</span><br><span class='rojo'>vol</span><span class='azul'>\u00e1is</span><br><span class='rojo'>v<span class='ital'>ue</span>l</span><span class='azul'>an</span></strong>";
				break;
			case "querir" :
				seg_msg[1] = "<strong><span class='rojo'>quer</span><span class='naranja'>er</span><br><span class='rojo'>qu<span class='ital'>ie</span>r</span><span class='verde'>o</span><br><span class='rojo'>qu<span class='ital'>ie</span>r</span><span class='verde'>es</span><br><span class='rojo'>qu<span class='ital'>ie</span>r</span><span class='verde'>e</span><br><span class='rojo'>quer</span><span class='azul'>emos</span><br><span class='rojo'>quer</span><span class='azul'>\u00e9is</span><br><span class='rojo'>qu<span class='ital'>ie</span>r</span><span class='azul'>en</span></strong>";
				break;
			case "enir" :
				seg_msg[1] = "<strong><span class='rojo'>pens</span><span class='naranja'>ar</span><br><span class='rojo'>p<span class='ital'>ie</span>ns</span><span class='verde'>o</span><br><span class='rojo'>p<span class='ital'>ie</span>ns</span><span class='verde'>as</span><br><span class='rojo'>p<span class='ital'>ie</span>ns</span><span class='verde'>a</span><br><span class='rojo'>pens</span><span class='azul'>amos</span><br><span class='rojo'>pens</span><span class='azul'>\u00e1is</span><br><span class='rojo'>p<span class='ital'>ie</span>ns</span><span class='azul'>an</span></strong>";
				break;
			case "evoir" :
				proder = "<strong>m<span class='rojo'>e</span>s<br>tr<span class='rojo'>e</span>s<br>v<span class='rojo'>e</span>r<br>deb<span class='rojo'>e</span>r</strong>";
				seg_msg[0] = "Espa\u00f1ol &nbsp &nbsp &nbsp &nbsp &nbsp Franc\u00e9s";
				seg_msg[1] =  "<strong>&nbsp &nbsp \u27f6 &nbsp &nbsp m<span class='rojo'>oi</span>s<br>&nbsp &nbsp \u27f6 &nbsp &nbsp tr<span class='rojo'>oi</span>s<br>&nbsp &nbsp \u27f6 &nbsp &nbsp v<span class='rojo'>oi</span>r<br>&nbsp &nbsp \u27f6 &nbsp &nbsp dev<span class='rojo'>oi</span>r</strong>";
				break;
			case "dire" :
				proder = "<strong><span class='subray'>singular</span><br><br>dis ! <br><br>fais <br>les devoirs !</strong>";
				seg_msg[0] = "Imperativo";
				seg_msg[1] =  "<strong>&nbsp &nbsp &nbsp <span class='subray'>plural</span><br><br>&nbsp &nbsp &nbsp di<span class='fucsia'>t</span>es !<br><br>&nbsp &nbsp &nbsp fai<span class='fucsia'>t</span>es<br> &nbsp &nbsp &nbsp les devoirs !</strong>";
				break;
			case "soudre" :
				proder = "<br><br><br><br>Nosotros<br>";
				seg_msg[1] = "<strong>reso<span class='fucsia'>lv</span>er <br><br><br><br>reso<span class='fucsia'>lv</span>emos </strong>";
				break;	
			case "coudre" :
				proder = "<br><br><br><br>Nosotros<br>Vosotros<br>Ellos / Ellas";
				seg_msg[1] = "<strong>co<span class='fucsia'>s</span>er<br><br><br><br>co<span class='fucsia'>s</span>emos<br>co<span class='fucsia'>s</span>\u00e9is<br>co<span class='fucsia'>s</span>en</strong>";
				break;
			case "moudre" :
				proder = "<br><br><br><br>Nosotros";
				seg_msg[1] = "<strong>mo<span class='fucsia'>l</span>er<br><br><br><br>mo<span class='fucsia'>l</span>emos</strong>";
				break;
			case "faire" :
				proder = "<strong><span class='subray'>singular</span><br><br>fais <br>les devoirs ! <br><br>dis ! </strong>";
				seg_msg[0] = "Imperativo";
				seg_msg[1] =  "<strong>&nbsp &nbsp &nbsp <span class='subray'>plural</span><br><br>&nbsp &nbsp &nbsp fai<span class='fucsia'>t</span>es<br> &nbsp &nbsp &nbsp les devoirs !<br><br>&nbsp &nbsp &nbsp  di<span class='fucsia'>t</span>es !</strong>";
				break;
			case "croitre" : 
				proder = pronombres; 
				seg_msg[0] = "El ^ lo distingue de"
				seg_msg[1] = "<strong><span class='rojo'>croi</span><span class='naranja'>re</span><br><span class='rojo'>croi</span><span class='verde'>s</span><br><span class='rojo'>croi</span><span class='verde'>s</span><br><span class='rojo'>croi</span><span class='verde'>t</span><br><span class='rojo'>cro</span><span class='negro'>y</span><span class='azul'>ons</span><br><span class='rojo'>cro</span><span class='negro'>y</span><span class='azul'>ez</span><br><span class='rojo'>croi</span><span class='azul'>ent</span></strong>";
				break;
			default :
				if (ayuda.indexOf("RG") > 5) {
					seg_msg[0] = "<small>Aclaraci\u00f3n:</small>";											// titulo mensaje lateral 
 					seg_msg[1] = "<small>Cuando decimos que <cite>la terminaci\u00f3n es = RG </cite>es porque sigue <strong>la Regla General (RG):</strong> <cite>'la terminaci\u00f3n son las dos \u00faltimas letras del infinitivo.'</cite></small>";	
					proder = null;
					large = true;
					} else {
					seg_msg[0] = "";
					seg_msg[1] = "";
					proder = null;
				}
			break;
		
		}
		
		
		
		return ;
	}









  //*************************************************************** */

	// Obtiene las ultimas x letras de una palabra
	
	function ultima_s(palabra, pos) {
		palabra = palabra.substring(palabra.length - pos); 
	return palabra;
	
	} // Fin ultima_s

 //*************************************************************** */

	// Elimina las ultimas x letras de una palabra

	function primera_s(palabra, pos) {
		palabra = palabra.substring(0,palabra.length - pos); 
	return palabra;
	
	} // Fin primeras_s


//***************************************************************** */


  // Imprime mensaje en ventana de alerta
  
function imprimiralerta(mensaje) {
	window.alert(mensaje);
	}
	
//********************************************************************

  // Borra el verbo ingresado antes
  
	function borrarInput() {
		
			ingreso = document.getElementById("verbo");
			ingreso.value = ""; 
		
		
		
	}

	function abrirconj() {
		const pag = document.getElementById("masterframe");
		pag.setAttribute("src", "Conjugador.html");
		const tit = document.getElementById("indsec");
		tit.innerHTML = "Conjugador de verbos en presente del indicativo"
	}

	function abrirvideo() {
		const pag = document.getElementById("masterframe");
		pag.setAttribute("src", "Videos.html");
		const tit = document.getElementById("indsec");
		tit.innerHTML = "Curso completo de conjugaci&#243;n en video"
	}

	function abririnfo() {
		const pag = document.getElementById("masterframe");
		pag.setAttribute("src", "Informacion.html");
		const tit = document.getElementById("indsec");
		tit.innerHTML = "Un método novedoso... con más de 15 años"
	}

	function abrirejA() {
		const pag = document.getElementById("masterframe");
		pag.setAttribute("src", "Ejercicios/Ejercicio1.html");
		const tit = document.getElementById("indsec");
		tit.innerHTML = "Ejercicios 1 a 24";
		const bot = document.getElementById("ejercicios");
		bot.options.item(0).selected = "selected";
	}

	function abrirejB() {
		const pag = document.getElementById("masterframe");
		pag.setAttribute("src", "EjerciciosB/Ejercicio30.html");
		const tit = document.getElementById("indsec");
		tit.innerHTML = "Ejercicios 25 a 48";
		const bot = document.getElementById("ejercicios");
		bot.options.item(0).selected = "selected";
	}