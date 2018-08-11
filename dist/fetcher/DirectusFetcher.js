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
        this.axios.interceptors.response.use(response => {
            // takes response, 
            // extracts data from axios wrapper, 
            // then data from directys wrapper
            let array = response.data.data;
            // then for each entry, extract default available Model fields
            // id, sort, description, tags, synonyms
            let preExtracted = [];
            preExtracted = array.map(data => {
                let model = new index_1.Model(data.id);
                // which default primitive value meta to extract 
                for (const metaName in ['sort', 'description']) {
                    if (data[metaName])
                        model.meta[metaName] = data[metaName];
                }
                // which default Tag instance meta to extract 
                for (const tagName in ['tags', 'synonyms']) {
                    if (data[tagName])
                        model.meta[tagName] = new index_1.Tags(data[tagName]);
                }
                return [model, data];
            });
            const [{ meta: { sort } }] = preExtracted[0];
            if (sort !== undefined)
                preExtracted = preExtracted.sort(([{ meta: { sortA } }], [{ meta: { sortB } }]) => sortA - sortB);
            return preExtracted;
        });
    }
    // setAuthorizationHeader(token:string): IFetcher {
    //   this.axios.defaults.headers.common['Authorization'] = token;
    //   return this;
    // }
    getAppInfo() {
        return this.axios.get('/general/rows')
            .then(models => models[0])
            .then(model => {
            let app = model.copy(index_1.AppInfo);
            if (app.main_image) {
                app.main_image = this.data2image(model.main_image.data);
            }
            if (app.logo) {
                app.logo = this.data2image(model.logo.data);
            }
            console.log(model);
            app.title = model.main_title;
            app.contact_email = model.email_address;
            return app;
        });
    }
}
exports.DirectusFetcher = DirectusFetcher;
//# sourceMappingURL=DirectusFetcher.js.map