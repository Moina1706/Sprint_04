// Écrivez un script qui invite l'utilisateur à entrer le nombre d'années.
//Calculez le nombre de secondes qu'une personne peut vivre. Supposons que quelqu'un ne vive que cent ans.

// Entrez le nombre de vôtres que vous habitez: 100
// Vous avez vécu 3153600000 secs.

let age_now = prompt("Nombre d'année- Age");
var days_1 = 365;
var hourByDay = 24;
var secbyhour = 3600;
var secInOnYear = days_1 * hourByDay * secbyhour;
var string_vide = "";

//console.log("TYPEOF", typeof age_now);
if (age_now != string_vide) {
  var nbSecInLife = age_now * secInOnYear;
  document.getElementById("demo1").innerHTML =
    "Vous avez vécu " + nbSecInLife + " secs";
  console.log("Vous avez vécu " + nbSecInLife + " secs");
}
