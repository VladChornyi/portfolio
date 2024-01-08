import MainTitle from "../main-title/main-title";

export default function WelcomeSection() {
  return (
    <section className="w-4/5 max-w-full">
      <MainTitle className="mb-4">Welcome</MainTitle>
      <h2 className="indent-4 mb-4">
        My name is Vlad, and I am a front-end developer based in Dnipro. I have
        experience in developing various projects, ranging from landing pages to
        admin panels and gambling platforms.
      </h2>
      <p className="indent-4">
        My ideal technology stack consists of React or Next.js, coupled with
        TypeScript and Redux. I have a passion for crafting engaging interfaces
        and am continuously dedicated to self-improvement.
      </p>
    </section>
  );
}
