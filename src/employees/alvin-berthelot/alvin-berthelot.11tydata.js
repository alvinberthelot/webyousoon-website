const axios = require("axios")

module.exports = function () {
  const url = `https://my-profile-api.netlify.app/.netlify/functions/website`
  return axios.get(url).then((response) => response.data)
}
