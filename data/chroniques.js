// Chroniques de la carrière de Fulbert, dans l'ordre chronologique.
// L'ordre du tableau fait foi : la première entrée est la plus ancienne.
// Pour ajouter un épisode, ajoute un objet à la fin.
//
// Ce n'est pas un résumé des chansons ni des posts du forum : Fulbert écrit
// son autobiographie en direct, au présent ou au passé proche, depuis
// l'endroit où il se trouve. Deux ou trois paragraphes courts au plus, au
// moins un détail que lui seul pouvait raconter, jamais de citation de ses
// propres chansons ou discours (le champ « chanson » fait le lien). Il se
// contredit d'une entrée à l'autre et ne le corrige jamais. On ne garde que
// ce qui a changé sa vie.
//
// Champs :
//   id      identifiant unique, sans espace
//   date    date de l'épisode, texte libre (« 3 frimaire », « 13/10 »…),
//           affichée en tête de l'entrée. Laisser "" tant qu'elle n'est pas
//           connue : rien ne s'affiche à la place.
//   titre   court
//   recit   un ou plusieurs paragraphes (séparés par une ligne vide)
//   enCours facultatif, true pour un épisode qui n'est pas terminé
//           (affiché avec la mention « En cours »).
//   chanson facultatif, identifiant (id) d'une chanson de data/chansons.js :
//           crée un lien vers elle, et la chanson renvoie ici en retour.
//   image   facultatif, URL
//   legende facultatif, légende de l'image

export default [
  {
    id: "arrivee-port-magmor",
    date: "",
    titre: "Arrivée à Port Magmor",
    recit: `J'écris sur le comptoir du Rhum à ranger, parce que la table qu'on m'a donnée est trop petite pour un homme et sa plume. Le tavernier me regarde de travers. Il a ses raisons : Monsieur le Baron vient de lui mordre la main, parce qu'il a servi la bière avant le vin.

Je croyais qu'on allait nous jeter dehors. On nous a donné une chambre. Je ne comprends rien à cette ville, et elle me plaît déjà.

Le hareng fumé de la maison a un goût de goudron. J'en ai repris deux fois. Le Baron, pas une : il a des principes.`,
  },
  {
    id: "ruban-bicolore",
    date: "",
    titre: "Le Ruban Bicolore",
    recit: `Je sors de l'Université avec le Ruban Bicolore épinglé sur le cœur, un peu à gauche, là où il se voit le mieux. L'examinateur m'a demandé si c'était bien ma deuxième tentative. J'ai répondu que la première était un échauffement. Il a écrit quelque chose dans la marge.

L'épingle me gratte à travers le pourpoint depuis midi. Je ne l'enlèverai pas. Monsieur le Baron a essayé de la manger pendant la remise ; l'assistance a cru qu'il saluait.`,
    image: "assets/img/ruban-bicolore.jpg",
    legende: "Le Ruban Bicolore, dans son écrin, avec le parchemin de l'examen.",
  },
  {
    id: "castel-bretelle",
    date: "",
    titre: "Le Castel Bretelle",
    recit: `Ce soir, je dors chez moi. Le Castel Bretelle tient debout, juste à côté de la fontaine, avec une tour, parce qu'un homme sans tour n'est qu'un locataire. Les maçons sont partis avec mes trois derniers fromages ; je suppose que c'était compris dans le prix.

Monsieur le Baron a fait le tour des pièces et il a choisi la mienne. Je me suis replié dans la tour. Elle est froide, elle a des courants d'air, et j'y entends la fontaine toute la nuit. Je n'ai jamais été aussi heureux.`,
    image: "https://i.ibb.co/kg1hv3GW/Le-Castel-Bretelle-au-coucher-du-soleil.png",
    legende: "Le Castel Bretelle au coucher du soleil, vu depuis la fontaine.",
  },
  {
    id: "la-korsaire",
    date: "",
    titre: "La Korsaire, et le pavillon de Dame Korail",
    recit: `Dame Korail m'a mis La Korsaire dans les mains ce matin, encore tiède de la forge. Je l'ai tenue longtemps sans rien dire, et elle a cru qu'elle ne me plaisait pas. Je cherchais seulement un mot à sa hauteur. Pour une fois, je n'en avais pas.

Dans la foulée, je suis entré au Royaume Pirate de Ruthvénie. Je ne sais plus si c'est moi qui ai demandé ou elle qui a proposé : j'ai dit oui avant la fin de la phrase, comme on attrape une corde.

Je lui dois l'épée et le pavillon, et j'ignore encore comment on rembourse ce genre de dette. Monsieur le Baron s'est endormi sur le fourreau, ce qui, chez lui, vaut un serment.`,
    image: "assets/img/korsaire-realiste.jpg",
    legende: "La Korsaire, sur velours.",
  },
  {
    id: "coup-d-etat-liarr",
    date: "",
    chanson: "vive-le-roy",
    titre: "Le coup d'État d'Émile Liarr",
    recit: `Ce matin, le Royaume avait deux rois, ou aucun, selon la personne qu'on interrogeait. À midi, Émile Liarr avait repris la couronne depuis le Valégro, sans un coup de feu. Je n'ai rien vu : j'étais au fond d'une taverne, à attendre qu'on vienne me dire qui avait gagné.

Autour de moi, chacun regardait son voisin. Moi, je regardais mon assiette de pieds de cochon, et j'ai compris qu'un homme ne reste pas neutre devant des pieds de cochon. Je me suis rallié par écrit, devant tout le Royaume. C'est fait. Je ne jure qu'une fois.

Monsieur le Baron a marché dans l'encrier et il a signé à côté de moi.`,
    image: "https://i.ibb.co/6cDjRdkL/Le-Retour-du-Roy-en-Fresque.png",
    legende: "Le Retour du Roy, fresque.",
  },
  {
    id: "ministre-information",
    date: "",
    titre: "Ministre de l'Information",
    recit: `Me voici Ministre de l'Information, à la tête de la Commanderie de la Musique et des Esgourdes. On m'a donné un bureau, une tribune et un tabouret qui boite. J'ai gardé le tabouret : un homme d'État doit rester en mouvement.

Je n'ai jamais eu besoin de repasser un examen de ma vie, et cela se voit dans ma façon de tenir une plume. Mon premier communiqué tient en une page, le deuxième en onze. Je commence à comprendre le métier.

Monsieur le Baron a pris la tribune. Je parle depuis le tabouret.`,
    image: "https://i.ibb.co/7xZLYhWz/fulbert-ministre-250x400.jpg",
    legende: "Au pupitre du Ministère, dans l'exercice de mes fonctions.",
  },
  {
    id: "grande-termitiere",
    date: "",
    chanson: "la-termitiere",
    titre: "Les cent étages de la Grande Termitière",
    recit: `J'écris dans l'escalier de la descente, vers le soixantième étage, une main sur la plume et l'autre sur mes chausses. Ma ceinture est restée là-haut, clouée dans la pierre. Je l'ai déposée, je ne l'ai pas perdue, et je refuse qu'on en discute.

En montant, des araignées sont reparties sans leurs chausses ; j'ignorais qu'elles en portaient. Puis un Gorille Géant, qui n'en portait pas du tout : je lui ai taillé une ceinture dans sa propre peau, pour la lui retirer dans les règles. Je crois que je viens d'inventer une technique. Je lui trouverai un nom quand j'aurai les deux mains libres.

J'étais venu dans la région pour trouver un ocarina. Je n'en ai pas vu l'ombre d'un, ni en bas, ni en haut. Thalassa recompte nos fioles, Felony recompte ses phalanges, et Monsieur le Baron a mangé un œuf de termite sans m'en proposer.`,
  },
  {
    id: "chute-du-roy",
    date: "",
    titre: "La chute du Roy",
    recit: `J'écris couché, le bras droit en écharpe, de la main gauche, d'où l'écriture. Des voleurs de bétail m'ont attaqué ; je les ai occis, puis déculottés, comme il se doit. Le troupeau n'y a pas vu un sauvetage : un cheval m'a renversé, une vache m'a piétiné, et deux moutons ont achevé le travail. Je n'ai jamais eu peur des bêtes.

Pendant ce temps, Wenceslas a pris le trône à Émile, et l'on m'a demandé de jurer fidélité au nouveau maître. J'ai juré il y a quatre jours, par écrit, devant tout le Royaume : je ne jure pas deux fois dans la même semaine. J'ai remis ma charge. J'attends une décision, et personne ne m'en donne, ce qui est presque plus vexant qu'une destitution.

Monsieur le Baron monte la garde sur mon oreiller et siffle dès qu'on approche. Le médecin m'ausculte depuis le couloir. Ma soupe arrive froide, glissée sous la porte.`,
  },
  {
    id: "la-destitution",
    date: "",
    titre: "« L'autre ne savait pas conter »",
    recit: `Il se disait les mains liées, pieds et poings, et répétait qu'il ne pouvait rien tant qu'on ne lui aurait pas prêté allégeance. Je la lui ai donnée. À la Couronne, pas à l'homme, et je l'ai dit assez fort pour que nul ne s'y trompe. Treize heures vingt-six. Je voulais voir ce qu'il ferait de ses mains, une fois libres.

Dix-neuf heures quarante-neuf. Il m'a destitué. C'était son premier geste. Le Royaume entier a vu ce qu'il valait, et il l'a vu grâce à moi : je trouve que ma charge était donnée.

Ce qu'il a écrit dans son décret, en revanche, je ne l'ai pas digéré. Que l'un ne savait pas compter, et l'autre pas conter. On peut me prendre un ministère, il était prêté, je le savais. Pas ça. J'ai dû corriger ma signature moi-même, ligne par ligne, et retirer le mot Ministre de ma propre main. Personne ne vous prévient que c'est cette minute-là qui est pénible.`,
  },
  {
    id: "ordre-de-la-ceinture",
    date: "",
    titre: "L'Ordre de la Ceinture, enfin fondé",
    recit: `Je n'ai pas dormi. Rentré au Castel Bretelle — qui n'est plus une cabane mais une maisonnette, la brique a servi — j'ai étalé mes papiers sur la table et j'ai fondé l'Ordre à zéro heure quarante-neuf. J'ai rédigé les statuts au dos de l'annonce de ma destitution. Il restait de la place.

Trois articles. On ne vise que ceux qui portent un titre ou une charge ; jamais deux fois le même adversaire dans la même journée ; on ne tue pas son public. Un musée, trois vitrines, et pas une seule pièce dedans. La salle annexe, elle, est bien fournie : elle conserve les prises refusées, c'est-à-dire presque toutes les miennes.

L'Ordre existe. Il a un blason, un Code, un registre et un kanard. Il n'est reconnu de personne. Je précise cela chaque fois qu'on me le demande, et j'ajoute toujours les deux mots qui vont avec : pour l'instant.`,
  },
  {
    id: "crieur-public-royal",
    date: "",
    titre: "Crieur Public Royal",
    recit: `Wenceslas est tombé dans la nuit. Je n'ai rien fait d'héroïque : j'ai seulement raconté ce que j'entendais, et il se trouve que cela suffisait. Émile Liarr a repris sa couronne, s'est fixé zéro part du budget, et a nommé son prédécesseur Arbitre des Élégances — le seul titre que celui-ci s'attribuait sans l'avoir. Il faut savoir reconnaître l'ouvrage bien fait.

Il m'a écrit à une heure cinq pour me reprendre comme barde. J'ai démissionné de l'intendance de Crab Key à une heure huit. Trois minutes. J'avais juré à ma Reine pirate, deux jours plus tôt, que je ne repartirais plus pour une charge de passage ; je ne lui ai pas fait de nouvelle promesse, les anciennes ayant assez servi. Je lui ai laissé Monsieur le Baron, qui a refusé de quitter l'étang. C'est ce que j'avais de meilleur.

Quatorze heures douze : Ministre de l'Information, et Crieur Public Royal. On m'avait expliqué devant tout le Royaume que je ne savais pas conter. J'attendais surtout qu'on me le redemande.`,
  },
];
