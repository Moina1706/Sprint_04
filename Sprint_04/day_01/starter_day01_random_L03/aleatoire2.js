//Ecrire un programme qui indique le nombre de jours dans un mois.

let text1 = prompt("Saisir un mois de l'année");
var string_vide = "";
let expr_mois = text1.toLowerCase();
//console.log(expr_mois);
if (expr_mois != string_vide) {
  switch (expr_mois) {
    case "janvier":
    case " mars":
    case "mai":
    case " juilet":
    case "aout":
    case " septembre":
    case "décembre":
      console.log(expr_mois + " a 31 jours.");
      break;
    case "avril":
    case "juin":
    case "septembre":
    case "novembre":
      console.log(expr_mois + " a 30 jours.");
      break;
    case "fevrier":
      console.log(expr_mois + " a 28 jours.");
      break;
    default:
      console.log("Désolé ce mois n'existe pas !!!" + expr_mois + ".");
  }
}
