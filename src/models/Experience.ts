import { Tags } from  './Tags';
import { ExperienceEntry } from './ExperienceEntry';
import { Model } from './Model';

export class Experience extends Model {
  title: string;
  entries: ExperienceEntry[];

  constructor(id:number|string) {
    super(id);
  }
}