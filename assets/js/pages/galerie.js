import { monterPage, esc, avisBaron } from "../app.js";
import { filet, fleuron, icones } from "../ornements.js";
import galerie from "../../../data/galerie.js";

const slug = (t) => t.replace(/œ/g, "oe").replace(/æ/g, "ae").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");

// Images sans catégorie d'abord, puis une section par catégorie, dans l'ordre
// de première apparition dans data/galerie.js.
function groupes() {
  const ordre = [];
  const parCategorie = new Map();
  galerie.forEach((g, index) => {
    const cle = g.categorie || "";
    if (!parCategorie.has(cle)) {
      parCategorie.set(cle, []);
      ordre.push(cle);
    }
    parCategorie.get(cle).push({ ...g, index });
  });
  ordre.sort((a, b) => (a ? 1 : 0) - (b ? 1 : 0));
  return ordre.map((categorie) => ({ categorie, images: parCategorie.get(categorie) }));
}

const vignette = (g) => `<li class="apparait" id="${esc(g.id)}">
        <figure>
          <button type="button" data-index="${g.index}" aria-label="Agrandir : ${esc(g.titre)}">
            <img src="${esc(g.src)}" alt="${esc(g.alt)}" loading="lazy"${g.pixel ? ' class="pixel"' : ""}>
          </button>
          <figcaption><strong>${esc(g.titre)}</strong><span>${esc(g.legende)}</span></figcaption>
        </figure>
      </li>`;

export const rendre = () => `
<div class="conteneur">
  <header class="entete-page">
    <p class="surtitre">Livre troisième</p>
    <h1>Galerie</h1>
    <p class="chapeau">Mon portrait, mes armes, ma demeure. Et, plus loin, quelques œuvres de ma main.</p>
    ${filet()}
  </header>

  ${groupes()
    .map(
      ({ categorie, images }) => `${
        categorie
          ? `<section class="section galerie-section" aria-labelledby="cat-${esc(slug(categorie))}">
        <div class="titre-section">${fleuron()}<h2 id="cat-${esc(slug(categorie))}">${esc(categorie)}</h2></div>`
          : ""
      }
      <ul class="galerie">
        ${images.map(vignette).join("")}
      </ul>${categorie ? "</section>" : ""}`
    )
    .join("")}

  <dialog class="visionneuse" aria-label="Image agrandie">
    <button class="bouton-icone fermer" type="button" aria-label="Fermer">${icones.fermer}</button>
    <figure><img alt=""><figcaption><strong></strong><span></span></figcaption></figure>
  </dialog>

  ${avisBaron("galerie")}
</div>`;

export const page = { cle: "galerie", titre: "Galerie" };

export function apres() {

  const dialogue = document.querySelector(".visionneuse");
  const img = dialogue.querySelector("img");
  let declencheur = null;

  document.querySelectorAll(".galerie button").forEach((b) => {
    b.addEventListener("click", () => {
      const g = galerie[Number(b.dataset.index)];
      img.src = g.src;
      img.alt = g.alt;
      img.className = g.pixel ? "pixel" : "";
      dialogue.querySelector("figcaption strong").textContent = g.titre;
      dialogue.querySelector("figcaption span").textContent = g.legende;
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
