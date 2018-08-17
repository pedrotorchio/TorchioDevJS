"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./models/AppInfo"));
__export(require("./models/About"));
__export(require("./models/Work"));
__export(require("./models/Service"));
__export(require("./models/Experience"));
__export(require("./models/ExperienceEntry"));
__export(require("./models/Skill"));
__export(require("./models/Language"));
__export(require("./models/Education"));
__export(require("./models/Social"));
__export(require("./fetcher/DirectusFetcher"));
__export(require("./Api"));
const DirectusFetcher_1 = require("./fetcher/DirectusFetcher");
const Api_1 = require("./Api");
exports.VuePlugin = {
    install(Vue, options) {
        options.propertyName = options.propertyName || 'api';
        if (!options.baseUrl)
            throw 'torchiodev api needs option apiUrl';
        let fetcher = new DirectusFetcher_1.DirectusFetcher(options.baseUrl);
        if (options.authentication)
            fetcher.setAuthorizationHeader(options.authentication);
        let api = new Api_1.Api(fetcher);
        Vue.prototype[`$${options.propertyName}`] = api;
    }
};
//# sourceMappingURL=index.js.map