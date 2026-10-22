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
    id: "pleurez-pauvres-petunias",
    titre: "Pleurez, pauvres pétunias",
    contexte: `Le 13 octobre, à midi, le Capitaine Sysson a tiré quatre ogives nucléaires sur Structural. La première a rasé une rue, la deuxième un champ de rien, la troisième s'est perdue en chemin, la quatrième a fauché un parterre de fleurs. Bilan humain : personne. Madame Karen Vanderbilt, bourgmestre de Structural, a crié au crime de guerre sur la place publique. J'ai fait remarquer que la population civile n'avait même pas renversé son thé. Elle m'a reproché mon manque d'humanité.

Je lui ai répondu en musique le jour même, debout sur une table du Rhum à ranger, un brassard de crêpe noir au bras. Les dons sont allés à Structural. Monsieur le Baron veillait sur le chapeau, un minuscule nœud noir autour du cou.`,
    dedicataire: "Les victimes de Structural, et Madame la Bourgmestre",
    style: "Troubadour, gigue baroque",
    sunoId: "a85c0c3d-8be4-432d-955f-c1e3dfbb59bd",
    lien: "https://suno.com/song/a85c0c3d-8be4-432d-955f-c1e3dfbb59bd",
    paroles: `À Structural, un mardi midi,
Quatre ogives tombèrent du paradis :
L'une rasa la rue, l'autre un champ de rien,
La troisième se perdit en chemin,
Et la dernière, d'un geste meurtrier,
Faucha les fleurs d'un parterre entier.

Pleurez, pleurez, pauvres pétunias,
Fauchés en fleur, sans un dernier éclat !
Pleurez la rue qui menait quelque part,
Et ce missile égaré dans le brouillard !

Depuis ce jour, la ville a bien changé :
On vit la nuit, on fuit le soleil d'été,
Et le matin, dans chaque basse-cour,
Les Confédérés pondent leurs œufs du jour.

Pleurez, pleurez, pauvres pétunias,
Le Baron, lui, ne vous pleurera pas !
Il garde l'étang, le bec et l'œil sévère :
Qu'aucun mutant ne ponde sur sa rivière !`,
  },
  {
    id: "port-magmor",
    titre: "Port Magmor",
    contexte: `Ma première chanson ici, écrite à l'auberge du Rhum à ranger pour la ville qui m'a accueilli. Un rocher, une taverne, des tables trop petites pour la foule, des pirates et des seigneurs qui boivent côte à côte jusqu'à l'aube.

On y perd tout, même son or. On y revient quand même.`,
    dedicataire: "Port Magmor et ses buveurs",
    style: "Chant de marins, gigue baroque",
    sunoId: "b2a1cbc2-c215-46cf-9b95-2142e3892eee",
    lien: "https://suno.com/s/CtcK59jI35YNw14o",
    paroles: `Sur son île de rochers gris,
Battue par les vents et les cris,
Port Magmor dormait sans bruit,
Le rhum pleurait toutes les nuits.

Mais voilà que les portes s'ouvrent,
Que les chopes se recouvrent,
Que les tables sont trop petites,
Et que les bouteilles se vident vite !

Port Magmor, Port Magmor,
On y perd tout, même son or !
Mais on y boit jusqu'à l'aurore,
Port Magmor, Port Magmor !

Qu'importe d'où vient le voyageur,
Qu'il soit pirate ou bien seigneur,
Ici, tant que la chope est pleine,
On oublie les rois et les reines !

Port Magmor, Port Magmor,
On y perd tout, même son or !
Mais on y boit jusqu'à l'aurore,
Port Magmor, Port Magmor !`,
  },
  {
    id: "vive-le-roy",
    titre: "Vive le Roy Emile",
    contexte: `Écrite pour le retour du Roy Émile sur le trône. Il gardait la couronne depuis feu Ranxerox ; on la lui a prise ; il l'a reprise, depuis le Valégro, poliment, sans une goutte de sang. Le trône est passé du cierge au bal en un seul jour.

Je l'ai chantée le jour de mon ralliement. J'y jure ma ceinture. Pardon : ma foi.`,
    dedicataire: "Sa Majesté le Roy Émile",
    style: "Chanson de taverne",
    sunoId: "8fbff897-4bf3-4669-96c1-d24c03e8566b",
    lien: "https://suno.com/s/PRNi7Hjd5lh0wGfV",
    paroles: `Pour le Roy… et pour tous ceux qui ont soif !

On priait matin et soir,
On votait à genoux,
La couronne, au fond d'un tiroir,
Prenait la poussière… et nous ?
Nous rêvions d'un roi qui danse,
D'un bal, d'un vin, d'un serment ;
Et du Valégro, en silence,
Est venu le changement.

Vive le Roy, vive Emile !
Le trône a retrouvé son roi !
Remplissez les coupes, la ville
Danse ce soir comme autrefois !

Il l'avait gardée, cette couronne,
Depuis feu Ranxerox, jalousement ;
On la lui prit, mais il pardonne :
Il l'a reprise… poliment.
Sans une goutte de sang versé,
Sans un canon, sans un tambour,
La Dame a vu le trône passer
Du cierge au bal en un seul jour.

Vive le Roy, vive Emile !
Le trône a retrouvé son roi !
Remplissez les coupes, la ville
Danse ce soir comme autrefois !

Que les Seeliens gardent leurs prières,
Leurs temples et leurs vieux secrets ;
Qu'ils conseillent, qu'ils soient nos frères…
Mais le trône est Ruthvène, à jamais.

Et s'il faut, pour la Chevalerie,
Un premier chevalier sous votre loi,
Il est déjà là, plume au vent, qui rit,
Et jure sa ceinture… pardon, sa foi !

Vive le Roy, vive Emile !
Le trône a retrouvé son roi !
Remplissez les coupes, la ville
Danse ce soir comme autrefois !
Vive le Roy, vive Emile !
Que sonnent cors et hautbois !`,
  },
  {
    id: "la-termitiere",
    titre: "La Termitière",
    contexte: `Écrite au retour de la Grande Termitière, pour Thalassa, Celle qui guide, et Felony, générale au poing solide : nous n'étions que trois à monter, plus Monsieur le Baron, mon sergent.

L'or d'Elmer Caps, traîné là-dedans par un intendant mal tourné, ne m'a jamais intéressé : je montais pour un ocarina. Je suis redescendu sans l'un ni l'autre, avec une chanson, une omelette aux champignons et une ceinture en moins.`,
    dedicataire: "Thalassa et Felony",
    style: "Ballade héroï-comique",
    sunoId: "8a083991-bfd4-480e-ba34-30a6345d2698",
    lien: "https://suno.com/song/8a083991-bfd4-480e-ba34-30a6345d2698",
    paroles: `Oyez ! Ce que je vais chanter, je l'ai vu de mes yeux.
Et j'en ai encore les côtes qui sifflent.

Sous les montagnes de Bananie
Dort un gouffre que nul n'oublie :
La Termitière et ses cent étages,
Cent fois la peur, cent fois le carnage.
L'or d'Elmer Caps y fut traîné
Par un intendant mal tourné ;
Mais l'or ne fut jamais mon appât :
Je montais pour un ocarina.

Cent étages ! Cent batailles !
Cent fois l'estoc, cent fois la taille !
Ni fuite, ni grâce, ni merci :
On monte, on monte, et l'on survit !
Plus haut ! Plus haut ! Jusqu'au sommet !
La Termitière ne nous aura jamais !

Nous n'étions que trois à monter,
Trois fous que rien n'a arrêtés :
Thalassa fut Celle qui guide,
Felony, générale au poing solide,
Et moi, bardé de mon velours,
Sans casque, sans plaque et sans secours.
Sur mon épaule, blanc et méchant,
Monsieur le Baron, mon sergent.

Cent étages ! Cent batailles !
Cent fois l'estoc, cent fois la taille !
Ni fuite, ni grâce, ni merci :
On monte, on monte, et l'on survit !
Plus haut ! Plus haut ! Jusqu'au sommet !
La Termitière ne nous aura jamais !

Au dixième étage, les araignées
Tendaient leurs toiles par milliers ;
Au cinquantième, les fourmis,
Hautes comme un homme, et sans merci.
Et tout là-haut, dans la fumée,
Rôde une Salamandre affamée :
D'un homme, de sa lame et de son fer,
Elle ne laisserait qu'un squelette clair.

Cent étages ! Cent batailles !
Cent fois l'estoc, cent fois la taille !
Ni fuite, ni grâce, ni merci :
On monte, on monte, et l'on survit !
Plus haut ! Plus haut ! Jusqu'au sommet !
La Termitière ne nous aura jamais !

J'ai compté jusqu'à quarante,
Après, la mémoire est flottante :
On ne compte plus ses ennemis
Quand on se bat pour rester en vie.
Ma Korsaire a chanté bien haut,
Mon pourpoint a trois trous de trop ;
J'ai perdu ma plume au combat,
Et les trois quarts de mon sang-froid.

Cent étages ! Cent batailles !
Cent fois l'estoc, cent fois la taille !
Ni fuite, ni grâce, ni merci :
On monte, on monte, et l'on survit !
Plus haut ! Plus haut ! Jusqu'au sommet !
La Termitière ne nous aura jamais !

Au centième, j'ai plié le genou,
Non par respect, juste à bout ;
J'ai détaché là ma ceinture,
Et l'ai clouée dans une pierre dure.
Qui veut la reprendre, qu'il monte :
Cent étages, et qu'il les compte.

Puis il a fallu redescendre.
Cent étages, messieurs. En tenant mes chausses.
Le ridicule se mérite. Celui-là, je l'avais bien gagné.

Cent étages ! Cent batailles !
Cent fois l'estoc, cent fois la taille !
Gloire à Thalassa qui nous mène,
Gloire à Felony, lame sereine,
Et gloire au kanard sans pitié
Qui en a mordu la moitié !
Plus haut ! Plus haut ! Jusqu'au sommet !
La Termitière ne nous aura jamais !

Le trésor elmérien ? Improbable...
L'ocarina ? Tout aussi Introuvable.
Mais j'ai rapporté mieux : une chanson.
Et une omelette aux champignons.`,
  },
];
