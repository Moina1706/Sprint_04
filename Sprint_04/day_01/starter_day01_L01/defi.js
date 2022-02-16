/*1.Déclarez une variable nommée defi et
 attribuez-lui une valeur initiale 'Pratiquer les algorithmes en JavaScript'.*/

var defi = "Pratiquer les algorithmes en JavaScript";
/*2.Affichez la chaîne sur la console du navigateur en utilisant console.log()*/
console.log(defi);

/*3.Affichez le length de la chaîne sur la console
 du navigateur en utilisant console.log()*/

console.log(defi.length);

/*4.Remplacez tous les caractères de chaîne en majuscules en utilisant la méthode toUpperCase()*/

console.log(defi.toUpperCase());

/*5.Remplacez tous les caractères de chaîne par des lettres minuscules en utilisant la méthode toLowerCase()*/
console.log(defi.toLowerCase());

/*6.Découpez (slice) le premier mot de la chaîne en utilisant la méthode substr() ou bien substring()*/
console.log(defi.substring(0, 9));

/*7.Découpez la phrase Jours en JavaScript from 10 jours en JavaScript.*/
/*A partir de la chaîne de caractères "10 jours en JavaScript",
 écrire le code qui permet d'obtenir la chaîne de caractères "Jours en JavaScript".*/
var text = "10 jours en JavaScript";
console.log(text.substring(3, text.length));

/*8.Vérifiez si la chaîne contient un mot Script en utilisant la méthode includes() */
console.log(text.includes("Script"));

/*9.Divisez la chaine string dans un array en utilisant la méthode split()*/
var valchaine = "string";
console.log(valchaine.split(""));

/*10.Divisez la chaine "10 Jours en JavaScript" à l'espace en utilisant la méthode split()*/
var valchaine1 = "10 Jours en JavaScript";
console.log(valchaine1.split(" "));

/*11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split divisez la chaîne à la virgule et changez-la en tableau.*/

var usabigcompany = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
var tabresult = [];
tabresult = usabigcompany.split(",");
console.log("big company:", tabresult);

//12.Changez 10 Jours en JavaScript à 10 Jours en PHP en utilisant la méthode replace() .
var changeText = "10 Jours en JavaScript";
console.log(changeText.replace("JavaScript", "PHP"));

/*13.Qu'est-ce que le caractère à l'index 15 dans la chaine "10 Jours en JavaScript"?
 Utilisez la méthode charAt() .*/

console.log("Quinzieme caracteres:", changeText.charAt(15));

//14.Quel est le code de caractère de J dans la chaine '10 Jours en JavaScript' en utilisant charCodeAt()
console.log("Code du J", changeText.charCodeAt(3));

//15. Utilisez indexOf pour déterminer la position de la première occurrence de a dans 10 Jours en JavaScript
console.log(" premiere occurence de a:", changeText.indexOf("a"));

// 16.Utilisez lastIndexOf pour déterminer la position de la dernière occurrence de a dans 10 Jours en JavaScript.

console.log("Derniere occurence a:", changeText.lastIndexOf("a"));

/* 17.Utilisez indexOf pour trouver la position de la première occurrence du mot parceque dans la phrase suivante:
'Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction'*/
var changeText2 =
  "Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction";
console.log(
  "Premiere occurence de parceque indexOf:",
  changeText2.indexOf("parceque")
);

/* 18.Utilisez lastIndexOf pour trouver la position de la dernière occurrence du mot 
parceque dans la phrase suivante:'Vous ne pouvez pas terminer une phrase avec parceque parceque
 c'est une conjonction'*/
console.log(
  "Derniere occurence de parceque avec lastIndexOf:",
  changeText2.lastIndexOf("parceque")
);

/* 19.Utilisez search pour trouver la position de la première occurrence du mot parceque
 dans la phrase suivante:'Vous ne pouvez pas terminer une phrase avec parceque parceque
  c'est une conjonction' */

console.log(
  "Premiere occurence de parceque avec search:",
  changeText2.search("parceque")
);

// 20.Utilisez la méthode trim() pour supprimer tout espace blanc de fin au début et à la fin d'une chaîne. ' 10 Jours en JavaScript '.
var changeText3 = "    10 Jours en JavaScript    ";
console.log(
  "Utilisation de le fct trim() pour supprimer les espaces:",
  changeText3.trim()
);

// 21.Utilisez la méthode startsWith() dans la chaine 10 Jours en JavaScript et rendre le résultat vrai
var changeText4 = "10 Jours en JavaScript";
console.log("utiliser startsWith() pour VRAI:", changeText4.startsWith("10"));

// 22.Utilisez la méthode endsWith() dans la chaine 10 Jours en JavaScript et rendre le résultat vrai
console.log(
  "utiliser endsWith() pour VRAI:",
  changeText4.endsWith("JavaScript")
);
// 23.Utilisez la méthode match() pour trouver tous les a dans "10 Jours en JavaScript"

console.log("Recherche de a avec match()", changeText4.match("a"));

// 24.Utilisez la méthode concat() et fusionner '10 Jours en' avec 'JavaScript' tà une seule chaîne, '10 Jours en JavaScript'
var textcont1 = "10 Jours en";
var textcont2 = "JavaScript";
const result3 = textcont1.concat(textcont2);
console.log("Resultat concat()", result3);

//25. Utilisez la méthode repeat() pour afficher "10 Jours en JavaScript" 2 fois

console.log("Methode repeat() 2 fois:", changeText4.repeat(2));
