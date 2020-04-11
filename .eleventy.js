module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["njk"])
  eleventyConfig.addPassthroughCopy("src/robots.txt")
}
