import { monterPage, site, esc, avisBaron, paragraphes, PAGES } from "../app.js";
import { filet, fleuron } from "../ornements.js";
import chroniques from "../../../data/chroniques.js";
import chansons from "../../../data/chansons.js";
import ceintures from "../../../data/ceintures.js";
import titres from "../../../data/titres.js";

const resume = (texte, max = 150) => {
  const premier = texte.trim().split(/\n\s*\n/)[0];
  return premier.length > max ? premier.slice(0, premier.lastIndexOf(" ", max)) + "…" : premier;
};

const total = ceintures.length;
const nouvelles = chroniques.slice(-3).reverse();
const derniere = chansons[chansons.length - 1];

export const rendre = () => `
<div class="conteneur">
  <section class="accueil-heros section">
    <div class="portrait-cadre apparait">
      <img src="${esc(site.images.portrait)}" width="520" height="650"
        alt="Portrait de Fulbert de la Bretelle : feutre noir de travers à plume rose, moustache en croc, manteau de velours bleu et jabot blanc.">
    </div>
    <div class="apparait">
      <p class="surtitre">${esc(site.adresse.demeure)} · ${esc(site.adresse.ville)}</p>
      <h1>${esc(site.nom)}</h1>
      <p class="devise">« ${esc(site.devise)} »</p>
      <div class="mesure">
        <p class="qualite">${esc(site.qualite)}.</p>
        <div class="qualite">${paragraphes(site.presentation)}</div>
      </div>
    </div>
  </section>

  <section class="compteur section apparait" aria-labelledby="compteur-libelle">
    <p class="surtitre">L'Ordre de la Ceinture</p>
    <strong class="compteur-chiffre">${total}</strong>
    <p class="compteur-libelle" id="compteur-libelle">Ceinture${total > 1 ? "s" : ""} confisquée${total > 1 ? "s" : ""}</p>
    <p class="compteur-note">${
      total === 0
        ? "Chiffre arrêté ce jour, vérifié par Monsieur le Baron."
        : "Chaque pièce est exposée au Musée de la Ceinture."
    }</p>
    <p><a class="lien-fleche" href="musee.html">Visiter le Musée</a></p>
  </section>

  <section class="titres section apparait" aria-labelledby="titre-titres">
    <div class="titre-section">${fleuron()}<h2 id="titre-titres">Charges et distinctions</h2></div>
    <ul class="liste-titres">
      ${titres
        .map(
          (t) => `<li class="${t.actuel ? "" : "revolu"}">
            <strong>${esc(t.titre)}</strong>
            ${t.precision ? `<span>${esc(t.precision)}</span>` : ""}
            ${t.actuel ? "" : `<em class="mention-revolue">Charge passée</em>`}
          </li>`
        )
        .join("")}
    </ul>
  </section>

  <div class="deux-colonnes section">
    <section class="apparait" aria-labelledby="titre-nouvelles">
      <div class="titre-section">${fleuron()}<h2 id="titre-nouvelles">Dernières nouvelles</h2></div>
      <ul class="liste-nouvelles">
        ${nouvelles
          .map(
            (c) => `<li>
              ${c.date ? `<p class="surtitre">${esc(c.date)}</p>` : ""}
              <h3><a href="chroniques.html#${esc(c.id)}">${esc(c.titre)}</a></h3>
              <p>${esc(resume(c.recit))}</p>
            </li>`
          )
          .join("")}
      </ul>
      <p><a class="lien-fleche" href="chroniques.html">Toutes les chroniques</a></p>
    </section>

    ${
      derniere
        ? `<section class="carte-chanson apparait" aria-labelledby="titre-chanson">
      <div class="titre-section">${fleuron()}<h2 id="titre-chanson">Dernière chanson</h2></div>
      <p class="surtitre">${esc(derniere.style || "Chanson")}</p>
      <h3>${esc(derniere.titre)}</h3>
      <p>${esc(resume(derniere.contexte, 220))}</p>
      <p><a class="bouton" href="repertoire.html#${esc(derniere.id)}">Écouter et lire les paroles</a></p>
    </section>`
        : ""
    }
  </div>

  ${filet()}

  <nav class="section apparait" aria-label="Sections du site">
    <div class="sommaire">
      ${PAGES.filter((p) => p.cle !== "accueil")
        .map(
          (p, i) => `<a href="${p.href}">
            <span class="numero">${["I", "II", "III", "IV", "V", "VI"][i]}</span>
            <h3>${esc(p.titre)}</h3>
            <p>${esc(site.sommaire[p.cle] || "")}</p>
          </a>`
        )
        .join("")}
    </div>
  </nav>

  ${avisBaron("accueil")}
</div>`;

export const page = { cle: "accueil", titre: null };

if (typeof document !== "undefined") monterPage({ ...page, contenu: rendre() });
