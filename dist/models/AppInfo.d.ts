import { Image } from 'js-models-helper/src';
import { Model } from 'js-models-helper/src';
export declare class AppInfo extends Model {
    title: string;
    contact_email: string;
    main_image: Image;
    logo: Image;
    constructor(id: number | string);
}
