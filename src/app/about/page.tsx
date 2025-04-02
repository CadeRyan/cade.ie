import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto pt-32 md:pt-48 pb-12 px-8"> {/* Adjusted padding and max-width */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-thin mb-4">About Me</h1>
      </header>

      <section className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-16">
        {/* Cade's Image */}
        <div className="flex-shrink-0">
          <div className="relative h-48 w-48 md:h-64 md:w-64 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-light-teal/20">
            <Image
              src="/Cade.jpg" // Assuming the image path is still correct in /public
              alt="Cade Ryan"
              layout="fill"
              objectFit="cover"
              priority // Prioritize loading the image
            />
          </div>
        </div>

        {/* Placeholder Bio Text */}
        <div className="text-center md:text-left flex-grow">
          <p className="text-lg md:text-xl leading-relaxed mb-4" style={{color: "var(--secondary-contrast)"}}>
            Hi, I'm Cade Ryan, a software engineer originally from Dublin, Ireland, and now based in the vibrant city of Vancouver, BC.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4" style={{color: "var(--secondary-contrast)"}}>
            With a passion for technology and problem-solving, I specialize in building robust web applications and bringing digital ideas to life. I enjoy working across the full stack, from crafting intuitive user interfaces to designing scalable backend systems.
          </p>
          <p className="text-lg md:text-xl leading-relaxed" style={{color: "var(--secondary-contrast)"}}>
            I'm also the founder of Koduu, a software development agency focused on creating innovative solutions for businesses and individuals. My goal is always to leverage technology to create meaningful impact and exceptional user experiences.
          </p>
          {/* Add more paragraphs or sections as needed */}
        </div>
      </section>

      {/* Optional: Add sections for Skills, Experience, etc. later */}

    </main>
  );
}
