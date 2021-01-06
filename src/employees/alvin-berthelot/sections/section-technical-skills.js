module.exports = function (technicalSkillsSection) {
  const aggregates = technicalSkillsSection.aggregates
    .map((aggregate) => require("./aggregates")(aggregate))
    .join("")
  return `
<section id="technical-skills">
  <h2 class="title">
    ${technicalSkillsSection.title}
  </h2>
  <p class="description">${technicalSkillsSection.description}</p>
</section>
${aggregates}
`
}
