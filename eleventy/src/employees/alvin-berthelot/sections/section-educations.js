module.exports = function (educationsSection) {
  const displayEducation = (education) => `
<li>
  <span class="text-base text-black text-opacity-90">
    ${education.title}
  </span>
</li>
`

  const displayEducationsByYear = (educationByYear) => `
<li>
  <section class="mb-4">
    <h3 class="text-4xl">
      ${educationByYear.year}
    </h3>
    <ul class="list-outside">
      ${educationByYear.educations.map(displayEducation).join(``)}
    </ul>
  </section>
</li>
`

  const educationsByYear = educationsSection.educationsByYear
    .map(displayEducationsByYear)
    .join(``)

  return `
<section id="educations">
  <div class="educations-content">
    <h2 class="title">
      ${educationsSection.title}
    </h2>
    <ul class="list-educations">
      ${educationsByYear}
    </ul>
  </div>
</section>
`
}
