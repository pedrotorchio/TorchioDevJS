import { Image } from  './Image';
import { Model } from './Model';

export class About extends Model {
  avatar_image: Image;
  cover_letter: string;

  constructor(id:number|string) {
    super(id);
  }
}