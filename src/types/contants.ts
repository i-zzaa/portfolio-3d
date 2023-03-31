export interface NavLinksType {
  id: string;
  title: string;
}

export interface ServicesType {
  title: string;
  icon: any;
}

export interface TechnologiesType {
  name: string;
  icon: any;
}

export interface ExperiencesType {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export interface TestimonialsType {
  index?: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export interface TagsType {
  name: string;
  color: string;
}

export interface ProjectsType {
  index?: number;
  name: string;
  description: string;
  tags: TagsType[];
  image: string;
  source_code_link: string;
}
