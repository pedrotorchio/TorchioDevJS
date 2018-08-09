"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const joiner = require('url-join'); // preventing untyped module errors
const index_1 = require("../index");
class DirectusFetcher {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.apiUrl = '/api/1.1/tables';
        this.axios = axios_1.default.create({
            baseURL: joiner(baseUrl, this.apiUrl)
        });
    }
    setAuthorizationHeader(token) {
        this.axios.defaults.headers.common['Authorization'] = token;
        return this;
    }
    getAppInfo() {
        return this.axios.get('/general/rows')
            .then(response => response.data.data)
            .then(data => data[0])
            .then(info => {
            let app = new index_1.AppInfo(info.id);
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
    getAbout() {
        return this.axios.get('/about/rows')
            .then(response => response.data.data)
            .then(data => data[0])
            .then(info => {
            let app = new index_1.About(info.id);
            if (info.avatar_image) {
                app.avatar_image = this.data2image(info.avatar_image.data);
            }
            app.tags = new index_1.Tags(info.tags);
            app.cover_letter = info.bio;
            app.description = info.description;
            return app;
        });
    }
    getWorks() {
        return this.axios.get('/work/rows')
            .then(response => response.data.data)
            .then(array => {
            let works;
            works = array.map(data => {
                let work = new index_1.Work(data.id);
                if (data.thumbnail) {
                    work.thumbnail = this.data2image(data.thumbnail.data);
                }
                work.title = data.title;
                work.url = data.url;
                work.date = data.date;
                work.info = data.info;
                work.color = data.suitable_color;
                work.tags = new index_1.Tags(data.tags);
                work.sort = data.sort;
                return work;
            });
            works = works.sort((a, b) => a.sort - b.sort);
            return works;
        });
    }
    getServices() {
        return null;
    }
    getExperiences() {
        return null;
    }
    getSkills() {
        return null;
    }
    getEducations() {
        return null;
    }
    getLanguages() {
        return null;
    }
    getSocial() {
        return null;
    }
    data2image(data) {
        let main_image = new index_1.Image(data.id);
        main_image.title = data.title;
        main_image.name = data.name;
        main_image.description = data.caption;
        main_image.width = data.width;
        main_image.height = data.height;
        main_image.main_url = joiner(this.baseUrl, data.url);
        main_image.tags = new index_1.Tags(data.tags);
        [160, 240, 320, 480, 640, 800, 960, 1080, 1240, 1440, 1600].forEach(size => main_image.addSource(joiner(this.baseUrl, 'thumbnail', `${size}/${size}/contain`, data.name), size));
        return main_image;
    }
}
exports.DirectusFetcher = DirectusFetcher;
//# sourceMappingURL=DirectusFetcher.js.map