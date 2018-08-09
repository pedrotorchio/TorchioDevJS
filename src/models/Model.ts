import { Tags } from './Tags';

export class Model{
  
  sort: number = 0; // item order
  tags: Tags = new Tags(); // meta tags
  description: string; // meta description

  constructor(id:number|string) {}
}