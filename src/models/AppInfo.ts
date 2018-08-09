import { Image } from  './Image';
import { Model } from './Model';

export class AppInfo extends Model {
  title: string;
  contact_email: string;
  main_image: Image;
  logo: Image;

  constructor(id:number|string) {
    super(id);
  }
}