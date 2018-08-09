import { IApi } from './IApi';
import { 
  AppInfo,
  About, 
  Work, 
  Service, 
  Experience, 
  Skill, 
  Education, 
  Language, 
  Social } from './index';
export class Api implements IApi{
  constructor(private fetcher: IApi) {}

  getAppInfo(): Promise<AppInfo> {
    return this.fetcher.getAppInfo();
  }
  getAbout(): Promise<About> {
    return this.fetcher.getAbout();
  }
  getWorks(): Promise<Work[]> {
    return this.fetcher.getWorks();
  }
  getServices(): Promise<Service[]> {
    return this.fetcher.getServices();
  }
  getExperiences(): Promise<Experience[]> {
    return this.fetcher.getExperiences();
  }
  getSkills(): Promise<Skill[]> {
    return this.fetcher.getSkills();
  }
  getEducations(): Promise<Education[]> {
    return this.fetcher.getEducations();
  }
  getLanguages(): Promise<Language[]> {
    return this.fetcher.getLanguages();
  }
  getSocial(): Promise<Social[]> {
    return this.fetcher.getSocial();
  }
}