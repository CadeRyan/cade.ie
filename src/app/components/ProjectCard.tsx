import React from 'react';
// Removed Link import from next/link
import Image from 'next/image';

// Define the structure for a Project
export interface Project {
  id: string; // Used for URL slug (e.g., 'voxmail')
  name: string;
  briefDescription: string;
  imageURL?: string; // Optional image for the project
}

interface ProjectCardProps {
  project: Project;
}

// Removed createSlug helper function as project.id is used directly

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Removed projectSlug variable

  return (
    // Updated styling to match Koduu theme: backdrop-blur, light-teal accents
    <div className="p-6 rounded-lg backdrop-blur-xxs bg-light-teal/5 border border-light-teal/10 shadow-lg flex flex-col h-full transition-shadow duration-300 hover:shadow-xl">
      {project.imageURL ? (
        <div className="relative h-48 w-full mb-4 rounded overflow-hidden"> {/* Added margin-bottom */}
          <Image
            src={project.imageURL}
            alt={`Image for ${project.name}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : (
        // Placeholder using Koduu theme colors
        <div className="relative h-48 w-full mb-4 rounded bg-dark-blue-2/30 flex items-center justify-center">
          <span className="text-white/50 text-sm">No Image Available</span>
        </div>
      )}
      <div className="flex flex-col flex-grow">
        {/* Project Name - updated font and color */}
        <h3 className="text-2xl font-thin text-white mb-2">{project.name}</h3>
        {/* Brief Description - updated color */}
        <p className="text-sm text-white/70 flex-grow mb-4">{project.briefDescription}</p>
        {/* Button Area - updated border and button style */}
        <div className="flex justify-start gap-2 mt-auto pt-4 border-t border-light-teal/10">
          {/* Replaced Link with <a> tag for external linking */}
          <a
            href={`https://koduu.com/projects/${project.id}`} // Use project.id for external link to koduu.com
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security measure for new tabs
            // Button styling matching original Koduu buttons
            className="text-center px-4 py-2 text-sm rounded-md bg-dark-blue-2/50 text-light-teal border border-dark-blue-2 hover:bg-light-teal/20 transition-colors duration-200"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
