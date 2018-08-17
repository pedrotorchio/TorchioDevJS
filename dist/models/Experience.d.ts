import { ExperienceEntry } from './ExperienceEntry';
import { Model } from 'js-models-helper/src';
export declare class Experience extends Model {
    title: string;
    entries: ExperienceEntry[];
    constructor(id: number | string);
}
