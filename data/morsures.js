// Registre des Morsures de Monsieur le Baron.
// Chaque morsure est un acte du registre, dans l'ordre d'arrivée : ajoute
// les nouvelles à la fin du tableau. Le total en tête de page se calcule
// tout seul.
//
// Modèle :
// {
//   date: "15 octobre 2026",          // texte libre ; vide : « date non consignée »
//   victime: "Le tavernier du Rhum à ranger",
//   motif: "Avait servi la bière avant le vin",   // sans guillemets, ils sont ajoutés
//   verdict: "Mordu. Adoption s'ensuivit.",
//   lieu: "Auberge du Rhum à ranger, Port Magmor", // facultatif
// }

export default [
  {
    date: "15 octobre 2026",
    victime: "Le tavernier du Rhum à ranger",
    motif: "Avait servi la bière avant le vin",
    verdict: "Mordu. Adoption s'ensuivit.",
    lieu: "Auberge du Rhum à ranger, Port Magmor",
  },
  {
    date: "22 octobre 2026",
    victime: "Fulbert de la Bretelle",
    motif: "Avait approché un vase des lèvres en croyant à un ocarina",
    verdict: "Mordu au poignet.",
  },
];
