import { Tags } from './Tags';
import { Model } from './Model';

export class Image extends Model {
  title: string = '';
  name: string = '';
  main_url:string = '';
  width: number = 0;
  height: number = 0;
  srcset: {url:string, size:number}[] = [];

  constructor(id:number|string) {
    super(id);
  }
  
  addSource(url:string, size:number):Image {

    this.srcset.push({url, size});
    
    return this;
  }
  
}