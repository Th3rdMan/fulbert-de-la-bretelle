import { monterPage, site, baron, esc, avisBaron, avecLettrine } from "../app.js";
import { filet } from "../ornements.js";
import morsures from "../../../data/morsures.js";

const r = site.registre;
const total = morsures.length;

const ORDINAUX = ["premier", "deuxième", "troisième", "quatrième", "cinquième", "sixième", "septième", "huitième", "neuvième", "dixième"];
const intitule = (i) => (i < ORDINAUX.length ? `Acte ${ORDINAUX[i]}` : `Acte n° ${i + 1}`);

const acte = (m, i) => `<li class="acte apparait">
    <header class="acte-entete">
      <p class="surtitre">${intitule(i)}</p>
      <p class="acte-date">${m.date ? `<time>${esc(m.date)}</time>` : "Date non consignée"}${m.lieu ? ` · ${esc(m.lieu)}` : ""}</p>
    </header>
    <dl class="acte-corps">
      <div><dt>A été mordu</dt><dd class="acte-victime">${esc(m.victime)}</dd></div>
      <div><dt>Motif</dt><dd>« ${esc(m.motif)} »</dd></div>
      <div><dt>Verdict</dt><dd>${esc(m.verdict)}</dd></div>
    </dl>
  </li>`;

export const rendre = () => `
<div class="conteneur">
  <header class="baron-heros apparait">
    <img src="${esc(baron.image)}" width="150" height="150"
      alt="Monsieur le Baron, kanard blanc à la couronne de travers, au regard méprisant.">
    <p class="surtitre">${esc(r.surtitre)}</p>
    <h1>${esc(r.titre)}</h1>
    <p class="chapeau">${esc(r.chapeau)}</p>
    ${filet()}
    <div class="presentation">${avecLettrine(baron.presentation)}</div>
  </header>

  <section class="compteur-petit section apparait" aria-labelledby="total-morsures">
    <strong class="compteur-chiffre">${total}</strong>
    <p class="compteur-libelle" id="total-morsures">Morsure${total > 1 ? "s" : ""} consignée${total > 1 ? "s" : ""}</p>
  </section>

  <ol class="actes">${morsures.map(acte).join("")}</ol>

  ${avisBaron("registre")}
</div>`;

export const page = { cle: "registre", titre: r.titre };

if (typeof document !== "undefined") monterPage({ ...page, contenu: rendre() });
