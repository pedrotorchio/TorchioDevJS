"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Model {
    constructor(id) {
        // sort: number = 0; // item order
        // tags: Tags = new Tags(); // meta tags
        // synonyms: Tags = new Tags();
        // description: string; // meta description
        this.meta = {};
        this.meta.id = id;
    }
    copyInto(Type) {
        const model = this;
        let copy = new Type(model.meta.id);
        for (const metaName in model.meta) {
            copy.meta[metaName] = model.meta[metaName];
        }
        return copy;
    }
}
exports.Model = Model;
//# sourceMappingURL=Model.js.map