import { Model } from  'js-models-helper/src';

export class Language extends Model {
  title: string;
  display: string;

  constructor(id:number|string) {
    super(id);
  }
}