import React from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { projectsData } from '@/data/projects';

const Projects = () => {
  return (
    <section id="projects" className="container py-20 md:py-32  ">
      <h2 className="text-4xl leading-none text-white mb-16 md:mb-24 max-w-3xl tracking-tight">
        Here are some of the <br className="hidden md:block" />
        projects I&apos;ve worked on.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-20">
        {projectsData.map((project, index) => (
          <Link href={`/projects/${project.slug}`} key={index} className="flex flex-col gap-6 group cursor-pointer block">
            {/* Image Placeholder */}
            <div className="w-full aspect-[4/3] bg-neutral-800 rounded-sm relative overflow-hidden ">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.cardTitle}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              )}
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-medium text-neutral-100 tracking-wide">
                  {project.cardTitle}
                </h3>
                <span className=" text-neutral-400 mt-1">
                  {project.year}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {project.categories.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 pb-1 rounded-full  text-neutral-400 text-xs md:text-sm font-medium transition-colors bg-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
