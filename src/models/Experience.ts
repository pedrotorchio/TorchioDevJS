import { ExperienceEntry } from './ExperienceEntry';
import { Model } from  'js-models-helper';

export class Experience extends Model {
  title: string;
  entries: ExperienceEntry[];

  constructor(id:number|string) {
    super(id);
  }
}