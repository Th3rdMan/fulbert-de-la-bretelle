import { monterPage, site, esc, avisBaron, avecLettrine } from "../app.js";
import { filet, fleuron } from "../ornements.js";
import membres from "../../../data/membres-ordre.js";
import ceintures from "../../../data/ceintures.js";

const o = site.ordre;
const total = ceintures.length;

export const rendre = () => `
<div class="conteneur">
  <header class="entete-page">
    <p class="surtitre">Ordre de chevalerie</p>
    <h1>${esc(o.nom)}</h1>
    ${filet()}
  </header>

  <section class="ordre-heros section">
    <img class="blason apparait" src="${esc(o.blason)}" width="512" height="512"
      alt="Blason de l'Ordre de la Ceinture.">
    <div class="apparait">
      <span class="statut">${esc(o.statut)}</span>
      <h2>La Charte</h2>
      <div class="mesure">${avecLettrine(o.charte)}</div>
    </div>
  </section>

  <section class="section apparait" aria-labelledby="titre-code">
    <div class="titre-section">${fleuron()}<h2 id="titre-code">Le Code</h2></div>
    <ol class="code">
      ${o.code.map((a) => `<li><h3>${esc(a.titre)}</h3><p>${esc(a.texte)}</p></li>`).join("")}
    </ol>
  </section>

  <div class="deux-colonnes section">
    <section class="apparait" aria-labelledby="titre-membres">
      <div class="titre-section">${fleuron()}<h2 id="titre-membres">Les Membres</h2></div>
      <div class="tableau-defile">
        <table class="membres">
          <caption class="sr-only">Membres de l'Ordre de la Ceinture</caption>
          <thead><tr><th scope="col">Nom</th><th scope="col">Rang</th><th scope="col">Depuis</th></tr></thead>
          <tbody>
            ${membres
              .map((m) => `<tr><td>${esc(m.nom)}</td><td>${esc(m.rang)}</td><td>${esc(m.depuis || "")}</td></tr>`)
              .join("")}
          </tbody>
        </table>
      </div>
      <p class="legende">Effectif : ${membres.length} membre${membres.length > 1 ? "s" : ""}.</p>
    </section>

    <section class="compteur-petit apparait" aria-labelledby="titre-bilan">
      <div class="titre-section">${fleuron()}<h2 id="titre-bilan">Le Bilan</h2></div>
      <strong class="compteur-chiffre">${total}</strong>
      <p class="compteur-libelle">Ceinture${total > 1 ? "s" : ""} confisquée${total > 1 ? "s" : ""}</p>
      <p><a class="lien-fleche" href="musee.html">Voir la collection</a></p>
    </section>
  </div>

  <section class="appel section apparait" aria-labelledby="titre-appel">
    <p class="surtitre">Appel à candidatures</p>
    <h2 id="titre-appel">L'Ordre recrute</h2>
    <p>L'Ordre de la Ceinture accueille toute personne d'épée et d'honneur qui souscrit au Code. Sont requis :</p>
    <ul>
      <li>savoir tenir une lame, et la retenir ;</li>
      <li>tenir les puissants pour des adversaires, et le public pour un ami ;</li>
      <li>porter sa propre ceinture, au moins pour commencer.</li>
    </ul>
    <p>${esc(o.candidature)}</p>
    ${o.lienCandidature ? `<p><a class="bouton" href="${esc(o.lienCandidature)}">Candidater</a></p>` : ""}
  </section>

  ${avisBaron("ordre")}
</div>`;

export const page = { cle: "ordre", titre: "L'Ordre de la Ceinture" };

if (typeof document !== "undefined") monterPage({ ...page, contenu: rendre() });
