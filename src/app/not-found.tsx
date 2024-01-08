import { AppLink } from "@/shared/components/app-link/app-link";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl text-center">Not Found</h2>
      <p className="text-xl text-center">Could not find requested resource</p>
      <AppLink
        className="underlined ease-in-out duration-300 hover:scale-125 hover:opacity-100 inline-block opacity-60 text-lg"
        href="/"
      >
        Return Home
      </AppLink>
    </div>
  );
}
