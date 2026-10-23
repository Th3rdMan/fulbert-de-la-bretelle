import { monterPage, site, esc, avisBaron, numero } from "../app.js";
import { filet, socle, ceinture, chausses } from "../ornements.js";
import ceintures from "../../../data/ceintures.js";
import prises from "../../../data/prises.js";

const m = site.musee;

// Les prises homologuées rejoignent la collection, après les ceintures.
const pieces = [
  ...ceintures,
  ...prises
    .filter((p) => p.homologuee)
    .map((p) => ({ id: p.id, porteur: p.nom, titre: p.numero, lieu: p.lieu, date: p.date })),
];
const refusees = prises.filter((p) => !p.homologuee);
const total = pieces.length;

const NOMBRES = ["Zéro", "Une", "Deux", "Trois", "Quatre", "Cinq", "Six", "Sept", "Huit", "Neuf", "Dix", "Onze", "Douze"];
const enLettres = (n) => NOMBRES[n] || String(n);

// Vitrine vide, non numérotée : la salle en garde toujours quelques-unes
// après la dernière pièce exposée.
const vitrineLibre = () => `<li class="vitrine vitrine-libre apparait">
      <div class="vitrine-caisse" role="img" aria-label="Vitrine vide">
        <div class="vitrine-interieur">
          <div class="vitrine-socle">${socle()}</div>
          <p class="vitrine-mention">${esc(m.salle.vitrineVide)}</p>
        </div>
      </div>
      <div class="vitrine-pied" aria-hidden="true"></div>
    </li>`;

const vitrine = (piece, i) => {
  const n = numero(i + 1);
  const visuel = piece.image
    ? `<img src="${esc(piece.image)}" alt="Ceinture de ${esc(piece.porteur)}" loading="lazy">`
    : ceinture();
  return `<li class="vitrine apparait" id="${esc(piece.id)}">
    <div class="vitrine-caisse">
      <div class="vitrine-interieur">
        <div class="vitrine-piece">${visuel}</div>
        <div class="vitrine-socle">${socle()}</div>
      </div>
    </div>
    <div class="vitrine-pied" aria-hidden="true"></div>
    <div class="cartel">
      <span class="cartel-numero">N° ${n}${piece.date ? ` · ${esc(piece.date)}` : ""}</span>
      <p class="cartel-titre">Ceinture de ${esc(piece.porteur)}</p>
      <p class="cartel-detail">${esc(piece.titre)}${piece.lieu ? `. Confisquée à ${esc(piece.lieu)}` : ""}.</p>
      ${piece.description ? `<p class="cartel-detail">${esc(piece.description)}</p>` : ""}
    </div>
  </li>`;
};

const vitrineRefusee = (p) => `<li class="vitrine vitrine-refusee apparait" id="${esc(p.id)}">
    <div class="vitrine-caisse">
      <div class="vitrine-interieur">
        <div class="vitrine-piece">${chausses()}</div>
        <div class="vitrine-socle">${socle()}</div>
        <p class="tampon" aria-hidden="true">${esc(m.salleAnnexe.tampon)}</p>
      </div>
    </div>
    <div class="vitrine-pied" aria-hidden="true"></div>
    <div class="cartel cartel-refus">
      <div class="cartel-identite">
        <span class="cartel-numero">${esc(p.numero)}</span>
        <p class="cartel-titre">${esc(p.nom)}</p>
        <p class="cartel-detail">${esc(p.lieu)} · ${esc(p.date)}</p>
        <span class="sr-only">${esc(m.salleAnnexe.tampon)}.</span>
      </div>
      <p class="cartel-motif"><span>${esc(m.salleAnnexe.libelleMotif)} :</span> ${esc(p.motif)}</p>
    </div>
  </li>`;

const vitrines = pieces.map(vitrine).join("") + Array.from({ length: m.emplacementsLibres }, vitrineLibre).join("");

export const rendre = () => `
<div class="conteneur">
  <header class="musee-accueil apparait">
    <p class="surtitre">${esc(m.surtitre)}</p>
    <h1>${esc(m.titre)}</h1>
    <p class="chapeau">${esc(total === 0 ? m.chapeauVide : m.chapeau.replace("{n}", total))}</p>
    <dl class="musee-registre">
      <div><dt>Pièces exposées</dt><dd>${total}</dd></div>
      <div><dt>Prises non homologuées</dt><dd>${refusees.length}</dd></div>
      <div><dt>Entrée</dt><dd>Libre</dd></div>
    </dl>
  </header>

  <section class="salle" aria-labelledby="titre-salle">
    <div class="salle-titre">
      <p class="surtitre">${esc(m.salle.surtitre)}</p>
      <h2 id="titre-salle">${esc(m.salle.titre)}</h2>
      <p>${esc(m.salle.chapeau)}</p>
    </div>
    <ul class="vitrines">${vitrines}</ul>
  </section>

  ${
    refusees.length
      ? `${filet()}
  <section class="salle salle-annexe" aria-labelledby="titre-annexe">
    <div class="salle-titre">
      <p class="surtitre">${esc(m.salleAnnexe.surtitre)}</p>
      <h2 id="titre-annexe">${esc(m.salleAnnexe.titre)}</h2>
      <p>${esc(m.salleAnnexe.chapeau.replace("{N}", enLettres(refusees.length)))}</p>
    </div>
    <ul class="vitrines vitrines-annexe">${refusees.map(vitrineRefusee).join("")}</ul>
    <p class="salle-mention">${esc(m.salleAnnexe.mention)}</p>
  </section>`
      : ""
  }

  ${filet()}

  <p class="musee-avertissement">${esc(m.avertissement)}</p>

  ${avisBaron("musee")}
</div>`;

export const page = { cle: "musee", titre: m.titre };

if (typeof document !== "undefined") monterPage({ ...page, contenu: rendre() });
