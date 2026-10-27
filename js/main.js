/* Caleb Agbodeka — site scripts */
(function () {
  "use strict";

  var WHATSAPP = "233559588573";
  var EMAIL = "agbodekacalebkm@gmail.com";
  var projects = window.PROJECTS || [];

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function waLink(text) {
    return "https://wa.me/" + WHATSAPP + (text ? "?text=" + encodeURIComponent(text) : "");
  }

  function icon(name) {
    return '<svg aria-hidden="true"><use href="#i-' + name + '"></use></svg>';
  }

  function hostOf(url) {
    try { return new URL(url).hostname.replace(/^www\./, ""); } catch (e) { return ""; }
  }

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Package buttons: pre-filled WhatsApp message ---------- */
  document.querySelectorAll("[data-package]").forEach(function (el) {
    el.href = waLink("Hi Caleb, I'm interested in the " + el.getAttribute("data-package") + ". Can we talk about my website?");
  });

  /* ---------- Hero preview: newest project ---------- */
  var heroDesktop = document.querySelector("[data-hero-desktop]");
  if (heroDesktop && projects[0]) {
    var first = projects[0];
    var firstMobile = (first.screenshots || []).filter(function (s) { return s.type === "mobile"; })[0];
    heroDesktop.src = first.cover;
    var heroMobile = document.querySelector("[data-hero-mobile]");
    if (heroMobile && firstMobile) heroMobile.src = firstMobile.src;
    var heroHost = document.querySelector("[data-hero-host]");
    if (heroHost) heroHost.textContent = hostOf(first.url) || first.slug + ".com";
  }

  /* ---------- Work grid (home page) ---------- */
  var grid = document.getElementById("work-grid");
  if (grid) {
    grid.innerHTML = projects.map(function (p) {
      return (
        '<a class="work-card" href="project.html?p=' + encodeURIComponent(p.slug) + '">' +
          '<div class="work-thumb">' +
            '<img src="' + esc(p.cover) + '" alt="' + esc(p.name) + ' website" loading="lazy" width="1440" height="900">' +
            (p.sample ? '<span class="tag-sample">Sample</span>' : "") +
          "</div>" +
          '<div class="work-body">' +
            '<div class="work-meta">' + esc(p.category) + " · " + esc(p.year) + "</div>" +
            "<h3>" + esc(p.name) + "</h3>" +
            "<p>" + esc(p.summary) + "</p>" +
            '<span class="work-link">View project ' + icon("arrow") + "</span>" +
          "</div>" +
        "</a>"
      );
    }).join("");
  }

  /* ---------- Project page ---------- */
  var root = document.getElementById("project-root");
  if (root) {
    var slug = new URLSearchParams(location.search).get("p");
    var index = -1;
    for (var i = 0; i < projects.length; i++) if (projects[i].slug === slug) index = i;

    if (index === -1) {
      document.title = "Project not found | Caleb Agbodeka";
      root.innerHTML =
        '<section class="not-found"><div class="wrap">' +
          "<h1>Project not found</h1>" +
          "<p>That project may have moved. Have a look at the rest of my work.</p>" +
          '<a class="btn btn--primary" href="index.html#work">See all work</a>' +
        "</div></section>";
      return;
    }

    var p = projects[index];
    var prev = projects[(index - 1 + projects.length) % projects.length];
    var next = projects[(index + 1) % projects.length];
    var shots = p.screenshots || [];
    var desktop = shots.filter(function (s) { return s.type !== "mobile"; });
    var mobile = shots.filter(function (s) { return s.type === "mobile"; });
    var host = hostOf(p.url);

    document.title = p.name + " website | Caleb Agbodeka, Web Design Ghana";
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", p.name + ": " + p.summary + " Website by Caleb Agbodeka.");

    function browserFrame(s) {
      return '<figure class="browser" style="margin:0"><div class="browser-bar"><i></i><i></i><i></i><span>' + esc(host || p.slug + ".com") + "</span></div>" +
        '<img src="' + esc(s.src) + '" alt="' + esc(s.alt) + '" width="1440" height="900"></figure>';
    }
    function phoneFrame(s) {
      return '<figure class="phone" style="margin:0 auto"><img src="' + esc(s.src) + '" alt="' + esc(s.alt) + '" width="390" height="844" loading="lazy"></figure>';
    }

    var visit = p.url
      ? '<a class="btn btn--primary" href="' + esc(p.url) + '" target="_blank" rel="noopener">Visit live site ' + icon("external") + "</a>"
      : '<a class="btn btn--primary" aria-disabled="true">Live link coming soon</a>';

    root.innerHTML =
      '<section class="project-hero"><div class="wrap">' +
        '<a class="back-link" href="index.html#work">' + icon("arrow") + "All work</a>" +
        '<div class="eyebrow">' + esc(p.category) + "</div>" +
        "<h1>" + esc(p.name) + "</h1>" +
        '<p class="lead">' + esc(p.summary) + "</p>" +
        '<ul class="project-tags"><li>' + esc(p.year) + "</li>" +
          (p.location ? "<li>" + esc(p.location) + "</li>" : "") +
          (p.package ? "<li>" + esc(p.package) + " package</li>" : "") +
        "</ul>" +
        '<div class="hero-actions">' + visit +
          '<a class="btn btn--outline" href="' + waLink("Hi Caleb, I saw the " + p.name + " website. I'd like something similar for my business.") + '" target="_blank" rel="noopener">I want one like this</a>' +
        "</div>" +
        (p.sample ? '<span class="sample-note">This is a sample project to show the layout. Real client work coming soon.</span>' : "") +
      "</div></section>" +

      '<div class="wrap">' +
        '<div class="shots">' +
          (desktop[0] ? browserFrame(desktop[0]) : "") +
          (mobile[0] ? phoneFrame(mobile[0]) : "") +
        "</div>" +

        '<div class="project-body">' +
          "<div>" +
            "<h2>About the project</h2>" +
            "<p>" + esc(p.description) + "</p>" +
            '<h3 style="margin-top:32px">What I did</h3>' +
            '<ul class="checklist">' + (p.whatIDid || []).map(function (w) {
              return "<li>" + icon("check") + "<span>" + esc(w) + "</span></li>";
            }).join("") + "</ul>" +
          "</div>" +
          '<aside class="facts">' +
            "<dl>" +
              "<dt>Client</dt><dd>" + esc(p.name) + "</dd>" +
              "<dt>Industry</dt><dd>" + esc(p.category) + "</dd>" +
              "<dt>Year</dt><dd>" + esc(p.year) + "</dd>" +
              (p.location ? "<dt>Location</dt><dd>" + esc(p.location) + "</dd>" : "") +
              (host ? '<dt>Website</dt><dd><a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(host) + "</a></dd>" : "") +
            "</dl>" +
            "<div><strong>Tech used</strong>" +
              '<ul class="chips" style="margin-top:10px">' + (p.tech || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" +
            "</div>" +
            visit.replace("btn--primary", "btn--primary btn--block") +
          "</aside>" +
        "</div>" +

        (desktop.length > 1 || mobile.length > 1
          ? '<div class="more-shots">' +
              desktop.slice(1).map(browserFrame).join("") +
              mobile.slice(1).map(phoneFrame).join("") +
            "</div>"
          : "") +

        '<nav class="pager" aria-label="More projects">' +
          '<a href="project.html?p=' + encodeURIComponent(prev.slug) + '"><small>Previous project</small><strong>' + esc(prev.name) + "</strong></a>" +
          '<a class="next" href="project.html?p=' + encodeURIComponent(next.slug) + '"><small>Next project</small><strong>' + esc(next.name) + "</strong></a>" +
        "</nav>" +
      "</div>" +

      '<section class="section"><div class="wrap"><div class="cta-band">' +
        "<div><h2>Want a website like this?</h2><p>Tell me about your business and I'll send you a clear quote, usually the same day.</p></div>" +
        '<a class="btn btn--accent" href="' + waLink("Hi Caleb, I'd like a website for my business.") + '" target="_blank" rel="noopener">' + icon("whatsapp") + "Chat on WhatsApp</a>" +
      "</div></div></section>";
  }

  /* ---------- Contact form: sends via WhatsApp or email (no server needed) ---------- */
  var form = document.getElementById("quote-form");
  if (form) {
    function buildMessage() {
      var d = new FormData(form);
      var lines = ["Hi Caleb, I'd like a website."];
      if (d.get("name")) lines.push("Name: " + d.get("name"));
      if (d.get("business")) lines.push("Business: " + d.get("business"));
      if (d.get("package")) lines.push("Package: " + d.get("package"));
      if (d.get("message")) lines.push("", d.get("message"));
      return lines.join("\n");
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      window.open(waLink(buildMessage()), "_blank", "noopener");
    });
    var emailBtn = document.getElementById("send-email");
    if (emailBtn) {
      emailBtn.addEventListener("click", function () {
        if (!form.reportValidity()) return;
        location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Website enquiry") + "&body=" + encodeURIComponent(buildMessage());
      });
    }
  }
})();
