module.exports = function (eleventyConfig) {

  // Markdown support (default is enough)
  eleventyConfig.setLibrary("md", require("markdown-it")({
    html: true,
    breaks: true,
    linkify: true
  }));

  // Static assets passthrough
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "../content"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
