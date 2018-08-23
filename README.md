# jsapi-torchiodev.com

### Typescript/Javascript API to access personal data of my own.
### Dara from api.torchiodev.com. Used in torchiodev.com.

#### Typescript files in src folder. 
###### index.ts exports every module.
#### Mirrorred Javascript generated in dist folder
###### package.main points to dist/index, exporting all files

## Procedure:
 1. Import Api
 2. Create fetcher instance
 3. Set authorization
 4. Create api instance
 5. Call methods
 ___
 ```typescript
let fetcher = new DirectusFetcher('http://api.address.com')
  .setAuthorizationHeader('Bearer fdafdsa453')
let api = new Api(fetcher )
  .getAppInfo()
  .then(appinfo => console.dir(appinfo));
 ```

## Methods - fetch(__*ModelName*__)
1. getAppInfo(): Promise<AppInfo>;
2. getAbout(): Promise<About>;
3. getWorks(): Promise<Work[]>;
4. getServices(): Promise<Service[]>;
5. getExperiences(): Promise<Experience[]>;
6. getSkills(): Promise<Skill[]>;
7. getEducations(): Promise<Education[]>;
8. getLanguages(): Promise<Language[]>;
9. getSocials(): Promise<Social[]>;

## Fetcher methods (get fetcher back in api.getFetcher())
1. getApiUrl():string;
2. getBaseUrl(): string;
3. setApiUrl(apiUrl: string);
4. setBaseUrl(baseUrl: string);
5. setAuthorizationHeader(token:string): IFetcher;

### Models

#### AppInfo
```typescript
  title: string;
  contact_email: string;
  main_image: Image;
  logo: Image;
```
#### About
```typescript
  avatar_image: Image;
  cover_letter: string;
```
### Work
```typescript
  title: string;
  url: string;
  date: string;
  info: string;
  thumbnail: Image;
  color: string;
```

### Vue plugin 
1. import property 'vuePlugin' as torchioapi
2. options baseUrl is required

```javascript
  Vue.use(torchioapi, {
    baseUrl: 'https://api.torchiodev.com',
    authentication: 'bearer hu5i432higfd...',
    propertyName: 'whateverYouWant' // makes accessible in this.$whateverYouWant
  });
```