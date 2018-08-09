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

  getAppInfo(): AppInfo {
    return this.fetcher.getAppInfo();
  }
  getAbout(): About {
    return this.fetcher.getAbout();
  }
  getWorks(): [Work] {
    return this.fetcher.getWorks();
  }
  getServices(): [Service] {
    return this.fetcher.getServices();
  }
  getExperiences(): [Experience] {
    return this.fetcher.getExperiences();
  }
  getSkills(): [Skill] {
    return this.fetcher.getSkills();
  }
  getEducations(): [Education] {
    return this.fetcher.getEducations();
  }
  getLanguages(): [Language] {
    return this.fetcher.getLanguages();
  }
  getSocial(): [Social] {
    return this.fetcher.getSocial();
  }
}