import { monterPage, site, baron, esc, avisBaron, avecLettrine, PAGES } from "../app.js";
import { filet } from "../ornements.js";

const lignes = PAGES.filter((p) => baron.avis[p.cle] && p.cle !== "baron")
  .map(
    (p) => `<li>
      <a href="${p.href}">${esc(baron.avis[p.cle].section)}</a>
      <q>${esc(baron.avis[p.cle].texte)}</q>
    </li>`
  )
  .join("");

export const rendre = () => `
<div class="conteneur">
  <header class="baron-heros apparait">
    <img src="${esc(baron.image)}" width="150" height="150"
      alt="Monsieur le Baron, kanard blanc à la couronne de travers, au regard méprisant.">
    <p class="surtitre">Kanard · Conseiller · Mordeur</p>
    <h1>Monsieur le Baron</h1>
    ${filet()}
    <div class="presentation">${avecLettrine(baron.presentation)}</div>
  </header>

  <section class="section apparait" aria-labelledby="titre-avis">
    <div class="entete-page" style="margin-bottom:1.5rem">
      <h2 id="titre-avis">Ses avis</h2>
      <p class="chapeau">Recueillis par mes soins, transcrits fidèlement, contestés en privé.</p>
    </div>
    <ul class="avis-liste">${lignes}</ul>
  </section>

  ${avisBaron("baron")}
</div>`;

export const page = { cle: "baron", titre: "Monsieur le Baron" };

if (typeof document !== "undefined") monterPage({ ...page, contenu: rendre() });
