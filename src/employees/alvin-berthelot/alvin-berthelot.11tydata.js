const axios = require("axios")
const { mapData } = require("../../utils/map-data")

module.exports = function () {
  const url = `https://my-profile-api.netlify.app/.netlify/functions/website-alvin-berthelot`
  return axios.get(url).then((response) => mapData(response.data))
}
