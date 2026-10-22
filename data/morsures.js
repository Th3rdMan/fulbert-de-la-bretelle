// Registre des Morsures de Monsieur le Baron.
// Chaque morsure est un acte du registre, dans l'ordre d'arrivée : ajoute
// les nouvelles à la fin du tableau. Le total en tête de page se calcule
// tout seul.
//
// Modèle :
// {
//   date: "14 brumaire",              // texte libre ; vide : « date non consignée »
//   victime: "Le tavernier du Rhum à ranger",
//   motif: "Avait servi la bière avant le vin",   // sans guillemets, ils sont ajoutés
//   verdict: "Mordu. Adoption s'ensuivit.",
//   lieu: "Auberge du Rhum à ranger, Port Magmor", // facultatif
// }

export default [
  {
    date: "",
    victime: "Le tavernier du Rhum à ranger",
    motif: "Avait servi la bière avant le vin",
    verdict: "Mordu. Adoption s'ensuivit.",
    lieu: "Auberge du Rhum à ranger, Port Magmor",
  },
  {
    date: "",
    victime: "Fulbert de la Bretelle",
    motif: "Avait approché un vase des lèvres en croyant à un ocarina",
    verdict: "Mordu au poignet.",
  },
  {
    date: "",
    victime: "Le parchemin de la Gazette",
    motif: "Dépassait de la poche",
    verdict: "Mordu. Illisible depuis.",
  },
];
