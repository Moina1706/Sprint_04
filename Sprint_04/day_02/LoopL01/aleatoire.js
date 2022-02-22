// Développez un script qui génère n'importe quel nombre de caractères aléatoire:
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba

const generateRandomString = (num) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result1 = Math.random().toString(36).substring(2, num);
  let result = result1 + result1;
  return result;
};

var variable = Math.floor(Math.random() * 10);
switch (variable) {
  case 0:
    console.log(generateRandomString(3));
    break;
  case 1:
    console.log(generateRandomString(4));
    break;
  case 2:
    console.log(generateRandomString(5));
    break;
  case 3:
    console.log(generateRandomString(6));
    break;
  case 4:
    console.log(generateRandomString(8));
    break;
  case 5:
    console.log(generateRandomString(10));
    break;
  case 6:
    console.log(generateRandomString(12));
    break;
  case 7:
    console.log(generateRandomString(14));
    break;
  case 8:
    console.log(generateRandomString(16));
    break;
  case 9:
    console.log(generateRandomString(18));
    break;
}
//console.log(variable);

//Ecrivez un script qui génère un numéro de couleur RGB aléatoire.
//les nombres ne doivent pas exceder 255
let var1 = "",
  var2 = "",
  var3 = "";
let random_all = Math.random();
//console.log(random_all);
let text = random_all.toString();

//console.log(text);

var1 = text.substring(2, 5); // Recupere les nombres, ils sont de type string
var2 = text.substring(5, 8);
var3 = text.substring(8, 11);

var1 = var1 * 1; //je remet les variables en type Nbre
var2 = var2 * 1;
var3 = var3 * 1;

while (var1 > 255) {
  var1 = var1 / 2;
  var1 = Math.round(var1);
}

while (var2 > 255) {
  var2 = var2 / 2;
  var2 = Math.round(var2);
}
while (var3 > 255) {
  var3 = var3 / 2;
  var3 = Math.round(var2);
}

// console.log("var 1", var1);
// console.log("var2", var2);
// console.log("var3", var3);

var thergb = "rgb(" + var1 + "," + var2 + "," + var3 + ")";
document.body.style.backgroundColor = thergb;
