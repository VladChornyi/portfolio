import { projects } from "@/shared/data/projects";
import { AppLink } from "../app-link/app-link";

export default function Projects() {
  return (
    <div className="md:w-3/12 h-96 max-h-full projects">
      <h3 className="text-3xl mb-5">Projects</h3>
      <ul className="flex flex-col justify-center px-6 gap-3">
        {projects.map((item) => (
          <li key={item.id}>
            <AppLink
              activeClass="active"
              className="underlined font-inherit ease-in-out duration-300 hover:scale-125 inline-block opacity-60"
              href={item.name}
            >
              {item.name}
            </AppLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
