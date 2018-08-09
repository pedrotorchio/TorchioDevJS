"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const index_1 = require("../index");
class DirectusFetcher {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.axios = axios_1.default.create({
            baseURL: baseUrl
        });
    }
    getAppInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.axios.get('/general/rows')
                .then(response => console.log(response))
                .then(data => console.log(data))
                .then(info => {
                console.dir(info);
                let app = new index_1.AppInfo();
                let { image } = info.main_image.data;
                let main_image = new index_1.Image();
                main_image.main_url = image.url;
                app.title = info.main_title;
                app.contact_email = info.email_address;
                app.main_image = main_image;
                console.dir(app);
            });
        });
    }
    getAbout() {
        return null;
    }
    getWorks() {
        return null;
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
}
exports.DirectusFetcher = DirectusFetcher;
//# sourceMappingURL=DirectusFetcher.js.map