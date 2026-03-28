import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const quoteWords = useMemo(() => {
    return testimonials[active].quote.split(" ");
  }, [active, testimonials]);

  return (
    <section 
      // FIX 4: Reduced py-20 to py-12 to minimize the gap between sections
      className="w-full py-12 md:py-16 bg-black overflow-hidden" 
      id="certificates"
    >
      {/* FIX 5: Adjusted font sizes (text-2xl md:text-4xl) so it matches the projects header above */}
      <h2 className="font-extrabold text-2xl md:text-4xl text-center text-white mb-10 tracking-tight">
        Certificates and Achievements
      </h2>
      
      <div className="mx-auto max-w-6xl px-4 md:px-8 font-sans antialiased">
        <div className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-[1.5fr_1fr] items-center">
          
          <div className="relative h-64 sm:h-80 md:h-[400px] lg:h-[450px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[active].src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 origin-bottom"
                style={{ willChange: "transform, opacity" }}
              >
                <img
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-contain object-center border border-white/10 bg-white/5 p-2"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-between p-4 w-full h-full min-h-[250px] md:min-h-[350px]">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="w-full"
              style={{ willChange: "transform, opacity" }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {testimonials[active].name}
              </h3>
              <p className="text-xs md:text-sm text-purple-400 mt-1">
                {testimonials[active].designation}
              </p>
              <motion.p className="mt-4 text-sm md:text-base text-zinc-300 leading-relaxed">
                {quoteWords.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                    style={{ willChange: "transform, opacity" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>

            <div className="flex gap-4 pt-8 md:pt-0 mt-auto">
              <button
                onClick={handlePrev}
                className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
              >
                <IconArrowLeft className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:-translate-x-1" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
              >
                <IconArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:translate-x-1" />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};