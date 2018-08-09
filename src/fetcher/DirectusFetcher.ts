import axios from 'axios';
const joiner: any = require('url-join'); // preventing untyped module errors

import { IFetcher } from '../IFetcher';
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


export class DirectusFetcher implements IFetcher{
  
  private axios;
  private apiUrl: string = '/api/1.1/tables';

  constructor(private baseUrl: string) {
    this.axios = axios.create({
      baseURL: joiner(baseUrl, this.apiUrl)
    });
  }

  setAuthorizationHeader(token:string): IFetcher {
    this.axios.defaults.headers.common['Authorization'] = token;
    return this;
  }
  getAppInfo(): Promise<AppInfo> {
    
    return this.axios.get('/general/rows')
        .then(response => response.data.data)
        .then(data => data[0])
        .then(info => {

          let app = new AppInfo(info.id);
            
          if (info.main_image) {
            app.main_image = this.data2image(info.main_image.data);
          }
          if (info.logo) {
            app.logo = this.data2image(info.logo.data);
          }
                
          app.title = info.main_title;
          app.contact_email = info.email_address;
          
          return app;
        
        });
    
  }
  getAbout(): Promise<About> {
    
    return this.axios.get('/about/rows')
        .then(response => response.data.data)
        .then(data => data[0])
        .then(info => {

          let app = new About(info.id);
            
          if (info.avatar_image) {
            app.avatar_image = this.data2image(info.avatar_image.data);
          }
          
          app.tags = new Tags(info.tags);
          app.cover_letter = info.bio;
          app.description = info.description;
          
          return app;
        
        });
  }
  getWorks(): Promise<Work[]> {
    
    return this.axios.get('/work/rows')
        .then(response => response.data.data)
        .then(array => {
          let works: Work[];
          
          works = array.map( data => {
            
            let work = new Work(data.id);
            
            if (data.thumbnail) {
              work.thumbnail = this.data2image(data.thumbnail.data);
            }
            
            work.title = data.title;
            work.url = data.url;
            work.date = data.date;
            work.info = data.info;
            work.color = data.suitable_color;
            work.tags = new Tags(data.tags);
            work.sort = data.sort;

            return work;
          });
          works = works.sort( (a, b) => a.sort - b.sort );
          
          return works;
        
        });
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
  
      
    let main_image = new Image(data.id);
        main_image.title = data.title;
        main_image.name = data.name;
        main_image.description = data.caption;
        main_image.width = data.width;
        main_image.height = data.height;
        main_image.main_url = joiner(this.baseUrl, data.url);
        main_image.tags = new Tags(data.tags);

        [160, 240, 320, 480, 640, 800, 960, 1080, 1240, 1440, 1600].forEach(size => main_image.addSource(
          joiner(this.baseUrl,'thumbnail', `${size}/${size}/contain`, data.name),
          size
        ));
        
        
  
    return main_image;
  }
}


