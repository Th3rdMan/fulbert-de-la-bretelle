import { monterPage, esc, paragraphes, avisBaron, romain } from "../app.js";
import { filet } from "../ornements.js";
import chroniques from "../../../data/chroniques.js";

const entrees = chroniques
  .map((c, i) => {
    const derniere = i === chroniques.length - 1;
    const date = c.date || `Chapitre ${romain(i + 1)}`;
    return `<li class="frise-entree apparait" id="${esc(c.id)}">
      <span class="frise-noeud" aria-hidden="true"></span>
      <p class="surtitre">${esc(date)}</p>
      <h2>${esc(c.titre)}${derniere ? ' <span class="en-cours">En cours</span>' : ""}</h2>
      <div class="recit">${paragraphes(c.recit)}</div>
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

const contenu = `
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

monterPage({ cle: "chroniques", titre: "Chroniques", contenu });
