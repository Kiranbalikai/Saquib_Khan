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

  return (
    <div
      className={`relative overflow-hidden w-full h-full ${shapeClass}`}
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src={url || "/placeholder.svg"}
        alt="Gallery image"
        width={1200}
        height={800}
        className="w-full h-full object-cover cursor-pointer"
        onClick={() => openLightbox(imageUrls, index)}
      />
    </div>
  );
}
