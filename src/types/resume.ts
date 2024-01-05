interface Location {
  city: string;
  country: string;
}

interface Profile {
  network: 'LinkedIn' | 'GitHub' | 'X';
  username: string;
  url: string;
}

interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Profile[];
}

interface Work {
  name: string;
  url: string;
  positions: Position[];
  location?: Location;
  type?:
    | 'Remote'
    | 'Freelance'
    | 'Full-time'
    | 'Part-time'
    | 'Contract'
    | 'Internship';
}

interface Position {
  name: string;
  startDate: string;
  endDate?: string;
  summary?: string;
}

interface Education {
  institution: string;
  url?: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  score?: string;
}

interface Certificate {
  name: string;
  date: string;
  issuer: string;
  url?: string;
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  url: string;
}

export interface Resume {
  basics: Basics;
  work: Work[];
  education: Education[];
  certificates: Certificate[];
  skills: string[];
  projects: Project[];
}
