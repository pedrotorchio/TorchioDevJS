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
#### Model (base)
```typescript
  interface Metadata {
    [key: string]: any;
  }
  meta:Metadata = {}
  // stores any metadata, usually:
  //  sort: number = 0; // item order
  //  tags: Tags = new Tags(); // meta tags
  //  synonyms: Tags = new Tags();
  //  description: string; // meta description

  // copies itself into a child instance
  copyInto<T extends Model>(Type: new (id: number | string) => T): T;
```
#### Image
```typescript

  interface ISrcset = {url:string, size:[string, number]}

  title: string = '';
  name: string = '';
  main_url:string = '';
  width: number = 0;
  height: number = 0;
  srcset: ISrcset[] = []; // size: [label, value]

  addSource(src:ISrcset):itself; // add new image source to srcset
```

#### AppInfo
```typescript
  title: string;
  contact_email: string;
  main_image: Image;
  logo: Image;
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