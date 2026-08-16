import React from 'react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

const ProjectDetail = ({ project }) => {
  if (!project) return null;

  return (
    <section className="pt-24 md:pt-32 pb-0 w-full">
      <div className="container">



        {/* Title & Description */}
        <div className="flex flex-col mb-16 md:mb-24">
          <Link href={"/"} className='hover:underline uppercase text-sm mb-5 w-fit'>Back</Link>
          <h1 className="text-5xl md:text-7xl  leading-none  text-white mb-10 md:mb-16  uppercase">
            {project.title}
          </h1>

          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutral-200 mb-6 md:mb-8 leading-snug font-normal ">
              {project.subtitle}
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-neutral-400  max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-[0.6fr_1fr_1fr_1fr_1fr] gap-y-10 gap-x-6">
          {/* Year */}
          <div className="flex flex-col gap-2 md:gap-3">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Year</span>
            <span className="text-xs md:text-sm text-neutral-300">{project.year}</span>
          </div>

          {/* Industry */}
          <div className="flex flex-col gap-2 md:gap-3">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Industry</span>
            <span className="text-xs md:text-sm text-neutral-300">{project.industry}</span>
          </div>

          {/* Role */}
          <div className="flex flex-col gap-2 md:gap-3">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Role</span>
            <span className="text-xs md:text-sm text-neutral-300">{project.role}</span>
          </div>

          {/* Link */}
          {project.link && (
            <div className="flex flex-col gap-2 md:gap-3">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Link</span>
              <a
                href={project.link.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs md:text-sm text-neutral-300 hover:text-white underline underline-offset-4 flex items-center gap-1.5 transition-colors w-fit"
              >
                {project.link.label}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
                  <path d="M3.5 3.5H8.5V8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="miter" />
                  <path d="M8.5 3.5L3.5 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="miter" />
                </svg>
              </a>
            </div>
          )}

          {/* Category */}
          <div className="flex flex-col gap-2 md:gap-3">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">Category</span>
            <div className="flex flex-wrap gap-2">
              {project.categories?.map((cat, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 rounded-full bg-neutral-700 text-neutral-300 text-xs font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Full Bleed Image */}
      {project.image && (
        <div className="w-full aspect-video relative bg-neutral-900 overflow-hidden my-16 md:my-24">
          <Image
            src={project.image}
            alt={`${project.title} Hero Image`}
            fill
            className="cover"
            priority
          />
        </div>
      )}

      {project.sectionImage && (
        <div className="w-full relative hidden md:block">
          <Image width={1920} height={1080} className='h-auto w-full object-contain' src={project.sectionImage} alt="project section" />
        </div>
      )}
      {project.sectionImageMobile && (
        <div className="w-full relative md:hidden">
          <Image width={1920} height={1080} className='h-auto w-full object-contain' src={project.sectionImageMobile} alt="project section" />
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;
