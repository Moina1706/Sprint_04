/*1. Déclarez un tableau vide.
2. Déclarez un tableau avec plus de 5 éléments.
3. Trouvez la longueur (length) de votre tableau.
4. Obtenez le premier élément, l'élément du milieu et le dernier élément du tableau.
5. Déclarez un tableau appelé mixedDataTypes, placez différents types de données dans le tableau 
et recherchez la longueur du tableau. La taille du tableau doit être supérieure à 5.
*/

var tab1 = [];
var tab2 = ["un", "deux", "trois", "quatre", "cinq"];

var taille_tab = tab2.length;
console.log(typeof taille_tab);
console.log("Taille du tableau:", tab2.length);
console.log("Premier Elmt du tbl:", tab2[0]);
console.log("Element du milieu:", tab2[2]);

var mixedDataTypes = [
  "Michel",
  36,
  "Celibataire",
  "Lyon",
  "voiture",
  "peche",
  true,
];
var taille_mixed = mixedDataTypes.length;
console.log("Mixed taille tab:", taille_mixed);

/*6. Déclarez un tableau nommé itCompanies et attribuez les valeurs initiales:
 Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon.
7.Affichez le tableau avec console.log().
8.Affichez le nombre d'élément qu'il y a dans le tableau itCompanies.
9.Affichez la première entreprise, l'entreprise du milieu de tableau et la dernière entreprise.
10.Affichez chaque entreprise.*/

var itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
var itCompanies_init = [];
itCompanies_init = itCompanies; // Me permettra d'initialiser itCompanies apres les differents changements
console.log("IT Companies:", itCompanies);
var taille_tab_IT = itCompanies.length;
console.log("Nbre d'element:", taille_tab_IT); // Nombre d'element du tab IT
// Calculer la milieu du tableau peu importe la taille initiale
let ent_milieu = taille_tab_IT / 2;
//console.log(ent_milieu);
var moitie_tabIT = Math.round(ent_milieu); // permet d'arrondir le resultat, si pas nbr entier
//console.log(moitie_tabIT);
console.log("Premiere Entreprise", itCompanies[0]);
console.log("Entreprise du milieu", itCompanies[moitie_tabIT]);
console.log("Derniere entreprise", itCompanies[taille_tab_IT - 1]);
var majIT = "";
//11.Mettez le nom des entreprises en majuscule, un par un, et affichez-les
for (let i = 0; i < taille_tab_IT; i++) {
  console.log(itCompanies[i].toUpperCase());
}

/*12.Affichez le tableau sous forme de phrase: 
"Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon sont de grandes entreprises d'IT".*/
//for (let i = 0; i < taille_tab_IT; i++) {
//}
console.log(
  itCompanies[0] +
    ", " +
    itCompanies[1] +
    ", " +
    itCompanies[2] +
    ", " +
    itCompanies[3] +
    ", " +
    itCompanies[4] +
    ", " +
    itCompanies[5] +
    " et " +
    itCompanies[6] +
    " sont de grandes entreprises d'IT"
);
/*13.Vérifiez si une certaine entreprise existe dans le tableau itCompanies.
 S'il existe, retournez le nom de l'entreprise sinon retournez "une société introuvable".*/

// Saisie du nom de la l'entreprise
let text1 = prompt("Saisie du nom de l'entreprise");
let text_vide = "";
let j = 0;
if (text1 != text_vide) {
  for (i = 0; i < taille_tab_IT; i++) {
    if (itCompanies[i] == text1) {
      j++;
      console.log(itCompanies[i]);
    }
  }
  if (j == 0) {
    console.log("une société introuvable");
  }
}

//14.(Facultatif) Filtrez les entreprises qui ont plus d'un 'o' sans utiliser la méthode filter
// Pour le moment ça restera facultatif

//15.Trier le tableau en utilisant la méthode sort()
console.log("LE trie du tab itCompanies:", itCompanies.sort());

// 16.Inversez le tableau en utilisant la méthode reverse()
console.log(itCompanies.reverse());

//17. Récupez dans un tableau les 3 premières entreprises du tableau itCompanies en utilisant la méthode slice()
console.log("slice 3 premiers:", itCompanies.slice(0, 3));
// 18.Récupez dans un tableau les 3 dernières entreprises du tableau itCompanies en utilisant la méthode slice()
console.log("slice 3 deniers:", itCompanies.slice(-3));

//19. Récupez dans un tableau le milieu du tableau itCompanies, à savoir ["Apple"] en utilisant la méthode slice()
// Je remet le tableau dans l'ordre de depart
itCompanies = itCompanies_init; // initialiser le tableau

console.log(
  "Recuperer le milieu du tableau avec slice",
  itCompanies.slice(3, -3)
); // Reponse "Apple"

//20.Supprimez le premier élément du tableau itCompanies en utilisant la méthode splice()
console.log(itCompanies);
console.log(itCompanies.splice(1, taille_tab_IT));
//******************* *
//Supprimez un élément au milieu du tableau itCompanies en utilisant la méthode splice()
//itCompanies = itCompanies_init;
itCompanies = [
  //initialiser le tableau
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log("Element du milieu", itCompanies.splice(3, 1));
console.log("Liste sans l'élement du milieu", itCompanies);
//*****************************************
// Supprimez le dernier élément du tableau itCompanies en utilisant la méthode splice()
//initialiser le tableau
itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
var tailleTab = itCompanies.length;
taille_tab = taille_tab * 1; // typeof Number
console.log("Dernier element supprimé:", itCompanies.splice(taille_tab + 1, 1));
console.log("itCompanies sans le dernier elements:", itCompanies);
console.log(itCompanies);
//**************************************************************************** */
// Supprimez tous les éléments du tableau itCompanies.
// initialise encore le tableau
itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(
  "Les elements supprimé par splice",
  itCompanies.splice(0, taille_tab + 2)
);
console.log("Le contenu de itCompanies", itCompanies);
