import { monterPage, avisBaron } from "../app.js";
import { filet } from "../ornements.js";

const contenu = `
<div class="conteneur">
  <header class="entete-page">
    <p class="surtitre">Erreur 404</p>
    <h1>Page introuvable</h1>
    <p class="chapeau">Cette page n'existe pas, ou Monsieur le Baron l'a mangée. Les deux hypothèses sont à l'étude.</p>
    ${filet()}
    <p><a class="bouton" href="index.html">Retour à l'accueil</a></p>
  </header>
</div>`;

monterPage({ titre: "Page introuvable", contenu });
