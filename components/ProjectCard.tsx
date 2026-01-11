import React from 'react';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';
import { EditableText } from './admin/EditableText';
import { EditableImage } from './admin/EditableImage';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group flex flex-col gap-6">
      {/* Image Container */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden bg-neutral-100 border border-neutral-200 transition-colors duration-300 hover:border-neutral-400"
        onClick={(e) => {
          // If we are clicking inside specific editable areas (handled in components), the event propagation is stopped there.
          // But if we want to be safe, we rely on the user behavior (Edit Mode blocks navigation on image).
        }}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <EditableImage
            id={`project-${project.id}-image`}
            defaultSrc={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
        </div>
      </a>

      {/* Text Content */}
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-medium text-neutral-900 group-hover:text-black transition-colors w-full">
            <EditableText
              id={`project-${project.id}-title`}
              defaultText={project.title}
            />
          </h3>
          {project.category && (
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium shrink-0 ml-4">
              <EditableText
                id={`project-${project.id}-category`}
                defaultText={project.category}
              />
            </span>
          )}
        </div>

        <div className="text-neutral-500 font-light leading-relaxed text-sm md:text-base max-w-md">
          <EditableText
            id={`project-${project.id}-desc`}
            defaultText={project.description}
            as="p"
            multiline
          />
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 mt-2 hover:underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-all w-fit"
        >
          View Live Demo
          <ExternalLink size={14} className="text-neutral-400" />
        </a>
      </div>
    </div>
  );
};
