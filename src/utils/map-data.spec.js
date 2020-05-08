const moment = require("moment")
const { mapEvents } = require("./map-data.js")

describe(`GIVEN function mapEvents`, () => {
  describe(`WHEN parameter is an array of events`, () => {
    test(`THEN should return events grouped by year`, () => {
      const input = [
        {
          title: "DotJS",
          website: "https://www.dotjs.io",
          date: "05-12-2019",
        },
        {
          title: "DotCSS",
          website: "https://www.dotcss.io",
          date: "04-12-2018",
        },
        {
          title: "Hello World",
          website: "https://hello-world-conference.github.io/",
          date: "15-11-2018",
          organizer: true,
        },
        {
          title: "DevFest Nantes",
          website: "https://devfest.gdgnantes.com",
          date: "21-10-2015",
        },
      ]
      const expected = [
        {
          year: 2019,
          events: [
            {
              title: "DotJS",
              website: "https://www.dotjs.io",
              date: moment("05-12-2019", "DD-MM-YYYY"),
            },
          ],
        },
        {
          year: 2018,
          events: [
            {
              title: "DotCSS",
              website: "https://www.dotcss.io",
              date: moment("04-12-2018", "DD-MM-YYYY"),
            },
            {
              title: "Hello World",
              website: "https://hello-world-conference.github.io/",
              date: moment("15-11-2018", "DD-MM-YYYY"),
              organizer: true,
            },
          ],
        },
        {
          year: 2015,
          events: [
            {
              title: "DevFest Nantes",
              website: "https://devfest.gdgnantes.com",
              date: moment("21-10-2015", "DD-MM-YYYY"),
            },
          ],
        },
      ]
      const output = mapEvents(input)
      expect(output).toEqual(expected)
    })
  })
})
