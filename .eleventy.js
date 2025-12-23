module.exports = function (eleventyConfig) {

  /* ===============================
     Static / Passthrough Files
     =============================== */

  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/content");

  /* ===============================
     Writings Collection (Lekha)
     =============================== */

  eleventyConfig.addCollection("writings", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/content/writings/*.md")
      .sort((a, b) => b.date - a.date); // latest first
  });

  /* ===============================
     Directory Structure
     =============================== */

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    }
  };
};

