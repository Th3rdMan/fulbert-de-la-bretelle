import { monterPage, site, esc, avisBaron, numero } from "../app.js";
import { filet, socle, ceinture, chausses, icones } from "../ornements.js";
import ceintures from "../../../data/ceintures.js";
import prises from "../../../data/prises.js";

const m = site.musee;

// Les prises homologuées rejoignent la collection, après les ceintures.
const pieces = [
  ...ceintures,
  ...prises
    .filter((p) => p.homologuee)
    .map((p) => ({ id: p.id, porteur: p.nom, titre: p.numero, lieu: p.lieu, date: p.date, image: p.image })),
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

// Les visuels de la Salle annexe sont déjà des vitrines avec leur cartel
// gravé : on les montre tels quels, agrandissables au clic.
const vitrineRefusee = (p, i) => `<li class="prise-refusee apparait" id="${esc(p.id)}">
    ${
      p.image
        ? `<button type="button" class="prise-visuel" data-index="${i}" aria-label="Agrandir : ${esc(p.nom)}">
      <img src="${esc(p.image)}" alt="Ceinture de ${esc(p.nom)} sous vitrine, ${esc(p.lieu)}, ${esc(p.date)}" loading="lazy" width="1200" height="1200">
    </button>`
        : `<div class="prise-visuel prise-sans-image" aria-hidden="true">${chausses()}</div>`
    }
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
  </section>
  <dialog class="visionneuse" aria-label="Pièce agrandie">
    <button class="bouton-icone fermer" type="button" aria-label="Fermer">${icones.fermer}</button>
    <figure><img alt=""><figcaption><strong></strong><span></span></figcaption></figure>
  </dialog>`
      : ""
  }

  ${filet()}

  <p class="musee-avertissement">${esc(m.avertissement)}</p>

  ${avisBaron("musee")}
</div>`;

export const page = { cle: "musee", titre: m.titre };

export function apres() {
  const dialogue = document.querySelector(".visionneuse");
  if (!dialogue) return;
  const img = dialogue.querySelector("img");
  let declencheur = null;

  document.querySelectorAll(".prise-visuel[data-index]").forEach((b) => {
    b.addEventListener("click", () => {
      const p = refusees[Number(b.dataset.index)];
      img.src = p.image;
      img.alt = b.querySelector("img").alt;
      dialogue.querySelector("figcaption strong").textContent = `${p.numero} · ${p.nom}`;
      dialogue.querySelector("figcaption span").textContent = `${m.salleAnnexe.libelleMotif} : ${p.motif}`;
      declencheur = b;
      dialogue.showModal();
    });
  });
  dialogue.querySelector(".fermer").addEventListener("click", () => dialogue.close());
  dialogue.addEventListener("click", (e) => { if (e.target === dialogue) dialogue.close(); });
  dialogue.addEventListener("close", () => declencheur && declencheur.focus());
}

if (typeof document !== "undefined") {
  monterPage({ ...page, contenu: rendre() });
  apres();
}
