module.exports = function (eventsSection) {
  const displaySession = (session) => {
    let output = ""
    if (session) {
      output = `<p class="text-xs text-cyan">${session.title}</p>`
    }
    return output
  }

  const displayEvent = (event) => `
<li class="">
  <span>
    <p>
      <a
        href="${event.website}"
        class="text-sm text-black text-opacity-80"
        target="_blank"
        >${event.title}</a
      >
    </p>
    ${displaySession(event.session)}
  </span>
</li>
`

  const displayEventsByYear = (eventsByYear) => `
<li>
  <section class="mb-4">
    <h3 class="text-opacity-20">
      ${eventsByYear.year}
    </h3>
    <ul class="list-outside list-square">
      ${eventsByYear.events.map(displayEvent).join("")}
    </ul>
  </section>
</li>
`

  return `
<section id="events">
  <h2 class="title">
    ${eventsSection.title}
  </h2>
  <p class="description">
    ${eventsSection.description}
  </p>
  <ul class="list-events">
    ${eventsSection.eventsByYear.map(displayEventsByYear).join("")}
  </ul>
</section>
`
}
