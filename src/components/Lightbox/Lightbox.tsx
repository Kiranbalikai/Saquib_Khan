"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) onNext();
    if (diff < -50) onPrev();

    touchStartX.current = null;
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-9999 flex items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      {/* LEFT ARROW (outside image, centered vertically) */}
      {images.length > 1 && (
        <ChevronLeft
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          size={48}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white cursor-pointer"
        />
      )}

      {/* RIGHT ARROW (outside image, centered vertically) */}
      {images.length > 1 && (
        <ChevronRight
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          size={48}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white cursor-pointer"
        />
      )}

      {/* Close Button */}
      <X
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        size={32}
        className="absolute top-6 right-6 text-white cursor-pointer"
      />

      {/* IMAGE WRAPPER */}
      <div
        className="relative w-[90vw] h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={images[currentIndex]}
          alt="lightbox"
          fill
          className="object-contain rounded-lg select-none"
        />

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm opacity-70 tracking-wide">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
