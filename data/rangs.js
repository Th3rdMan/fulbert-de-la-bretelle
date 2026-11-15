// Rangs de l'Ordre de la Ceinture, affichés sur la page de l'Ordre, du plus
// bas au plus haut. Le tableau « Les Membres » (data/membres-ordre.js)
// renvoie à ces rangs par leur numéro.
//
// Modèle :
// {
//   numero: 1,                    // 1 à 6, du plus bas au plus haut
//   nom: "Recalé",
//   feminin: "Recalée",           // forme féminine du nom (identique si invariable)
//   condition: "Aucune prise.",   // ce qu'il faut pour l'atteindre
//   pouvoir: "…",                 // facultatif : ce que le rang donne ou signifie
// }
//
// « horsRangs » liste, à part, les distinctions et charges qui ne sont pas
// des rangs. Modèle : { nom, nature, texte }.

export const horsRangs = [
  {
    nom: "Vitrine d'Honneur",
    nature: "Distinction, non un rang",
    texte: "Pour une ceinture prise sur une tête couronnée : roi, khan, président. Elle est vide, et elle le restera tant qu'il faudra.",
  },
  {
    nom: "Gardien des Vitrines",
    nature: "Charge perpétuelle, détenue par Monsieur le Baron",
    texte: "Ne lit pas les statuts, ne vote pas, mord.",
  },
];

export default [
  {
    numero: 1,
    nom: "Recalé",
    feminin: "Recalée",
    condition: "Aucune prise.",
    pouvoir: "On n'entre dans l'Ordre que par la porte de service : le fondateur a été renvoyé de son école d'escrime le jour de l'examen, et l'Ordre ne recrute que ceux qu'on a refusés ailleurs.",
  },
  {
    numero: 2,
    nom: "Tient-ses-Chausses",
    feminin: "Tient-ses-Chausses",
    condition: "S'est battu et a gardé sa propre ceinture.",
    pouvoir: "Avant de prendre, on apprend à ne pas donner.",
  },
  {
    numero: 3,
    nom: "Chevalier de la Ceinture",
    feminin: "Chevalière de la Ceinture",
    condition: "Une prise homologuée sur un porteur de titre ou de charge.",
    pouvoir: "Nom gravé sous la vitrine.",
  },
  {
    numero: 4,
    nom: "Commandeur du Déculottage",
    feminin: "Commandeuse du Déculottage",
    condition: "Trois prises homologuées.",
    pouvoir: "Reçoit les serments, instruit les Recalés, et représente l'Ordre partout où on ne l'a pas invité.",
  },
  {
    numero: 5,
    nom: "Juge d'Armes",
    feminin: "Juge d'Armes",
    condition: "Seul rang qui ne s'obtienne pas à la lame.",
    pouvoir: "Vérifie que l'adversaire portait bien un titre ou une charge au moment de la prise, et que le Code a été tenu. Sa parole fait foi contre celle du vainqueur, y compris contre celle du Grand Ceinturier.",
  },
  {
    numero: 6,
    nom: "Grand Ceinturier",
    feminin: "Grande Ceinturière",
    condition: "Fondateur.",
    pouvoir: "Répond seul de l'Ordre devant quiconque exige qu'il soit reconnu, et ne peut en aucun cas se nommer Juge d'Armes.",
  },
];
