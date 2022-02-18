/*Vérifiez si la saison est l'automne, l'hiver, le printemps ou l'été. 
Si l'entrée utilisateur est: - septembre, octobre ou novembre, la saison est l'automne. 
- décembre, janvier ou février, la saison est l'hiver. 
- mars, avril ou mai, la saison est le printemps 
- juin, juillet ou août, la saison est l'été*/

let expr_saison = prompt("Saisir un mois de l'année");
if (expr_saison != string_vide) {
  switch (expr_saison) {
    case "septembre":
    case " octobre":
    case "novembre":
      console.log("Automne");
      break;
    case "décembre":
    case "janvier":
    case "février":
      console.log("Hiver");
      break;
    case "mars":
    case "avril":
    case "mai":
      console.log("Printemps");
      break;
    case "juin":
    case "juillet":
    case "août":
      console.log("Eté");
      break;

    default:
      console.log("Désolé ce mois n'existe pas !!!" + expr_saison + ".");
  }
}

//console.log("Is there anything else you'd like?");
