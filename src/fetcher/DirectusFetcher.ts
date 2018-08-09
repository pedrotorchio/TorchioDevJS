import axios from 'axios';
import { IApi } from '../IApi';
import { 
  AppInfo,
  About, 
  Work, 
  Service, 
  Experience, 
  Skill, 
  Education, 
  Language, 
  Social,
  Image,
  Tags
 } from '../index';

export class DirectusFetcher implements IApi{
  
  private axios;

  constructor(private baseUrl: string) {
    this.axios = axios.create({
      baseURL: baseUrl
    });
  }

  getAppInfo(): AppInfo {
    
    
    return null;
  }
  getAbout(): About {
    return null;
  }
  getWorks(): [Work] {
    return null;
  }
  getServices(): [Service] {
    return null;
  }
  getExperiences(): [Experience] {
    return null;
  }
  getSkills(): [Skill] {
    return null;
  }
  getEducations(): [Education] {
    return null;
    
  }
  getLanguages(): [Language] {
    return null;
    
  }
  getSocial(): [Social] {
    return null;
    
  }
}