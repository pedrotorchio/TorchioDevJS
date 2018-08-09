import { Model } from './Model';

export class Language extends Model {
  title: string;
  display: string;

  constructor(id:number|string) {
    super(id);
  }
}