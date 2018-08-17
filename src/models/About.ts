import { Image } from  'js-models-helper';
import { Model } from  'js-models-helper';

export class About extends Model {
  avatar_image: Image;
  cover_letter: string;

  constructor(id:number|string) {
    super(id);
  }
}