module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/js/");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");

  return {
    dir: {
      input: "src",
      output: "_public",
    },
  };
};
