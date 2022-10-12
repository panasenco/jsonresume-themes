const fs = require("fs");
const path = require("path");

const Handlebars = require("handlebars");
const hbsPartialFile = require('handlebars-partial-file')();

const INDEX_NAME = "index.html.hbs";
const OUT_DIR = "dist";

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR);
}

for (templateDir of fs.readdirSync(".")) {
  if (!templateDir.startsWith("template-") || !fs.statSync(templateDir).isDirectory()) {
    continue
  }
  console.log("Found template directory:", templateDir);
  // Clear old partials
  for (let partial in Handlebars.partials) {
    Handlebars.unregisterPartial(partial)
  }
  // Register all files in this particular directory as partials
  hbsPartialFile.registerDirectory(templateDir);
  // Precompile the template index.html.hbs
  let templateContents = fs.readFileSync(path.join(templateDir, INDEX_NAME), "utf8");
  let precompiledContents = Handlebars.precompile(templateContents);
  fs.writeFileSync(path.join("dist", templateDir + ".js"), precompiledContents);
}
