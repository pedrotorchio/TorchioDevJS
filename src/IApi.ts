import * as Models from './index';
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
  getAppInfo(): AppInfo;
  getAbout(): About;
  getWorks(): [Work];
  getServices(): [Service];
  getExperiences(): [Experience];
  getSkills(): [Skill];
  getEducations(): [Education];
  getLanguages(): [Language];
  getSocial(): [Social];
}