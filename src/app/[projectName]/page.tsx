import { AppLink } from "@/shared/components/app-link/app-link";
import MainTitle from "@/shared/components/main-title/main-title";
import { projects } from "@/shared/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    projectName: project.name.toLocaleLowerCase(),
  }));
}

interface IPageProps {
  params: { projectName: string };
}

export default function ProjectPage({ params }: IPageProps) {
  const activeProject = projects.find(
    (project) => project.name.toLocaleLowerCase() === params.projectName
  );

  if (!activeProject) {
    notFound();
  }
  const { name, description, images, link } = activeProject;
  return (
    <section className="flex flex-col items-center ">
      <MainTitle>{name}</MainTitle>
      <p className="indent-4 w-4/5 max-w-full	">{description}</p>
      <div className="flex justify-center mt-4">
        <div className="px-16 my-4">
          <AppLink
            className="underlined font-inherit ease-in-out duration-300 hover:scale-125 inline-block text-4xl "
            href={link}
            target="blanc"
          >
            Visit site
          </AppLink>
        </div>
        <AppLink href={link} className="w-3/5 hidden md:block" target="blanc">
          <Image
            className="rounded-lg	 grayscale hover:grayscale-0 ease-in-out duration-500"
            src={images.background}
            alt="screenshot"
          />
        </AppLink>
      </div>
    </section>
  );
}
