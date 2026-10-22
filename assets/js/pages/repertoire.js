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
    .map(
      (c, i) => `<article class="chanson apparait" id="${esc(c.id)}" aria-labelledby="titre-${esc(c.id)}">
      <div class="chanson-numero" aria-hidden="true">${romain(i + 1)}</div>
      <div>
        <h2 id="titre-${esc(c.id)}">${esc(c.titre)}</h2>
        <p class="meta">${[c.style, c.dedicataire && `Pour ${c.dedicataire}`].filter(Boolean).map((m) => `<span>${esc(m)}</span>`).join("")}</p>
        <div class="contexte">${paragraphes(c.contexte)}</div>
        ${chroniques
          .filter((ch) => ch.chanson === c.id)
          .map((ch) => `<p class="lien-croise"><a class="lien-fleche" href="chroniques.html#${esc(ch.id)}">La chronique : ${esc(ch.titre)}</a></p>`)
          .join("")}

        <div class="lecteur" data-suno="${esc(c.sunoId || "")}" data-titre="${esc(c.titre)}">
          <div class="actions">
            ${c.sunoId ? `<button class="bouton" type="button" data-charger>${icones.lecture}Écouter ici</button>` : ""}
            ${c.lien ? `<a class="lien-fleche" href="${esc(c.lien)}" target="_blank" rel="noopener">Écouter sur Suno</a>` : ""}
          </div>
        </div>

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

export function apres() {

  // Le lecteur Suno n'est chargé qu'à la demande : la page reste légère et
  // rien n'est envoyé à Suno tant que le visiteur n'a pas cliqué.
  document.querySelectorAll(".lecteur [data-charger]").forEach((bouton) => {
    bouton.addEventListener("click", () => {
      const bloc = bouton.closest(".lecteur");
      const iframe = document.createElement("iframe");
      iframe.src = `https://suno.com/embed/${encodeURIComponent(bloc.dataset.suno)}`;
      iframe.title = `Lecteur Suno : ${bloc.dataset.titre}`;
      iframe.allow = "autoplay; encrypted-media";
      iframe.loading = "lazy";
      bloc.prepend(iframe);
      bouton.remove();
      iframe.focus();
    });
  });
}

if (typeof document !== "undefined") {
  monterPage({ ...page, contenu: rendre() });
  apres();
}
