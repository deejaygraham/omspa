const MarkdownIt = require("markdown-it");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.setLibrary("md", new MarkdownIt({ html: true }));
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addGlobalData("buildDate", () => new Date().toUTCString());
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "original/strpat_handbook_from_opsma_2e": "original" });

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
