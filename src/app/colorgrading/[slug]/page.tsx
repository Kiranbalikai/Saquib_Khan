import { client } from "@/lib/sanity.client";
import ProjectStills from "@/components/ProjectStills";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await client.fetch(
    `*[_type == "colorGrading" && slug.current == $slug][0]{
    title,
    youtubeUrl,
    stills[]{asset->{url}}
  }`,
    { slug }
  );

  if (!project) {
    return <p className="p-8 text-center">Project not found</p>;
  }

  return (
    <div className={`p-8 space-y-10 bg-black ${raleway.className}`}>
      <h1 className="text-3xl font-light text-center mb-6">{project.title}</h1>

      {/* YouTube Player */}
      <div className="w-full md:w-[50%] aspect-video flex justify-center mx-auto">
        <iframe
          src={project.youtubeUrl
            .replace("watch?v=", "embed/")
            .replace("youtu.be/", "www.youtube.com/embed/")}
          className="w-full h-full rounded-xl"
          allowFullScreen
        />
      </div>

      {/* Stills (Client Component) */}
      <ProjectStills stills={project.stills} title={project.title} />
    </div>
  );
}
