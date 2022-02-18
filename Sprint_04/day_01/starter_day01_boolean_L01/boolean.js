/*1.Déclarez et initialisez les variables: firstName, lastName, country, city, age, isMarried, year et
 utilisez 'typeof' operator pour vérifier les différents data types.*/

var firstName = "Moina";
var lastName = "Housseine";
var country = "Comoros";
var city = "Moroni";
var age = 22;
var isMarried = true;
var year = 2008;

console.log("First name", typeof firstName);
console.log("Last name", typeof lastName);
console.log("Country", typeof country);
console.log("City", typeof city);
console.log("Age", typeof age);
console.log("Is Married?", typeof isMarried);
console.log("Year", typeof year);

//2.Vérifiez si le type '10' est égal à 10

if ("10" === 10) {
  console.log("'10' est egal 10");
} else {
  console.log("'10' est different 10");
}

// 3.Vérifiez si parseInt('9.8') est égal à 10

var parse = parseInt(9.9);
//console.log(typeof parse);
if (10 == parse) {
  console.log("10 est egal à parseInt('9.8')");
} else {
  console.log("10 est different de parseInt('9.8')");
}

// 4.La valeur booléenne est vraie ou fausse.
//     Écrivez trois déclarations JavaScript qui fournissent une valeur de vérité (True).
console.log(Boolean(10 > 9));
console.log(Boolean(typeof 10 == typeof 20));
console.log(Boolean("TOTO" == "TOTO"));

//     Écrivez trois instructions JavaScript qui fournissent une valeur erronée (False).
console.log(Boolean(10 < 9));
console.log(Boolean(typeof "10" == typeof 10));
console.log(Boolean("TITI" == "TOTO"));

/*5. Déterminez d'abord le résultat de l'expression de comparaison suivante sans utiliser console.log().
 Après avoir décidé le résultat, confirmez-le en utilisant console.log()

    4 > 3 True
    4 >= 3 True
    4 < 3  False
    4 <= 3 False
    4 == 4 True
    4 === 4 True
    4 != 4 False
    4 !== 4 False
    4 != '4' True
    4 == '4' False // J'ai faux
    4 === '4' False
    Trouvez la longueur 'length' de python et du jargon et faites une fausse déclaration de comparaison.*/
var l_py = "python".length;
var l_jar = "jargon".length;
console.log(l_jar);
console.log(l_py);
if (l_py != l_jar) {
  console.log("Ne viendra jamais ici");
}

/*Déterminez d'abord le résultat des expressions suivantes sans utiliser console.log(). 
Après avoir décidé le résultat, confirmez-le en utilisant console.log()

    4 > 3 && 10 < 12 True 
    4 > 3 && 10 > 12 False
    4 > 3 || 10 < 12 True
    4 > 3 || 10 > 12 True
    !(4 > 3) False
    !(4 < 3) True
    !(false) True
    !(4 > 3 && 10 < 12) False
    !(4 > 3 && 10 > 12) True
    !(4 === '4') True
    There is no 'on' in both dragon and python  True */

// Utilisez l'objet Date pour effectuer les activités suivantes

const date = new Date(); //format date parsing
var date2 = [];
date2 = date;
console.log(date);
var annee = date.getFullYear();
var mois = date.getMonth() + 1;
var jour = date.getDay();
var heure = date.getHours();
var minutes = date.getMinutes();
var secondes = date.getSeconds();

//     Quelle est l'année aujourd'hui?
console.log("Cette année:", date.getFullYear());
//     Quel est le mois aujourd'hui en nombre?
console.log("Ce mois-ci:", mois);
//     Quelle est la date aujourd'hui?
console.log("La date d'aujourd'hui", jour + "/" + mois + "/" + annee);
//     Quel est le jour aujourd'hui en nombre?
console.log("Aujourd'hui:", jour);
//     Maintenant, quel le nombre d'heure ?
console.log("L'heure:", heure);
//     Maintenant, quel le nombre de minutes ?
console.log("Minutes:", minutes);

//     Découvrez le nombre de secondes écoulées entre le 1er janvier 1970 et aujourd'hui.

let ms = Date.now();
console.log("Nombre de seconde depuis 1er Janvier 1970", ms / 1000);
