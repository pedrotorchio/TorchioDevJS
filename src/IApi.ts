import * as Models from './index';
import { IFetcher } from './IFetcher';
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
export interface IApi{
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