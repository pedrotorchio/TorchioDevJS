import axios from 'axios';
const joiner: any = require('url-join'); // preventing untyped module errors

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
  private apiUrl: string = '/api/1.1/tables';

  constructor(private baseUrl: string) {
    this.axios = axios.create({
      baseURL: joiner(baseUrl, this.apiUrl)
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
            app.main_image = this.data2image(info.main_image.data);
          }
                
          app.title = info.main_title;
          app.contact_email = info.email_address;

          return app;
        
        });
    
  }
  getAbout(): About {
    return null;
  }
  getWorks(): Work[] {
    return null;
  }
  getServices(): Service[] {
    return null;
  }
  getExperiences(): Experience[] {
    return null;
  }
  getSkills(): Skill[] {
    return null;
  }
  getEducations(): Education[] {
    return null;
    
  }
  getLanguages(): Language[] {
    return null;
    
  }
  getSocial(): Social[] {
    return null;
    
  }


  data2image(data):Image {
  
      
    let main_image = new Image();
        main_image.title = data.title;
        main_image.name = data.name;
        main_image.caption = data.caption;
        main_image.width = data.width;
        main_image.height = data.height;
        main_image.main_url = data.url;
        main_image.tags = new Tags(data.tags);
  
        [100, 320, 640, 1080].forEach(size => main_image.addSource(
          `${this.baseUrl}/thumbnail/${size}/${size}/${data.name}`,
          size
        ));
        
        
  
    return main_image;
  }
}


