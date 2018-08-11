import { Tags } from "./Tags";

export interface Metadata {
  [key: string]: any;
}
export class Model {
  // sort: number = 0; // item order
  // tags: Tags = new Tags(); // meta tags
  // synonyms: Tags = new Tags();
  // description: string; // meta description

  meta: Metadata = {};

  constructor(id: number | string) {
    this.meta.id = id;
  }

  copyInto<T extends Model>(Type: new (id: number | string) => T): T {
    const model = this;

    let copy = new Type(model.meta.id);

    for (const metaName in model.meta) {
      copy.meta[metaName] = model.meta[metaName];
    }

    return copy;
  }
}
