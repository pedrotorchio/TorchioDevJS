import { Model } from './Model';

export class ExperienceEntry extends Model {
  text: string;
  date_range: string;
  location: string;
  
  constructor(id:number|string) {
    super(id);
  }
}