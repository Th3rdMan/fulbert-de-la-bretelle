import { monterPage, site, esc, avisBaron, numero } from "../app.js";
import { filet, socle, ceinture } from "../ornements.js";
import ceintures from "../../../data/ceintures.js";

const total = ceintures.length;
const nbVitrines = Math.max(site.musee.vitrinesReservees, total);

const vitrine = (piece, i) => {
  const n = numero(i + 1);
  if (!piece) {
    return `<li class="vitrine apparait">
      <div class="vitrine-caisse" role="img" aria-label="Vitrine numéro ${i + 1}, vide">
        <div class="vitrine-interieur"><div class="vitrine-socle">${socle()}</div></div>
      </div>
      <div class="vitrine-pied" aria-hidden="true"></div>
      <div class="cartel">
        <span class="cartel-numero">N° ${n}</span>
        <p class="cartel-titre">Emplacement réservé</p>
      </div>
    </li>`;
  }
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

const vitrines = Array.from({ length: nbVitrines }, (_, i) => vitrine(ceintures[i], i)).join("");

const accueil =
  total === 0
    ? `<p class="chapeau">Le Musée de la Ceinture conserve et présente les ceintures confisquées par l'Ordre de la Ceinture
       au terme d'un assaut loyal. Chaque vitrine attend sa pièce. La collection commence bientôt.</p>`
    : `<p class="chapeau">Le Musée de la Ceinture conserve et présente les ceintures confisquées par l'Ordre de la Ceinture
       au terme d'un assaut loyal. ${total} pièce${total > 1 ? "s sont exposées" : " est exposée"} à ce jour.</p>`;

const contenu = `
<div class="conteneur">
  <header class="musee-accueil apparait">
    <p class="surtitre">Castel Bretelle · Aile des collections</p>
    <h1>Le Musée de la Ceinture</h1>
    ${accueil}
    <dl class="musee-registre">
      <div><dt>Pièces exposées</dt><dd>${total}</dd></div>
      <div><dt>Vitrines</dt><dd>${nbVitrines}</dd></div>
      <div><dt>Entrée</dt><dd>Libre</dd></div>
    </dl>
  </header>

  <section class="salle" aria-labelledby="titre-salle">
    <div class="salle-titre">
      <p class="surtitre">Salle I</p>
      <h2 id="titre-salle">Ceintures des puissants</h2>
      <p>Titres, charges et dignités du Royaume et d'ailleurs.</p>
    </div>
    <ul class="vitrines">${vitrines}</ul>
  </section>

  ${filet()}

  <p class="musee-avertissement">Les pièces sont présentées dans l'ordre de leur acquisition.
  Il est interdit de toucher les vitrines. Monsieur le Baron assure la surveillance des salles.</p>

  ${avisBaron("musee")}
</div>`;

monterPage({ cle: "musee", titre: "Le Musée de la Ceinture", contenu });
