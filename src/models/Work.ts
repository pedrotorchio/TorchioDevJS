import { Image } from  './Image';
import { Model } from './Model';

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