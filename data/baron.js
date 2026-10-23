// Monsieur le Baron : son portrait, sa présentation (en tête du Registre des
// Morsures) et ses avis.
//
// avis : une entrée par page. La clé doit correspondre au nom de la page
// (accueil, chroniques, repertoire, musee, ordre, registre, galerie). Le
// texte apparaît en encart au pied de la page concernée.

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
      texte: "Je les ai toutes entendues depuis son épaule, à deux pouces de sa bouche. Je n'ai rien demandé.",
    },
    musee: {
      section: "Le Musée de la Ceinture",
      texte: "Six fois il a fait tomber des chausses, et pas une ne compte. Moi, je mords, et ça compte toujours.",
    },
    ordre: {
      section: "L'Ordre de la Ceinture",
      texte: "Je ne suis pas membre. J'ai des principes.",
    },
    registre: {
      section: "Le Registre des Morsures",
      texte: "Incomplet. Je ne déclare pas tout.",
    },
    galerie: {
      section: "La Galerie",
      texte: "On m'a proposé d'y figurer. J'ai refusé. On ne met pas un kanard au mur.",
    },
  },
};
