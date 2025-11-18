"use client";

import { createContext, useContext, useState } from "react";
import Lightbox from "./Lightbox";

export type LightboxContextType = {
  openLightbox: (images: string[], index: number) => void;
};

const LightboxContext = createContext<LightboxContextType | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState<number | null>(null);

  const openLightbox = (imgs: string[], i: number) => {
    setImages(imgs);
    setIndex(i);
  };

  const closeLightbox = () => setIndex(null);
  const next = () => setIndex((p) => (p! + 1) % images.length);
  const prev = () => setIndex((p) => (p! === 0 ? images.length - 1 : p! - 1));

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}

      {index !== null && (
        <Lightbox
          images={images}
          currentIndex={index}
          onClose={closeLightbox}
          onNext={next}
          onPrev={prev}
        />
      )}
    </LightboxContext.Provider>
  );
}
