import ProjectCard, { Project } from '../components/ProjectCard'; // Adjust import path
import Link from 'next/link'; // Import Link

export default function ProjectsPage() {

  // Define project data (can be expanded later)
  // For now, using the same data as the homepage
  const allProjects: Project[] = [
    {
      id: 'espoused',
      name: 'Espoused Productions',
      briefDescription: 'Theatre company website with integrated admin dashboard and ticketing.',
      imageURL: '/espoused/homescreen.png'
    },
    {
      id: 'bizcrunch',
      name: 'Bizcrunch',
      briefDescription: 'UK business marketplace helping entrepreneurs buy and sell companies.',
      imageURL: '/bizcrunch/Enter Advanced filters.png'
    },
    {
      id: 'voxmail',
      name: 'VoxMail',
      briefDescription: 'Your customer\'s voice, Amplified.',
      imageURL: '/voxmail/VoxMail Master - web.png'
      // No external link for VoxMail yet, as it has an internal page
    },
    {
      id: 'hula-the-goose',
      name: 'Hula the Goose',
      briefDescription: 'A Cozy, goose dating simulator game.',
      imageURL: '/hula/hula_homepage.png'
    },
    {
      id: 'shredvision',
      name: 'Shredvision',
      briefDescription: 'Ski/ Snowboard coaching and video analysis platform.',
      imageURL: '/shredvision/shredvision_homepage.png'
    },
    {
      id: 'squid',
      name: 'Squid Loyalty',
      briefDescription: 'Comprehensive digital loyalty platform for local businesses and customers.',
      imageURL: '/squid/hero_img.png'
    }
    // Add more projects here in the future
  ];

  return (
    <main className="max-w-7xl mx-auto py-16 px-8 mt-24 md:mt-32"> {/* Updated top margin for new header */}
      <h1 className="text-4xl font-thin mb-12 text-center">Our Projects</h1>
      {/* Grid layout for project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
