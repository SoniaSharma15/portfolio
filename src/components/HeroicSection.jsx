import Spline from "@splinetool/react-spline";
import { motion, animate } from "framer-motion";
import React from "react";

function HeroicSection() {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex md:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden " id="home">
      {/* Left Section */}
      <div className="z-40 xl:mb-0 mb-[20%] ">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6"
        >
          Building Fast <br />
          Reliable Results
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            delay: 1.3,
            duration: 1.5,
            damping: 25, //damping is used to make movements feel more natural
          }}
          className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl z-50 bg-violet-500 lg:bg-transparent p-2 rounded"
        >
          I deliver robust , production-ready websites and web apps with speed
          and precision. Every project is backed ny clean code , clear
          communication, and a commitment to getting it done , on time , every
          time.
        </motion.p>
      </div>
      {/* Right Section */}
          <Spline className="absolute md:right-[-28%] right-0 top-[-20%] lg:top-0 " scene="https://prod.spline.design/kIMUknax0wrirk9U/scene.splinecode" />

    </section>
  );
}

export default HeroicSection;
