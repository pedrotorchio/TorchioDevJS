import { Model, Image, Tags } from "../../index";

const joiner: any = require("url-join"); // preventing untyped module errors

export function data2model(data): Model {
  let model = new Model(data.id);

  // which default primitive value meta to extract
  for (const metaName of ["sort", "description"]) {
    if (data[metaName]) model.meta[metaName] = data[metaName];
  }
  // which default Tag instance meta to extract
  for (const tagName of ["tags", "synonyms"]) {
    if (data[tagName]) model.meta[tagName] = new Tags(data[tagName]);
  }

  return model;
}
export function data2image(data, baseUrl: string = ""): Image {
  let main_image: Image = data2model(data).copyInto(Image);

  main_image.title = data.title;
  main_image.name = data.name;
  main_image.width = data.width;
  main_image.height = data.height;
  main_image.main_url = joiner(baseUrl, data.url);
  main_image.meta.description = data.caption;
  main_image.meta.tags = new Tags(data.tags);
  main_image.meta.tags = new Tags(data.tags);

  [160, 240, 320, 480, 640, 800, 960, 1080, 1240, 1440, 1600].forEach(size =>
    main_image.addSource({
      url: joiner(baseUrl, "thumbnail", `${size}/${size}/contain`, data.name),
      size: ["width", size]
    })
  );

  return main_image;
}
