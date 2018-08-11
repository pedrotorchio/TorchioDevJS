import { Tags } from './Tags';

export class Model{
  
  sort: number = 0; // item order
  tags: Tags = new Tags(); // meta tags
  synonyms: Tags = new Tags();
  description: string; // meta description

  constructor(id:number|string) {}
}