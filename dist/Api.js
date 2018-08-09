"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Api = /** @class */ (function () {
    function Api(fetcher) {
        this.fetcher = fetcher;
    }
    Api.prototype.getAppInfo = function () {
        return this.fetcher.getAppInfo();
    };
    Api.prototype.getAbout = function () {
        return this.fetcher.getAbout();
    };
    Api.prototype.getWorks = function () {
        return this.fetcher.getWorks();
    };
    Api.prototype.getServices = function () {
        return this.fetcher.getServices();
    };
    Api.prototype.getExperiences = function () {
        return this.fetcher.getExperiences();
    };
    Api.prototype.getSkills = function () {
        return this.fetcher.getSkills();
    };
    Api.prototype.getEducations = function () {
        return this.fetcher.getEducations();
    };
    Api.prototype.getLanguages = function () {
        return this.fetcher.getLanguages();
    };
    Api.prototype.getSocial = function () {
        return this.fetcher.getSocial();
    };
    return Api;
}());
exports.Api = Api;
//# sourceMappingURL=Api.js.map