import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define the structure for a Project
export interface Project {
  id: string; // Used for URL slug (e.g., 'voxmail')
  name: string;
  briefDescription: string;
  imageURL?: string; // Optional image for the project
  externalLink?: string; // Optional external link for projects without internal pages yet
}

interface ProjectCardProps {
  project: Project;
}

// Helper function to create a URL-friendly slug from the project name
const createSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Use the project ID directly for internal links instead of generating a slug from the name
  // Determine the link target: external link if provided, otherwise internal project page
  const linkHref = project.externalLink ? project.externalLink : `/projects/${project.id}`;
  // Determine if the link should open in a new tab
  const linkTarget = project.externalLink ? "_blank" : "_self";

  return (
    // Updated styling to match Koduu theme: backdrop-blur, light-teal accents
    <div className="p-6 rounded-lg backdrop-blur-xxs bg-light-teal/5 border border-light-teal/10 shadow-lg flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-105">
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
          <Link
            href={linkHref} // Use determined link href
            target={linkTarget} // Use determined link target
            rel={project.externalLink ? "noopener noreferrer" : undefined} // Add rel for external links
            // Button styling matching original Koduu buttons
            className="text-center px-4 py-2 text-sm rounded-md bg-dark-blue-2/50 text-light-teal border border-dark-blue-2 hover:bg-light-teal/20 transition-colors duration-200"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
