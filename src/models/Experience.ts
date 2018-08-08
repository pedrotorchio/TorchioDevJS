import { Tags } from  './Tags';
import ExperienceEntry from './ExperienceEntry';

export class Experience {
  title: String;
  tags: Tags;
  entries: [ExperienceEntry];
}