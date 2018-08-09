import { Image } from  './Image';
import { Model } from './Model';

export class Education extends Model {
  title: string;
  logo: Image;
  text: string;

  constructor(id:number|string) {
    super(id);
  }
}