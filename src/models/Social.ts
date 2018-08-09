import { Model } from './Model';
import { Image } from './Image';

export class Social extends Model {
  title: string;
  url: string;
  icon: Image;

  constructor(id:string|number) {
    super(id);
  }
}