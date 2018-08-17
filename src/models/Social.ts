import { Model } from  'js-models-helper';
import { Image } from 'js-models-helper';

export class Social extends Model {
  title: string;
  url: string;
  icon: Image;

  constructor(id:string|number) {
    super(id);
  }
}