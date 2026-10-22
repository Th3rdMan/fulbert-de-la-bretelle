// Les avis de Monsieur le Baron. Une entrée par section du site.
// La clé doit correspondre au nom de la page (accueil, chroniques,
// repertoire, musee, ordre, baron, galerie). Le texte apparaît en
// encart sur la page concernée et en liste sur la page du Baron.

export default {
  image: "https://i.ibb.co/jk1jXnQG/baron-avatar-150.png",

  presentation: `Monsieur le Baron est un kanard blanc. Il porte une couronne de travers et un regard qui dit tout ce que la politesse m'interdit d'écrire. Je le vouvoie. Je le consulte avant chaque décision. Il me mord, ce qui vaut généralement approbation, parfois refus, et je n'ai jamais su faire la différence.

On dit en ville que c'est lui qui décide. C'est faux. Je décide, puis il me mord, puis nous faisons ce qu'il voulait.`,

  avis: {
    accueil: {
      section: "L'Accueil",
      texte: "Un grand zéro au milieu de la page. Au moins, c'est honnête.",
    },
    chroniques: {
      section: "Les Chroniques",
      texte: "Il a oublié de dire qui portait la lanterne dans la Termitière.",
    },
    repertoire: {
      section: "Le Répertoire",
      texte: "Coin.",
    },
    musee: {
      section: "Le Musée de la Ceinture",
      texte: "Le seul musée de Ruthvénie où l'on ne risque pas de casser quelque chose.",
    },
    ordre: {
      section: "L'Ordre de la Ceinture",
      texte: "Je ne suis pas membre. J'ai des principes.",
    },
    baron: {
      section: "Cette page",
      texte: "Trop courte.",
    },
    galerie: {
      section: "La Galerie",
      texte: "On m'a retiré de la galerie. Je n'en attendais pas moins.",
    },
  },
};
