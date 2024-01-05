import { socials } from "@/shared/data/socials";
import { AppLink } from "@/shared/components/app-link/app-link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-6">
      <div className="px-12 flex justify-between">
        <AppLink
          className="text-3xl font-bold ease-in-out duration-300 hover:scale-125 transparent-text bg-gradient-to-r hover:bg-gradient-to-l bg-clip-text from-indigo-500 to-blue-500"
          href="/"
        >
          V4
        </AppLink>
        <ul className="flex gap-2">
          {socials.map((item) => (
            <li key={item.id}>
              <AppLink href={item.link} target="blanc">
                <Image
                  className="ease-in-out duration-300 w-8 hover:scale-125"
                  src={item.icon}
                  alt="logo"
                />
              </AppLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
