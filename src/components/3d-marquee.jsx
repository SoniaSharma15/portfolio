import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const ThreeDMarquee = ({ images, className }) => {
  // Create 4 columns with slightly shuffled arrangements to make it look organic
  const columns = [
    images,
    [...images].reverse(),
    [...images.slice(4), ...images.slice(0, 4)],
    [...images.slice(7), ...images.slice(0, 7)].reverse(),
  ];

  return (
    <div
      className={cn(
        "mx-auto w-full h-[400px] md:h-[600px] overflow-hidden rounded-2xl relative",
        className
      )}
    >
      <div className="flex h-full w-full items-center justify-center">
        {/* The 3D Perspective Container */}
        <div
          className="relative w-[150%] md:w-[120%] lg:w-[100%] h-[200%] flex gap-4 md:gap-8 justify-center items-center"
          style={{
            transform: "rotateX(55deg) rotateZ(-45deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {columns.map((colImages, colIndex) => {
            const isEven = colIndex % 2 === 0;

            return (
              <div 
                key={colIndex} 
                className="relative flex flex-col w-28 md:w-40 lg:w-48 overflow-visible"
              >
                {/* Vertical Grid Line */}
                <GridLineVertical className="-left-2 md:-left-4" offset="100px" />

                {/* The Scrolling Column */}
                <motion.div
                  className="flex flex-col gap-4 md:gap-8 w-full"
                  // Seamless infinite scroll logic
                  animate={{
                    y: isEven ? ["-50%", "0%"] : ["0%", "-50%"],
                  }}
                  transition={{
                    duration: 15 + colIndex * 2, // Slight speed variation per column
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  // CRITICAL: Forces the browser to put this column on the GPU
                  style={{ willChange: "transform" }}
                >
                  {/* Duplicate array twice so it loops perfectly */}
                  {[...colImages, ...colImages].map((image, imageIndex) => (
                    <div 
                      className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] bg-zinc-900" 
                      key={`${colIndex}-${imageIndex}`}
                    >
                      <GridLineHorizontal className="-top-2 md:-top-4" offset="100px" />
                      <img
                        src={image}
                        alt={`Tech stack ${imageIndex}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async" // Helps prevent lag during image load
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// --- Grid Lines (Optimized) ---

const GridLineHorizontal = ({ className, offset }) => {
  return (
    <div
      style={{
        "--background": "#ffffff",
        "--color": "rgba(255, 255, 255, 0.15)",
        "--height": "1px",
        "--width": "5px",
        "--fade-stop": "90%",
        "--offset": offset || "200px",
      }}
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "z-30 pointer-events-none",
        className
      )}
    />
  );
};

const GridLineVertical = ({ className, offset }) => {
  return (
    <div
      style={{
        "--background": "#ffffff",
        "--color": "rgba(255, 255, 255, 0.15)",
        "--height": "5px",
        "--width": "1px",
        "--fade-stop": "90%",
        "--offset": offset || "150px",
      }}
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "z-30 pointer-events-none",
        className
      )}
    />
  );
};