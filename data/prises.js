// Prises de l'Ordre de la Ceinture qui ne satisfont pas (encore) le Code.
// Elles sont présentées dans la Salle annexe du Musée, sous un tampon
// « Non homologuée », et ne comptent pas dans la collection.
//
// Le jour où une prise devient recevable, passe « homologuee » à true :
// elle quitte la Salle annexe, entre dans la Salle I et s'ajoute au
// compteur des pièces exposées. Rien d'autre à toucher.
//
// Modèle :
// {
//   id: "araignee-eboueuse-1",      // unique, sans espace
//   numero: "Pièce refusée I",       // affiché sur le cartel
//   nom: "Araignée-Éboueuse",        // la victime
//   lieu: "Grande Termitière",
//   date: "21/10, 15:10",            // texte libre
//   motif: "ne porte ni titre, ni charge, ni ceinture.",  // motif du refus
//   homologuee: false,               // false : Salle annexe ; true : Salle I
// }

export default [
  {
    id: "araignee-eboueuse-1",
    numero: "Pièce refusée I",
    nom: "Araignée-Éboueuse",
    lieu: "Grande Termitière",
    date: "21/10, 15:10",
    motif: "ne porte ni titre, ni charge, ni ceinture.",
    homologuee: false,
  },
  {
    id: "araignee-eboueuse-2",
    numero: "Pièce refusée II",
    nom: "Araignée-Éboueuse",
    lieu: "Grande Termitière",
    date: "21/10, 15:11",
    motif: "récidive du Chevalier sur une bête sans dignité.",
    homologuee: false,
  },
  {
    id: "araignee-eboueuse-3",
    numero: "Pièce refusée III",
    nom: "Araignée-Éboueuse",
    lieu: "Grande Termitière",
    date: "21/10, 15:21",
    motif: "la troisième. Le Conservateur commence à s'inquiéter.",
    homologuee: false,
  },
  {
    id: "gorille-geant",
    numero: "Pièce refusée IV",
    nom: "Gorille Géant",
    lieu: "Grande Termitière",
    date: "21/10, 15:29",
    motif: "imposant, mais sans charge publique connue.",
    homologuee: false,
  },
  {
    id: "voleur-de-betail",
    numero: "Pièce refusée V",
    nom: "Voleur de Bétail",
    lieu: "Valégro",
    date: "24/10, 00:21",
    motif: "le vol de bétail n'est pas une fonction officielle.",
    homologuee: false,
  },
  {
    id: "paysanne-effarouchee",
    numero: "Pièce refusée VI",
    nom: "Paysanne Effarouchée",
    lieu: "Valégro",
    date: "24/10, 00:21",
    motif: "article premier bafoué. Le Chevalier présente ses excuses.",
    homologuee: false,
  },
];
