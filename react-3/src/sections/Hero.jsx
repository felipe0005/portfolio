import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  
  const container = useRef();
  const titleRef = useRef();
  const nameRef = useRef();
  const descRef = useRef();
  const roleRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.from(titleRef.current, { y: -50, opacity: 0 })
        .from(nameRef.current, { y: 50, opacity: 0, scale: 0.9 }, "-=0.5")
        .from(descRef.current, { y: 30, opacity: 0 }, "-=0.3")
        .from(roleRef.current, { y: 30, opacity: 0 }, "-=0.3");

      gsap.to(nameRef.current, {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }, container);

    return () => ctx.revert(); 
  }, []);

  return (
    <section
      ref={container}
      id="hero"
      className="relative text-8xl h-screen flex flex-col justify-center pl-8 overflow-hidden"
    >
      {/* Fondo estrellas */}
      <div className="absolute inset-0 stars -z-10"></div>

      
      <h1 ref={titleRef} className="text-white">
        Hi! i'am
        <br />
        <span className="font-extrabold bg-gradient-to-r from-rose-500 via-pink-400 to-purple-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-rose-500 transition-all duration-500">
          Felipe Coltriari
        </span>
      </h1>
      <p ref={descRef} className="font-medium text-gray-300 mt-4 text-2xl">
        Design and Web Development
      </p>
      <p ref={roleRef} className="font-semibold text-gray-200 mt-2 text-2xl">
        Fullstack developer
      </p>
    </section>
  );
}
