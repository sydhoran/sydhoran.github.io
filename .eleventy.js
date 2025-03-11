  // This is all the stuff that Eleventy is going to process when it exports your site
  module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addWatchTarget("./src/images/");
    eleventyConfig.addPassthroughCopy("./src/js/");
    eleventyConfig.addWatchTarget("./src/js/");


    // These are the folders that Eleventy will use. "src" is where you edit files that Eleventy will then take in and export into "public," which you upload.
      return {
        dir: {
          input: "src",
          output: "public",
          includes: "_includes",
          layouts: "_includes/layout",
        },
      };
    };