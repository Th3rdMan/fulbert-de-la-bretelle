// Galerie d'illustrations. Une entrée par image, dans l'ordre d'affichage.
// alt : description de l'image pour les lecteurs d'écran (obligatoire).
// categorie : facultatif. Les images sans catégorie s'affichent en premier ;
// chaque catégorie forme ensuite une section titrée, dans l'ordre où elle
// apparaît pour la première fois dans ce tableau.

export default [
  {
    id: "portrait",
    src: "https://i.ibb.co/HTbyFLd8/fulbert-v2-large.jpg",
    titre: "Portrait officiel",
    legende: "Feutre de travers, plume rose, moustache en croc. La ceinture n'est pas à moi.",
    alt: "Portrait de Fulbert de la Bretelle en manteau de velours bleu, feutre noir à plume rose.",
  },
  {
    id: "blason",
    src: "https://i.ibb.co/XZZqKWYY/blason-culotte-512.png",
    titre: "Blason de l'Ordre de la Ceinture",
    legende: "Les armes de l'Ordre, en attente de reconnaissance officielle.",
    alt: "Blason de l'Ordre de la Ceinture.",
  },
  {
    id: "castel",
    src: "https://i.ibb.co/kg1hv3GW/Le-Castel-Bretelle-au-coucher-du-soleil.png",
    titre: "Le Castel Bretelle",
    legende: "Au coucher du soleil, juste à côté de la fontaine.",
    alt: "Le Castel Bretelle, demeure à tour, éclairé par un coucher de soleil.",
  },
  {
    id: "mordue",
    src: "assets/img/mordue-realiste.jpg",
    titre: "La Mordue",
    legende: "Ma guitare. Le nom n'est pas une métaphore.",
    alt: "Guitare baroque à rosace ouvragée, rubans et plume rose, posée sur du velours devant une bannière à fleur de lys.",
  },
  {
    id: "korsaire",
    src: "assets/img/korsaire-realiste.jpg",
    titre: "La Korsaire",
    legende: "Épée longue forgée par Dame Korail, présentée sur velours.",
    alt: "Épée longue à garde dorée ouvragée et poignée rouge, posée sur un velours cramoisi près d'un chandelier.",
  },
  {
    id: "ruban-bicolore",
    src: "assets/img/ruban-bicolore.jpg",
    titre: "Le Ruban Bicolore",
    legende: "Obtenu à l'Université, au terme d'un examen que j'ai repassé. Je le porte avec la modestie qui me caractérise, c'est-à-dire bien en vue.",
    alt: "Barrette de décoration à ruban vert et rouge dans un cadre de laiton, posée sur un velours cramoisi.",
  },
  {
    id: "fresque",
    src: "https://i.ibb.co/6cDjRdkL/Le-Retour-du-Roy-en-Fresque.png",
    titre: "Le Retour du Roy",
    categorie: "Mes œuvres",
    legende: "Fresque commémorative, de ma main.",
    alt: "Fresque représentant le Roy entouré de sa cour.",
  },
];
