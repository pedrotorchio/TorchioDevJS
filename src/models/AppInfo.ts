import { Image } from  'js-models-helper';
import { Model } from  'js-models-helper';

export class AppInfo extends Model {
  title: string;
  contact_email: string;
  main_image: Image;
  logo: Image;

  constructor(id:number|string) {
    super(id);
  }
}