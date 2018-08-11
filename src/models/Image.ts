import { Tags } from './Tags';
import { Model } from './Model';

interface ISrcset {
  url: string;
  size: [string, number];
}
export class Image extends Model {
  title: string = '';
  name: string = '';
  main_url:string = '';
  width: number = 0;
  height: number = 0;
  srcset: ISrcset[] = [];

  constructor(id:number|string) {
    super(id);
  }
  
  addSource(src: ISrcset):Image {

    this.srcset.push(src);
    
    return this;
  }
  
}