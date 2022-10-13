# jsonresume-themes
[JSON Resume](https://jsonresume.org/) themes that are strictly Handlebars templates.

JSON Resume is an awesome open standard, and the themes that the community has built are outstanding. Unfortunately, each theme is its own package with its own dependencies, and most often an assumption of non-browser use only. For [resume-optimizer](https://github.com/panasenco/resume-optimizer), I need to be able to render multiple JSON Resume themes in a web browser, hence this repo.


## Design principles

1.  Generate a single module file `dist/jsonresume-themes.js` containing multiple resume themes.
2.  The file `dist/jsonresume-themes.js` should be usable in both web browsers and Node.js.
    You should be able to get the themes module by either of these methods:
    - Call `require("jsonresume-themes")` after installing `jsonresume-themes` through `npm`.
    - Call `require("path/to/jsonresume-themes.js")`.
    - Include it in a `<script>` tag in a web browser and then reference with `window.jsonResumeThemes`.
3.  The referenced module should contain callable functions that take in valid JSON Resume objects and output HTML strings. For example, the call `window.jsonResumeThemes.onepage({...})` should return an HTML string.

## Usage

Clone the repo and then

```
npm install
```

This will compile all template files with extension `.hbs` into the file `dist/jsonresume-themes.js`


## Contributing

Convert an existing Handlebars-based JSON Resume theme to a Handlebars template that can be packaged with [handlebars-loader](https://github.com/pcardune/handlebars-loader) (follow this link to see how to include other files inside the template). Copy the original license to the template's folder. Add a `README.md` file containing a link to the original theme.

