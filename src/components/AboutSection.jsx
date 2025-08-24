import React, { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starsRef = useRef([]);

  // Generate star styles once
  const starStyles = useMemo(() => {
    return [...Array(8)].map((_, i) => ({
      width: `${10 + i * 3}px`,
      height: `${10 + i * 3}px`,
      backgroundColor: "white",
      opacity: 0.2 + Math.random() * 0.4,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%",
        toggleActions: "restart none none reverse",
      },
    });

    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: -300, opacity: 1, duration: 0.8 }
    );

    tl.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      { y: -400, opacity: 1, filter: "blur(0px)", duration: 1.5 },
      "-=0.5"
    );

    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;

      gsap.to(star, {
        x: direction * (100 + index * 20),
        y: direction * -50 - index * 10,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) trigger.kill();
      });
    };
  }, []);

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }
  };

  return (
    <section
      className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]"
      ref={sectionRef}
    >
      <div className="absolute inset-0 overflow-hidden">
        {starStyles.map((style, i) => (
          <div
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full"
            style={style}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold sm:mb-5 text-center text-white opacity-0"
          style={{ willChange: "transform, opacity" }}
          id="about"
        >
          About Me
        </h1>
      </div>

      <div
        ref={introRef}
        className="absolute lg:bottom-[-20rem] md:bottom-[-10rem] sm:bottom-[-24rem] bottom-[-18rem] left-0 w-full flex md:flex-row flex-col md:justify-between justify-evenly lg:px-24 px-5 items-center opacity-0"
        style={{ willChange: "transform, opacity" }}
      >
        <h3 className="text-sm md:text-2xl font-bold text-purple-200x-50 lg:max-w-[45rem] max-w-[27rem] tracking-wider md:mt-20 sm:mt-[-40rem] mt-[-32rem]">
          Hi, I am Sonia, a Full Stack Developer focused on speed, polish, and performance. I craft responsive, user-friendly web interfaces using modern tools like React, Tailwind CSS, and Next. Whether it's a landing page, a full-scale web app, or something in between—I'm all about clean code, fast delivery, and seamless user experiences.
        </h3>
        <img
          className="lg:h-[35rem] md:h-[25rem] h-[20rem] mix-blend-lighten"
          src="images/person.png"
          alt="Sonia"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default AboutSection;