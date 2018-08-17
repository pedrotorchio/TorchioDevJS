import { IFetcher } from '../IFetcher';
import { AppInfo, About, Work, Service, Experience, ExperienceEntry, Skill, Education, Language, Social } from "../index";
export declare class DirectusFetcher implements IFetcher {
    private baseUrl;
    private axios;
    private apiUrl;
    constructor(baseUrl: string);
    resetAxios(): void;
    setApiUrl(apiUrl: string): IFetcher;
    setBaseUrl(baseUrl: string): IFetcher;
    getApiUrl(): string;
    getBaseUrl(): string;
    setAuthorizationHeader(token: string): IFetcher;
    getAppInfo(): Promise<AppInfo>;
    getAbout(): Promise<About>;
    getWorks(): Promise<Work[]>;
    getServices(): Promise<Service[]>;
    getExperiences(): Promise<Experience[]>;
    getSkills(): Promise<Skill[]>;
    getEducations(): Promise<Education[]>;
    getLanguages(): Promise<Language[]>;
    getSocials(): Promise<Social[]>;
    data2entry(data: any): ExperienceEntry;
}
