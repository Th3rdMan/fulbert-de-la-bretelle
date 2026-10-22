# Le site de Fulbert de la Bretelle

Site statique du personnage Fulbert de la Bretelle (Kraland Interactif).
HTML, CSS et JavaScript, sans framework ni étape de compilation.

## Modifier le contenu

Tout le contenu éditorial est dans `data/`. On n'édite jamais le HTML.

| Pour…                              | Éditer                  |
|------------------------------------|-------------------------|
| Ajouter une chronique              | `data/chroniques.js` (à la fin du tableau) |
| Ajouter une chanson                | `data/chansons.js` (en tête : elle devient « dernière chanson ») |
| Exposer une ceinture confisquée    | `data/ceintures.js` |
| Ajouter une illustration           | `data/galerie.js` (fichier image dans `assets/img/` ou URL) |
| Ajouter un membre de l'Ordre       | `data/membres-ordre.js` |
| Consigner une morsure du Baron     | `data/morsures.js` (à la fin du tableau) |
| Ajouter une charge ou distinction  | `data/titres.js` (`actuel: false` pour une charge passée) |
| Changer un avis du Baron           | `data/baron.js` |
| Devise, adresse, charte, code, emplacements libres du musée, sommaire | `data/site.js` |

Les textes des aperçus de partage (Open Graph, Twitter) sont dans
`data/site.js`, rubrique `partage`.

Chaque fichier commence par un commentaire qui décrit ses champs.
Le compteur de ceintures (accueil, Ordre) et les vitrines du musée se
calculent à partir de `data/ceintures.js`.

Les textes vont entre guillemets droits `"…"` ou, s'ils font plusieurs
paragraphes, entre accents graves `` `…` `` avec une ligne vide entre deux
paragraphes. Une apostrophe dans un texte entre `"…"` ne pose pas de problème.

## Pages HTML générées

Les fichiers `*.html` sont générés par `outils/prerendu.js` à partir de
`data/` : ils contiennent le texte, les images et les métadonnées de partage,
pour les robots et les navigateurs sans JavaScript. Ne les éditez pas à la
main.

Sur GitHub, l'Action « Prérendu des pages » les régénère automatiquement à
chaque modification de `data/`. En local : `node outils/prerendu.js`.
Même sans régénération, le site affiché dans un navigateur est toujours à
jour, car le JavaScript relit `data/` à chaque visite.

## Voir le site en local

Les modules JavaScript ne se chargent pas en double-cliquant sur le fichier.
Depuis le dossier du site :

```
python3 -m http.server 8000
```

puis ouvrir http://localhost:8000.

## Publier sur GitHub Pages

1. Pousser le contenu de ce dossier à la racine d'un dépôt GitHub.
2. Settings → Pages → Source : « Deploy from a branch », branche `main`, dossier `/ (root)`.
3. Le site est en ligne à `https://<compte>.github.io/<dépôt>/` après une minute ou deux.

Le fichier `.nojekyll` empêche GitHub de retraiter les fichiers.
