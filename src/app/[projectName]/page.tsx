import { projects } from "@/shared/data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ projectName: project.name }));
}

interface IPageProps {
  params: { projectName: string };
}

export default function ProjectPage({ params }: IPageProps) {
  const activeProject = projects.find(
    (project) => project.name === params.projectName
  );

  if (!activeProject) {
    notFound();
  }
  const { name, description, images } = activeProject;
  return (
    <section className="flex flex-col items-center">
      <h1 className="uppercase text-7xl w-4/5 max-w-full	mb-8">{name}</h1>
      <p className="indent-4 w-4/5 max-w-full	">{description}</p>
    </section>
  );
}
