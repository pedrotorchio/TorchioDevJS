import { Model } from './Model';

export class Skill extends Model {
  title: string;
  text: string;
  level: number;

  constructor(id:string|number) {
    super(id);
  }
}