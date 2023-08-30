module.exports = function (skill) {
  const subskills = skill.subskills
    .map((subskill) => `<li>${subskill}</li>`)
    .join(``)

  return `
<li>
  <div>
    <h3 class="text-opacity-90 mb-2">
      ${skill.title}
    </h3>
    <p class="period">${skill.period}</p>
    <ul class="list-square list-inside mb-6">${subskills}</ul>
  </div>
</li>
`
}
