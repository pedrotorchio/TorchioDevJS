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

  async getAppInfo(): Promise<AppInfo> {
    
    
    return this.axios.get('/general/rows')
        .then(response => console.log(response))
        .then(data => console.log(data))
        .then(info => {
          console.dir(info);
          let app = new AppInfo();
          let { image } = info.main_image.data;
          
          let main_image = new Image();
              main_image.main_url = image.url;

          app.title = info.main_title;
          app.contact_email = info.email_address;
          app.main_image = main_image;

          console.dir(app);
        })
    
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