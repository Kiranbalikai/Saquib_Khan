"use client";

import Image from "next/image";
import { useLightbox } from "@/components/Lightbox/LightboxContext";

interface Still {
  asset: {
    url: string;
  };
}

interface ProjectStillsProps {
  stills: Still[];
  title: string;
}

export default function ProjectStills({ stills, title }: ProjectStillsProps) {
  const { openLightbox } = useLightbox();

  // Only image URLs for navigation
  const stillUrls = stills.map((s) => s.asset.url);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stills.map((img, i) => (
        <Image
          key={i}
          src={img.asset.url}
          alt={`${title} still ${i + 1}`}
          width={600}
          height={400}
          className="rounded-xl object-cover w-full h-auto cursor-pointer"
          onClick={() => openLightbox(stillUrls, i)}
        />
      ))}
    </div>
  );
}
