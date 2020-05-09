const moment = require("moment")
const { groupBy, sortBy } = require("lodash")

function mapData(data) {
  const result = {
    ...data,
    educationSection: mapEducationSection(data.educationSection),
    eventsSection: mapEventsSection(data.eventsSection),
  }
  return result
}

function mapEducationSection(educationSection) {
  return {
    ...educationSection,
    educationsByYear: mapEducations(educationSection.educations),
  }
}

function mapEducations(educations) {
  const educationsDated = educations.map((education) => ({
    ...education,
    date: moment(education.date, "DD-MM-YYYY"),
  }))
  const educationsGroupByYear = groupBy(educationsDated, (education) =>
    education.date.year()
  )
  const yearsSortedDesc = sortBy(Object.keys(educationsGroupByYear)).reverse()
  const result = yearsSortedDesc.map((year) => ({
    year: +year,
    educations: educationsGroupByYear[year],
  }))
  return result
}

function mapEventsSection(eventsSection) {
  return {
    ...eventsSection,
    eventsByYear: mapEvents(eventsSection.events),
  }
}

function mapEvents(events) {
  const eventsDated = events.map((event) => ({
    ...event,
    date: moment(event.date, "DD-MM-YYYY"),
  }))
  const eventsGroupByYear = groupBy(eventsDated, (event) => event.date.year())
  const yearsSortedDesc = sortBy(Object.keys(eventsGroupByYear)).reverse()
  const result = yearsSortedDesc.map((year) => ({
    year: +year,
    events: eventsGroupByYear[year],
  }))
  return result
}

module.exports = {
  mapData,
  mapEvents,
}
