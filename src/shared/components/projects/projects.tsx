import { projects } from "@/shared/data/projects";
import { AppLink } from "../app-link/app-link";

export default function Projects() {
  return (
    <div className="w-3/12">
      <h3>Projects</h3>
      <ul className="flex flex-col justify-center">
        {projects.map((item) => (
          <li key={item.id}>
            <AppLink href={item.name}>{item.name}</AppLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
