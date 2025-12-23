module.exports = function (eleventyConfig) {
  // Static assets
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("content");

eleventyConfig.addCollection("writings", function (collectionApi) {
  return collectionApi
    .getFilteredByGlob("content/writings/*.md")
    .sort((a, b) => b.date - a.date);
});

  
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    }
  };
};
