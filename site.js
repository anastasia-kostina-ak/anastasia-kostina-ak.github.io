const copy = {
  en: {
    nameFirst: "Anastasia",
    nameLast: "Kostina",
    nav: { home: "Selected work", illustrations: "Illustrations", other: "Other work", about: "About" },
    language: "Choose language",
    navigation: "Main navigation",
    skip: "Skip to content",
    role: "Illustrator · Artist",
    intro: "Illustration is the focus here. Painting and a small selection of design work have their own place, too.",
    selected: "Selected work",
    selectedNote: "A first look at the series that will shape this portfolio.",
    book: "Book illustrations",
    cards: "Cards for aromatic oils",
    projectType: "Illustration series",
    imageSoon: "Original artwork will be added here",
    explore: "Explore illustrations",
    allIllustrations: "Illustrations",
    archiveNote: "A home for complete series and individual illustrations. The first two series are ready for their images and project details.",
    series: "Series",
    otherTitle: "Other work",
    otherNote: "A quieter space for work beyond illustration.",
    painting: "Painting",
    design: "Design",
    smallSelection: "A small selection",
    workSoon: "Work and project details will be added here",
    aboutTitle: "About Anastasia",
    aboutLead: "Anastasia Kostina is an illustrator and artist. This portfolio puts her illustration work first, with space for painting and selected design projects.",
    aboutBody: "Her biography, portrait and social links will be added with the next content update.",
    portraitSoon: "Portrait to come",
    biography: "Biography & links",
    backWork: "See selected work",
    footer: "Portfolio in progress",
    homeTitle: "Anastasia Kostina — Illustration",
    illustrationsTitle: "Illustrations — Anastasia Kostina",
    otherPageTitle: "Other work — Anastasia Kostina",
    aboutPageTitle: "About — Anastasia Kostina"
  },
  de: {
    nameFirst: "Anastasia",
    nameLast: "Kostina",
    nav: { home: "Ausgewählte Arbeiten", illustrations: "Illustrationen", other: "Weitere Arbeiten", about: "Über Anastasia" },
    language: "Sprache wählen",
    navigation: "Hauptnavigation",
    skip: "Zum Inhalt springen",
    role: "Illustratorin · Künstlerin",
    intro: "Im Mittelpunkt steht die Illustration. Auch Malerei und eine kleine Auswahl an Designarbeiten bekommen ihren Platz.",
    selected: "Ausgewählte Arbeiten",
    selectedNote: "Ein erster Blick auf die Serien, die dieses Portfolio prägen werden.",
    book: "Buchillustrationen",
    cards: "Karten für Aromaöle",
    projectType: "Illustrationsserie",
    imageSoon: "Die Originalarbeiten werden hier ergänzt",
    explore: "Illustrationen ansehen",
    allIllustrations: "Illustrationen",
    archiveNote: "Ein Ort für vollständige Serien und einzelne Illustrationen. Für die ersten beiden Serien können Bilder und Projektdetails ergänzt werden.",
    series: "Serie",
    otherTitle: "Weitere Arbeiten",
    otherNote: "Ein eigener, ruhiger Platz für Arbeiten außerhalb der Illustration.",
    painting: "Malerei",
    design: "Design",
    smallSelection: "Eine kleine Auswahl",
    workSoon: "Arbeiten und Projektdetails folgen hier",
    aboutTitle: "Über Anastasia",
    aboutLead: "Anastasia Kostina ist Illustratorin und Künstlerin. Dieses Portfolio stellt ihre Illustrationen in den Vordergrund und bietet Raum für Malerei und ausgewählte Designprojekte.",
    aboutBody: "Biografie, Porträt und Social-Media-Links werden mit den nächsten Inhalten ergänzt.",
    portraitSoon: "Porträt folgt",
    biography: "Biografie & Links",
    backWork: "Ausgewählte Arbeiten ansehen",
    footer: "Portfolio im Aufbau",
    homeTitle: "Anastasia Kostina — Illustration",
    illustrationsTitle: "Illustrationen — Anastasia Kostina",
    otherPageTitle: "Weitere Arbeiten — Anastasia Kostina",
    aboutPageTitle: "Über Anastasia — Anastasia Kostina"
  },
  ru: {
    nameFirst: "Анастасия",
    nameLast: "Костина",
    nav: { home: "Избранное", illustrations: "Иллюстрации", other: "Другие работы", about: "Об Анастасии" },
    language: "Выбрать язык",
    navigation: "Основная навигация",
    skip: "Перейти к содержимому",
    role: "Иллюстратор · Художник",
    intro: "Главное здесь — иллюстрация. Для живописи и небольшой подборки дизайнерских работ тоже есть своё место.",
    selected: "Избранные работы",
    selectedNote: "Первые серии, вокруг которых будет строиться портфолио.",
    book: "Иллюстрации для книги",
    cards: "Карточки для аромамасел",
    projectType: "Серия иллюстраций",
    imageSoon: "Здесь появятся оригинальные работы",
    explore: "Смотреть иллюстрации",
    allIllustrations: "Иллюстрации",
    archiveNote: "Место для полных серий и отдельных иллюстраций. Для первых двух серий уже подготовлены разделы под изображения и описание.",
    series: "Серия",
    otherTitle: "Другие работы",
    otherNote: "Отдельное пространство для работ за пределами иллюстрации.",
    painting: "Живопись",
    design: "Дизайн",
    smallSelection: "Небольшая подборка",
    workSoon: "Здесь появятся работы и описание проектов",
    aboutTitle: "Об Анастасии",
    aboutLead: "Анастасия Костина — иллюстратор и художник. В этом портфолио на первом плане её иллюстрации; для живописи и отдельных дизайнерских проектов тоже есть место.",
    aboutBody: "Биографию, фотографию и ссылки на соцсети добавим вместе со следующими материалами.",
    portraitSoon: "Здесь будет фотография",
    biography: "Биография и ссылки",
    backWork: "Смотреть избранное",
    footer: "Портфолио наполняется",
    homeTitle: "Анастасия Костина — Иллюстрация",
    illustrationsTitle: "Иллюстрации — Анастасия Костина",
    otherPageTitle: "Другие работы — Анастасия Костина",
    aboutPageTitle: "Об Анастасии — Анастасия Костина"
  }
};

const languageOptions = [
  { code: "en", flag: "gb", label: "English" },
  { code: "de", flag: "de", label: "Deutsch" },
  { code: "ru", flag: "ru", label: "Русский" }
];

const page = document.body.dataset.page || "home";
const prefix = document.body.dataset.depth === "child" ? "../" : "./";
const paths = { home: prefix, illustrations: `${prefix}illustrations/`, other: `${prefix}other-work/`, about: `${prefix}about/` };

function savedLanguage() {
  try {
    const value = localStorage.getItem("ak-language");
    return Object.hasOwn(copy, value) ? value : "en";
  } catch {
    return "en";
  }
}

let language = savedLanguage();

function artSlot(index, message, variant = "") {
  return `<div class="art-slot ${variant}" aria-label="${message}">
    <span class="art-slot__index">AK / ${index}</span>
    <span class="art-slot__message">${message}</span>
  </div>`;
}

function projectCard(index, title, t, variant = "") {
  return `<article class="project-card ${variant}">
    <a class="project-card__link" href="${paths.illustrations}" aria-label="${title} — ${t.explore}">
      ${artSlot(index, t.imageSoon)}
      <div class="project-card__caption">
        <div><span class="eyebrow">${t.projectType} / ${index}</span><h3>${title}</h3></div>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </div>
    </a>
  </article>`;
}

function archiveRow(index, title, t) {
  return `<article class="archive-row">
    <div class="archive-row__meta"><span class="eyebrow">${t.series} / ${index}</span><h2>${title}</h2></div>
    ${artSlot(index, t.imageSoon, "art-slot--archive")}
  </article>`;
}

function header(t) {
  const current = languageOptions.find(option => option.code === language);
  const links = Object.entries(t.nav).map(([key, label]) => `<a href="${paths[key]}" ${page === key ? 'aria-current="page"' : ""}>${label}</a>`).join("");
  const options = languageOptions.map(option => `<button type="button" role="menuitemradio" aria-checked="${language === option.code}" data-lang="${option.code}"><img class="flag-icon" src="${prefix}flags/${option.flag}.svg" alt="" aria-hidden="true"><span>${option.label}</span>${language === option.code ? '<span class="language-check" aria-hidden="true">✓</span>' : ""}</button>`).join("");
  return `<header class="site-header wrap">
    <a class="wordmark" href="${paths.home}" aria-label="Anastasia Kostina — ${t.nav.home}">ANASTASIA<br>KOSTINA</a>
    <nav class="main-nav" aria-label="${t.navigation}">${links}</nav>
    <div class="language-picker">
      <button class="language-toggle" type="button" aria-label="${t.language}" aria-haspopup="menu" aria-expanded="false"><img class="flag-icon" src="${prefix}flags/${current.flag}.svg" alt="" aria-hidden="true"><span>${current.code.toUpperCase()}</span><span class="chevron" aria-hidden="true">⌄</span></button>
      <div class="language-menu" role="menu" hidden>${options}</div>
    </div>
  </header>`;
}

function home(t) {
  return `<main id="main" class="wrap home-main">
    <section class="home-intro" aria-labelledby="home-title">
      <div><span class="eyebrow">${t.role}</span><h1 id="home-title">${t.nameFirst}<br><span class="home-intro__surname">${t.nameLast}</span></h1></div>
      <p>${t.intro}</p>
    </section>
    <section class="selected-section" aria-labelledby="selected-title">
      <div class="section-heading"><h2 id="selected-title">${t.selected}</h2><span class="section-index">01—02</span></div>
      <p class="section-note">${t.selectedNote}</p>
      <div class="featured-grid">${projectCard("01", t.book, t)}${projectCard("02", t.cards, t, "project-card--offset")}</div>
      <a class="text-link" href="${paths.illustrations}">${t.explore}</a>
    </section>
  </main>`;
}

function illustrations(t) {
  return `<main id="main" class="wrap inner-main">
    <section class="page-intro"><span class="eyebrow">Anastasia Kostina / ${t.role}</span><h1>${t.allIllustrations}</h1><p>${t.archiveNote}</p></section>
    <section class="archive-list" aria-label="${t.allIllustrations}">${archiveRow("01", t.book, t)}${archiveRow("02", t.cards, t)}</section>
  </main>`;
}

function other(t) {
  return `<main id="main" class="wrap inner-main">
    <section class="page-intro"><span class="eyebrow">Anastasia Kostina / ${t.smallSelection}</span><h1>${t.otherTitle}</h1><p>${t.otherNote}</p></section>
    <section class="other-grid" aria-label="${t.otherTitle}">
      <article><div class="other-card"><span class="eyebrow">01 / ${t.otherTitle}</span><h2>${t.painting}</h2><p>${t.workSoon}</p></div></article>
      <article><div class="other-card"><span class="eyebrow">02 / ${t.smallSelection}</span><h2>${t.design}</h2><p>${t.workSoon}</p></div></article>
    </section>
  </main>`;
}

function about(t) {
  return `<main id="main" class="wrap inner-main about-main">
    <section class="page-intro"><span class="eyebrow">Anastasia Kostina / ${t.role}</span><h1>${t.aboutTitle}</h1></section>
    <div class="about-grid">
      <div class="portrait-slot" role="img" aria-label="${t.portraitSoon}"><span class="portrait-slot__initials">AK</span><span class="eyebrow">${t.portraitSoon}</span></div>
      <div class="about-copy"><p class="about-lead">${t.aboutLead}</p><div class="about-divider"></div><h2>${t.biography}</h2><p>${t.aboutBody}</p><a class="text-link" href="${paths.home}">${t.backWork}<span aria-hidden="true">↗</span></a></div>
    </div>
  </main>`;
}

function footer(t) {
  return `<footer class="site-footer wrap"><span>© ${new Date().getFullYear()} Anastasia Kostina</span><span>${t.footer}</span></footer>`;
}

function bindLanguagePicker() {
  const toggle = document.querySelector(".language-toggle");
  const menu = document.querySelector(".language-menu");
  toggle.addEventListener("click", event => {
    event.stopPropagation();
    menu.hidden = !menu.hidden;
    toggle.setAttribute("aria-expanded", String(!menu.hidden));
    if (!menu.hidden) menu.querySelector(`[data-lang="${language}"]`).focus();
  });
  menu.addEventListener("click", event => {
    event.stopPropagation();
    const option = event.target.closest("[data-lang]");
    if (!option) return;
    language = option.dataset.lang;
    try { localStorage.setItem("ak-language", language); } catch {}
    render();
    document.querySelector(".language-toggle").focus();
  });
  menu.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      menu.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });
}

function render() {
  const t = copy[language];
  document.documentElement.lang = language;
  document.title = ({ home: t.homeTitle, illustrations: t.illustrationsTitle, other: t.otherPageTitle, about: t.aboutPageTitle })[page];
  const content = ({ home, illustrations, other, about })[page](t);
  document.getElementById("app").innerHTML = `<a class="skip-link" href="#main">${t.skip}</a>${header(t)}${content}${footer(t)}`;
  bindLanguagePicker();
}

document.addEventListener("click", event => {
  if (event.target.closest(".language-picker")) return;
  const menu = document.querySelector(".language-menu");
  const toggle = document.querySelector(".language-toggle");
  if (menu && toggle) {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }
});

render();
