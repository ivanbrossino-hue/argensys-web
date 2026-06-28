/* ARGENSYS — interacciones vanilla. Sin dependencias. */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----- Intro: se reproduce una sola vez por sesión --------------------- */
  var intro = document.getElementById("intro");
  if (intro) {
    var seen = false;
    try { seen = sessionStorage.getItem("argensys_intro") === "1"; } catch (e) {}

    if (reduced || seen) {
      intro.parentNode && intro.parentNode.removeChild(intro);
    } else {
      document.documentElement.style.overflow = "hidden";
      var close = function () {
        intro.classList.add("is-done");
        document.documentElement.style.overflow = "";
        try { sessionStorage.setItem("argensys_intro", "1"); } catch (e) {}
        setTimeout(function () {
          intro.parentNode && intro.parentNode.removeChild(intro);
        }, 800);
      };
      setTimeout(close, 2200);
      intro.addEventListener("click", close);
    }
  }

  /* ----- Navegación móvil ------------------------------------------------ */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ----- Scroll-reveal (R3) --------------------------------------------- */
  var reveals = document.querySelectorAll(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    [].forEach.call(reveals, function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    [].forEach.call(reveals, function (el) { io.observe(el); });
  }
})();
