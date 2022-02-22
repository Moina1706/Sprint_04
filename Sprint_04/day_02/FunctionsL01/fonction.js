// 1.Déclarez une fonction fullName qui affiche votre nom complet.

console.log("Je suis dans la fonction");

function fullName() {
  //console.log("Moina Housseine");
  var mon_nom = "Moina Housseine";
  return mon_nom;
}
var name1 = fullName();
console.log(name1);
//==============================================================
//2. Déclarez une fonction newFullName qui prend firstName, lastName comme paramètre et elle renvoie return votre nom complet.
function newFullName(nom1, nom2) {
  // var nom1 = prompt("Firstname:");
  // var nom2 = prompt("LastName:");
  var nom_complet = nom1 + " " + nom2;
  //console.log(nom_complet);
  return nom_complet;
}
var name2 = newFullName("Ali", "Lucas");
console.log(name2);
//==========================================================
//3. Déclarez une fonction addNumbers qui prend deux paramètres et elle renvoie return la somme.
function addNumbers(num1, num2) {
  // var num1 = Number(prompt("Premier nbre:"));
  // var num2 = Number(prompt("Second nbre"));

  //var vide = "";
  //if (num1 != vide || num2 != "") {
  var somme = num1 + num2;
  //console.log(somme);
  return somme;
  // }
}
var resultat = addNumbers(5, 3);
console.log("Somme addition", resultat);
//==============================================================
//4. Une aire d'un rectangle est calculée comme suit: area = longueur x largeur.
// Ecrivez une fonction qui calcule areaOfRectangle.

function areaOfRectangle(num1, num2) {
  // var num1 = Number(prompt("Premier nbre:"));
  // var num2 = Number(prompt("Second nbre"));

  //var vide = "";
  //if (num1 != vide || num2 != "") {
  var air = num1 * num2;
  //console.log(somme);
  return air;
  // }
}
var resultat2 = areaOfRectangle(5, 3);
console.log("l air du rectancle", resultat2);

//=========================================================================

// 5.Le périmètre d'un rectangle est calculé comme suit: perimeter = 2x (longueur + largeur).
//Ecrivez une fonction qui calcule perimeterOfRectangle.

function perimeterOfRectangle(num1, num2) {
  // var num1 = Number(prompt("Premier nbre:"));
  // var num2 = Number(prompt("Second nbre"));

  //var vide = "";
  //if (num1 != vide || num2 != "") {
  var perimetre = 2 * (num1 + num2);
  //console.log(somme);
  return perimetre;
  // }
}
var resultat3 = perimeterOfRectangle(5, 3);
console.log("Le perimetre d'un rectangle", resultat3);
//===============================================================================================
// 6.L'aire d'un cercle est calculée comme suit: area = π x r x r. Ecrire une fonction qui calcule areaOfCircle
function areaOfCircle(num1) {
  // var num1 = Number(prompt("Premier nbre:"));
  // var num2 = Number(prompt("Second nbre"));

  //var vide = "";
  //if (num1 != vide || num2 != "") {
  var air_cercle = num1 * num1 * Math.PI;
  //console.log(somme);
  return air_cercle;
  // }
}
var resultat4 = areaOfCircle(5);
console.log("Air d'un cercle:", resultat4);

// (Facultatif) La température en C° peut être convertie en F° en utilisant cette formule: F° = (C° x 9/5) + 32. Écrivez une fonction qui convertit C° en F°_convertCelciusToFahrenheit_.
// Le Facultatif restera facultatif
