import { Tags } from './Tags';

export class Model{
  
  sort: number = 0; // item order
  tags: Tags = new Tags(); // meta tags
  synonyms: Tags = new Tags();
  description: string; // meta description

  constructor(public id:number|string) {}

  static copy <T extends Model>(model:Model, Type:new (id:number|string)=>T): T {
    let copy = new Type(model.id);
    
    if (model.sort)
      copy.sort =  model.sort;
    if (model.tags)
      copy.tags =  model.tags;
    if (model.synonyms)
      copy.synonyms =  model.synonyms;
    if (model.description)
      copy.description =  model.description;

    return copy;
  }
}