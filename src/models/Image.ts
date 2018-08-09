import { Tags } from './Tags';

export class Image {
  title: string;
  caption: string;
  tags: Tags;
  main_url:string;  
  srcset: [{url, size}]
}