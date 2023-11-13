export type Skill = {};

export type SkillsSection = {
  title: string;
  description: string;
  skills: Skill[];
};

export type Aggregate = {};

export type TechnicalSkillsSection = {
  title: string;
  description: string;
  aggregates: Aggregate[];
};

export type Education = {
  title: string;
  date: string;
  tags: string[];
};

export type EducationsSection = {
  title: string;
  description: string;
  educations: Education[];
};

export type Experience = {
  title: string;
  date: string;
  tags: string[];
};

export type ExperiencesSection = {
  title: string;
  description: string;
  experiences: Experience[];
};

export type Event = {
  title: string;
  date: string;
  tags: string[];
};

export type EventsSection = {
  title: string;
  description: string;
  events: Event[];
};

export type Employee = {
  version: string;
  firstName: string;
  lastName: string;
  skillsSection: SkillsSection;
  technicalskillsSection: TechnicalSkillsSection;
  educationsSection: EducationsSection;
  experiencesSection: ExperiencesSection;
  eventsSection: EventsSection;
};
