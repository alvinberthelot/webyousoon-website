import { groupBy, sortBy } from "lodash-es";
import type {
  Education,
  EducationsSection,
  Employee,
  Event,
  EventsSection,
} from "../types/employee.types";
import moment from "moment";

export function mapEmployee(employee: Employee) {
  const result = {
    ...employee,
    educationsSection: mapEducationsSection(employee.educationsSection),
    eventsSection: mapEventsSection(employee.eventsSection),
  };
  return result;
}

function mapEducationsSection(educationsSection: EducationsSection) {
  return {
    ...educationsSection,
    educationsByYear: mapEducations(educationsSection.educations),
  };
}

function mapEducations(educations: Education[]) {
  const educationsDated = educations.map((education) => ({
    ...education,
    date: moment(education.date, "YYYY-MM-DD"),
  }));
  const educationsGroupByYear = groupBy(educationsDated, (education) =>
    education.date.year()
  );
  const yearsSortedDesc = sortBy(Object.keys(educationsGroupByYear)).reverse();
  const result = yearsSortedDesc.map((year) => ({
    year: +year,
    educations: educationsGroupByYear[year],
  }));
  return result;
}

function mapEventsSection(eventsSection: EventsSection) {
  return {
    ...eventsSection,
    eventsByYear: mapEvents(eventsSection.events),
  };
}

function mapEvents(events: Event[]) {
  const eventsDated = events.map((event) => ({
    ...event,
    date: moment(event.date, "YYYY-MM-DD"),
  }));
  const eventsGroupByYear = groupBy(eventsDated, (event) => event.date.year());
  const yearsSortedDesc = sortBy(Object.keys(eventsGroupByYear)).reverse();
  const result = yearsSortedDesc.map((year) => ({
    year: +year,
    events: eventsGroupByYear[year],
  }));
  return result;
}
