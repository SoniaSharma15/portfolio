import React from 'react';
import { projects } from './projects';
import { Animatedpin } from './Animatedpin';

function RecentProjects() {
  return (
    <section id="projects" aria-label="Recent Projects" className="py-10 md:py-20 bg-black text-white">
      <h2 className="font-bold text-xl md:text-3xl text-center mb-6">
        A small section of <span className="text-violet-300">recent projects</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
        {projects.map(({ id, title, img, desc, iconlist, link }) => (
          <div key={id} className="h-[25rem] sm:h-[28rem] flex items-center justify-center">
            <Animatedpin
              title={title}
              img={img}
              desc={desc}
              iconlist={iconlist}
              link={link}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default React.memo(RecentProjects);