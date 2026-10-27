# Caleb Agbodeka: portfolio website

Plain HTML, CSS and JavaScript. No build step.

## Files

```
index.html        Main page (hero, services, work, about, contact)
project.html      Project page template. Opens as project.html?p=<slug>
js/projects.js    ALL projects live here. Edit this to add work.
js/main.js        Menu, work grid, project pages, contact form
css/style.css     All styles (colours are at the top)
images/           Favicon, your photo, project screenshots
.htaccess         Compression and caching for Apache hosting
```

## Add a project

1. Open `js/projects.js`, copy one entry and paste it at the top of the list.
2. Change `slug`, name, text, year, tech and `url`.
3. Put screenshots in `images/projects/<slug>/` and update `cover` and `screenshots`.
   Recommended sizes: desktop 1440x900, mobile 390x844 (JPG or WebP).
4. Remove `sample: true` for real projects.
5. Upload the changed files.

## Replace your photo

Save it as `images/caleb.jpg` (portrait, about 800x1000) and in `index.html`
change `images/caleb-photo.svg` to `images/caleb.jpg`.

## Upload

In DirectAdmin File Manager, open `public_html`, upload the zip and choose Extract.
Make sure `index.html` ends up directly inside `public_html`.
