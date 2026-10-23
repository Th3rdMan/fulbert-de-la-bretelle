// Identité du personnage et réglages généraux.
// Tout ce qui est affiché « en dur » sur plusieurs pages vit ici.

export default {
  nom: "Fulbert de la Bretelle",
  devise: "Le ridicule se mérite.",
  qualite: "Noble ruthvène, escrimeur et barde",

  // Texte de présentation sous le nom, sur l'accueil (paragraphes séparés
  // par une ligne vide). Les charges et titres sont dans data/titres.js.
  presentation: `Je tiens ce site moi-même : on n'est jamais si bien raconté que par soi.

Monsieur le Baron, mon kanard, relit tout. Il n'approuve rien.`,

  // Sommaire de l'accueil : une ligne de description par page.
  sommaire: {
    chroniques: "Ma carrière, de l'auberge du Rhum à ranger jusqu'à aujourd'hui.",
    repertoire: "Mes chansons, leurs raisons d'être, leurs paroles.",
    musee: "La collection de l'Ordre. Visite libre.",
    ordre: "La charte, le code, et une place pour vous.",
    registre: "Les morsures de Monsieur le Baron, dûment consignées.",
    galerie: "Mon portrait, mes armes, ma demeure, mes œuvres.",
  },

  // En-tête du Registre des Morsures.
  registre: {
    surtitre: "Greffe du Castel Bretelle",
    titre: "Le Registre des Morsures",
    chapeau: "Où sont consignées, par ordre d'arrivée, les morsures infligées par Monsieur le Baron, avec leur motif et leur verdict. Le registre fait foi.",
  },
  adresse: {
    demeure: "Castel Bretelle",
    precision: "juste à côté de la fontaine",
    ville: "Port Magmor",
    province: "Crab Key",
    royaume: "Royaume de Ruthvénie",
  },
  suno: "https://suno.com/@fulbertdelabretelle",

  // Adresse publique du site, utilisée pour les aperçus de partage
  // (Open Graph, Twitter Card). Terminer par une barre oblique.
  url: "https://th3rdman.github.io/fulbert-de-la-bretelle/",

  // Aperçus de partage, page par page. « image » est facultatif : sans lui,
  // c'est le portrait (images.portrait) qui s'affiche.
  partage: {
    accueil: { description: "Le site de Fulbert de la Bretelle, noble ruthvène, escrimeur et barde. Le ridicule se mérite." },
    chroniques: { description: "Ma carrière, de l'auberge du Rhum à ranger aux cent étages de la Grande Termitière." },
    repertoire: { description: "Mes chansons : pour qui, pourquoi, les paroles et de quoi les écouter." },
    musee: { description: "Le Musée de la Ceinture. La collection commence bientôt." },
    ordre: { description: "L'Ordre de la Ceinture : charte, blason, code et appel à candidatures.", image: "https://i.ibb.co/XZZqKWYY/blason-culotte-512.png" },
    registre: { description: "Le Registre des Morsures de Monsieur le Baron : victimes, motifs, verdicts." },
    galerie: { description: "Mon portrait, mes armes, ma demeure, et mes œuvres." },
  },

  images: {
    portrait: "https://i.ibb.co/HTbyFLd8/fulbert-v2-large.jpg",
    portraitSerre: "https://i.ibb.co/0yDgfN9g/fulbert-v2-serre-150.jpg",
    pupitre: "https://i.ibb.co/7xZLYhWz/fulbert-ministre-250x400.jpg",
    baron: "https://i.ibb.co/jk1jXnQG/baron-avatar-150.png",
    blason: "https://i.ibb.co/XZZqKWYY/blason-culotte-512.png",
    // Blason de l'Ordre en petit, pour l'en-tête (1x, 2x et 3x).
    blasonMarque: ["assets/img/blason-40.png", "assets/img/blason-80.png", "assets/img/blason-120.png"],
    korsaire: "assets/img/korsaire-realiste.jpg",
    korsairePixel: "assets/img/korsaire-pixel.png",
    mordue: "assets/img/mordue-realiste.jpg",
    morduePixel: "assets/img/mordue-pixel.png",
    castel: "https://i.ibb.co/kg1hv3GW/Le-Castel-Bretelle-au-coucher-du-soleil.png",
    fresque: "https://i.ibb.co/6cDjRdkL/Le-Retour-du-Roy-en-Fresque.png",
  },

  objets: [
    { nom: "La Mordue", nature: "Guitare", note: "Elle doit son nom à Monsieur le Baron, qui l'a goûtée avant moi." },
    { nom: "La Korsaire", nature: "Épée longue", note: "Forgée par Dame Korail. Elle a plus de tenue que la plupart des gens que je croise." },
    { nom: "L'Habit de Gala", nature: "Tenue d'apparat", note: "Pour les occasions où le velours bleu ne suffit plus." },
  ],

  musee: {
    // Nombre de vitrines vides présentées après les pièces exposées. La
    // salle grandit d'elle-même : chaque ceinture (data/ceintures.js) ou
    // prise homologuée (data/prises.js) occupe une vitrine, et ces
    // emplacements libres restent toujours à la suite.
    emplacementsLibres: 3,

    surtitre: "Castel Bretelle · Aile des collections",
    titre: "Le Musée de la Ceinture",
    // Chapeau d'accueil. {n} est remplacé par le nombre de pièces exposées.
    chapeauVide: "Le Musée de la Ceinture conserve et présente les ceintures confisquées par l'Ordre de la Ceinture au terme d'un assaut loyal. Chaque vitrine attend sa pièce. La collection commence bientôt.",
    chapeau: "Le Musée de la Ceinture conserve et présente les ceintures confisquées par l'Ordre de la Ceinture au terme d'un assaut loyal. Pièces exposées à ce jour : {n}.",

    salle: {
      surtitre: "Salle I",
      titre: "Ceintures des puissants",
      chapeau: "Titres, charges et dignités du Royaume et d'ailleurs.",
      vitrineVide: "Emplacement réservé",
    },

    salleAnnexe: {
      surtitre: "Salle annexe · accès par l'escalier de service",
      titre: "Prises non homologuées",
      // {N} est remplacé par le nombre de prises non homologuées, en toutes
      // lettres (« Six », « Sept »…).
      chapeau: "{N} chausses sont tombées sous la lame de l'Ordre ; aucune ne satisfait l'article premier du Code, qui veut qu'on ne vise que ceux qui portent un titre ou une charge. Le Conservateur refuse l'exposition. Le Chevalier conteste. Le dossier est en instance.",
      tampon: "Non homologuée",
      libelleMotif: "Motif du refus",
      mention: "Les pièces de cette salle ne sont pas comptées dans la collection.",
    },

    avertissement: "Les pièces sont présentées dans l'ordre de leur acquisition. Il est interdit de toucher les vitrines. Monsieur le Baron assure la surveillance des salles.",
  },

  ordre: {
    nom: "L'Ordre de la Ceinture",
    blason: "https://i.ibb.co/XZZqKWYY/blason-culotte-512.png",
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
