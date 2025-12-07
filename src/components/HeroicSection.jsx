import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

function HeroicSection() {
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowSpline(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-b from-violet-900 to-black flex md:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden"
    >
      {/* Left Section */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 0.5,
            duration: 1.2,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6"
        >
          Building Fast <br />
          Reliable Results
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 0.8,
            duration: 1.2,
          }}
          className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl z-50 bg-violet-500 lg:bg-transparent p-2 rounded"
        >
          I deliver robust, production-ready websites and web apps with speed and
          precision. Every project is backed by clean code, clear communication,
          and a commitment to getting it done—on time, every time.
        </motion.p>
      </div>

      {/* Right Section — Desktop: Spline | Mobile: Image */}
      <div className="absolute md:right-[-28%] right-0 top-[10%] md:top-0 lg:top-0">
        {/* Desktop Spline */}
        {showSpline && (
          <div className="hidden md:block">
            <Spline
              className="md:w-[40rem] md:h-[40rem]"
              scene="https://prod.spline.design/kIMUknax0wrirk9U/scene.splinecode"
            />
          </div>
        )}

        {/* Mobile Image */}
<motion.img
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    src="/images/front.jpeg"
    alt="Hero Illustration"
    className="
      md:hidden 
      w-[23rem] sm:w-[18rem]
      rounded-full
      border-4 border-purple-300
      shadow-lg shadow-purple-500/50
      drop-shadow-2xl
      mx-auto
    "
  />
      </div>
    </section>
  );
}

export default HeroicSection;
