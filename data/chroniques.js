// Chroniques de la carrière de Fulbert, dans l'ordre chronologique.
// L'ordre du tableau fait foi : la première entrée est la plus ancienne.
// Pour ajouter un épisode, ajoute un objet à la fin.
//
// Champs :
//   id      identifiant unique, sans espace
//   date    texte libre (« 3 frimaire », « Printemps »…). Vide : la page
//           affiche « Chapitre N » à la place.
//   titre   court
//   recit   un ou plusieurs paragraphes (séparés par une ligne vide)
//   image   facultatif, URL
//   legende facultatif, légende de l'image

export default [
  {
    id: "arrivee-port-magmor",
    date: "",
    titre: "Arrivée à Port Magmor",
    recit: `J'ai débarqué à Port Magmor avec une épée d'emprunt, une guitare sans nom et un kanard qui n'avait rien demandé. J'ai pris une chambre à l'auberge du Rhum à ranger, au-dessus de la salle commune, ce qui m'a permis de juger le public avant qu'il ne me juge.

Le premier soir, j'ai chanté. Le deuxième soir, on m'a demandé de chanter moins fort. Le troisième soir, Monsieur le Baron a mordu le tavernier, et nous avons été adoptés.`,
  },
  {
    id: "ruban-bicolore",
    date: "",
    titre: "Le Ruban Bicolore",
    recit: `On m'a remis le Ruban Bicolore. Je le porte avec la modestie qui me caractérise, c'est-à-dire bien en vue et en le mentionnant souvent.

Monsieur le Baron a tenté de le manger. Je considère qu'il s'agit d'un hommage.`,
  },
  {
    id: "castel-bretelle",
    date: "",
    titre: "La construction du Castel Bretelle",
    recit: `Un homme de qualité ne peut pas loger éternellement au-dessus d'une salle commune. J'ai fait bâtir le Castel Bretelle juste à côté de la fontaine, pour que les passants aient quelque chose à regarder en buvant.

Il y a une tour, parce qu'il faut une tour. Monsieur le Baron a choisi sa chambre le premier. C'était la mienne.`,
    image: "https://i.ibb.co/kg1hv3GW/Le-Castel-Bretelle-au-coucher-du-soleil.png",
    legende: "Le Castel Bretelle au coucher du soleil, vu depuis la fontaine.",
  },
  {
    id: "la-korsaire",
    date: "",
    titre: "La Korsaire, offerte par Dame Korail",
    recit: `Dame Korail m'a forgé une épée longue et me l'a offerte. Je l'ai appelée La Korsaire. Elle est droite, elle est juste, elle ne ment jamais : tout ce que je ne suis pas, et c'est pour cela que nous nous entendons.

J'ai promis à Dame Korail de ne jamais la déshonorer. Je n'ai pas précisé à quelle échéance.`,
    image: "https://i.ibb.co/x8FPDrtD/p-e-baroque-sur-velours-royal.png",
    legende: "La Korsaire, sur velours.",
  },
  {
    id: "intendant-crab-key",
    date: "",
    titre: "Intendant de Crab Key",
    recit: `On m'a nommé Intendant de Crab Key. J'ai étudié les finances de la province pendant une nuit entière, à la chandelle, avec Monsieur le Baron sur les genoux du registre.

J'en ai tiré des réformes fiscales audacieuses. Je ne dirai pas que tout le monde les a comprises. Je dirai que personne ne les a contestées en face.`,
    image: "https://i.ibb.co/7xZLYhWz/fulbert-ministre-250x400.jpg",
    legende: "Au pupitre, dans l'exercice de mes fonctions.",
  },
  {
    id: "royaume-pirate",
    date: "",
    titre: "Entrée dans le Royaume Pirate de Ruthvénie",
    recit: `J'ai rejoint le Royaume Pirate de Ruthvénie. Un royaume pirate, c'est un royaume où l'on admet franchement ce que les autres font en cachette. J'y ai trouvé ma place.

Monsieur le Baron, consulté, n'a pas mordu. J'ai pris cela pour un oui.`,
  },
  {
    id: "coup-d-etat-liarr",
    date: "",
    titre: "Le coup d'État d'Émile Liarr",
    recit: `Émile Liarr a pris le pouvoir. Il y a eu des heures où chacun regardait ses voisins pour savoir de quel côté se tenir. Moi, j'ai regardé Monsieur le Baron.

Je me suis rallié à la Couronne. J'ai écrit une chanson pour l'occasion, parce qu'un ralliement sans chanson n'est qu'un changement d'avis.`,
    image: "https://i.ibb.co/6cDjRdkL/Le-Retour-du-Roy-en-Fresque.png",
    legende: "Le Retour du Roy, fresque.",
  },
  {
    id: "ministre-information",
    date: "",
    titre: "Ministre de l'Information",
    recit: `Me voici Ministre de l'Information, à la tête de la Commanderie de la Musique et des Esgourdes. Le titre est long, je l'ai fait graver en entier.

Ma mission : que le Royaume entende ce qu'il doit entendre, en musique de préférence. Les esgourdes du peuple sont désormais sous ma responsabilité. Je les traite avec respect et à un volume raisonnable.`,
  },
  {
    id: "grande-termitiere",
    date: "",
    titre: "Les cent étages de la Grande Termitière",
    recit: `J'ai gravi les cent étages de la Grande Termitière, sous les montagnes de Bananie. Des araignées, des fourmis de la taille d'un âne, une salamandre qui crachait du feu, et pas un seul ascenseur.

Au sommet, j'ai laissé ma ceinture. Je ne dirai pas comment. Le fondateur de l'Ordre de la Ceinture a donc perdu la sienne avant d'en prendre une seule. J'y vois la preuve de mon intégrité : je ne demande à personne un sacrifice que je n'ai pas consenti moi-même.`,
  },
  {
    id: "ocarina-bananie",
    date: "",
    titre: "En quête d'un ocarina de Bananie",
    recit: `Je cherche un ocarina de Bananie. Un barde qui possède une guitare, une épée et un kanard peut paraître comblé. Il ne l'est pas.

La quête est en cours. Monsieur le Baron trouve que l'ocarina est un instrument de basse-cour. Je lui ai fait remarquer qu'il en venait. Il m'a mordu.`,
  },
];
