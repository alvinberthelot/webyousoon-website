module.exports = function (skillsSection) {
  const skills = skillsSection.skills
    .map((skill) => require("./skill")(skill))
    .join(``)
  return `
<section id="skills">
  <h2 class="title">
    ${skillsSection.title}
  </h2>
  <ul class="list-skills">${skills}</ul>
</section>
`
}
