import { Model } from  'js-models-helper';

export class Service extends Model {
  title: string;
  header: string;
  text: string;

  constructor(id:number|string) {
    super(id);
  }
}