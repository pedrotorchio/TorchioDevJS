import * as Models from './index';

export interface IApi{
  getAppInfo(): Models.AppInfo;
  getAbout(): Models.About;
  getWorks(): [Models.Work];
  getServices(): [Models.Service];
  getExperiences(): [Models.Experience];
  getSkills(): [Models.Skill];
  getEducations(): [Models.Education];
  getLanguages(): [Models.Language];
  getSocial(): [Models.Social];
}