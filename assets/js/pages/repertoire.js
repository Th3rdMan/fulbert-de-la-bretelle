import { monterPage, site, esc, paragraphes, avisBaron, romain } from "../app.js";
import { filet, icones } from "../ornements.js";
import chansons from "../../../data/chansons.js";
import chroniques from "../../../data/chroniques.js";

const INTERTITRE = /^(\[.*\]|refrain\b.*)$/i;

function rendreParoles(texte) {
  return texte
    .trim()
    .split(/\n\s*\n/)
    .map((strophe) => {
      const lignes = strophe.split("\n");
      let titre = "";
      if (INTERTITRE.test(lignes[0].trim())) {
        titre = lignes.shift().trim().replace(/^\[|\]$/g, "");
      }
      return `${titre ? `<p class="intertitre">${esc(titre)}</p>` : ""}<p>${lignes.map((l) => `<span class="vers">${esc(l)}</span>`).join("")}</p>`;
    })
    .join("");
}

export const rendre = () => `
<div class="conteneur">
  <header class="entete-page">
    <p class="surtitre">Livre deuxième</p>
    <h1>Le Répertoire</h1>
    <p class="chapeau">Chaque chanson a une raison, un destinataire et au moins un auditeur qui n'avait rien demandé.</p>
    ${filet()}
  </header>

  <div>
  ${chansons
    .map((c, i) => ({ ...c, rang: i + 1 }))
    .reverse()
    .map(
      (c) => `<article class="chanson apparait" id="${esc(c.id)}" aria-labelledby="titre-${esc(c.id)}">
      <div class="chanson-numero" aria-hidden="true">${romain(c.rang)}</div>
      <div>
        <h2 id="titre-${esc(c.id)}">${esc(c.titre)}</h2>
        <p class="meta">${[c.style, c.dedicataire && `Pour ${c.dedicataire}`].filter(Boolean).map((m) => `<span>${esc(m)}</span>`).join("")}</p>
        <div class="contexte">${paragraphes(c.contexte)}</div>
        ${chroniques
          .filter((ch) => ch.chanson === c.id)
          .map((ch) => `<p class="lien-croise"><a class="lien-fleche" href="chroniques.html#${esc(ch.id)}">La chronique : ${esc(ch.titre)}</a></p>`)
          .join("")}

        ${
          c.sunoId
            ? `<div class="lecteur">
          <iframe src="https://suno.com/embed/${encodeURIComponent(c.sunoId)}" title="Lecteur Suno : ${esc(c.titre)}"
            loading="lazy" allow="autoplay; encrypted-media"></iframe>
        </div>`
            : c.lien
              ? `<p class="lecteur"><a class="lien-fleche" href="${esc(c.lien)}" target="_blank" rel="noopener">Écouter sur Suno</a></p>`
              : ""
        }

        <details class="paroles">
          <summary>${icones.chevron}Paroles complètes</summary>
          ${
            c.paroles && c.paroles.trim()
              ? `<div class="paroles-texte">${rendreParoles(c.paroles)}</div>`
              : `<p class="paroles-vide">Les paroles ne sont pas encore recopiées ici. Elles figurent sur
                 <a href="${esc(c.lien || site.suno)}" target="_blank" rel="noopener">la page Suno de la chanson</a>.</p>`
          }
        </details>
      </div>
    </article>`
    )
    .join("")}
  </div>

  <p class="musee-avertissement">Toutes mes chansons sont sur <a href="${esc(site.suno)}" target="_blank" rel="noopener">mon profil Suno</a>.</p>

  ${avisBaron("repertoire")}
</div>`;

export const page = { cle: "repertoire", titre: "Le Répertoire" };

if (typeof document !== "undefined") monterPage({ ...page, contenu: rendre() });
