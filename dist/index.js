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
const DirectusFetcher_1 = require("./fetcher/DirectusFetcher");
new DirectusFetcher_1.DirectusFetcher('http://api.torchiodev.com/api/1.1/tables')
    .getAppInfo();
//# sourceMappingURL=index.js.map