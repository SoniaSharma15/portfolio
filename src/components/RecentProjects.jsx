import React from 'react'
import { projects } from './projects'
import { Animatedpin } from './Animatedpin'

function RecentProjects() {
  return (
    <div className='py-5 md:py-20' id='projects'>
    <h2 className="font-bold text-xl md:text-3xl text-center">
        A small section of{' '}
        <span className='text-violet-300'>recent projects</span>
      </h2>
      <div className='flex flex-wrap items-center justify-center p-4 md:gap-5 mt-1'>
        {
          projects.map(({ id, title, img, desc, iconlist, link }) => (
            <div key={id} className='lg:min-h[32.5rem] h-[25rem] items-center justify-center sm:w-96 w-[80vw]'>
             <Animatedpin title={title} img={img} desc={desc} iconlist={iconlist} link={link}  />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default RecentProjects