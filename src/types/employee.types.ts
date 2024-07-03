export type Subskill = {
  title: string;
  period: string;
  subskills: [];
};

export type Skill = {
  title: string;
  period: string;
  subskills: Subskill[];
};

export type SkillsSection = {
  title: string;
  description: string;
  skills: Skill[];
};

export type Substack = {
  title: string;
  knowledges: string[];
};

export type Stack = {
  title: string;
  substacks: Substack[];
};

export type Aggregate = {
  title: string;
  stacks: Stack[];
};

export type TechnicalSkillsSection = {
  title: string;
  description: string;
  aggregates: Aggregate[];
};

export type EducationsByYear = {
  year: string;
  educations: Education[];
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
  educationsByYear: Education[];
};

export type Tag = {
  tag: string;
  wording: string;
};

export type Experience = {
  id: string;
  title: string;
  company: string;
  description: string;
  tasks: string[];
  place: string;
  date: string;
  tags: Tag[];
  repository: string;
  downloads: string;
  dateBegin: string;
  dateEnd?: string;

  // duration: [Object];
  // scores: [Object];
};

export type ExperiencesSection = {
  title: string;
  description: string;
  experiences: Experience[];
};

export type EventsByYear = {
  year: string;
  events: Event[];
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
  eventsByYear: EventsByYear[];
};

export type Employee = {
  version: string;
  firstname: string;
  lastname: string;
  skillsSection: SkillsSection;
  technicalSkillsSection: TechnicalSkillsSection;
  educationsSection: EducationsSection;
  experiencesSection: ExperiencesSection;
  eventsSection: EventsSection;
};
