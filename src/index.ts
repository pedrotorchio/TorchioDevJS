export * from './models/AppInfo';
export * from './models/About';
export * from './models/Work';
export * from './models/Service';
export * from './models/Experience';
export * from './models/ExperienceEntry';
export * from './models/Skill';
export * from './models/Language';
export * from './models/Education';
export * from './models/Social';

export * from './fetcher/DirectusFetcher';
export * from './Api';


import {DirectusFetcher} from './fetcher/DirectusFetcher';
import {Api} from './Api';
export const VuePlugin = {
  install(Vue, options) {

    options.propertyName = options.propertyName || 'api';

    if (!options.baseUrl)
      throw 'torchiodev api needs option apiUrl';
    
    let fetcher = new DirectusFetcher(options.baseUrl);
    if (options.authentication)
      fetcher.setAuthorizationHeader(options.authentication);

    let api = new Api(fetcher );
    
    Vue.prototype[`$${options.propertyName}`] = api;
  }
}