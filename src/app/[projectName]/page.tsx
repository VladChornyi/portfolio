import { AppLink } from "@/shared/components/app-link/app-link";
import MainTitle from "@/shared/components/main-title/main-title";
import { projects } from "@/shared/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    projectName: project.slug,
  }));
}

interface IPageProps {
  params: { projectName: string };
}

export default function ProjectPage({ params }: IPageProps) {
  const activeProject = projects.find(
    (project) => project.slug === params.projectName
  );

  if (!activeProject) {
    notFound();
  }
  const { name, description, images, link, technologies } = activeProject;
  return (
    <section className="flex flex-col px-12 gap-4">
      <MainTitle>{name}</MainTitle>
      <p className="indent-4 w-4/5 max-w-full	">{description}</p>
      <div>
        <AppLink
          className="underlined font-inherit ease-in-out duration-300 hover:scale-110 inline-block text-xl mb-4 "
          href={link}
          target="blanc"
        >
          Visit site
        </AppLink>
      </div>
      <AppLink
        href={link}
        className="w-2/5 hidden md:block hover:scale-105 duration-300"
        target="blanc"
      >
        <Image
          className="rounded-lg	 ease-in-out"
          src={images.background}
          alt="screenshot"
        />
      </AppLink>

      <p className="text-xl">Technologies</p>
      <ul className="flex flex-wrap gap-4">
        {technologies.map((item) => (
          <li
            className="flex flex-col items-center justify-between"
            key={item.id}
          >
            <Image className="w-6" src={item.icon} alt="icon" />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
