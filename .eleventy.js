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

eleventyConfig.addFilter("filterByType", function (collection, type) {
  return collection.filter(item => item.data.type === type);
});

eleventyConfig.addFilter("readableDate", dateObj => {
  return new Date(dateObj).toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
});


  
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

