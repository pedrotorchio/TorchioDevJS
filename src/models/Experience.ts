import { Tags } from  './Tags';
import { ExperienceEntry } from './ExperienceEntry';

export class Experience {
  title: string;
  tags: Tags;
  entries: [ExperienceEntry];
}