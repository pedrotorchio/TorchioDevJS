"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = require("./Model");
class Image extends Model_1.Model {
    constructor(id) {
        super(id);
        this.title = '';
        this.name = '';
        this.main_url = '';
        this.width = 0;
        this.height = 0;
        this.srcset = [];
    }
    addSource(src) {
        this.srcset.push(src);
        return this;
    }
}
exports.Image = Image;
//# sourceMappingURL=Image.js.map