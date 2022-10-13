const path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'jsonresume-themes.js',
    globalObject: "this",
    library: {
      name: "jsonResumeThemes",
      type: "umd",
    },
  },
  module: {
    rules: [{ test: /\.hbs$/, use: 'handlebars-loader' }],
  },
  mode: 'none',
};
