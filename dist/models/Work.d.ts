import { Image } from 'js-models-helper/src';
import { Model } from 'js-models-helper/src';
export declare class Work extends Model {
    title: string;
    url: string;
    date: string;
    info: string;
    thumbnail: Image;
    color: string;
    constructor(id: number | string);
}
