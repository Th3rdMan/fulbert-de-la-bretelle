// État de service de Fulbert, affiché sur l'accueil.
// Chaque entrée appartient à une rubrique (champ « categorie ») ; les
// rubriques s'affichent dans l'ordre et sous le titre définis dans
// data/site.js (etatDeService.rubriques). Une rubrique vide ne s'affiche
// pas. Dans une rubrique, l'ordre du tableau est l'ordre d'affichage.
//
// Rubriques :
//   "charges"       postes officiels, obtenus par nomination
//   "distinctions"  ce que d'autres lui ont décerné
//   "exploits"      ce qu'il a fait de ses mains
//   "appartenances" ce à quoi il appartient, ou ce qu'il a fondé lui-même
//
// Modèle :
// {
//   categorie: "charges",
//   titre: "Ministre de l'Information",
//   precision: "Commanderie de la Musique et des Esgourdes",  // facultatif
//   actuel: true,   // false : charge passée, affichée comme révolue
// }

export default [
  {
    categorie: "charges",
    titre: "Ministre de l'Information du Royaume de Ruthvénie",
    precision: "Commanderie de la Musique et des Esgourdes",
    actuel: true,
  },
  {
    categorie: "charges",
    titre: "Intendant de Crab Key",
    precision: "Charge quittée au bout de 6 jours",
    actuel: false,
  },
  {
    categorie: "distinctions",
    titre: "Ruban Bicolore",
    precision: "Université, examen repassé",
    actuel: true,
  },
  {
    categorie: "exploits",
    titre: "Grande Termitière, étage 100",
    actuel: true,
  },
  {
    categorie: "exploits",
    titre: "Trois déculottages, aucun homologué",
    actuel: true,
  },
  {
    categorie: "appartenances",
    titre: "Second du Royaume Pirate de Ruthvénie",
    actuel: true,
  },
  {
    categorie: "appartenances",
    titre: "Fondateur de l'Ordre de la Ceinture",
    precision: "Non reconnu officiellement, pour l'instant",
    actuel: true,
  },
  {
    categorie: "appartenances",
    titre: "Adepte de l'Esprit Boulet",
    actuel: true,
  },
];
