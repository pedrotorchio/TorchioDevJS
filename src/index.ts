export * from './models/Image';
export * from './models/Tags';
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

// import {DirectusFetcher} from './fetcher/DirectusFetcher';
// import {Api} from './Api';
// let fetcher = new DirectusFetcher('http://api.torchiodev.com')
//    .setAuthorizationHeader('Bearer 9gLLRfyNxBtQV392IVU4aUiPDNYsG20G')
// let api = new Api(fetcher );
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
// api
//    .getEducations()
//    .then(data => data.forEach( ed => console.log(ed.logo.srcset)));
// api
//    .getLanguages()
//    .then(data => console.log(data));
// api
//    .getSocials()
//    .then(data => console.log(data));
