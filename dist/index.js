"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./models/Image"));
__export(require("./models/Tags"));
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
/**
 * Procedure:
 * 1 import Api
 * 2 create fetcher instance (provided or created)
 * 3 set authorization
 * 4 create api instance
 * 5 call methods
 *
 * let fetcher = new DirectusFetcher('http://api.torchiodev.com')
 *    .setAuthorizationHeader('Bearer 9gLLRfyNxBtQV392IVU4aUiPDNYsG20G')
 * let api = new Api(fetcher )
 *    .getAppInfo()
 *    .then(appinfo => console.dir(appinfo.main_image.srcset));
 */
const DirectusFetcher_1 = require("./fetcher/DirectusFetcher");
const Api_1 = require("./Api");
let fetcher = new DirectusFetcher_1.DirectusFetcher('http://api.torchiodev.com')
    .setAuthorizationHeader('Bearer 9gLLRfyNxBtQV392IVU4aUiPDNYsG20G');
let api = new Api_1.Api(fetcher);
// api
//    .getAppInfo()
//    .then(data => console.dir(data));
// api
//    .getAbout()
//    .then(data => console.dir(data));
// api
//    .getWorks()
//    .then(data => console.dir(data));
// api
//    .getServices()
//    .then(data => console.dir(data));
// api
//    .getExperiences()
//    .then(data => console.dir(data));
// api
//    .getSkills()
//    .then(data => console.dir(data));
//# sourceMappingURL=index.js.map