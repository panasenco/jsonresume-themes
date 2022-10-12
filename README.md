# jsonresume-themes
[JSON Resume](https://jsonresume.org/) themes that are strictly Handlebars templates.

JSON Resume is an awesome open standard, and the themes that the community has built are outstanding. Unfortunately, each theme is its own package with its own dependencies, and most often an assumption of non-browser use only. For [resume-optimizer](https://github.com/panasenco/resume-optimizer), I need to be able to render JSON Resume themes in a web browser, hence this repo.


## Repository principles

1.  Only [Handlebars](https://handlebarsjs.com/) templates will be included - no other templating languages are allowed.
2.  It should be possible to [precompile](https://handlebarsjs.com/installation/precompilation.html) each included JSON Resume template. Precompiled templates should be able to perfectly render any valid version 1.0 JSON Resume. Therefore, there must be no logic external to the .hbs template itself.
3.  Certain standard [Handlebars partials](https://handlebarsjs.com/guide/partials.html) are allowed:
    - [handlebars-partials-file](https://www.npmjs.com/package/handlebars-partial-file)
    
    If you want more partials included, open a pull request.


## Rendering the templates

Clone the repo and then

```
npm install
npm run build
```

This will compile all the template files named `index.html.hbs` in folders beginning with `theme-` into Handlebars precompiled `.js` files in the folder `dist/`.
