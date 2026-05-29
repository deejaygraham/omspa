const MarkdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  eleventyConfig.setLibrary("md", new MarkdownIt({ html: true }));
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    pathPrefix: "/omspa/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"]
  };
};
