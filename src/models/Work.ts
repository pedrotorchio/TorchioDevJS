import { Image } from  'js-models-helper';
import { Model } from  'js-models-helper';

export class Work  extends Model {
  title: string;
  url: string;
  date: string;
  info: string;
  thumbnail: Image;
  color: string;

  constructor(id:number|string) {
    super(id);
  }
}