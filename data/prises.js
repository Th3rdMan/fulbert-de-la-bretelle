// Prises de l'Ordre de la Ceinture qui ne satisfont pas (encore) le Code.
// Elles sont présentées dans la Salle annexe du Musée et ne comptent pas
// dans la collection.
//
// Le jour où une prise devient recevable, passe « homologuee » à true :
// elle quitte la Salle annexe, entre dans la Salle I et s'ajoute au
// compteur des pièces exposées. Rien d'autre à toucher.
//
// Modèle :
// {
//   id: "gorille-geant",            // unique, sans espace
//   numero: "Pièce refusée I",       // numérotation romaine, affichée sur le cartel
//   nom: "Gorille Géant",            // le porteur
//   lieu: "Grande Termitière",
//   date: "21 octobre",              // texte libre
//   motif: "…",                      // raison du refus, affichée sous le cartel
//   image: "assets/img/….jpg",       // visuel de la pièce, carré (adresse
//                                    // relative au site ou https://…)
//   homologuee: false,               // false : Salle annexe ; true : Salle I
// }

export default [
  {
    id: "gorille-geant",
    numero: "Pièce refusée I",
    nom: "Gorille Géant",
    lieu: "Grande Termitière",
    date: "21 octobre",
    motif: "Ne portait pas de ceinture. Le Chevalier en a taillé une dans sa peau. Le Conservateur refuse de considérer cela comme une confiscation.",
    image: "assets/img/prise-gorille-geant.jpg",
    homologuee: false,
  },
  {
    id: "voleur-de-betail",
    numero: "Pièce refusée II",
    nom: "Voleur de Bétail",
    lieu: "Valégro",
    date: "24 octobre",
    motif: "Le vol de bétail n'est pas une fonction officielle.",
    image: "assets/img/prise-voleur-de-betail.jpg",
    homologuee: false,
  },
  {
    id: "paysanne-effarouchee",
    numero: "Pièce refusée III",
    nom: "Paysanne Effarouchée",
    lieu: "Valégro",
    date: "24 octobre",
    motif: "Article premier bafoué. Le Chevalier présente ses excuses, et a remboursé la lanière.",
    image: "assets/img/prise-paysanne-effarouchee.jpg",
    homologuee: false,
  },
];
