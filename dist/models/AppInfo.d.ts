import { Image } from 'js-models-helper';
import { Model } from 'js-models-helper';
export declare class AppInfo extends Model {
    title: string;
    contact_email: string;
    main_image: Image;
    logo: Image;
    constructor(id: number | string);
}
