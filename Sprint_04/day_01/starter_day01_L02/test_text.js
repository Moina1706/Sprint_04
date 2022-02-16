//1.Utilisez console.log() et afficher la déclaration suivante:
console.log(
  " 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
//2.Utilisez console.log() et afficher la citation suivante:
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);
//3.Vérifiez si typeof '10' est exactement égal à 10. Sinon, rendez-le exactement égal.
let n = 10;
let y = "10";

if (typeof n !== typeof y) {
  y = +n;
}

//4. Vérifiez si parseFloat('9.8') est exactement égal à 10 if not make it exactly equal with 10.

if (parseFloat("9.8") !== 10) {
  console.log("parseFloat, Math.round:", Math.round(9.8));
}

// 5.Vérifiez si 'on' is found in both python and jargon
var text = "python";
var text1 = "jargon";

console.log("Recherche de on avec match()", text.match("on"));
console.log("Recherche de on avec match()", text1.match("on"));

// 6.I hope this course is not full of jargon. Vérifiez si jargon est dans la chaine.
var text2 = "I hope this course is not full of jargon.";
console.log("Recherche de jargon avec match()", text2.match("jargon"));

// 7.Générer un nombre aléatoire entre 0 et 100 inclusivement.
let aleatoire = Math.floor(Math.random() * 100 + 1);
console.log("Nombre aleatoire entre 1 et 100:", aleatoire);

// 8.Générer un nombre aléatoire entre 50 et 100 inclusivement.
let aleatoire2 = Math.floor(Math.random() * 50 + 50);
console.log("Nombre aleatoire entre 50 et 100:", aleatoire2);

// 9.Générez un nombre aléatoire compris entre 0 et 255 inclusivement.
let aleatoire3 = Math.floor(Math.random() * 255 + 1);
console.log("Nombre aleatoire entre 0 et 255:", aleatoire3);

// 10.Utilisez substr pour slicer la phrase because because because de la phrase suivante:
//  'You cannot end a sentence with because because because is a conjunction'
var substr_txt =
  "You cannot end a sentence with because because because is a conjunction";

var txt2 = "position";
let taille_txt2 = txt2.length;
console.log(taille_txt2);

var position1 = substr_txt.indexOf("because");
var position3 = substr_txt.lastIndexOf("because");
console.log(position1);

var taille_total = substr_txt.length;

var recup0 = substr_txt.substring(position1, taille_total);

console.log(recup0);
var recup1 = recup0.substring(0, taille_txt2 * 3);
console.log(recup1);
