import { monterPage, esc, avisBaron } from "../app.js";
import { filet, icones } from "../ornements.js";
import galerie from "../../../data/galerie.js";

export const rendre = () => `
<div class="conteneur">
  <header class="entete-page">
    <p class="surtitre">Livre troisième</p>
    <h1>Galerie</h1>
    <p class="chapeau">Portraits, armes, demeure et kanard. Toutes les œuvres ont été approuvées par leur sujet, sauf une.</p>
    ${filet()}
  </header>

  <ul class="galerie">
    ${galerie
      .map(
        (g, i) => `<li class="apparait" id="${esc(g.id)}">
        <figure>
          <button type="button" data-index="${i}" aria-label="Agrandir : ${esc(g.titre)}">
            <img src="${esc(g.src)}" alt="${esc(g.alt)}" loading="lazy"${g.pixel ? ' class="pixel"' : ""}>
          </button>
          <figcaption><strong>${esc(g.titre)}</strong><span>${esc(g.legende)}</span></figcaption>
        </figure>
      </li>`
      )
      .join("")}
  </ul>

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
