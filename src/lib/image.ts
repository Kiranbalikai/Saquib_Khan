import { client } from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Initialize the Sanity image builder
const builder = imageUrlBuilder(client);

// Create a URL for an image with the given dimensions
export function generateImageUrl(
  source: SanityImageSource,
  width: number,
  height?: number
) {
  let imageBuilder = builder
    .image(source)
    .width(width)
    .fit("max") // avoid weird stretch
    .auto("format") // convert JPG/PNG → WebP
    .quality(70); // compress but looks clean

  if (height) {
    imageBuilder = imageBuilder.height(height);
  }

  return imageBuilder.url();
}
