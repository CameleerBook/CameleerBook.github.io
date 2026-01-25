export interface CaseStudy {
  name: string;
  link: string;
}

export interface Chapter {
  name: string;
  number: number;
  icon: string;
  proofs: CaseStudy[];
  exercises: CaseStudy[];
}

export const chapterList: Chapter[] = require('@/assets/chapters.json');