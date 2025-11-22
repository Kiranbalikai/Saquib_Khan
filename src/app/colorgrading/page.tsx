// pages/colorgrading/index.tsx
import { client } from "@/lib/sanity.client";
import Link from "next/link";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

export default async function ColorGradingPage() {
  const projects = await client.fetch(`
    *[_type == "colorGrading"] | order(order asc) {
      title,
      category,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url
    }
  `);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-4 py-8 px-[clamp(1rem,5vw,6rem)] bg-black ${raleway.className}`}
    >
      {projects.map(
        (p: {
          slug: string;
          title: string;
          category: string;
          thumbnail: string;
        }) => (
          <Link
            key={p.slug}
            href={`/colorgrading/${p.slug}`}
            className="relative group"
          >
            {p.thumbnail ? (
              <Image
                src={p.thumbnail}
                alt={p.title}
                width={600}
                height={400}
                className="object-cover w-full h-auto  "
              />
            ) : (
              <div className="w-full h-64 bg-neutral-800 flex items-center justify-center text-gray-400">
                No thumbnail
              </div>
            )}

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <p className="text-white text-lg font-light text-center px-3 ">
                {p.title}
              </p>
            </div>
          </Link>
        )
      )}
    </div>
  );
}
//
