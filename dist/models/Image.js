"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tags_1 = require("./Tags");
class Image {
    constructor() {
        this.title = '';
        this.name = '';
        this.caption = '';
        this.tags = new Tags_1.Tags();
        this.main_url = '';
        this.width = 0;
        this.height = 0;
        this.srcset = [];
    }
    addSource(url, size) {
        this.srcset.push({ url, size });
        return this;
    }
}
exports.Image = Image;
//# sourceMappingURL=Image.js.map