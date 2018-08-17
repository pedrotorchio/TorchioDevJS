import { Image } from  'js-models-helper/src';
import { Model } from  'js-models-helper/src';

export class About extends Model {
  avatar_image: Image;
  cover_letter: string;

  constructor(id:number|string) {
    super(id);
  }
}