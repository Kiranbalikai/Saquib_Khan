import Gallery from "@/components/Gallery/Gallery";
import { client } from "@/lib/sanity.client";

export default async function HomePage() {
  const items = await client.fetch(`
  *[_type == "galleryItem"] | order(_createdAt asc){
    "url": media.asset->url,
    type,
    layoutType
  }
`);

  return (
    <main className=" bg-black">
      <Gallery items={items} />
    </main>
  );
}
