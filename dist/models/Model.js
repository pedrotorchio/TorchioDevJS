"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tags_1 = require("./Tags");
class Model {
    constructor(id) {
        this.sort = 0; // item order
        this.tags = new Tags_1.Tags(); // meta tags
    }
}
exports.Model = Model;
//# sourceMappingURL=Model.js.map