import type { Metadata } from "next";
import "./globals.css";
import Header from "@/shared/layouts/header/header";
import Footer from "@/shared/layouts/footer/footer";
import Projects from "@/shared/components/projects/projects";

export const metadata: Metadata = {
  title: "Front-end developer Chornyi Vlad",
  description: "Projects portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="box-border flex flex-col min-h-screen font-sans text-slate-200 font-thin">
        <Header />
        <main className="flex items-center grow justify-around ">
          <div className="flex flex-col items-center w-9/12">{children}</div>
          <Projects />
        </main>
        <Footer />
        <div className="absolute left-0 top-0 pointer-events-none">
          <svg
            width="300"
            height="300"
            data-name="corner-top-left"
            xmlns="http://www.w3.org/2000/svg"
            data-inlinesvg=".inlineSvgFile-1"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0" className="gradient1"></stop>
                <stop offset=".5" className="gradient2"></stop>
                <stop offset="1" className="gradient1"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url('#grad1')"
              d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
            ></path>
          </svg>
        </div>
        <div className="absolute right-0 bottom-0 pointer-events-none">
          <svg
            width="300"
            height="300"
            data-name="corner-bottom-right"
            xmlns="http://www.w3.org/2000/svg"
            data-inlinesvg=".inlineSvgFile-3"
          >
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0" className="gradient1"></stop>
                <stop offset=".5" className="gradient2"></stop>
                <stop offset="1" className="gradient1"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url('#grad2')"
              d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"
            ></path>
          </svg>
        </div>
      </body>
    </html>
  );
}
