const { DateTime } = require("luxon")

const experienceDate = (dateISO) => {
  if (dateISO === null) {
    return `aujourd'hui`
  }
  return DateTime.fromISO(dateISO, { zone: "utc" })
    .setLocale("fr")
    .toFormat("LLLL yyyy")
}

const htmlDateString = (dateObj) =>
  DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd")

module.exports = {
  experienceDate,
  htmlDateString,
}
