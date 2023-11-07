module.exports = function (data) {
  return `
<section id="jumbotron">
  <div class="text">
    <h1>
      ${data.firstname} ${data.lastname}
    </h1>
    <p class="py-2">${data.skillsSection.description}</p>
  </div>
  <div class="picture">
    <img src="assets/pictures/jumbotron-alvin-berthelot.jpg" alt="Photo de profil ${data.firstname} ${data.lastname}" />
  </div>
</section>
`
}
