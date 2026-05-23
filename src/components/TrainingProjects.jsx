import React from 'react';
import { motion } from 'framer-motion';
import { projects, trainingProjects } from './projects';
import { Animatedpin } from './Animatedpin';

function TrainingProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 20 } 
    },
  };

  return (
    <section 
      id="projects" 
      aria-label="Recent Projects" 
      className="relative w-full py-12 md:py-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0e] to-black overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
            A small section of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Training projects</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
            Showing my experience gained during my training on the real-world projects.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {trainingProjects.map(({ id, title, img, desc, iconlist, link }) => (
            <motion.div 
              key={id} 
              variants={itemVariants}
              className="min-h-[22rem] flex items-center justify-center w-full"
            >
              <Animatedpin
                title={title}
                img={img}
                desc={desc}
                iconlist={iconlist}
                link={link}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default React.memo(TrainingProjects);