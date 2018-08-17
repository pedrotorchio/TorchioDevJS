import { IApi } from './IApi';
import { AppInfo, About, Work, Service, Experience, Skill, Education, Language, Social } from './index';
import { IFetcher } from 'IFetcher';
export declare class Api implements IApi {
    private fetcher;
    constructor(fetcher: IFetcher);
    getFetcher(): IFetcher;
    getAppInfo(): Promise<AppInfo>;
    getAbout(): Promise<About>;
    getWorks(): Promise<Work[]>;
    getServices(): Promise<Service[]>;
    getExperiences(): Promise<Experience[]>;
    getSkills(): Promise<Skill[]>;
    getEducations(): Promise<Education[]>;
    getLanguages(): Promise<Language[]>;
    getSocials(): Promise<Social[]>;
}
