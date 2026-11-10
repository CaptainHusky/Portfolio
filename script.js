'use strict';

/* ==========================================================================
   1. DATA — the only place you edit to add or change a project
   --------------------------------------------------------------------------
   Everything the carousel shows comes from this array.
   To add a project: copy one object, change its fields. The order of the
   array is the order of the carousel.

   id         unique, lowercase, used in the URL (#projects/<id>)
   name       title shown on the card
   languages  chips next to the title
   snippet    code excerpt: { lang, label, code }. `lang` must be a
              highlight.js language name (typescript, csharp, cpp, php, java…)
   summary    { fr, en }  short text, 60–80 words max
   media      path to a screenshot (.png/.jpg/.gif) or a short .mp4/.webm
   mediaAlt   { fr, en }  description of the media for screen readers
   caption    { fr, en }  line under the media
   link       URL of the repository
   ========================================================================== */
const repos = [
  {
    id: 'favoris',
    name: 'Favoris · AFTEC Room',
    languages: ['Vue 3', 'TypeScript', 'Express', 'TypeORM', 'MySQL'],
    snippet: {
      lang: 'typescript',
      label: 'Business rules · TypeScript',
      code: `/**
 * Vérifie le créneau demandé.
 * Renvoie un message d'erreur, ou null si le créneau est accepté.
 */
export function checkTimeRules(start: Date, end: Date, now: Date = new Date()): string | null {
    const durationInHours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);

    if (durationInHours < MIN_HOURS || durationInHours > MAX_HOURS) {
        return \`La duree doit etre entre \${MIN_HOURS}h et \${MAX_HOURS}h\`;
    }

    // On tolère 1 minute de retard (le temps que la requête arrive).
    const oneMinute = 60 * 1000;
    if (start.getTime() < now.getTime() - oneMinute) {
        return "Impossible de reserver un creneau passe";
    }

    return null;
}`,
    },
    summary: {
      fr: 'Application web de réservation de salles pour l\'AFTEC : interface Vue 3 + Pinia, API Express avec TypeORM et MySQL, authentification JWT, rôles enseignant / administrateur et règles de réservation testées avec Jest.',
      en: 'Room-booking web app for the AFTEC school: Vue 3 + Pinia front end, Express API with TypeORM and MySQL, JWT authentication, teacher / admin roles and booking rules covered by Jest tests.',
    },
    media: 'assets/media/favoris.png',
    mediaAlt: { fr: 'Capture de l\'écran de réservation de salles', en: 'Screenshot of the room booking screen' },
    caption: { fr: 'Réservation d’une salle', en: 'Booking a room' },
    link: 'https://github.com/CaptainHusky/Favoris',
  },
  {
    id: 'final-protocol',
    name: 'Final Protocol',
    languages: ['C#', 'Unity'],
    snippet: {
      lang: 'csharp',
      label: 'Unity · C#',
      code: `// TODO: replace with a real excerpt from the repository
private void Update()
{
    float move = Input.GetAxisRaw("Horizontal");
    body.velocity = new Vector2(move * speed, body.velocity.y);

    if (Input.GetButtonDown("Jump") && isGrounded)
    {
        body.velocity = new Vector2(body.velocity.x, jumpForce);
    }
}`,
    },
    summary: {
      fr: 'Jeu de plateforme 2D de science-fiction développé sous Unity.',
      en: 'Sci-fi 2D platformer built in Unity.',
    },
    media: 'assets/media/final-protocol.gif',
    mediaAlt: { fr: 'Extrait de gameplay', en: 'Gameplay clip' },
    caption: { fr: 'Extrait de gameplay', en: 'Gameplay clip' },
    link: 'https://github.com/CaptainHusky', // TODO: replace with the repository URL
  },
  {
    id: 'sutom',
    name: 'SUTOM',
    languages: ['TODO: stack'],
    snippet: {
      lang: 'javascript',
      label: 'Game logic',
      code: `// TODO: replace with a real excerpt from the repository
function evaluateGuess(guess, target) {
  const result = Array(target.length).fill("absent");
  const remaining = [...target];

  guess.split("").forEach((letter, i) => {
    if (letter === target[i]) {
      result[i] = "correct";
      remaining[i] = null;
    }
  });

  guess.split("").forEach((letter, i) => {
    const found = remaining.indexOf(letter);
    if (result[i] === "absent" && found !== -1) {
      result[i] = "misplaced";
      remaining[found] = null;
    }
  });

  return result;
}`,
    },
    summary: {
      fr: 'Jeu de devinettes de mots façon Sutom / Motus. Projet de groupe réalisé en BTS SIO.',
      en: 'Sutom / Motus-style word-guessing game. Group project built during the BTS SIO.',
    },
    media: 'assets/media/sutom.png',
    mediaAlt: { fr: 'Capture d’une partie', en: 'Screenshot of a game in progress' },
    caption: { fr: 'Une partie en cours', en: 'A game in progress' },
    link: 'https://github.com/CaptainHusky', // TODO: replace with the repository URL
  },
  {
    id: 'tetris',
    name: 'Tetris in Console',
    languages: ['C#', '.NET', 'Console'],
    snippet: {
      lang: 'csharp',
      label: 'Rotation & wall-kick · C#',
      code: `static void Rotate()
{
    int newRot = (currentRotation + 1) % 4;
    if (IsValidPosition(currentPiece, newRot, currentX, currentY))
    {
        currentRotation = newRot;
    }
    else
    {
        // little wall-kick: try shift left/right 1
        if (IsValidPosition(currentPiece, newRot, currentX + 1, currentY))
        {
            currentX += 1;
            currentRotation = newRot;
        }
        else if (IsValidPosition(currentPiece, newRot, currentX - 1, currentY))
        {
            currentX -= 1;
            currentRotation = newRot;
        }
    }
}`,
    },
    summary: {
      fr: 'Tetris jouable dans le terminal, en C# : sept tétrominos avec rotation et petit wall-kick, chute rapide, score, et gravité qui accélère toutes les cinq lignes.',
      en: 'Playable Tetris in the terminal, written in C#: seven tetrominoes with rotation and a small wall-kick, hard drop, score, and gravity that speeds up every five lines.',
    },
    media: 'assets/media/tetris.gif',
    mediaAlt: { fr: 'Partie de Tetris dans la console', en: 'Tetris game running in the console' },
    caption: { fr: 'Partie en cours dans la console', en: 'A game running in the console' },
    link: 'https://github.com/CaptainHusky/Tetris-In-Console',
  },
  {
    id: 'snake',
    name: 'Snake in Console',
    languages: ['C#', '.NET', 'Console'],
    snippet: {
      lang: 'csharp',
      label: 'Grow or move · C#',
      code: `// This is how we advance, by adding a new head onto the board
snake.AddFirst(newHead);

// 7) Either we eat or move forward
if (newHead.Equals(food))
{
    score += 10;
    food = SpawnFood(snake);
    // If we don't remove tail, the tail grows
}
else
{
    // If we do, the tail rests the same
    snake.RemoveLast();
}`,
    },
    summary: {
      fr: 'Snake dans le terminal, en C# : commandes aux flèches ou WASD, nourriture placée hors du serpent, score, collisions avec les murs et le corps, et nouvelle partie à la fin.',
      en: 'Snake in the terminal, written in C#: arrow keys or WASD controls, food never spawned on the snake, score, wall and self collisions, and a replay prompt at the end.',
    },
    media: 'assets/media/snake.gif',
    mediaAlt: { fr: 'Partie de Snake dans la console', en: 'Snake game running in the console' },
    caption: { fr: 'Partie en cours dans la console', en: 'A game running in the console' },
    link: 'https://github.com/CaptainHusky/Snake-in-Console',
  },
  {
    id: 'tic-tac-toe',
    name: 'Tic-Tac-Toe',
    languages: ['C#', '.NET', 'Console'],
    snippet: {
      lang: 'csharp',
      label: 'Win detection · C#',
      code: `static bool HasWinner()
{
    int[,] lines = new int[,]
    {
        {1,2,3},{4,5,6},{7,8,9},
        {1,4,7},{2,5,8},{3,6,9},
        {1,5,9},{3,5,7}
    };
    for (int i = 0; i < lines.GetLength(0); i++)
    {
        int a = lines[i, 0], b = lines[i, 1], c = lines[i, 2];
        if (board[a] == board[b] && board[b] == board[c] && !char.IsDigit(board[a]))
            return true;
    }
    return false;
}`,
    },
    summary: {
      fr: 'Morpion à deux joueurs dans le terminal, en C# : cases numérotées de 1 à 9, coups invalides refusés, détection des huit lignes gagnantes, égalité et nouvelle partie.',
      en: 'Two-player Tic-Tac-Toe in the terminal, written in C#: cells numbered 1 to 9, invalid moves rejected, detection of the eight winning lines, draws, and a replay prompt.',
    },
    media: 'assets/media/tic-tac-toe.png',
    mediaAlt: { fr: 'Grille de morpion dans la console', en: 'Tic-Tac-Toe board in the console' },
    caption: { fr: 'Une partie dans la console', en: 'A game in the console' },
    link: 'https://github.com/CaptainHusky', // TODO: this folder has no git remote yet; create the repository and put its URL here
  },
];

/* ==========================================================================
   2. TRANSLATIONS — static text of the page (project text is in `repos`)
   --------------------------------------------------------------------------
   Elements in index.html carry data-i18n="key" (text), data-i18n-aria="key"
   (aria-label) or data-i18n-alt="key" (alt). applyLanguage() fills them in.
   ========================================================================== */
const I18N = {
  fr: {
    'meta.title': 'Andrei — Portfolio développeur web',
    'a11y.skip': 'Aller au contenu',
    'lang.label': 'Langue',
    'nav.projects': 'Projets',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'BTS SIO · option SLAM',
    'hero.role': 'Développeur web full-stack',
    'hero.lead': "Étudiant en deuxieme année de BTS SIO, je construis des applications web de bout en bout : interface Vue 3, API Express, base de données SQL.",
    'hero.status': "À la recherche d'une alternance",
    'hero.ctaProjects': 'Voir mes projets',
    'hero.ctaCv': 'Télécharger mon CV',
    'hero.photoAlt': 'Portrait de Husky',
    'projects.title': 'Projets',
    'projects.region': 'Carrousel de projets',
    'projects.prev': 'Projet précédent',
    'projects.next': 'Projet suivant',
    'projects.goTo': 'Aller au projet',
    'projects.summary': 'Résumé',
    'projects.result': 'Résultat',
    'projects.view': 'Voir le dépôt sur GitHub',
    'projects.status': 'Projet {n} sur {total} : {name}',
    'about.title': 'À propos',
    'about.bioTitle': 'Parcours',
    'about.bio': "Je me forme au développement logiciel en BTS SIO (option SLAM) et j'interviens comme technicien informatique sur site, notamment sur des déploiements Linux.",
    'about.t1.title': 'BTS SIO — option SLAM',
    'about.t1.text': "Développement d'applications web : Vue 3, Express, Laravel, bases de données.",
    'about.t2.title': 'Technicien informatique',
    'about.t2.text': 'Interventions sur site, déploiements Linux sur plusieurs machines.',
    'about.t3.title': 'Prochaine étape',
    'about.t3.text': 'Alternance en développement web.',
    'about.skills': 'Compétences',
    'skills.languages': 'Langages',
    'skills.web': 'Web',
    'skills.data': 'Données & systèmes',
    'skills.basics': '(notions)',
    'contact.title': 'Contact',
    'footer.legal': 'Mentions légales & confidentialité',
    'legal.editor': 'Éditeur du site : [nom et prénom — à compléter].',
    'legal.host': "Hébergeur : [nom et adresse de l'hébergeur — à compléter].",
    'legal.privacy': "Ce site n'utilise ni cookies, ni outil de statistiques, et ne collecte aucune donnée personnelle. Le choix de la langue est mémorisé uniquement dans votre navigateur. L'hébergeur peut conserver des journaux techniques de connexion.",
  },
  en: {
    'meta.title': 'Andrei — Web developer portfolio',
    'a11y.skip': 'Skip to content',
    'lang.label': 'Language',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'BTS SIO · SLAM track',
    'hero.role': 'Full-stack web developer',
    'hero.lead': 'Second-year BTS SIO student building web applications end to end: Vue 3 front end, Express API, SQL database.',
    'hero.status': 'Looking for a work-study placement (alternance)',
    'hero.ctaProjects': 'See my projects',
    'hero.ctaCv': 'Download my CV',
    'hero.photoAlt': 'Portrait of Husky',
    'projects.title': 'Projects',
    'projects.region': 'Project carousel',
    'projects.prev': 'Previous project',
    'projects.next': 'Next project',
    'projects.goTo': 'Go to project',
    'projects.summary': 'Summary',
    'projects.result': 'Result',
    'projects.view': 'View repository on GitHub',
    'projects.status': 'Project {n} of {total}: {name}',
    'about.title': 'About',
    'about.bioTitle': 'Background',
    'about.bio': "I'm training in software development through the BTS SIO (SLAM track) and work as an on-site IT technician, including Linux deployments.",
    'about.t1.title': 'BTS SIO — SLAM track',
    'about.t1.text': 'Web application development: Vue 3, Express, Laravel, databases.',
    'about.t2.title': 'IT technician',
    'about.t2.text': 'On-site support, Linux deployments across several machines.',
    'about.t3.title': 'Next step',
    'about.t3.text': 'Work-study placement in web development.',
    'about.skills': 'Skills',
    'skills.languages': 'Languages',
    'skills.web': 'Web',
    'skills.data': 'Data & systems',
    'skills.basics': '(basics)',
    'contact.title': 'Contact',
    'footer.legal': 'Legal notice & privacy',
    'legal.editor': 'Site publisher: [full name — to be completed].',
    'legal.host': 'Host: [name and address of the hosting provider — to be completed].',
    'legal.privacy': 'This site uses no cookies and no analytics, and collects no personal data. Your language choice is stored only in your browser. The hosting provider may keep technical connection logs.',
  },
};

/* ==========================================================================
   3. STATE — one index drives the whole carousel
   ========================================================================== */
const LANG_KEY = 'portfolio-lang';
let currentIndex = 0;
let currentLang = 'fr';
let isAnimating = false;

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const el = {
  card: document.getElementById('repo-card'),
  name: document.getElementById('repo-name'),
  langs: document.getElementById('repo-langs'),
  codeLabel: document.getElementById('code-label'),
  pre: document.getElementById('repo-pre'),
  code: document.getElementById('repo-code'),
  summary: document.getElementById('repo-summary'),
  media: document.getElementById('repo-media'),
  caption: document.getElementById('repo-caption'),
  link: document.getElementById('repo-link'),
  count: document.getElementById('carousel-count'),
  dots: document.getElementById('carousel-dots'),
  status: document.getElementById('sr-status'),
  carousel: document.getElementById('carousel'),
  prev: document.getElementById('prev'),
  next: document.getElementById('next'),
};

/* Translation lookup: current language, then French, then the key itself. */
function t(key) {
  return I18N[currentLang]?.[key] ?? I18N.fr[key] ?? key;
}

/* localStorage can throw (private mode, blocked storage) — never let it break the page. */
function storageGet(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}
function storageSet(key, value) {
  try { localStorage.setItem(key, value); } catch { /* ignore */ }
}

/* ==========================================================================
   4. RENDERING — every part of the card reads from repos[currentIndex]
   ========================================================================== */
function renderCode(snippet) {
  el.codeLabel.textContent = snippet.label ?? snippet.lang;
  el.code.className = `hljs language-${snippet.lang}`;

  if (window.hljs && window.hljs.getLanguage(snippet.lang)) {
    // hljs.highlight() escapes the source itself, so injecting its output is safe.
    el.code.innerHTML = window.hljs.highlight(snippet.code, { language: snippet.lang }).value;
  } else {
    el.code.textContent = snippet.code; // plain text if the library or language is missing
  }
  el.pre.scrollTop = 0;
  el.pre.scrollLeft = 0;
}

function renderMedia(repo) {
  el.media.replaceChildren();

  const isVideo = /\.(mp4|webm)$/i.test(repo.media);
  const node = document.createElement(isVideo ? 'video' : 'img');
  node.src = repo.media;

  if (isVideo) {
    node.muted = true;
    node.loop = true;
    node.playsInline = true;
    node.autoplay = !reduceMotion.matches;
    node.controls = reduceMotion.matches;
    node.setAttribute('aria-label', repo.mediaAlt[currentLang]);
  } else {
    node.alt = repo.mediaAlt[currentLang];
    node.loading = 'lazy';
  }

  // File not found yet: show a placeholder with the expected path.
  node.addEventListener('error', () => {
    const placeholder = document.createElement('div');
    placeholder.className = 'media-fallback';
    placeholder.textContent = repo.media;
    node.replaceWith(placeholder);
  });

  el.media.append(node);
  el.caption.textContent = repo.caption[currentLang];
}

function renderRepo() {
  const repo = repos[currentIndex];

  el.name.textContent = repo.name;
  el.langs.replaceChildren(
    ...repo.languages.map((language) => {
      const li = document.createElement('li');
      li.className = 'chip';
      li.textContent = language;
      return li;
    })
  );

  renderCode(repo.snippet);
  el.summary.textContent = repo.summary[currentLang];
  renderMedia(repo);
  el.link.href = repo.link;

  el.count.textContent = `${currentIndex + 1} / ${repos.length}`;
  updateDots();
}

function buildDots() {
  el.dots.replaceChildren(
    ...repos.map((repo, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'dot-btn';
      button.addEventListener('click', () => show(index, index > currentIndex ? 1 : -1));
      return button;
    })
  );
}

function updateDots() {
  [...el.dots.children].forEach((button, index) => {
    button.setAttribute('aria-current', String(index === currentIndex));
    button.setAttribute('aria-label', `${t('projects.goTo')} ${index + 1} : ${repos[index].name}`);
  });
}

function announce() {
  el.status.textContent = t('projects.status')
    .replace('{n}', currentIndex + 1)
    .replace('{total}', repos.length)
    .replace('{name}', repos[currentIndex].name);
}

/* Keep the URL in sync so a project can be linked directly: #projects/favoris.
   replaceState (not location.hash =) so the back button isn't flooded with entries. */
function updateHash() {
  const hash = `#projects/${repos[currentIndex].id}`;
  try {
    history.replaceState(null, '', hash);
  } catch {
    // Some contexts (e.g. a page opened from file://) refuse replaceState.
    // location.replace('#…') also swaps the entry instead of adding one.
    try { location.replace(hash); } catch { /* ignore */ }
  }
}

function repoIndexFromHash() {
  const match = location.hash.match(/^#projects\/([\w-]+)$/);
  return match ? repos.findIndex((repo) => repo.id === match[1]) : -1;
}

/* ==========================================================================
   5. NAVIGATION — slide out, swap content, slide in
   ========================================================================== */
async function show(nextIndex, direction = 0) {
  if (isAnimating || nextIndex === currentIndex) return;

  // Web Animations API: no CSS classes to juggle, and it degrades to an instant swap.
  const animate = direction !== 0 && !reduceMotion.matches && typeof el.card.animate === 'function';
  let slideOut;

  if (animate) {
    isAnimating = true;
    slideOut = el.card.animate(
      [
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: `translateX(${-40 * direction}px)` },
      ],
      { duration: 160, easing: 'ease-in', fill: 'forwards' }
    );
    try { await slideOut.finished; } catch { /* cancelled */ }
  }

  currentIndex = nextIndex;
  renderRepo();
  updateHash();
  announce();

  if (animate) {
    const slideIn = el.card.animate(
      [
        { opacity: 0, transform: `translateX(${40 * direction}px)` },
        { opacity: 1, transform: 'translateX(0)' },
      ],
      { duration: 200, easing: 'ease-out' }
    );
    slideOut.cancel(); // drop the "forwards" hold; slideIn already covers the first frame
    try { await slideIn.finished; } catch { /* cancelled */ }
    isAnimating = false;
  }
}

function go(step) {
  show((currentIndex + step + repos.length) % repos.length, step);
}

function wireCarousel() {
  el.prev.addEventListener('click', () => go(-1));
  el.next.addEventListener('click', () => go(1));

  // Arrow keys when focus is anywhere in the carousel — except inside the code
  // block, where left/right must keep scrolling the code horizontally.
  el.carousel.addEventListener('keydown', (event) => {
    if (event.target.closest('pre')) return;
    if (event.key === 'ArrowLeft') { event.preventDefault(); go(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); go(1); }
  });

  // Touch swipe (mouse drags are ignored so text selection keeps working).
  let startX = 0;
  let startY = 0;
  let tracking = false;

  el.card.addEventListener('pointerdown', (event) => {
    tracking = event.pointerType !== 'mouse' && !event.target.closest('pre');
    startX = event.clientX;
    startY = event.clientY;
  });
  el.card.addEventListener('pointerup', (event) => {
    if (!tracking) return;
    tracking = false;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
  });
  el.card.addEventListener('pointercancel', () => { tracking = false; });

  // Someone edits the hash by hand or follows a deep link while the page is open.
  window.addEventListener('hashchange', () => {
    const index = repoIndexFromHash();
    if (index !== -1) show(index, index > currentIndex ? 1 : -1);
  });
}

/* ==========================================================================
   6. LANGUAGE
   ========================================================================== */
function applyLanguage(lang) {
  if (!I18N[lang]) lang = 'fr';
  currentLang = lang;
  document.documentElement.lang = lang;
  document.title = t('meta.title');

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((node) => {
    node.setAttribute('aria-label', t(node.dataset.i18nAria));
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((node) => {
    node.setAttribute('alt', t(node.dataset.i18nAlt));
  });
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  });

  renderRepo(); // project text (summary, caption…) also depends on the language
  storageSet(LANG_KEY, lang);
}

/* ==========================================================================
   7. INIT
   ========================================================================== */
function watchMissingImages() {
  document.querySelectorAll('img[data-fallback]').forEach((img) => {
    const markMissing = () => img.closest('.photo-frame')?.classList.add('is-missing');
    img.addEventListener('error', markMissing);
    if (img.complete && img.naturalWidth === 0) markMissing(); // already failed before this script ran
  });
}

function init() {
  buildDots();
  wireCarousel();
  watchMissingImages();

  const hashIndex = repoIndexFromHash();
  if (hashIndex !== -1) {
    currentIndex = hashIndex;
    requestAnimationFrame(() => document.getElementById('projects').scrollIntoView());
  }

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang));
  });

  document.getElementById('year').textContent = new Date().getFullYear();
  applyLanguage(storageGet(LANG_KEY) || 'fr');
}

init();
