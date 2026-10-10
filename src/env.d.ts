/// <reference types="astro/client" />

declare module "*.PNG" {
  const image: import("astro").ImageMetadata;
  export default image;
}

declare module "*.JPEG" {
  const image: import("astro").ImageMetadata;
  export default image;
}

declare module "*.JPG" {
  const image: import("astro").ImageMetadata;
  export default image;
}
