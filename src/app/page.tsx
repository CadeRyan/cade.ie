import Link from 'next/link'; // Added missing import
import Image from 'next/image'; // Added Image import
// Removed TypingHeadline import
import ProjectCard, { Project } from './components/ProjectCard'; // Import ProjectCard and Project interface
// Removed InteractiveText import

export default function HomePage() {

  // Define initial project data
  const featuredProjects: Project[] = [
    {
      id: 'voxmail',
      name: 'VoxMail',
      briefDescription: 'AI-powered voicemail analysis and summarization tool.',
      // imageURL: '/path/to/voxmail-image.jpg' // Optional: Add image paths later
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
  ];

  return (
    <main className="max-w-7xl mx-auto py-16 px-8">
      {/* Hero Section */}
      {/* Changed to flex layout for image placement */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 mb-16 mt-16 md:mt-32 lg:mt-48 px-4"> 
        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">
        {/* Replaced TypingHeadline with simple h1 */}
        {/* Added text-pastel-orange */}
        <h1 className="text-5xl md:text-6xl font-semibold mb-8 text-pastel-orange">
            Hey, I'm Cade,
            <br />
            I'm a software engineer
          </h1>
          {/* Removed subheading */}
          {/* Updated paragraph with placeholder bio */}
          <p
            className="text-lg md:text-xl leading-relaxed mb-0" // Removed bottom margin
            style={{ color: 'var(--secondary-contrast)' }}
          >
            Originally from Dublin, Ireland, now based in Vancouver, BC. I specialize in building innovative web applications and digital experiences. As the founder of Koduu, I help bring ideas to life through technology.
          </p>
        </div>
        {/* Tilted Image */}
        <div className="flex-shrink-0 transform rotate-3 hover:rotate-0 transition-transform duration-300 ease-in-out">
           <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-lg overflow-hidden shadow-xl border-4 border-dark-blue-2/50">
             <Image
               src="/Cade.jpg" // Assuming the image path is still correct in /public
               alt="Cade Ryan"
               layout="fill"
               objectFit="cover"
               priority 
             />
           </div>
         </div>
      </section>

      {/* Featured Projects Section - Commented out for now */}
      {/*
      <section className="mb-16">
        <h2 className="text-4xl font-thin mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
           ))}
        </div>
      </section>
      */}
    </main>
  );
}
