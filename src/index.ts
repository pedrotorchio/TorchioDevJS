export * from "./models/Image";
export * from "./models/Tags";
export * from "./models/AppInfo";
export * from "./models/About";
export * from "./models/Work";
export * from "./models/Service";
export * from "./models/Experience";
export * from "./models/ExperienceEntry";
export * from "./models/Skill";
export * from "./models/Language";
export * from "./models/Education";
export * from "./models/Social";
export * from "./models/Model";

export * from "./fetcher/DirectusFetcher";
export * from "./Api";

import { DirectusFetcher } from "./fetcher/DirectusFetcher";
import { Api } from "./Api";
export const vuePlugin = {
  install(Vue, options) {
    options.propertyName = options.propertyName || "api";

    if (!options.apiUrl) throw "torchiodev api needs option apiUrl";

    let fetcher = new DirectusFetcher(options.apiUrl);
    if (options.authentication)
      fetcher.setAuthorizationHeader("Bearer 9gLLRfyNxBtQV392IVU4aUiPDNYsG20G");

    let api = new Api(fetcher);

    Vue.prototype[`$${options.propertyName}`] = api;
  }
};

// let fetcher = new DirectusFetcher(
//   "http://api.torchiodev.com"
// ).setAuthorizationHeader("");
// let api = new Api(fetcher);


// api.getAppInfo().then(data => console.dir(data));


// api.getAbout().then(data => console.dir(data));


// api.getWorks().then(data => console.dir(data));


// api.getServices().then(data => console.dir(data));


// api.getExperiences().then(data => console.dir(data));


// api.getSkills().then(data => console.dir(data));


// api
//   .getEducations()
//   .then(data => data.forEach(ed => console.dir(ed)));


// api.getLanguages().then(data => console.dir(data));


// api.getSocials().then(data => console.dir(data));
