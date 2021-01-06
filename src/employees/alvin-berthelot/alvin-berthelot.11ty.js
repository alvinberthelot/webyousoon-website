const axios = require("axios")
const { mapData } = require("../../utils/map-data")

class Employee {
  data() {
    const url = `https://my-profile-api.netlify.app/.netlify/functions/website-alvin-berthelot`
    return axios.get(url).then((response) => {
      const data = mapData(response.data)
      return {
        data,
        layout: "layouts/main.layout.njk",
        permalink: (data) =>
          `/${data.data.firstname.toLowerCase()}-${data.data.lastname.toLowerCase()}.html`,
      }
    })
  }

  render(renderData) {
    const jumbotronSection = require("./sections/section-jumbotron")(
      renderData.data
    )
    const skillsSection = require("./sections/section-skills")(
      renderData.data.skillsSection
    )
    const technicalSkillsSection = require("./sections/section-technical-skills")(
      renderData.data.technicalSkillsSection
    )
    const educationsSection = require("./sections/section-educations")(
      renderData.data.educationSection
    )
    const experiencesSection = require("./sections/section-experiences")(
      renderData.data.workExperienceSection
    )
    const eventsSection = require("./sections/section-events")(
      renderData.data.eventsSection
    )

    return `
    ${jumbotronSection}
    ${skillsSection}
    ${technicalSkillsSection}
    ${educationsSection}
    ${experiencesSection}
    ${eventsSection}
    `
  }
}

module.exports = Employee
