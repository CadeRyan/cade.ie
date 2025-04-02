import ProjectCard, { Project } from '../components/ProjectCard'; // Adjust import path
// Removed unused Link import

export default function ProjectsPage() {

  // Define project data (can be expanded later)
  // For now, using the same data as the homepage
  const allProjects: Project[] = [
    {
      id: 'voxmail',
      name: 'VoxMail',
      briefDescription: 'AI-powered voicemail analysis and summarization tool.',
      // imageURL: '/path/to/voxmail-image.jpg'
    },
    {
      id: 'hula-the-goose',
      name: 'Hula the Goose',
      briefDescription: 'Interactive children\'s story app with animations and sound.',
      // imageURL: '/path/to/hula-image.jpg'
    },
    {
      id: 'shredvision',
      name: 'Shredvision',
      briefDescription: 'Real-time ski/snowboard tracking and video overlay application.',
      // imageURL: '/path/to/shredvision-image.jpg'
    }
    // Add more projects here in the future
  ];

  return (
    <main className="max-w-7xl mx-auto py-16 px-8 mt-16 md:mt-24"> {/* Added top margin */}
      <h1 className="text-4xl font-thin mb-12 text-center">Projects</h1> {/* Updated title */}
      {/* Grid layout for project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
