module.exports = function (skillsSection) {
  const skills = skillsSection.skills
    .map((skill) => require("./skill")(skill))
    .join(``)
  return `
<section id="skills">
  <h2 class="title">
    ${skillsSection.title}
  </h2>
  <p class="description">
    ${skillsSection.description}
  </p>
  <div class="list-skills">
    <ul>${skills}</ul>
  </div>
</section>
`
}
