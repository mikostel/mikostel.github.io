# mikostel.github.io

My personal site. One static HTML page, styled with Tailwind CSS v4, deployed to
GitHub Pages by the workflow in `.github/workflows/deploy.yml` on every push to
`main`.

There is no framework and no client-side JavaScript. The only script on the page
is the Cloudflare Web Analytics beacon.

## Develop

```bash
npm install
npm run dev     # rebuilds styles.css on change
```

Serve the folder with any static server to view it: `npx http-server . -p 5173 -c-1`,
or the `static` configuration in `.claude/launch.json`.

## Build

```bash
npm run build
```

`build.mjs` compiles and minifies `input.css` into `styles.css`, then copies
`index.html`, `styles.css` and `assets/` into `docs/`, which is what the deploy
workflow publishes. `docs/` is generated and ignored by git.

## Layout

```
index.html              the page
input.css               Tailwind source: theme tokens and component classes
styles.css              compiled output (generated; git-ignored)
assets/photo.jpg        header portrait
assets/studies/*.pdf    case studies, linked from the work list
assets/icons/           arrow and social icons (now inlined in index.html)
assets/logos/           company logos (unused since the logo grid was removed)
```

## Editing content

Both lists in `index.html` are plain `<ul>`s of rows: a title, an optional role,
one line of description, and a right-hand meta column. Add an entry by copying a
`<li>` and changing the text. Styling comes from the `.row*` classes in
`input.css`, so markup stays declarative.
