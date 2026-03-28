import React, { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Award, Code2, Rocket } from "lucide-react";

function AboutSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starsRef = useRef([]);

  const starStyles = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      width: `${Math.random() * 4 + 2}px`,
      height: `${Math.random() * 4 + 2}px`,
      backgroundColor: "#6366f1",
      boxShadow: "0 0 10px #6366f1",
      opacity: Math.random(),
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    tl.fromTo(
      introRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.4"
    );

    starsRef.current.forEach((star) => {
      gsap.to(star, {
        y: -100,
        opacity: 0.2,
        duration: Math.random() * 2 + 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) starsRef.current.push(el);
  };

  return (
    <section
      className="min-h-screen relative overflow-hidden bg-[#030014] flex flex-col justify-center py-20 lg:py-32"
      ref={sectionRef}
      id="about"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        {starStyles.map((style, i) => (
          <div ref={addToStars} key={`star-${i}`} className="absolute rounded-full" style={style} />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center lg:text-left">
          <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Forging Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Experiences</span>
          </h2>
          <div className="h-1.5 w-20 bg-indigo-500 rounded-full mx-auto lg:mx-0" />
        </div>

        <div ref={introRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-slate-300">
            <p className="text-lg md:text-xl leading-relaxed">
              I’m <span className="text-white font-semibold underline decoration-indigo-500/50 underline-offset-4">Sonia Sharma</span>, a Full Stack Developer based in Lucknow. Currently finalizing my B.Tech in CSE with an <span className="text-indigo-400 font-bold">8.7 CGPA</span>, I specialize in engineering scalable web architectures that pair robust backend logic with intuitive design.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <SkillCard 
                icon={<Code2 className="text-indigo-400" />} 
                title="Full Stack Expertise" 
                desc="Building modern apps with React, Node.js, and Python."
              />
              <SkillCard 
                icon={<Award className="text-blue-400" />} 
                title="Academic Merit" 
                desc="Recognition from Shri Rajnath Singh for excellence."
              />
              <SkillCard 
                icon={<GraduationCap className="text-cyan-400" />} 
                title="Industry Certified" 
                desc="Trained through IIT Madras, NPTEL, and CEC."
              />
              <SkillCard 
                icon={<Rocket className="text-orange-400" />} 
                title="Future Ready" 
                desc="Focused on Cloud technologies and system optimization."
              />
            </div>

            <p className="text-slate-400 italic pt-4 border-l-2 border-indigo-500/30 pl-4">
              "I don't just write code; I build solutions that turn complex problems into seamless digital realities."
            </p>
          </div>

          {/* Image Content - Full Color with Glow */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated Glow behind image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-[#030014] rounded-2xl p-2 border border-white/5">
                <img
                  className="rounded-xl w-72 md:w-96 lg:w-80 h-auto object-cover transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-110 shadow-2xl"
                  src="images/me.jpeg"
                  alt="Sonia Sharma"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon, title, desc }) {
  return (
    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.06] transition-all duration-300 backdrop-blur-md">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h4 className="text-white font-bold text-[11px] uppercase tracking-[0.15em]">{title}</h4>
      </div>
      <p className="text-xs text-slate-400 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

export default AboutSection;