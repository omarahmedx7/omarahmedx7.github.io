/* ============================================================
   script.js — theme + language toggles, mobile nav, reveal,
   active-link highlighting, back-to-top. Vanilla, no deps.
   ============================================================ */
(function () {
  "use strict";

  var root = document.documentElement;
  var STORE = { theme: "portfolio.theme", lang: "portfolio.lang" };

  /* ---------- helpers ---------- */
  function store(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }
  function read(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

  /* ---------- Theme ---------- */
  function initTheme() {
    var saved = read(STORE.theme);
    var prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    var theme = saved || (prefersLight ? "light" : "dark");
    root.setAttribute("data-theme", theme);
    updateThemeColorMeta(theme);
  }
  function updateThemeColorMeta(theme) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#f6f8fb" : "#0b1017");
  }
  function toggleTheme() {
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    store(STORE.theme, next);
    updateThemeColorMeta(next);
  }

  /* ---------- Language ---------- */
  var LANGS = { en: { dir: "ltr", other: "ع" }, ar: { dir: "rtl", other: "EN" } };

  function applyLang(lang) {
    var dict = (window.I18N && window.I18N[lang]) || {};
    root.setAttribute("lang", lang);
    root.setAttribute("dir", LANGS[lang].dir);

    // textContent for [data-i18n]
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    // innerHTML for [data-i18n-html]
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    // attributes: data-i18n-attr="attr|key"
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var pair = el.getAttribute("data-i18n-attr").split("|");
      if (pair.length === 2 && dict[pair[1]] != null) el.setAttribute(pair[0], dict[pair[1]]);
    });

    // language toggle button label shows the OTHER language
    var label = document.getElementById("langLabel");
    if (label) label.textContent = LANGS[lang].other;

    document.title = dict["meta.title"] || "Omar Ahmed | Flutter Developer";
  }

  function initLang() {
    var saved = read(STORE.lang);
    var lang = (saved === "ar" || saved === "en") ? saved : "en";
    if (lang !== "en") applyLang(lang); // English is already inline in the HTML
    else { root.setAttribute("lang", "en"); root.setAttribute("dir", "ltr"); }
  }
  function toggleLang() {
    var next = root.getAttribute("lang") === "ar" ? "en" : "ar";
    applyLang(next);
    store(STORE.lang, next);
  }

  /* ---------- Mobile nav ---------- */
  function initNav() {
    var toggle = document.getElementById("navToggle");
    var links = document.getElementById("navLinks");
    if (!toggle || !links) return;

    function close() { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
    function open() { links.classList.add("open"); toggle.setAttribute("aria-expanded", "true"); }

    toggle.addEventListener("click", function () {
      links.classList.contains("open") ? close() : open();
    });
    // close after tapping a nav link (mobile)
    links.querySelectorAll("a[href^='#']").forEach(function (a) {
      a.addEventListener("click", close);
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Active nav link on scroll ---------- */
  function initScrollSpy() {
    var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
    var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links > a[href^='#']"));
    if (!sections.length || !navLinks.length) return;

    var map = {};
    navLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (a) { a.classList.remove("active"); });
          var active = map[entry.target.id];
          if (active) active.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---------- Scroll to very top (brand + arrow) ---------- */
  function scrollToTop(e) {
    if (e) e.preventDefault();
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, left: 0, behavior: reduce ? "auto" : "smooth" });
    // clean the #top hash out of the URL
    if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  }

  /* ---------- Back to top ---------- */
  function initToTop() {
    var btn = document.getElementById("toTop");
    if (btn) {
      btn.addEventListener("click", scrollToTop);
      window.addEventListener("scroll", function () {
        btn.classList.toggle("show", window.scrollY > 500);
      }, { passive: true });
    }
    var brand = document.querySelector(".brand");
    if (brand) brand.addEventListener("click", scrollToTop);
  }

  /* ---------- Year ---------- */
  function initYear() {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- Wire up ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initLang();
    initNav();
    initReveal();
    initScrollSpy();
    initToTop();
    initYear();

    var themeBtn = document.getElementById("themeToggle");
    var langBtn = document.getElementById("langToggle");
    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
    if (langBtn) langBtn.addEventListener("click", toggleLang);
  });
})();
