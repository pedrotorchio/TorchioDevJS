import { Tags } from  './Tags';
import { Model } from './Model';

export class Service extends Model {
  title: string;
  header: string;
  text: string;

  constructor(id:number|string) {
    super(id);
  }
}