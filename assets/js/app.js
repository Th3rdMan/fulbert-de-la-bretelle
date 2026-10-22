// Socle commun à toutes les pages : en-tête, pied de page, bascule de thème,
// menu mobile, apparitions au défilement, et quelques utilitaires de rendu.

import site from "../../data/site.js";
import baron from "../../data/baron.js";
import { ecu, filet, icones, lettrine } from "./ornements.js";

export const PAGES = [
  { cle: "accueil", href: "index.html", titre: "Accueil" },
  { cle: "chroniques", href: "chroniques.html", titre: "Chroniques" },
  { cle: "repertoire", href: "repertoire.html", titre: "Le Répertoire" },
  { cle: "musee", href: "musee.html", titre: "Le Musée" },
  { cle: "ordre", href: "ordre.html", titre: "L'Ordre" },
  { cle: "baron", href: "baron.html", titre: "Le Baron" },
  { cle: "galerie", href: "galerie.html", titre: "Galerie" },
];

// --- Utilitaires ------------------------------------------------------------

export const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const paragraphes = (texte = "") =>
  texte
    .trim()
    .split(/\n\s*\n/)
    .filter(Boolean)
    .map((p) => `<p>${esc(p.trim())}</p>`)
    .join("");

// Paragraphes dont le premier commence par une lettrine.
export const avecLettrine = (texte = "") => {
  const t = texte.trim();
  if (!t) return "";
  const premiere = t[0];
  const reste = t.slice(1);
  const html = paragraphes(reste);
  // La première lettre reste lisible pour les lecteurs d'écran.
  return `<div class="avec-lettrine">${lettrine(esc(premiere.toUpperCase()))}${html.replace(
    "<p>",
    `<p><span class="sr-only">${esc(premiere)}</span>`
  )}</div>`;
};

const ROMAINS = [
  [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"],
  [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
];
export const romain = (n) => {
  let r = "";
  for (const [v, s] of ROMAINS) while (n >= v) { r += s; n -= v; }
  return r;
};

export const numero = (n, chiffres = 3) => String(n).padStart(chiffres, "0");

// Encart « Avis de Monsieur le Baron » pour une page donnée.
export const avisBaron = (cle) => {
  const avis = baron.avis[cle];
  if (!avis) return "";
  return `<aside class="avis-baron apparait" aria-label="Avis de Monsieur le Baron">
    <img src="${esc(baron.image)}" alt="" width="68" height="68" loading="lazy">
    <div>
      <p class="surtitre">L'avis de Monsieur le Baron</p>
      <blockquote><p>${esc(avis.texte)}</p></blockquote>
    </div>
  </aside>`;
};

// --- Thème ------------------------------------------------------------------

const lireTheme = () => {
  try { return localStorage.getItem("theme"); } catch { return null; }
};
const ecrireTheme = (v) => {
  try { localStorage.setItem("theme", v); } catch { /* stockage indisponible */ }
};
const themeEffectif = () => {
  const force = document.documentElement.dataset.theme;
  if (force === "light" || force === "dark") return force;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

function majBoutonTheme(bouton) {
  const sombre = themeEffectif() === "dark";
  bouton.innerHTML = sombre ? icones.soleil : icones.lune;
  bouton.setAttribute("aria-label", sombre ? "Passer au thème clair" : "Passer au thème sombre");
  bouton.setAttribute("aria-pressed", String(sombre));
}

// --- En-tête et pied --------------------------------------------------------

export function entete(pageCourante) {
  const liens = PAGES.map(
    (p) =>
      `<li><a href="${p.href}"${p.cle === pageCourante ? ' aria-current="page"' : ""}>${esc(p.titre)}</a></li>`
  ).join("");
  return `<a class="lien-evitement" href="#contenu">Aller au contenu</a>
  <header class="site-entete">
    <div class="conteneur">
      <a class="marque" href="index.html">${ecu()}<span>${esc(site.nom)}</span></a>
      <nav class="nav-principale" id="nav-principale" aria-label="Navigation principale"><ul>${liens}</ul></nav>
      <button class="bouton-icone bouton-theme" type="button"></button>
      <button class="bouton-icone bouton-menu" type="button" aria-expanded="false" aria-controls="nav-principale" aria-label="Ouvrir le menu">${icones.menu}</button>
    </div>
  </header>`;
}

export function pied() {
  const a = site.adresse;
  return `<footer class="site-pied">
    <div class="conteneur">
      ${filet("filet filet-court")}
      <p class="devise">« ${esc(site.devise)} »</p>
      <address>${esc(a.demeure)}, ${esc(a.precision)}<br>${esc(a.ville)}, province de ${esc(a.province)}, ${esc(a.royaume)}</address>
      <p class="petit">Site tenu par ${esc(site.nom)} en personne, sous la surveillance de Monsieur le Baron.
      Personnage de <a href="https://www.kraland.org/">Kraland Interactif</a>.</p>
    </div>
  </footer>`;
}

// --- Apparitions au défilement ---------------------------------------------

export function observerApparitions(racine = document) {
  const elements = racine.querySelectorAll(".apparait:not(.visible)");
  const reduit = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduit || !("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }
  const obs = new IntersectionObserver(
    (entrees) => {
      for (const e of entrees) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  elements.forEach((el) => obs.observe(el));
}

// --- Montage de la page ----------------------------------------------------

export const titreDocument = (titre) => (titre ? `${titre} · ${site.nom}` : `${site.nom} · ${site.devise}`);

// Les pages HTML sont prérendues (voir outils/prerendu.js) pour les robots et
// les navigateurs sans JavaScript. Dans le navigateur, on rend à nouveau tout
// depuis data/ : une modification des données s'affiche même si le prérendu
// n'a pas encore été régénéré.
export function monterPage({ cle, titre, contenu }) {
  document.documentElement.classList.add("js");
  document.title = titreDocument(titre);

  document.querySelectorAll(".lien-evitement, .site-entete, .site-pied").forEach((el) => el.remove());
  document.body.insertAdjacentHTML("afterbegin", entete(cle));
  const main = document.getElementById("contenu");
  main.innerHTML = contenu;
  main.insertAdjacentHTML("afterend", pied());

  const boutonTheme = document.querySelector(".bouton-theme");
  majBoutonTheme(boutonTheme);
  boutonTheme.addEventListener("click", () => {
    const suivant = themeEffectif() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = suivant;
    ecrireTheme(suivant);
    majBoutonTheme(boutonTheme);
  });
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (!lireTheme()) majBoutonTheme(boutonTheme);
  });

  const boutonMenu = document.querySelector(".bouton-menu");
  const nav = document.getElementById("nav-principale");
  const fermerMenu = () => {
    nav.classList.remove("ouverte");
    boutonMenu.setAttribute("aria-expanded", "false");
    boutonMenu.setAttribute("aria-label", "Ouvrir le menu");
    boutonMenu.innerHTML = icones.menu;
  };
  boutonMenu.addEventListener("click", () => {
    const ouvert = nav.classList.toggle("ouverte");
    boutonMenu.setAttribute("aria-expanded", String(ouvert));
    boutonMenu.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
    boutonMenu.innerHTML = ouvert ? icones.fermer : icones.menu;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("ouverte")) {
      fermerMenu();
      boutonMenu.focus();
    }
  });

  observerApparitions();

  // Ancre éventuelle (#id) : le contenu est rendu après le chargement.
  if (location.hash) {
    const cible = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (cible) {
      cible.classList.add("visible");
      cible.scrollIntoView();
    }
  }
}

export { site, baron };
