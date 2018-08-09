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
  setAuthorizationHeader(token:string): IApi {
    this.axios.defaults.headers.common['Authorization'] = token;
    return this;
  }
  getAppInfo(): Promise<AppInfo> {
    
    
    return this.axios.get('/general/rows')
        .then(response => response.data.data)
        .then(data => data[0])
        .then(info => {

          let app = new AppInfo();
          
          if (info.main_image) {
            let { image } = info.main_image.data;
            
            let main_image = new Image();
                main_image.main_url = image.url;

            app.main_image = main_image;
          }
          
          app.title = info.main_title;
          app.contact_email = info.email_address;

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