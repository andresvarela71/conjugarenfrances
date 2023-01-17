/**
 * 
 */

 
var nomejer = [];				// nombre del ejercicio
nomejer[0] = [""];
nomejer[25] = ["Verbos con 2 radicales I"];
nomejer[26] = ["Verbos con 2 radicales II"];
/* nomejer[2] = [""];
nomejer[3] = [""];
nomejer[4] = [""];
nomejer[5] = [""];
nomejer[6] = [""];
nomejer[7] = [""];
nomejer[8] = [""];
nomejer[9] = [""];
nomejer[10] = [""];
nomejer[11] = [""];
nomejer[12] = [""];
nomejer[13] = [""];
nomejer[14] = [""];
nomejer[15] = [""];
nomejer[16] = [""];
nomejer[17] = [""];
nomejer[18] = [""];
nomejer[19] = [""];
nomejer[20] = [""];
nomejer[21] = [""];
nomejer[22] = [""];
nomejer[23] = [""];
nomejer[24] = [""]; */
 
var video = [];							// videos que es necesario haber visto para realizar el ejercicio
video[25] = ["8", "29"];					// el 2do elemento corresponde a las paginas del libro que es necesario haber leido
video[26] = ["8", "29"];
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
video[19] = ["6", "23"];
video[20] = ["6", "23"];
video[21] = ["6", "23"];
video[22] = ["7", "25"];
video[23] = ["7", "25"];
video[24] = ["7", "25"];


var cantejer = nomejer.length - 1;				// cantidad de ejercicios disponibles

 
var solucion = [];				// solucion a los ejercicios
solucion[25] = ["requiers","tiens", "requiers", "tiens", "requiert", "tient", "requ\u00e9rons", "tenons", "requ\u00e9rez", "tenez", "requi\u00e8rent", "tiennent"]; 
solucion[26] = ["meus","meus", "meut", "mouvons", "mouvez", "meuvent"]; 
solucion[3] = ["des(b)","des(a)", "des(b)","des(b)", "des(a)", "des(a)", "des(a)", "des(b)"]; //solalt[3] = ["des(b)","des(a)", "des(b)","des(b)", "des(a)", "des(a)", "des(a)", "des(b)"];
solucion[4] = ["salue","salues", "salue","parcours", "parcours", "parcourt", "offre", "offres", "offre", "tressaille", "tressailles", "tressaille", "ris", "ris", "rit" ]; //solalt[4] = ["salue","parcours", "offre","tressaille", "ris", "salues", "parcours", "offres", "tressailles", "ris", "salue", "parcourt", "offre", "tressaille", "rit" ];
solucion[5] = ["ils / elles","il / elle / on", "je / tu","nous", "je / il / elle / on", "tu", "vous"]; //solalt[5] = ["ils / elles","il / elle / on", "je / tu","nous", "je / il / elle / on", "tu", "vous"];
solucion[6] = ["pleure","pleures", "pleurons","inclus", "inclut", "incluent", "rouvres", "rouvre", "rouvrez", "assaille", "assailles", "assaillent", "cours", "court", "courons" ]; //solalt[6] = ["pleure","inclus", "rouvres","assaille", "cours", "pleures", "inclut", "rouvre", "assailles", "court", "pleurons", "incluent", "rouvrez", "assaillent", "courons" ];
solucion[7] = ["prends","regardons", "souffre","travaillent", "ouvres", "rit", "allez", "cours", "semblent", "inclut"]; //solalt[7] = ["prends","regardons", "souffre","travaillent", "ouvres", "rit", "allez", "cours", "semblent", "inclut"];
solucion[8] = ["entre","quitte", "vend","d\u00e9missionne", "d\u00e9filent", "publie", "est", "introduit", ["na\u00eet", "nait"], "compte", "signe"]; //solalt[8] = ["entre","quitte", "vend","d\u00e9missionne", "d\u00e9filent", "publie", "est", "introduit", "nait", "compte", "signe"];
solucion[9] = ["nage","nageons", "fonds","fond", "fais", "font", "est", "sommes", "dis", "dites"];
solucion[10] = ["fais","faites", "convaincs","convainc","s\u00e8mes","semez", "place", "pla\u00e7ons", "vais", "vont"];
solucion[11] = ["p\u00e8le","pelez", "as", "ont", "appelles", "appelons", "d\u00e9place", "d\u00e9pla\u00e7ons", "pr\u00e9c\u00e8de", "pr\u00e9c\u00e9dez"];
solucion[12] = ["-re","-ire", "s","introduis", "introduisez"];
solucion[13] = ["-re","-crire", "v","circonscris", "circonscrivons"];
solucion[14] = ["\u00e9cris", "\u00e9crivons", "disons", "dites", "souris", "sourient", "proscrit", "proscrivons", "cuis", "cuisez"];
solucion[15] = ["re","ir", "re","re", "ir", "tre", "r", "r"];
solucion[16] = ["v","\u00d8", "\u00d8","s", "\u00d8", "ss", "ss", "ss"];
solucion[17] = ["transcris", "transcrivons","suffis", "suffisent", "enorgueillis", "enorgueillissez", "nais",  "naissent", "m\u00e9dit",  "m\u00e9disez"];
solucion[18] = [["pa\u00eet", "pait"], "paissent", "disent", "dites", "assaille",  "assaillent", "prescrit", "prescrivez", "vieillis",   "vieillissons"]; //solalt[18] = ["pait","disent", "assaille","prescrit", "vieillis", "paissent", "dites", "assaillent", "prescrivez", "vieillissons"]
solucion[19] = ["t", "\u00d8", "ss", "ill", "t", "ss", "\u00d8", "v"]
solucion[20] = ["m", "\u00f8", "\u00f8", "t",  "\u00f8", "\u00f8", "v",  "\u00f8" ];
solucion[21] = ["m", "t", "p", "t",  "d", "\u00f8", "v",  "k" ];
solucion[22] = ["essuies", "essuyez", "fuit", "fuyons", "sourit",  "sourions", "trait", "trayez", "grasseye", "grasseyons"];
solucion[23] = ["paie", "paye", "paies", "payes", "paie", "paye", "payons", "payons", "payez", "payez", "paient", "payent"];
solucion[24] = ["assois", "assois", "assoit", "assoyons", "assoyez", "assoient"];


var textofijo = [];					// Parte de ejercicios aleatorios que acompaña al cuadro de respuesta
textofijo[2] = ["travaillent", "court", "inclus", "\u00e9tudions", "arrive", "m\u00e8nes", "regardez" ];
textofijo[3] = ["interrompre", "supposer", "na\u00eetre", "appauvrir", "d\u00e9couvrir", "cueillir", "mijoter", "mettre" ];
textofijo[5] = ["travaillent", "court", "inclus", "\u00e9tudions", "arrive", "m\u00e8nes", "regardez" ];
textofijo[15] = ["souscrire", "accueillir", "sourire", "produire", "d\u00e9couvrir", "para\u00eetre", "vieillir", "choisir"  ];
textofijo[16] = ["souscrire", "accueillir", "sourire", "produire", "d\u00e9couvrir", "para\u00eetre", "vieillir", "choisir"  ];
textofijo[19] = ["sentir", "tressaillir", "jaillir", "bouillir", "mettre", "accro\u00eetre", "parcourir", "vivre" ];
textofijo[20] = ["dormir", "v\u00eatir", "corrompre", "promettre", "fondre", "courir", "servir", "convaincre"];
textofijo[21] = ["dormir \u005bd\u0254\u0280mi\u0280\u005d", "v\u00eatir \u005bv\u025bti\u0280\u005d", "corrompre \u005bk\u0254\u0280\u00f5p\u0280\u005d", "promettre \u005bp\u0280\u0254m\u025bt\u0280\u005d", "fondre \u005bf\u00f5d\u0280\u005d", "courir \u005bku\u0280i\u0280\u005d", "servir \u005bs\u025b\u0280vi\u0280\u005d", "convaincre \u005bk\u00f5v\u025b\u0303k\u0280\u005d"];


var ayuda = [];
ayuda[25] = ["Los verbos en '-qu\u00e9rir' y en '-enir' se conjugan como 'querer'  en espa\u00f1ol", "Los verbos en '-qu\u00e9rir' y en '-enir' se conjugan como 'querer'  en espa\u00f1ol", "Los verbos en '-qu\u00e9rir' y en '-enir' se conjugan como 'querer'  en espa\u00f1ol", "El radical para 'nous' y 'vous' es igual al del infinitivo", "El radical para 'nous' y 'vous' es igual al del infinitivo", "Los verbos en 'qu\u00e9rir' llevan acento grave en la 3ra persona del plural ya que la 'e' es final de s\u00edlaba al escrito pero no al oral. En cambio, los verbos en '-enir' duplican la consonante, de modo que la 'e' deja de ser final de s\u00edlaba y por lo tanto no lleva tilde (como con los verbos 'appeler' y 'jeter')"]
ayuda[26] = ["Cuando en español usamos ue, en franc\u00e9s se usa eu. Atenci\u00f3n con la mp", "Cuando en español usamos ue, en franc\u00e9s se usa eu. Atenci\u00f3n con la mp", "Cuando en español usamos ue, en franc\u00e9s se usa eu. Atenci\u00f3n con la mp", "El radical es el mismo del infinitivo", "El radical es el mismo del infinitivo", "Cuando en español usamos ue, en franc\u00e9s se usa eu. Atenci\u00f3n con la mp"];
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
ayuda[18] = [ "Verbo en '-a\u00eetre / o\u00eetre'" , "Tres verbos tienen una desinencia para 'vous' distinta a '-ez'. \n Dato curioso: siempre precedida de la misma consonante.", "Verbo en '-illir'", "\u00bfEs un verbo en '-crire', en '-rire' o en '-ire'?",  "Cuatro verbos en 'illir' pertenecen al grupo de verbos en '-ir [ir]'."];
ayuda[19] = ["Uno de los siete verbos (parecidos al espa\u00f1ol) que no pertenecen al grupo de verbos en -ir [ir] y que tienen mp en el infinitivo", "Los verbos en '-illir' utilizan des(a) y no utilizan mp", "Uno de los cuatro verbos en '-illir' que se conjugan como los verbos en -ir [ir]", "Verbo con conjugaci\u00f3n \00fanica y mp en el infinitivo", "Al eliminar la terminaci\u00f3n se obtiene una forma terminada en consonante (=mp)", "La terminaci\u00f3n de los verbos en '-a\u00eetre / -o\u00eetre' son las 'tre' \u00faltimas letras del infinitivo. ¿Qu\u00e9 mp utilizan?", "Los verbos en '-ourir' no pertenecen al grupo de verbos en -ir [ir]. Al eliminar la terminaci\u00f3n se obtiene una forma terminada en consonante (r) pero la r no es nunca mp", "Al eliminar la terminaci\u00f3n se obtiene una forma terminada en consonante (=mp)"];
ayuda[20] = ["Uno de los siete verbos (parecidos al espa\u00f1ol) que no pertenecen al grupo de verbos en -ir [ir] y que tienen mp en el infinitivo", "El verbo 'v\u00eatir' no pertenece al grupo de verbos en -ir [ir]. La 't' se matiene en toda la conjugaci\u00f3n en el escrito", "Los verbos en -dre, -pre y -cre mantienen, en el escrito, la consonante final del radical en toda la conjugaci\u00f3n", "Al eliminar la terminaci\u00f3n se obtiene una forma terminada en consonante (=mp)", "Los verbos en -dre, -pre y -cre mantienen, en el escrito, la consonante final del radical en toda la conjugaci\u00f3n", "La 'r' no es nunca mp", "Uno de los siete verbos (parecidos al espa\u00f1ol) que no pertenecen al grupo de verbos en -ir [ir] y que tienen mp en el infinitivo", "Los verbos en -dre, -pre y -cre mantienen, en el escrito, la consonante final del radical en toda la conjugaci\u00f3n"];
ayuda[21] = ["Uno de los siete verbos (parecidos al espa\u00f1ol) que no pertenecen al grupo de verbos en -ir [ir] y que tienen mp en el infinitivo", "La t del verbo 'v\u00eatir' se pronuncia \u00fanicamente cuando est\u00e1 seguida de vocal, es decir, las tres personas del plural", "La consonante final del radical de los verbos en -dre, -pre y -cre se mantiene en toda la conjugaci\u00f3n pero s\u00f3lo se pronuncia en las personas del plural", "El sonido 't' s\u00f3lo aparece en las personas del plural", "La consonante final del radical de los verbos en -dre, -pre y -cre se mantiene en toda la conjugaci\u00f3n pero s\u00f3lo se pronuncia en las personas del plural", "La 'r' no es nunca mp", "Uno de los siete verbos (parecidos al espa\u00f1ol) que no pertenecen al grupo de verbos en -ir [ir] y que tienen mp en el infinitivo", "La consonante final del radical de los verbos en -dre, -pre y -cre se mantiene en toda la conjugaci\u00f3n pero s\u00f3lo se pronuncia en las personas del plural"];
ayuda[22] = ["Los verbos en '-uyer' se conjugan como los verbos en '-oyer'", "El verbo 'fuire' sigue la regla de la yod", "Los verbos en '-rire' no usan mp", "Los verbos en '-raire' siguen la regla de la yod", "Los verbos en '-eyer' NO siguen la regla de la yod"];
ayuda[23] = ["La desinencia es muda por lo que no aparece la yod", "La desinencia es muda por lo que no aparece la yod", "La desinencia es muda por lo que no aparece la yod", "La desinencia se pronuncia, por lo que aparece la yod", "La desinencia se pronuncia, por lo que aparece la yod", "La desinencia es muda por lo que no aparece la yod"];
ayuda[24] = ["La desinencia es muda por lo que no aparece la yod", "La desinencia es muda por lo que no aparece la yod", "La desinencia es muda por lo que no aparece la yod", "La desinencia se pronuncia, por lo que aparece la yod", "La desinencia se pronuncia, por lo que aparece la yod", "La desinencia es muda por lo que no aparece la yod"];


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



   // window.scrollTo(0, document.body.scrollHeight);   			// Hace scroll para que el ejercicio se muestre completo
} 

   
function impayuda() {
   alert(ayuda[ejercicio][salieron[document.getElementById("ayuda").selectedIndex - 1]]);
   document.getElementById("ayuda").selectedIndex = 0;
}



 // crea la lista de ejercicios
 function crearlista() {
 var itemlist; var nomit;
 document.getElementById("listas").setAttribute("start", 25);

 for (var x = 25; cantejer >= x ; x++ ) {
   
  
   itemlist = document.createElement("li"); 
   itemlist.setAttribute("onclick", "window.location.href='Ejercicio" + x + ".html'");console.log(x);
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
   document.getElementById("listas").childNodes[il-24].style.color = "yellow";
}



 // Agrega caracteres especiales desde teclado virtual
function agregarcar(letra) {
   var car;
   if (letra == "c") {car = "\u00e7";}
   if (letra == "egr") {car = "\u00e8";}
   if (letra == "eag") {car = "\u00e9";}
   if (letra == "icirc") {car = "\u00ee";}
   if (letra == "nousa") {car = "\u00f8";}
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

