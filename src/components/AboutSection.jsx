import React, { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starsRef = useRef([]);

  // Stars generated once
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
      { y: -200, opacity: 1, duration: 0.8 }
    );

    tl.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      { y: -150, opacity: 1, filter: "blur(0px)", duration: 1.5 },
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
      className="min-h-[140vh] relative bg-gradient-to-b from-black to-[#9a74cf50]"
      ref={sectionRef}
    >
      {/* Stars */}
      <div className="absolute inset-0">
        {starStyles.map((style, i) => (
          <div
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full"
            style={style}
          />
        ))}
      </div>

      {/* Title */}
      <div className="container mx-auto px-4 pt-20 flex flex-col items-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center text-white opacity-0"
          style={{ willChange: "transform, opacity" }}
          id="about"
        >
          About Me
        </h1>
      </div>

      {/* Intro Section */}
      <div
        ref={introRef}
        className="absolute left-0 w-full mt-10 md:mt-20 flex md:flex-row flex-col md:justify-between items-center lg:px-24 px-5 opacity-0"
        style={{ willChange: "transform, opacity" }}
      >
        <h3 className="text-sm md:text-2xl font-semibold text-purple-200 lg:max-w-[45rem] max-w-[27rem] tracking-wide leading-relaxed">
          I’m Sonia Sharma, a passionate Full Stack Developer from Lucknow, India,
          currently pursuing my B.Tech in Computer Science and Engineering from
          SR Institute of Management and Technology (AKTU) with a strong academic
          record (CGPA: 8.7/10 till 7th semester).
          <br /><br />
          My academic journey built a strong foundation in computer science. I’ve
          excelled in Data Structures, Web Technologies, Python, and C Programming,
          supported by certifications from NPTEL, CEC, IGNOU, and IIT Madras.
          <br /><br />
          I was honored with a letter of recognition by Mr. Rajnath Singh for
          exceptional performance in Senior Secondary education.
          <br /><br />
          Alongside academics, I develop real-world applications using the MERN
          stack, Next.js, Tailwind, PostgreSQL, MongoDB, and modern AI tools,
          focusing on performance, design, and user-centred experiences.
          <br /><br />
          I love combining clean UI, efficient backend systems, and problem-solving
          to build meaningful digital products. Outside development, I enjoy
          learning, experimenting, and exploring new technologies.
        </h3>

        <img
          className="lg:h-[35rem] md:h-[28rem] h-[20rem] mix-blend-lighten mt-10 md:mt-0"
          src="images/person.png"
          alt="Sonia"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default AboutSection;
