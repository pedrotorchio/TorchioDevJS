import { Tags } from './Tags';

export class Image {
  title: string;
  name: string;
  caption: string;
  tags: Tags;
  main_url:string;
  width: number;
  height: number;
  srcset: {url, size}[];
}