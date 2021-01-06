const pluginRss = require("@11ty/eleventy-plugin-rss")

const { experienceDate, htmlDateString } = require("./src/utils/dates")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addFilter("experienceDate", experienceDate)
  eleventyConfig.addFilter("htmlDateString", htmlDateString)
  if (process.env.NODE_ENV === "production") {
    eleventyConfig.addTransform(
      "htmlmin",
      require("./src/utils/minify-html.js")
    )
  }

  eleventyConfig.setTemplateFormats(["njk", "11ty.js"])
  eleventyConfig.addPassthroughCopy("src/robots.txt")
  eleventyConfig.addPassthroughCopy("src/.htaccess")
  eleventyConfig.addPassthroughCopy("src/sitemap.xml")
  eleventyConfig.addPassthroughCopy("src/assets")
  eleventyConfig.addPassthroughCopy({
    "node_modules/chart.js/dist/Chart.min.css":
      "assets/js/chartjs/Chart.min.css",
    "node_modules/chart.js/dist/Chart.min.js": "assets/js/chartjs/Chart.min.js",
  })
}
