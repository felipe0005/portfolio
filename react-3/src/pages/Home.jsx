import Nav from "../sections/Nav";
import Hero from "../sections/Hero";
import AboutMe from "../sections/AboutMe";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

export default function Home() {
  return (
    <div className="w-full">
      <Nav />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}
