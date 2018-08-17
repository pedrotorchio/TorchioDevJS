import { Model } from  'js-models-helper';

export class ExperienceEntry extends Model {
  text: string;
  date_range: string;
  location: string;
  
  constructor(id:number|string) {
    super(id);
  }
}