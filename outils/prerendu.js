// Régénère les pages HTML à partir de data/ et des modules de page.
//
//   node outils/prerendu.js
//
// Les pages sont ainsi lisibles sans JavaScript (robots de partage, moteurs
// de recherche, lecteurs simplifiés). Dans le navigateur, le JavaScript rend
// de nouveau le contenu depuis data/, donc le site reste à jour même si ce
// script n'a pas été relancé. Sur GitHub, une Action le relance à chaque
// modification de data/ (voir .github/workflows/prerendu.yml).

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { entete, pied, esc, titreDocument } from "../assets/js/app.js";
import site from "../data/site.js";

const racine = join(dirname(fileURLToPath(import.meta.url)), "..");

const FICHIERS = {
  accueil: "index.html",
  chroniques: "chroniques.html",
  repertoire: "repertoire.html",
  musee: "musee.html",
  ordre: "ordre.html",
  registre: "registre.html",
  galerie: "galerie.html",
  introuvable: "404.html",
};

function document({ module, fichier, page, contenu }) {
  const partage = site.partage[page.cle] || {};
  const titre = titreDocument(page.titre);
  const description = partage.description || site.partage.accueil.description;
  const image = partage.image || site.images.portrait;
  const url = site.url + (fichier === "index.html" ? "" : fichier);
  const ogUrl = module === "introuvable" ? "" : `\n<meta property="og:url" content="${esc(url)}">\n<link rel="canonical" href="${esc(url)}">`;

  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Fichier généré par outils/prerendu.js à partir de data/. Ne pas éditer à la main. -->
<title>${esc(titre)}</title>
<meta name="description" content="${esc(description)}">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="${esc(site.nom)}">
<meta property="og:title" content="${esc(titre)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${esc(image)}">${ogUrl}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(titre)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${esc(image)}">
<meta name="theme-color" content="#f4eedf" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0d1330" media="(prefers-color-scheme: dark)">
<script>try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}</script>
<link rel="icon" href="assets/favicon.ico" sizes="any">
<link rel="icon" href="assets/favicon-32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,700;1,400&family=Cinzel:wght@500;600;700&display=swap">
<link rel="stylesheet" href="assets/css/site.css">
<script type="module" src="assets/js/pages/${module}.js"></script>
</head>
<body>
${entete(page.cle)}
<main id="contenu" tabindex="-1">
${contenu}
</main>
${pied()}
</body>
</html>
`;
}

// Anciennes adresses : une page de redirection pour ne pas casser les liens.
const REDIRECTIONS = {
  "baron.html": "registre.html",
};

for (const [ancienne, nouvelle] of Object.entries(REDIRECTIONS)) {
  await writeFile(
    join(racine, ancienne),
    `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<!-- Fichier généré par outils/prerendu.js. Ne pas éditer à la main. -->
<title>Page déplacée · ${esc(site.nom)}</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${esc(site.url + nouvelle)}">
<meta http-equiv="refresh" content="0; url=${esc(nouvelle)}">
</head>
<body>
<p>Cette page a déménagé : <a href="${esc(nouvelle)}">${esc(nouvelle)}</a>.</p>
</body>
</html>
`
  );
  console.log(`${ancienne} → ${nouvelle}`);
}

for (const [module, fichier] of Object.entries(FICHIERS)) {
  const { page, rendre } = await import(`../assets/js/pages/${module}.js`);
  const html = document({ module, fichier, page, contenu: rendre() });
  await writeFile(join(racine, fichier), html);
  console.log(`${fichier} régénéré`);
}
