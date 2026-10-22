// Accents héraldiques en SVG inline. Les couleurs suivent les variables CSS,
// donc le thème clair/sombre s'applique sans rien changer ici.

const svg = (viewBox, contenu, attrs = "") =>
  `<svg viewBox="${viewBox}" aria-hidden="true" focusable="false" ${attrs}>${contenu}</svg>`;

// Écu de la marque : sinople, à la bande d'or chargée d'une boucle.
export const ecu = () =>
  svg(
    "0 0 40 46",
    `<defs><clipPath id="ecu-champ"><path d="M3 3h34v17c0 12-8 19.5-17 23C11 39.5 3 32 3 20z"/></clipPath></defs>
     <path d="M3 3h34v17c0 12-8 19.5-17 23C11 39.5 3 32 3 20z" style="fill:var(--sinople-fond)"/>
     <g clip-path="url(#ecu-champ)">
       <path d="M-2 4 8-2 46 36 36 46z" style="fill:var(--or)"/>
       <rect x="16" y="14.5" width="8" height="7" rx=".8" transform="rotate(45 20 18)" style="fill:none;stroke:var(--gueules-fond);stroke-width:1.6"/>
     </g>
     <path d="M3 3h34v17c0 12-8 19.5-17 23C11 39.5 3 32 3 20z" style="fill:none;stroke:var(--or);stroke-width:2"/>`
  );

// Filet : deux traits, un losange au centre, deux points.
export const filet = (classe = "filet") =>
  svg(
    "0 0 240 16",
    `<g style="stroke:currentColor;fill:none" stroke-width="1">
       <path d="M0 8h100M140 8h100"/>
       <path d="M120 1.5 126.5 8 120 14.5 113.5 8z"/>
     </g>
     <path d="M120 4.5 123.5 8 120 11.5 116.5 8z" style="fill:var(--gueules)"/>
     <circle cx="106" cy="8" r="1.6" style="fill:currentColor"/>
     <circle cx="134" cy="8" r="1.6" style="fill:currentColor"/>`,
    `class="${classe}" preserveAspectRatio="xMidYMid meet"`
  );

// Fleuron : quadrilobe à cœur de gueules.
export const fleuron = () =>
  svg(
    "0 0 24 24",
    `<g style="fill:none;stroke:currentColor" stroke-width="1.2">
       <path d="M12 2c2.4 2.2 2.4 5.6 0 7.6-2.4-2-2.4-5.4 0-7.6zM12 22c-2.4-2.2-2.4-5.6 0-7.6 2.4 2 2.4 5.4 0 7.6zM2 12c2.2-2.4 5.6-2.4 7.6 0-2 2.4-5.4 2.4-7.6 0zM22 12c-2.2 2.4-5.6 2.4-7.6 0 2-2.4 5.4-2.4 7.6 0z"/>
     </g>
     <circle cx="12" cy="12" r="1.8" style="fill:var(--gueules)"/>`,
    `class="fleuron"`
  );

// Lettrine : initiale d'or sur champ de sinople, double filet d'or.
export const lettrine = (lettre) =>
  `<span class="lettrine" aria-hidden="true">${svg(
    "0 0 100 100",
    `<rect x="1.5" y="1.5" width="97" height="97" style="fill:var(--sinople-fond);stroke:var(--or);stroke-width:3"/>
     <rect x="8" y="8" width="84" height="84" style="fill:none;stroke:var(--or);stroke-width:1;opacity:.7"/>
     <g style="fill:var(--or)">
       <path d="M8 8l7 0-7 7z"/><path d="M92 8l-7 0 7 7z"/><path d="M8 92l7 0-7-7z"/><path d="M92 92l-7 0 7-7z"/>
     </g>
     <text x="50" y="52" text-anchor="middle" dominant-baseline="central"
       style="fill:var(--or-clair);font-family:var(--f-titre);font-weight:700;font-size:64px">${lettre}</text>`
  )}</span>`;

// Coussin de présentation au fond des vitrines.
export const socle = () =>
  svg(
    "0 0 100 20",
    `<ellipse cx="50" cy="10" rx="48" ry="8" style="fill:none;stroke:currentColor" stroke-width="1"/>
     <ellipse cx="50" cy="10" rx="36" ry="5" style="fill:none;stroke:currentColor;opacity:.6" stroke-width=".8"/>`,
    `preserveAspectRatio="none"`
  );

// Ceinture roulée, utilisée quand une pièce exposée n'a pas d'image.
export const ceinture = () =>
  svg(
    "0 0 120 90",
    `<g style="fill:none;stroke:currentColor" stroke-width="3">
       <ellipse cx="60" cy="48" rx="46" ry="30"/>
       <ellipse cx="60" cy="48" rx="38" ry="23" stroke-width="1.5" opacity=".7"/>
       <rect x="44" y="12" width="32" height="24" rx="3"/>
       <path d="M60 14v20"/>
     </g>`
  );

export const icones = {
  soleil: svg(
    "0 0 24 24",
    `<g style="fill:none;stroke:currentColor" stroke-width="1.6" stroke-linecap="round">
       <circle cx="12" cy="12" r="4.2"/>
       <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>
     </g>`
  ),
  lune: svg(
    "0 0 24 24",
    `<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" style="fill:none;stroke:currentColor" stroke-width="1.6" stroke-linejoin="round"/>`
  ),
  menu: svg(
    "0 0 24 24",
    `<path d="M4 7h16M4 12h16M4 17h16" style="stroke:currentColor" stroke-width="1.6" stroke-linecap="round"/>`
  ),
  fermer: svg(
    "0 0 24 24",
    `<path d="M6 6l12 12M18 6 6 18" style="stroke:currentColor" stroke-width="1.6" stroke-linecap="round"/>`
  ),
  chevron: svg("0 0 24 24", `<path d="M9 5l7 7-7 7" style="fill:none;stroke:currentColor" stroke-width="2"/>`),
  lecture: svg("0 0 24 24", `<path d="M7 4.5v15l12-7.5z" style="fill:currentColor"/>`),
};
