import { Model } from  'js-models-helper/src';
import { Image } from 'js-models-helper/src';

export class Social extends Model {
  title: string;
  url: string;
  icon: Image;

  constructor(id:string|number) {
    super(id);
  }
}