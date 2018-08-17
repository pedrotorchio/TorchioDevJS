import { Image } from  'js-models-helper/src';
import { Model } from  'js-models-helper/src';

export class Education extends Model {
  title: string;
  logo: Image;
  text: string;

  constructor(id:number|string) {
    super(id);
  }
}