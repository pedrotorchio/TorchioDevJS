# jsapi-torchiodev.com

### Typescript/Javascript API to access personal data of my own.
### Dara from api.torchiodev.com. Used in torchiodev.com.

#### Typescript files in src folder. 
###### index.ts exports every module.
#### Mirrorred Javascript generated in dist folder
###### package.main points to dist/index, exporting all files

### Models properties
#### Base
```
  sort: number = 0; // item order
  tags: Tags = new Tags(); // meta tags
  description: string; // meta description
```

#### AppInfo
```
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