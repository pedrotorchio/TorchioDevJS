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


import { DirectusFetcher } from './fetcher/DirectusFetcher';
new DirectusFetcher('http://api.torchiodev.com/api/1.1/tables')
.setAuthorizationHeader('Bearer 9gLLRfyNxBtQV392IVU4aUiPDNYsG20G')
.getAppInfo();

