const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//Trouvez la personne qui possède de le plus compétences dans l'objet users ci-dessous.
//console.log(users)
//var size = Object.keys(myObj).length;

//console.log(size);
var big = "";
var nom = -1;
for (let i in users) {
  if (users[i].skills.length > nom) {
    //console.log(users[i].skills.length);
    //console.log(nom);
    nom = users[i].skills.length;
    big = i;
  }
}
console.log("Nom de ceui qui possede plus de competances:", big);

//===========================================================================
//Comptez les users connectés
let variable_true = 0;

for (let j in users) {
  if (users[j].isLoggedIn === true) {
    //console.log("true");
    variable_true++;
  }
}
console.log("Les users connectés:", variable_true);
//==============================================================================
// comptez les users ayant plus de 50 points de l'objet suivant.

let variable_point = 50;
let nbrPerPoint = 0;

for (let i in users) {
  if (users[i].points >= variable_point) {
    //console.log("true");
    nbrPerPoint++;
  }
}
console.log("Les users ayant + de 50 points:", nbrPerPoint);

//=============================================================================
//Recherchez des personnes qui sont des développeurs MERN Stack à partir de l'objet users.
//MERN signifiant MongoDB, Express, React, Node.

let skills_1 = "";
let compteur = 0;
let names_1 = "";
for (let i in users) {
  skills_1 = users[i].skills;
  //console.log(skills_1);
  if (
    skills_1.includes("MongoDB") === true &&
    skills_1.includes("Express") === true &&
    skills_1.includes("React") === true &&
    skills_1.includes("Node")
  ) {
    compteur++;

    names_1 += i + " ";
    //console.log(names_1);
  }
  //console.log(skills_1);
}
console.log("Nom des développeurs MERN:", names_1);
//================================================================

//Définissez votre nom dans l'objet users sans modifier l'objet utilisateur d'origine

users.Moina = {
  email: "moina@yeye.com",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Redux",
    "MongoDB",
    "Express",
    "React",
    "Node",
  ],
  age: 22,
  isLoggedIn: false,
  points: 55,
};

console.log(users);

//==================================================

//Obtenez toutes les clés de l'objet users

console.log(Object.keys(users));

//Obtenez toutes les valeurs de l'objet users

console.log(Object.values(users));
