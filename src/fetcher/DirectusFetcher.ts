import axios from 'axios';
const joiner: any = require('url-join'); // preventing untyped module errors

import { IFetcher } from '../IFetcher';
import { 
  AppInfo,
  About, 
  Work, 
  Service, 
  Experience, 
  ExperienceEntry,
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
  getServices(): Promise<Service[]> {
    
    return this.axios.get('/service/rows')
        .then(response => response.data.data)
        .then(array => {
          let services: Service[];
          
          services = array.map( data => {
            
            let service = new Service(data.id);
            
            service.title = data.title;
            service.header = data.bubble_header;
            service.text = data.bubble_text;
            service.tags = new Tags(data.tags);
            service.sort = data.sort;

            return service;
          });
          services = services.sort( (a, b) => a.sort - b.sort );
          
          return services;
        
        });
  }
  getExperiences(): Promise<Experience[]> {

    return this.axios.get('/experience/rows')
        .then(response => response.data.data)
        .then(array => {
          
          let experiences: Experience[];
          
          experiences = array.map( data => {
          
            let experience = new Experience(data.id);
            
            experience.title = data.title;
            experience.tags = new Tags(data.tags);
            experience.sort = data.sort;

            experience.entries = data.entries.data.map( entry => this.data2entry(entry) );
            experience.entries.sort( (a, b) => a.sort - b.sort );

            return experience;
          });
          experiences = experiences.sort( (a, b) => a.sort - b.sort );
          
          return experiences;
        
        });
  }
  getSkills(): Promise<Skill[]> {
    
    return this.axios.get('/skill/rows')
        .then(response => response.data.data)
        .then(array => {
          let skills: Skill[];
          
          skills = array.map( data => {
            
            let skill = new Skill(data.id);
            
            skill.tags = new Tags(data.tags);
            skill.sort = data.sort;
            skill.title = data.title;
            skill.text = data.text;
            skill.level = data.level;
            

            return skill;
          });
          skills = skills.sort( (a, b) => a.level - b.level );
          
          return skills;
        
        });
  }
  getEducations(): Promise<Education[]> {
    
    return this.axios.get('/education/rows')
        .then(response => response.data.data)
        .then(array => {
          let educations: Education[];
          
          educations = array.map( data => {
            
            let education = new Education(data.id);
            
            education.tags = new Tags(data.tags);
            education.sort = data.sort;
            education.title = data.title;
            education.text = data.text;
            
            if (data.logo) {
              education.logo = this.data2image(data.logo.data);
            }

            return education;
          });
          educations = educations.sort( (a, b) => a.sort - b.sort );
          
          return educations;
        
        });
    
  }
  getLanguages(): Promise<Language[]> {
    return null;
    
  }
  getSocial(): Promise<Social[]> {
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
  data2entry(data):ExperienceEntry {


    let entry = new ExperienceEntry(data.id);
        entry.text = data.text
        entry.date_range = data.date_range;
        entry.location = data.location;
        entry.sort = data.sort;

    return entry;
  }
}


