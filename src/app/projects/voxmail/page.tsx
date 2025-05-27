import Image from 'next/image';
import Link from 'next/link';

export default function VoxMailProjectPage() {
  return (
    <main className="max-w-7xl mx-auto py-16 px-8 mt-24 md:mt-32 text-neutral-300 relative z-10">
      {/* Project Title */}
      <h1 className="text-4xl md:text-5xl font-thin mb-4 text-left">VoxMail</h1>

      {/* Overview Section */}
      <section className="mb-12 relative z-10">
        <p className="text-lg md:text-xl mb-6 max-w-3xl text-left">
          A project focused on creating an intuitive voice-messaging tool for websites, designed to enhance user interaction and accessibility.
        </p>
        <div className="flex justify-between items-center gap-4 mb-8">
          <p className="text-md text-neutral-400">UI/UX Design by: Susanne Duswald</p>
          <Link href="https://vox-mail.com/" target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 text-white/80 hover:bg-light-teal/10 hover:text-light-teal border border-white/30 hover:border-light-teal/50">
            Visit VoxMail Website
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mb-16 relative z-10">
        <h2 className="text-2xl font-normal mb-4 text-center">The Full Experience</h2>
        <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1 z-10">
           <Image
            src="/voxmail/Fullexperience.png"
            alt="VoxMail full website experience on tablet"
            width={1200}
            height={800}
            className="object-contain w-full h-full rounded-md"
          />
        </div>
         <p className="text-center text-neutral-400 mt-2 italic">Full website render showcasing the design on an iPad Pro.</p>
      </section>

      {/* Detailed Image Sections */}
      <div className="space-y-16 relative z-10">

        {/* 1. Initial Sketches */}
        <section className="text-neutral-900 relative z-10">
          <h2 className="text-3xl font-normal mb-4 text-left text-neutral-300">Initial Sketches</h2>
          <div className="bg-[#F5F5F7] p-4 rounded-lg mb-4 shadow-md relative z-10">
            <div className="relative w-full h-auto aspect-video overflow-hidden">
              <Image
                src="/voxmail/Sketches.png"
                alt="Initial UI/UX sketches for VoxMail"
                layout="fill"
                objectFit="contain"
                unoptimized
              />
            </div>
          </div>
          <p className="text-left">
            Early-stage brainstorming and layout exploration through hand-drawn sketches, forming the foundation for the user interface and experience design before moving into digital wireframes.
          </p>
        </section>

        {/* 2. Branding Guidelines */}
        <section className="text-neutral-900 relative z-10">
          <h2 className="text-3xl font-normal mb-4 text-left text-neutral-300">Branding Guidelines</h2>
           <div className="bg-[#F5F5F7] p-4 rounded-lg mb-4 shadow-md relative z-10">
             <div className="relative w-full h-auto aspect-video overflow-hidden">
              <Image
                src="/voxmail/Branding.png"
                alt="VoxMail branding including color palette and typography"
                layout="fill"
                objectFit="contain"
                unoptimized
              />
            </div>
          </div>
          <p className="text-left">
            Defining the visual identity of VoxMail, including the primary color palette and typography choices used throughout the website and the widget tool to ensure brand consistency.
          </p>
        </section>

        {/* 3. Wireframing */}
        <section className="text-neutral-900 relative z-10">
          <h2 className="text-3xl font-normal mb-4 text-left text-neutral-300">Wireframing</h2>
           <div className="bg-[#F5F5F7] p-4 rounded-lg mb-4 shadow-md relative z-10">
             <div className="relative w-full h-auto aspect-video overflow-hidden">
              <Image
                src="/voxmail/Fidelity wireframe.png"
                alt="High-fidelity wireframes for the VoxMail website"
                layout="fill"
                objectFit="contain"
                unoptimized
              />
            </div>
          </div>
          <p className="text-left">
            A collage showcasing the high-fidelity wireframes developed in Figma. This stage focused on structuring the website layout, content placement, and user flow prior to final design implementation.
          </p>
        </section>

        {/* 4. Widget Design */}
        <section className="text-neutral-900 relative z-10">
          <h2 className="text-3xl font-normal mb-4 text-left text-neutral-300">Widget Design</h2>
           <div className="bg-[#F5F5F7] p-4 rounded-lg mb-4 shadow-md relative z-10">
             <div className="relative w-full h-auto aspect-video overflow-hidden">
              <Image
                src="/voxmail/Widget.png"
                alt="Figma designs for the VoxMail widget tool"
                layout="fill"
                objectFit="contain"
                unoptimized
              />
            </div>
          </div>
          <p className="text-left">
            Figma renders presenting the various screens and states of the core VoxMail widget. This collage illustrates the final look and feel of the tool as it appears on client websites.
          </p>
        </section>

        {/* 5. Widget Interaction Flow */}
        <section className="text-neutral-900 relative z-10">
          <h2 className="text-3xl font-normal mb-4 text-left text-neutral-300">Widget Interaction Flow</h2>
           <div className="bg-[#F5F5F7] p-4 rounded-lg mb-4 shadow-md relative z-10">
             <div className="relative w-full h-auto aspect-video overflow-hidden">
              <Image
                src="/voxmail/Widget interaction.png"
                alt="Flow chart detailing the VoxMail widget's user interaction logic"
                layout="fill"
                objectFit="contain"
                unoptimized
              />
            </div>
          </div>
          <p className="text-left">
            A flowchart mapping out the different user paths, logic, and interactions within the VoxMail widget, ensuring a smooth and intuitive experience for end-users leaving voice messages.
          </p>
        </section>

        {/* 6. Accessibility Testing */}
        <section className="text-neutral-900 relative z-10">
          <h2 className="text-3xl font-normal mb-4 text-left text-neutral-300">Accessibility Testing</h2>
           <div className="bg-[#F5F5F7] p-4 rounded-lg mb-4 shadow-md relative z-10">
             <div className="relative w-full h-auto aspect-video overflow-hidden">
              <Image
                src="/voxmail/Accessibility.png"
                alt="Accessibility testing results for color contrast"
                layout="fill"
                objectFit="contain"
                unoptimized
              />
            </div>
          </div>
          <p className="text-left">
            Demonstrating commitment to accessibility, this image shows how the chosen color palette and contrasts were tested against various forms of visual impairment, including Deuteranopia, Tritanopia, and Protanopia.
          </p>
        </section>

        {/* 7. Multi-Device Responsiveness */}
        <section className="text-neutral-900 relative z-10">
          <h2 className="text-3xl font-normal mb-4 text-left text-neutral-300">Multi-Device Responsiveness</h2>
           <div className="bg-[#F5F5F7] p-4 rounded-lg mb-4 shadow-md relative z-10">
             <div className="relative w-full h-auto aspect-video overflow-hidden">
              <Image
                src="/voxmail/Collage.png"
                alt="VoxMail website and tool shown on various devices"
                layout="fill"
                objectFit="contain"
                unoptimized
              />
            </div>
          </div>
          <p className="text-left">
            A collage rendering the VoxMail website and widget across multiple devices (desktop, tablet, mobile), highlighting the responsive design approach ensuring functionality and optimal viewing on different screen sizes.
          </p>
        </section>
      </div>
    </main>
  );
}
