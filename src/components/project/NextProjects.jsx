import React from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { projectsData } from '@/data/projects';

const NextProjects = ({ currentSlug }) => {
  // Find the index of the current project
  const currentIndex = projectsData.findIndex(p => p.slug === currentSlug);

  if (currentIndex === -1) return null;

  // Get the next 2 projects (looping back to the start if necessary)
  const nextProjects = [
    projectsData[(currentIndex + 1) % projectsData.length],
    projectsData[(currentIndex + 2) % projectsData.length]
  ];

  return (
    <section className="container py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl leading-none text-white mb-12 md:mb-16 tracking-tight">
        Next Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-20">
        {nextProjects.map((project, index) => (
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

export default NextProjects;
