"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tags {
    constructor(data = []) {
        this.collection = [];
        if (typeof data === 'string') {
            data = data.split(',');
        }
        this.collection = data;
    }
}
exports.Tags = Tags;
//# sourceMappingURL=Tags.js.map