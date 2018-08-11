"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Api {
    constructor(fetcher) {
        this.fetcher = fetcher;
    }
    getFetcher() {
        return this.fetcher;
    }
    getAppInfo() {
        return this.fetcher.getAppInfo();
    }
    getAbout() {
        return this.fetcher.getAbout();
    }
    getWorks() {
        return this.fetcher.getWorks();
    }
    getServices() {
        return this.fetcher.getServices();
    }
    getExperiences() {
        return this.fetcher.getExperiences();
    }
    getSkills() {
        return this.fetcher.getSkills();
    }
    getEducations() {
        return this.fetcher.getEducations();
    }
    getLanguages() {
        return this.fetcher.getLanguages();
    }
    getSocials() {
        return this.fetcher.getSocials();
    }
}
exports.Api = Api;
//# sourceMappingURL=Api.js.map