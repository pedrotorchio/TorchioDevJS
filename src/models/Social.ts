import { Model } from './Model';

export class Social extends Model {
  title: string;
  display: string;

  constructor(id:string|number) {
    super(id);
  }
}