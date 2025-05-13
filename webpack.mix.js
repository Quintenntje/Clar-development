let mix = require("laravel-mix");

mix.js("src/scripts/main.js", "build").setPublicPath("build").version();

mix.postCss("src/styles/main.css", "build").version();

mix.browserSync({
  server: true,
});
