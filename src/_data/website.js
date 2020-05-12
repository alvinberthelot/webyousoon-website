const moment = require("moment")
const axios = require("axios")
const display = require("../../package.json").version

module.exports = function () {
  const now = moment()
  const today = now.format("DD/MM/YYYY")
  const url = `https://my-profile-api.netlify.app/.netlify/functions/website`
  return axios.get(url).then((response) => ({
    ...response.data,
    title: "Webyousoon",
    display,
    year: now.year(),
    today,
  }))
}
