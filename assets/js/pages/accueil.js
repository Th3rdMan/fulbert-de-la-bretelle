import { monterPage, site, esc, avisBaron, PAGES } from "../app.js";
import { filet, fleuron } from "../ornements.js";
import chroniques from "../../../data/chroniques.js";
import chansons from "../../../data/chansons.js";
import ceintures from "../../../data/ceintures.js";

const DESCRIPTIONS = {
  chroniques: "Ma carrière, de l'auberge du Rhum à ranger jusqu'à aujourd'hui.",
  repertoire: "Mes chansons, leurs raisons d'être, leurs paroles.",
  musee: "La collection de l'Ordre. Visite libre.",
  ordre: "La charte, le code, et une place pour vous.",
  baron: "Monsieur le Baron. Il a son mot à dire.",
  galerie: "Portraits, armes, demeure et kanard.",
};

const resume = (texte, max = 150) => {
  const premier = texte.trim().split(/\n\s*\n/)[0];
  return premier.length > max ? premier.slice(0, premier.lastIndexOf(" ", max)) + "…" : premier;
};

const total = ceintures.length;
const nouvelles = chroniques
  .map((c, i) => ({ ...c, chapitre: i + 1 }))
  .slice(-3)
  .reverse();
const derniere = chansons[0];

const contenu = `
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
        <p class="qualite">${esc(site.qualite)}. Intendant de ${esc(site.adresse.province)}, Ministre de l'Information,
        fondateur de l'Ordre de la Ceinture. Je tiens ce site moi-même : on n'est jamais si bien raconté que par soi.</p>
        <p class="qualite">Monsieur le Baron, mon kanard, relit tout. Il n'approuve rien.</p>
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

  <div class="deux-colonnes section">
    <section class="apparait" aria-labelledby="titre-nouvelles">
      <div class="titre-section">${fleuron()}<h2 id="titre-nouvelles">Dernières nouvelles</h2></div>
      <ul class="liste-nouvelles">
        ${nouvelles
          .map(
            (c) => `<li>
              <p class="surtitre">${esc(c.date || `Chapitre ${c.chapitre}`)}</p>
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
            <p>${esc(DESCRIPTIONS[p.cle])}</p>
          </a>`
        )
        .join("")}
    </div>
  </nav>

  ${avisBaron("accueil")}
</div>`;

monterPage({ cle: "accueil", contenu });
