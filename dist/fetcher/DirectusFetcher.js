"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const joiner = require("url-join"); // preventing untyped module errors
const Procedures_1 = require("../models/utils/Procedures");
const index_1 = require("../index");
class DirectusFetcher {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.apiUrl = "/api/1.1/tables";
        this.axios = axios_1.default.create({
            baseURL: joiner(baseUrl, this.apiUrl)
        });
        this.axios.interceptors.response.use(response => {
            // takes response,
            // extracts data from axios wrapper,
            // then data from directys wrapper
            let array = response.data.data;
            // then for each entry, extract default available Model fields
            // id, sort, description, tags, synonyms
            let preExtracted = [];
            preExtracted = array.map(data => {
                let model = Procedures_1.data2model(data);
                return [model, data];
            });
            const [{ meta: { sort } }] = preExtracted[0];
            if (sort !== undefined)
                preExtracted = preExtracted.sort(([a], [b]) => a.meta.sort - b.meta.sort);
            return preExtracted;
        });
    }
    setAuthorizationHeader(token) {
        this.axios.defaults.headers.common["Authorization"] = token;
        return this;
    }
    getAppInfo() {
        return this.axios
            .get("/general/rows")
            .then(pres => pres[0])
            .then(([model, data]) => {
            let app = model.copyInto(index_1.AppInfo);
            app.title = data.main_title;
            app.contact_email = data.email_address;
            if (data.main_image) {
                app.main_image = Procedures_1.data2image(data.main_image.data, this.baseUrl);
            }
            if (data.logo) {
                app.logo = Procedures_1.data2image(data.logo.data, this.baseUrl);
            }
            return app;
        });
    }
    getAbout() {
        return this.axios
            .get("/about/rows")
            .then(pres => pres[0])
            .then(([model, data]) => {
            let about = model.copyInto(index_1.About);
            about.cover_letter = data.bio;
            if (data.avatar_image) {
                about.avatar_image = Procedures_1.data2image(data.avatar_image.data);
            }
            return about;
        });
    }
    getWorks() {
        return this.axios.get("/work/rows").then(array => {
            let works;
            works = array.map(([model, data]) => {
                let work = model.copyInto(index_1.Work);
                work.title = data.title;
                work.url = data.url;
                work.date = data.date;
                work.info = data.info;
                work.color = data.suitable_color;
                if (data.thumbnail) {
                    work.thumbnail = Procedures_1.data2image(data.thumbnail.data);
                }
                return work;
            });
            return works;
        });
    }
    getServices() {
        return this.axios.get("/service/rows").then(array => {
            let services;
            services = array.map(([model, data]) => {
                let service = model.copyInto(index_1.Service);
                service.title = data.title;
                service.header = data.bubble_header;
                service.text = data.bubble_text;
                return service;
            });
            return services;
        });
    }
    getExperiences() {
        return this.axios.get("/experience/rows").then(array => {
            let experiences;
            experiences = array.map(([model, data]) => {
                let experience = model.copyInto(index_1.Experience);
                experience.title = data.title;
                experience.entries = data.entries.data.map(this.data2entry);
                experience.entries.sort((a, b) => a.meta.sort - b.meta.sort);
                return experience;
            });
            return experiences;
        });
    }
    getSkills() {
        return this.axios.get("/skill/rows").then(array => {
            let skills;
            skills = array.map(([model, data]) => {
                let skill = model.copyInto(index_1.Skill);
                skill.title = data.title;
                skill.text = data.text;
                skill.level = data.level;
                return skill;
            });
            return skills;
        });
    }
    getEducations() {
        return this.axios.get("/education/rows").then(array => {
            let educations;
            educations = array.map(([model, data]) => {
                let education = model.copyInto(index_1.Education);
                education.title = data.title;
                education.text = data.text;
                if (data.logo) {
                    education.logo = Procedures_1.data2image(data.logo.data);
                }
                return education;
            });
            return educations;
        });
    }
    getLanguages() {
        return this.axios.get("/language/rows").then(array => {
            let languages;
            languages = array.map(([model, data]) => {
                let language = model.copyInto(index_1.Language);
                language.title = data.title;
                language.display = data.display_title;
                return language;
            });
            return languages;
        });
    }
    getSocials() {
        return this.axios.get("/social/rows").then(array => {
            let socials;
            socials = array.map(([model, data]) => {
                let social = model.copyInto(index_1.Social);
                social.url = data.url;
                social.title = data.title;
                if (data.icon) {
                    social.icon = Procedures_1.data2image(data.icon.data);
                }
                return social;
            });
            return socials;
        });
    }
    data2entry(data) {
        let entry = Procedures_1.data2model(data).copyInto(index_1.ExperienceEntry);
        entry.text = data.text;
        entry.date_range = data.date_range;
        entry.location = data.location;
        return entry;
    }
}
exports.DirectusFetcher = DirectusFetcher;
//# sourceMappingURL=DirectusFetcher.js.map