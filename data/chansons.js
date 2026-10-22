// Le Répertoire. Une entrée par chanson ; l'ordre du tableau est l'ordre
// d'affichage, la première est mise en avant sur l'accueil comme « dernière
// chanson ». Ajoute donc les nouvelles en tête.
//
// Champs :
//   id          identifiant unique, sans espace
//   titre
//   contexte    pourquoi et pour qui elle a été écrite (paragraphes séparés
//               par une ligne vide)
//   dedicataire facultatif
//   style       facultatif, genre musical
//   sunoId      identifiant Suno (le long code de l'adresse /song/…).
//               Sert au lecteur intégré.
//   lien        adresse de la chanson sur Suno
//   paroles     texte complet. Strophes séparées par une ligne vide.
//               Une ligne qui commence par « Refrain » ou entre crochets
//               ([Refrain], [Couplet 2]…) est affichée comme intertitre.

export default [
  {
    id: "la-termitiere",
    titre: "Le Chant de la Termitière",
    contexte: `Écrite au retour de la Grande Termitière, pour mes deux compagnons de cordée et pour tous ceux qui croient qu'on redescend d'une ascension avec plus que ce qu'on avait en montant.

Cent étages, des araignées, des fourmis géantes, une salamandre, un trésor légendaire, un ocarina. Au bout du compte : une omelette aux champignons et une ceinture en moins.`,
    dedicataire: "mes compagnons de la Termitière",
    style: "Ballade héroï-comique",
    sunoId: "8a083991-bfd4-480e-ba34-30a6345d2698",
    lien: "https://suno.com/song/8a083991-bfd4-480e-ba34-30a6345d2698",
    paroles: ``,
  },
  {
    id: "vive-le-roy",
    titre: "Vive le Roy",
    contexte: `Écrite pour le retour du Roy Émile sur le trône. Un peuple qui votait et priait pendant que la couronne prenait la poussière, un roi qui aime la danse et les festins, une couronne prise puis rendue sans qu'une goutte de sang ne coule.

Je l'ai chantée le jour de mon ralliement. Elle se danse, elle se boit, elle se crie.`,
    dedicataire: "Sa Majesté le Roy Émile",
    style: "Chanson de taverne",
    sunoId: "8fbff897-4bf3-4669-96c1-d24c03e8566b",
    lien: "https://suno.com/s/PRNi7Hjd5lh0wGfV",
    paroles: ``,
  },
  {
    id: "port-magmor",
    titre: "Chanson de Port Magmor",
    contexte: `Ma première chanson ici, écrite à l'auberge du Rhum à ranger pour la ville qui m'a accueilli. Un rocher, une taverne, des tables trop petites pour la foule, des pirates et des seigneurs qui boivent côte à côte jusqu'à l'aube.

On y perd tout, même son or. On y revient quand même.`,
    dedicataire: "Port Magmor et ses buveurs",
    style: "Chant de marins, gigue baroque",
    sunoId: "b2a1cbc2-c215-46cf-9b95-2142e3892eee",
    lien: "https://suno.com/s/CtcK59jI35YNw14o",
    paroles: ``,
  },
];
