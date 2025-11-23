"use client";

import type React from "react";

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
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} className="md:size-8 text-white" />
        </button>
      )}

      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={20} className="md:size-8 text-white" />
        </button>
      )}

      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-50 p-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Close lightbox"
      >
        <X size={20} className="md:size-6 text-white" />
      </button>

      <div
        className="relative w-[90vw] h-[90vh] max-w-5xl transition-opacity duration-300"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          key={currentIndex}
          src={images[currentIndex] || "/placeholder.svg"}
          alt="lightbox"
          fill
          className="object-contain rounded-lg select-none"
          priority
        />

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs md:text-sm opacity-70 tracking-wide">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
