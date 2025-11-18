// Gallery.tsx (server)
import GalleryImage from "./GalleryImage";

export type GalleryItem = {
  url: string;
  type: "image" | "video";
  layoutType:
    | "full-wide"
    | "wide"
    | "small-wide"
    | "equal"
    | "small"
    | "normal"
    | "normal-tall"
    | "big"
    | "tall-four";
};

export default function Gallery({ items }: { items: GalleryItem[] }) {
  // Note: default (mobile) is single column + h-auto; md: rules restore desktop layout
  const shapeClasses: Record<string, string> = {
    "full-wide": "col-span-12 md:col-span-12 md:h-[600px] h-auto",
    wide: "col-span-12 md:col-span-6 md:h-[300px] h-auto",
    "small-wide": "col-span-12 md:col-span-6 md:h-[300px] h-auto",
    small: "col-span-12 md:col-span-3 md:h-[300px] h-auto",
    equal: "col-span-12 md:col-span-4 md:h-[300px] h-auto",
    normal: "col-span-12 md:col-span-6 md:h-[500px] h-auto",
    "normal-tall":
      "col-span-12 md:col-span-6 md:row-span-2 md:h-[700px] h-auto",
    big: "col-span-12 md:col-span-12 md:h-[800px] h-auto",
    "tall-four": "col-span-12 md:col-span-3 md:aspect-[3/4] aspect-auto h-auto",
  };

  const imageUrls = items.filter((i) => i.type === "image").map((i) => i.url);

  return (
    <div className="w-full px-[clamp(1rem,5vw,6rem)]">
      <div className="grid grid-cols-12 gap-6">
        {items.map((item, i) => {
          const shapeClass = shapeClasses[item.layoutType] ?? "col-span-12";

          return (
            <div key={i} className={`relative overflow-hidden ${shapeClass}`}>
              {item.type === "video" ? (
                // video will follow same responsive rules: full width on mobile, fills tile on md+
                <video
                  src={item.url}
                  className="w-full h-auto md:h-full object-contain md:object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <GalleryImage
                  url={item.url}
                  index={imageUrls.indexOf(item.url)}
                  imageUrls={imageUrls}
                  shapeClass={shapeClass}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
