import axios from "axios";
const joiner: any = require("url-join"); // preventing untyped module errors

import { IFetcher } from '../IFetcher';
import { data2image, data2model } from "../models/utils/Procedures";

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
  Tags,
  Model
} from "../index";

export class DirectusFetcher implements IFetcher {
         private axios;
         private apiUrl: string = "/api/1.1/tables";

         constructor(private baseUrl: string) {
           this.setBaseUrl(baseUrl);

           this.axios.interceptors.response.use(response => {
             // takes response,
             // extracts data from axios wrapper,
             // then data from directys wrapper
             let array = response.data.data;
             // then for each entry, extract default available Model fields
             // id, sort, description, tags, synonyms
             let preExtracted: [Model, {}][] = [];

             preExtracted = array.map(data => {
               let model: Model = data2model(data);

               return [model, data];
             });
             const [{ meta: { sort } }] = preExtracted[0];

             if (sort !== undefined) preExtracted = preExtracted.sort(([a], [b]) => <
                     number
                   >a.meta.sort - <number>b.meta.sort);

             return preExtracted;
           });
         }

        
         resetAxios() {
           this.axios = axios.create({
             baseURL: joiner(this.baseUrl, this.apiUrl)
           });
         }
         setApiUrl(apiUrl: string):IFetcher {
           this.apiUrl = apiUrl;
           this.resetAxios();
           return this;
         }
         setBaseUrl(baseUrl: string):IFetcher {
           this.baseUrl = baseUrl;
           this.resetAxios();
           return this;
         }
         getApiUrl():string {
           return this.apiUrl;
         }
         getBaseUrl():string {
           return this.baseUrl;
         }
         setAuthorizationHeader(token: string): IFetcher {
           this.axios.defaults.headers.common["Authorization"] = token;
           return this;
         }

         getAppInfo(): Promise<AppInfo> {
           return this.axios
             .get("/general/rows")
             .then(pres => pres[0])
             .then(([model, data]) => {
               let app: AppInfo = model.copyInto(AppInfo);
               app.title = data.main_title;
               app.contact_email = data.email_address;

               if (data.main_image) {
                 app.main_image = data2image(data.main_image.data, this.baseUrl);
               }
               if (data.logo) {
                 app.logo = data2image(data.logo.data, this.baseUrl);
               }

               return app;
             });
         }
         getAbout(): Promise<About> {
           return this.axios
             .get("/about/rows")
             .then(pres => pres[0])
             .then(([model, data]) => {
               let about: About = model.copyInto(About);
               about.cover_letter = data.bio;

               if (data.avatar_image) {
                 about.avatar_image = data2image(data.avatar_image.data);
               }

               return about;
             });
         }
         getWorks(): Promise<Work[]> {
           return this.axios.get("/work/rows").then(array => {
             let works: Work[];

             works = array.map(([model, data]) => {
               let work: Work = model.copyInto(Work);
               work.title = data.title;
               work.url = data.url;
               work.date = data.date;
               work.info = data.info;
               work.color = data.suitable_color;

               if (data.thumbnail) {
                 work.thumbnail = data2image(data.thumbnail.data);
               }
               return work;
             });

             return works;
           });
         }
         getServices(): Promise<Service[]> {
           return this.axios.get("/service/rows").then(array => {
             let services: Service[];

             services = array.map(([model, data]) => {
               let service: Service = model.copyInto(Service);
               service.title = data.title;
               service.header = data.bubble_header;
               service.text = data.bubble_text;

               return service;
             });

             return services;
           });
         }
         getExperiences(): Promise<Experience[]> {
           return this.axios.get("/experience/rows").then(array => {
             let experiences: Experience[];

             experiences = array.map(([model, data]) => {
               let experience: Experience = model.copyInto(Experience);

               experience.title = data.title;
               experience.entries = data.entries.data.map(this.data2entry);
               experience.entries.sort((a, b) => <number>(
                     a.meta.sort
                   ) - <number>b.meta.sort);

               return experience;
             });

             return experiences;
           });
         }
         getSkills(): Promise<Skill[]> {
           return this.axios.get("/skill/rows").then(array => {
             let skills: Skill[];

             skills = array.map(([model, data]) => {
               let skill: Skill = model.copyInto(Skill);
               skill.title = data.title;
               skill.text = data.text;
               skill.level = data.level;

               return skill;
             });

             return skills;
           });
         }
         getEducations(): Promise<Education[]> {
           return this.axios.get("/education/rows").then(array => {
             let educations: Education[];

             educations = array.map(([model, data]) => {
               let education: Education = model.copyInto(Education);
               education.title = data.title;
               education.text = data.text;

               if (data.logo) {
                 education.logo = data2image(data.logo.data);
               }

               return education;
             });

             return educations;
           });
         }
         getLanguages(): Promise<Language[]> {
           return this.axios.get("/language/rows").then(array => {
             let languages: Language[];

             languages = array.map(([model, data]) => {
               let language: Language = model.copyInto(Language);
               language.title = data.title;
               language.display = data.display_title;

               return language;
             });

             return languages;
           });
         }
         getSocials(): Promise<Social[]> {
           return this.axios.get("/social/rows").then(array => {
             let socials: Social[];

             socials = array.map(([model, data]) => {
               let social: Social = model.copyInto(Social);
               social.url = data.url;
               social.title = data.title;

               if (data.icon) {
                 social.icon = data2image(data.icon.data);
               }

               return social;
             });

             return socials;
           });
         }

         data2entry(data): ExperienceEntry {
           let entry: ExperienceEntry = data2model(data).copyInto(ExperienceEntry);
           entry.text = data.text;
           entry.date_range = data.date_range;
           entry.location = data.location;

           return entry;
         }
       }
