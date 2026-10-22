import { monterPage, esc, paragraphes, avisBaron } from "../app.js";
import { filet } from "../ornements.js";
import chroniques from "../../../data/chroniques.js";
import chansons from "../../../data/chansons.js";

const entrees = chroniques
  .map((c) => {
    const chanson = c.chanson && chansons.find((ch) => ch.id === c.chanson);
    return `<li class="frise-entree apparait${c.enCours ? " frise-en-cours" : ""}" id="${esc(c.id)}">
      <span class="frise-noeud" aria-hidden="true"></span>
      ${c.date ? `<p class="surtitre"><time>${esc(c.date)}</time></p>` : ""}
      <h2>${esc(c.titre)}${c.enCours ? ' <span class="en-cours">En cours</span>' : ""}</h2>
      <div class="recit">${paragraphes(c.recit)}</div>
      ${
        chanson
          ? `<p class="lien-croise"><a class="lien-fleche" href="repertoire.html#${esc(chanson.id)}">La chanson : ${esc(chanson.titre)}</a></p>`
          : ""
      }
      ${
        c.image
          ? `<figure>
              <img src="${esc(c.image)}" alt="${esc(c.legende || c.titre)}" loading="lazy">
              ${c.legende ? `<figcaption>${esc(c.legende)}</figcaption>` : ""}
            </figure>`
          : ""
      }
    </li>`;
  })
  .join("");

export const rendre = () => `
<div class="conteneur">
  <header class="entete-page">
    <p class="surtitre">Livre premier</p>
    <h1>Chroniques</h1>
    <p class="chapeau">Ce que j'ai fait, dans l'ordre où je l'ai fait, raconté par le seul témoin dont je me porte garant.</p>
    ${filet()}
  </header>
  <ol class="frise">${entrees}</ol>
  ${avisBaron("chroniques")}
</div>`;

export const page = { cle: "chroniques", titre: "Chroniques" };

if (typeof document !== "undefined") monterPage({ ...page, contenu: rendre() });
