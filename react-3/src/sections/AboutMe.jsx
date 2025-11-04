import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

export default function AboutMe() {
  const sectionRef = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useLayoutEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.from(".about-card", {
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.from(".about-text", {
          y: 30,
          opacity: 0,
          duration: 1,
          delay: 0.3,
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="absolute inset-0 stars -z-10"></div>

      <div ref={ref} className="max-w-3xl text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 about-text">
          About me
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed about-text">
          i'am{" "}
          <span className="font-semibold text-rose-400">
            Full stack developer
          </span>
          , passionate about technology and creating digital solutions I love{" "}
          <span className="font-semibold text-purple-400">
            working as a team
          </span>{" "}
          and constantly learn new things.
        </p>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4 about-text">
          I consider myself a{" "}
          <span className="text-rose-400"> responsible</span>,
          <span className="text-purple-400"> kind </span> person and always
          willing to do my best to achieve great results together with my team.
        </p>
      </div>

      {/* Tarjetas animadas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {["Fullstack", "Team working", "Responsible", "Kind"].map(
          (skill, index) => (
            <div
              key={skill}
              className={`about-card p-4 bg-slate-800 rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-white font-semibold text-center">{skill}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
