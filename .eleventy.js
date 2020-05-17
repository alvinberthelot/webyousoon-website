module.exports = function (eleventyConfig) {
  // minify the html output when running in prod
  if (process.env.NODE_ENV == "production") {
    eleventyConfig.addTransform(
      "htmlmin",
      require("./src/utils/minify-html.js")
    )
  }

  eleventyConfig.setTemplateFormats(["njk"])
  eleventyConfig.addPassthroughCopy("src/robots.txt")
  eleventyConfig.addPassthroughCopy("src/.htaccess")
  eleventyConfig.addPassthroughCopy("src/sitemap.xml")
  eleventyConfig.addPassthroughCopy("src/assets")
}
