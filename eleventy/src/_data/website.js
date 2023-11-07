const moment = require("moment")
const axios = require("axios")
const display = require("../../package.json").version

module.exports = function () {
  const now = moment()
  const today = now.format("DD/MM/YYYY")
  const website = `https://my-profile-api.netlify.app/.netlify/functions/website`
  const company = `https://my-profile-api.netlify.app/.netlify/functions/company`

  return Promise.all([axios.get(website), axios.get(company)]).then(
    ([website, company]) => {
      return {
        ...website.data,
        title: company.data.name,
        company: company.data,
        display,
        year: now.year(),
        today,
      }
    }
  )
}
