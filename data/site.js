// Identité du personnage et réglages généraux.
// Tout ce qui est affiché « en dur » sur plusieurs pages vit ici.

export default {
  nom: "Fulbert de la Bretelle",
  devise: "Le ridicule se mérite.",
  qualite: "Noble ruthvène, escrimeur et barde",
  adresse: {
    demeure: "Castel Bretelle",
    precision: "juste à côté de la fontaine",
    ville: "Port Magmor",
    province: "Crab Key",
    royaume: "Royaume de Ruthvénie",
  },
  suno: "https://suno.com/@fulbertdelabretelle",

  images: {
    portrait: "https://i.ibb.co/HTbyFLd8/fulbert-v2-large.jpg",
    portraitSerre: "https://i.ibb.co/0yDgfN9g/fulbert-v2-serre-150.jpg",
    pupitre: "https://i.ibb.co/7xZLYhWz/fulbert-ministre-250x400.jpg",
    baron: "https://i.ibb.co/jk1jXnQG/baron-avatar-150.png",
    blason: "https://i.ibb.co/XZZqKWYY/blason-culotte-512.png",
    korsaire: "https://i.ibb.co/x8FPDrtD/p-e-baroque-sur-velours-royal.png",
    mordue: "https://i.ibb.co/8D4Gg5RG/la-mordue-diag-64.png",
    habit: "https://i.ibb.co/pSnSQCt/Costume-de-mousquetaire-pixel-art.png",
    castel: "https://i.ibb.co/kg1hv3GW/Le-Castel-Bretelle-au-coucher-du-soleil.png",
    fresque: "https://i.ibb.co/6cDjRdkL/Le-Retour-du-Roy-en-Fresque.png",
  },

  objets: [
    { nom: "La Mordue", nature: "Guitare", note: "Elle doit son nom à Monsieur le Baron, qui l'a goûtée avant moi." },
    { nom: "La Korsaire", nature: "Épée longue", note: "Forgée par Dame Korail. Elle a plus de tenue que la plupart des gens que je croise." },
    { nom: "L'Habit de Gala", nature: "Tenue d'apparat", note: "Pour les occasions où le velours bleu ne suffit plus." },
  ],

  musee: {
    // Nombre minimal de vitrines exposées. S'il y a plus de ceintures que
    // de vitrines, le musée s'agrandit tout seul.
    vitrinesReservees: 12,
  },

  ordre: {
    nom: "L'Ordre de la Ceinture",
    statut: "Non reconnu officiellement (pour l'instant)",
    charte: `L'Ordre de la Ceinture est un ordre de chevalerie fondé par Fulbert de la Bretelle, à Port Magmor, en Crab Key.

Il a pour objet la confiscation des ceintures des puissants, par l'escrime et dans les règles. Une ceinture confisquée n'est ni vendue ni portée en public par un autre que son vainqueur : elle est exposée au Musée de la Ceinture, avec le nom de son ancien propriétaire, afin que nul n'oublie qui l'a perdue.

L'Ordre ne prétend à aucune terre, aucune rente, aucun privilège. Il prétend à la reconnaissance, et il l'attend.`,
    code: [
      { titre: "Article premier", texte: "On ne vise que ceux qui portent un titre ou une charge." },
      { titre: "Article deuxième", texte: "Jamais deux fois le même adversaire dans la journée." },
      { titre: "Article troisième", texte: "On ne tue pas son public." },
    ],
    // Moyen de candidater, affiché tel quel. Remplace par un lien si besoin.
    candidature: "Par missive adressée à Fulbert de la Bretelle, Castel Bretelle, Port Magmor. Monsieur le Baron lit le courrier en premier.",
    lienCandidature: "",
  },
};
