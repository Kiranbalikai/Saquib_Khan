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
  const shapeClasses: Record<string, string> = {
    "full-wide": "col-span-12 md:col-span-12",
    wide: "col-span-12 md:col-span-6",
    "small-wide": "col-span-12 md:col-span-6",
    small: "col-span-12 md:col-span-3",
    equal: "col-span-12 md:col-span-4",
    normal: "col-span-12 md:col-span-6",
    "normal-tall": "col-span-12 md:col-span-6",
    big: "col-span-12 md:col-span-12",
    "tall-four": "col-span-12 md:col-span-3",
  };

  const imageUrls = items.filter((i) => i.type === "image").map((i) => i.url);

  return (
    <div className="w-full px-[clamp(1rem,5vw,6rem)]">
      <div className="grid grid-cols-12 gap-3 md:gap-4 xl:gap-6  grid-auto-rows-[250px] md:grid-auto-rows-[350px]">
        {items.map((item, i) => {
          const shapeClass = shapeClasses[item.layoutType] ?? "col-span-12";

          return (
            <div key={i} className={`${shapeClass} overflow-hidden`}>
              {item.type === "video" ? (
                <video
                  src={item.url}
                  className="w-full h-full object-cover"
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
