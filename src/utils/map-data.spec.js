const moment = require("moment")
const { mapEvents } = require("./map-data.js")

describe(`GIVEN function mapEvents`, () => {
  describe(`WHEN parameter is an array of events`, () => {
    test(`THEN should return events grouped by year`, () => {
      const input = [
        {
          title: "DotJS",
          website: "https://www.dotjs.io",
          date: "2019-12-05",
        },
        {
          title: "DotCSS",
          website: "https://www.dotcss.io",
          date: "2018-12-04",
        },
        {
          title: "Hello World",
          website: "https://hello-world-conference.github.io/",
          date: "2018-11-15",
          organizer: true,
        },
        {
          title: "DevFest Nantes",
          website: "https://devfest.gdgnantes.com",
          date: "2015-10-21",
        },
      ]
      const expected = [
        {
          year: 2019,
          events: [
            {
              title: "DotJS",
              website: "https://www.dotjs.io",
              date: moment("2019-12-05", "YYYY-MM-DD"),
            },
          ],
        },
        {
          year: 2018,
          events: [
            {
              title: "DotCSS",
              website: "https://www.dotcss.io",
              date: moment("2018-12-04", "YYYY-MM-DD"),
            },
            {
              title: "Hello World",
              website: "https://hello-world-conference.github.io/",
              date: moment("2018-11-15", "YYYY-MM-DD"),
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
              date: moment("2015-10-21", "YYYY-MM-DD"),
            },
          ],
        },
      ]
      const output = mapEvents(input)
      expect(output).toEqual(expected)
    })
  })
})
