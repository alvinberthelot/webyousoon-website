module.exports = function (data) {
  return `
<section id="jumbotron">
  <div class="text">
    <h1>
      ${data.firstname} ${data.lastname}
    </h1>
    <p class="py-2"></p>
    <!-- <p class="py-1">Ici vous retrouverez</p> -->
    <ul class="py-1 text-sm">
      <li><a href="#skills">${data.skillsSection.title}</a></li>
      <li>
        <a href="#technical-skills">${data.technicalSkillsSection.title}</a>
      </li>
      <li>
        <a href="#educations">${data.educationsSection.title}</a>
      </li>
      <li>
        <a href="#experiences">${data.experiencesSection.title}</a>
      </li>
      <li>
        <a href="#events">${data.eventsSection.title}</a>
      </li>
    </ul>
  </div>
  <div class="picture">
    <img src="assets/pictures/jumbotron-alvin-berthelot.jpg" alt="" />
  </div>
</section>
`
}
