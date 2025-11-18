// GalleryImage.tsx (client)
"use client";

import Image from "next/image";
import { useLightbox } from "@/components/Lightbox/LightboxContext";

interface GalleryImageProps {
  url: string;
  index: number;
  imageUrls: string[];
  shapeClass: string;
}

export default function GalleryImage({
  url,
  index,
  imageUrls,
  shapeClass,
}: GalleryImageProps) {
  const { openLightbox } = useLightbox();

  /**
   * Strategy:
   * - On mobile (default): wrapper has h-auto + col-span-12 (from Gallery)
   *   so image should render full-width and keep its natural aspect ratio.
   * - On md+ (desktop): wrapper gets fixed height (e.g. md:h-[300px]) so image
   *   will stretch to fill the tile by using object-cover behavior.
   *
   * Implementation:
   * - Use Image with width/height (intrinsic) so Next can optimize.
   * - Use responsive classes:
   *   - w-full h-auto -> for mobile natural ratio
   *   - md:h-full md:object-cover -> for desktop fill/crop to tile
   */
  return (
    <div
      className={`relative overflow-hidden ${shapeClass}`}
      // prevent clicks from bubbling up to the tile
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src={url}
        alt="Gallery image"
        width={1200} // large intrinsic size – Next will optimize variants
        height={800}
        className="w-full h-auto md:h-full md:object-cover object-contain cursor-pointer"
        onClick={() => openLightbox(imageUrls, index)}
        // optional: priority or placeholder if needed
      />
    </div>
  );
}
