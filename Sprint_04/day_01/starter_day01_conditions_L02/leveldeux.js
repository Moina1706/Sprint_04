// 1.Écrivez un code qui peut donner des notes aux élèves en fonction de leurs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let note_score = prompt("Donnez une note entre 1 et 100");
var string_vide = "";
if (note_score != string_vide) {
  note_score = note_score * 1; // J'ai changé le type pour en faire un nombre

  switch (true) {
    case note_score >= 80 && note_score <= 100:
      console.log("Note de A");
      break;
    case note_score >= 70 && note_score <= 89:
      console.log("Note de B");
      break;
    case note_score >= 60 && note_score <= 69:
      console.log("Note de C");
      break;
    case note_score >= 50 && note_score <= 59:
      console.log("Note de D");
      break;
    case note_score >= 0 && note_score <= 49:
      console.log("Note de D");
      break;
    default:
      console.log("Ce numero ne fait pas parti du range");
  }
}
