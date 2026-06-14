module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "content/carpeta-de-fotos": "carpeta-de-fotos",
    "content/lego": "lego",
    "content/logo.png": "logo.png"
  });

  return {
    dir: {
      input: "content",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "dist"
    }
  };
};
