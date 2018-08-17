import { Image } from  'js-models-helper';
import { Model } from  'js-models-helper';

export class Education extends Model {
  title: string;
  logo: Image;
  text: string;

  constructor(id:number|string) {
    super(id);
  }
}