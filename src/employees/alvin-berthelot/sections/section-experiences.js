const { experienceDate } = require("../../../utils/dates")

module.exports = function (experiencesSection) {
  const displayTask = (task) => `
<li class="mb-1">
  <span class="text-sm">${task}</span>
</li>
`

  const displayTag = (tag) => `
<li class="my-1">
  <span class="bg-gray-100 px-2 py-1 m-1 text-sm">
    <span class="text-sm text-black text-opacity-20">#</span>
    <span class="text-black text-opacity-60">${tag.wording}</span>
  </span>
</li>
`

  const displayExperience = (experience) => `
<li class="mb-4">
  <div id="experience" class="py-6 text-black text-opacity-80">
    <div class="experience-content">
      <h3 class="text-opacity-90">${experience.company}</h3>
      <div
        class="flex border-b-2 border-gold py-2 text-sm text-black text-opacity-50"
      >
        <div class="flex-grow-0">
          De ${experienceDate(experience.dateBegin)} à ${experienceDate(
    experience.dateEnd
  )}
        </div>
        <div class="flex-grow"></div>
        <div class="flex-grow-0">${experience.place}</div>
      </div>
      <p class="text-xl mt-2 py-2 font-semibold">${experience.title}</p>
      <p class="text-base py-1">${experience.description}</p>
      <ul class="list-square list-inside py-2">
        ${experience.tasks.map(displayTask).join("")}
      </ul>
    </div>
    <div class="experience-metadata">
      <p class="text-sm text-black text-opacity-50 italic mb-1">
        Environnement technique
      </p>
      <ul class="flex flex-wrap">
        ${experience.tags.map(displayTag).join("")}
      </ul>



<div style="width: 100%;">
  <canvas id="canvas"></canvas>
</div>
<script>
  var colorCustom = "#FFC107"
  var randomScalingFactor = function () {
    return Math.round(Math.random() * 100)
  }

  // console.log("test", technicalSkillsSection.aggregates);
  

  var color = Chart.helpers.color
  var config = {
    type: "radar",
    data: {
      labels: [
        "Web",
        "SPA",
        "Mobile",
        "Node.js",
        "Java EE",
        "Base de données",
        "Tests",
        "Déploiement",
        "Qualité"
      ],
      datasets: [
        {
          backgroundColor: color(colorCustom).alpha(0.2).rgbString(),
          borderColor: colorCustom,
          pointBackgroundColor: colorCustom,
          pointRadius: 0,
          data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
          ],
        },
      ],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      scale: {
        angleLines: {
          display: true,
          ticks: {
            display: false
          }
        },
      }
    },
  }

  window.onload = function () {
    window.myRadar = new Chart(document.getElementById("canvas"), config)
  }


</script>


    </div>
  </div>
</li>
`

  return `
<section id="experiences">
  <h2 class="title">
    ${experiencesSection.title}
  </h2>
  <ul class="list-experiences">
    ${experiencesSection.experiences.map(displayExperience).join(``)}
  </ul>
</section>
`
}
