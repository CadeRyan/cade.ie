import Image from 'next/image';
import Link from 'next/link';

export default function HulaTheGooseProjectPage() {
  return (
    <main className="max-w-7xl mx-auto py-16 px-8 mt-24 md:mt-32 text-neutral-300">
      {/* Project Title */}
      <h1 className="text-4xl md:text-5xl font-thin mb-4 text-left">Hula the Goose</h1>

      {/* Overview Section */}
      <section className="mb-12">
        <p className="text-lg md:text-xl mb-6 max-w-3xl text-left">
          We designed and built the promotional website for Hula the Goose, a charming indie game about relationships and exploration. Our goal was to capture the game&apos;s whimsical art style and cozy atmosphere in a digital experience that would get people excited for the Kickstarter launch.
        </p>
        <div className="flex justify-between items-center gap-4 mb-8">
          <p className="text-md text-neutral-400">Crafting Digital Whimsy for an Indie Game</p>
          <Link href="https://hulathegoose.com/" target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 text-white/80 hover:bg-light-teal/10 hover:text-light-teal border border-white/30 hover:border-light-teal/50">
            Visit Hula the Goose
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mb-16">
        <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1">
          <Image
            src="/hula/hula_homepage.png"
            alt="Hula the Goose website homepage"
            width={1200}
            height={800}
            className="object-contain w-full h-full rounded-md"
          />
        </div>
        <p className="text-center text-neutral-400 mt-2 italic">The promotional website we built, showcasing Hula in the beautiful world of Dewlithe.</p>
      </section>

      {/* Client Testimonial Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-6 text-left">What the Creator Says</h2>
        <div className="max-w-4xl">
          <p className="text-lg mb-6 text-neutral-400">
            Ryan, founder of Your Studios, shares his experience working with us on bringing Hula the Goose&apos;s digital presence to life.
          </p>
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1">
            <video 
              controls 
              className="w-full h-auto rounded-md"
              preload="metadata"
            >
              <source 
                src="https://firebasestorage.googleapis.com/v0/b/koduu-ie.firebasestorage.app/o/WhatsApp%20Video%202025-05-08%20at%2023.17.23.mp4?alt=media&token=3e09a983-603b-4155-b27e-81d505deda29" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* About Hula the Goose Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-6 text-left">About Hula the Goose: A Charming Relationship Builder</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1">
            <Image
              src="/hula/promo-shot.png"
              alt="Hula the Goose promotional artwork"
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-md"
              unoptimized
            />
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2 text-light-teal">Exploration</h3>
              <p className="text-base">Discover the vibrant world of Dewlithe and its enchanting forests with Hula&apos;s uniquely awkward yet charming movements.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-light-teal">Collecting & Crafting</h3>
              <p className="text-base">Gather plants, recyclables, and quest items to craft gifts, cosmetics, and decorations back at home.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-light-teal">Relationships</h3>
              <p className="text-base">Build friendships and romantic connections through dialogue, gift-giving, and secret quests.</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg mb-4">
            Hula the Goose isn&apos;t your typical dating sim - it&apos;s a &quot;relationship builder&quot; that focuses on genuine connections and cozy gameplay. Players guide Hula through the picturesque town of Dewlithe, exploring, crafting, and building meaningful relationships with a cast of charming characters.
          </p>
          <p className="text-lg">
            After each day of adventure and socializing, Hula returns home to relax, play music, decorate, and prepare for tomorrow. It&apos;s all about creating that perfect cozy loop that keeps players coming back to this delightful world.
          </p>
        </div>
      </section>

      {/* Our Role Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-6 text-left">What We Built</h2>
        <div className="mb-8">
          <p className="text-lg mb-6">
            The Hula the Goose team needed a website that would do justice to their beautiful game and help build excitement for the Kickstarter launch. Here&apos;s how we brought their vision to life online:
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-light-teal">Art & Atmosphere Translation</h3>
              <p className="text-base leading-relaxed">
                The biggest challenge was capturing the game&apos;s hand-drawn art style and whimsical feel in a web format. We made sure every design choice - from color palettes to typography - felt like a natural extension of the game world.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-light-teal">User Experience Design</h3>
              <p className="text-base leading-relaxed">
                We created intuitive navigation that feels integrated into the game&apos;s world, with sections for meeting characters, learning about gameplay, and discovering the studio behind the magic. Everything flows naturally and invites exploration.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-light-teal">Pre-Launch Community Building</h3>
              <p className="text-base leading-relaxed">
                The website needed to build anticipation before the Kickstarter went live. We included prominent calls-to-action for the Kickstarter follow, email newsletter signup for &quot;secret updates,&quot; and ways for fans to stay connected with the project.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-light-teal">Responsive Design</h3>
              <p className="text-base leading-relaxed">
                We ensured the magical experience worked beautifully across all devices, maintaining the artistic integrity and user-friendly navigation whether someone was browsing on desktop, tablet, or mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Website Highlights Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-8 text-left">Website Design Highlights</h2>
        
        <div className="space-y-16">
          {/* Character Introduction */}
          <section className="text-neutral-900">
            <h3 className="text-2xl font-normal mb-4 text-left text-neutral-300">Meet the Cast</h3>
            <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1 mb-4">
              <Image
                src="/hula/characters_page.png"
                alt="Hula the Goose characters page design"
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-md"
                unoptimized
              />
            </div>
            <p className="text-left">
              We designed character introduction sections that let visitors get a glimpse of the personalities they&apos;ll meet in the game. The navigation feels integrated into the world while remaining intuitive and accessible.
            </p>
          </section>

          {/* Mobile Experience */}
          <section className="text-neutral-900">
            <h3 className="text-2xl font-normal mb-4 text-left text-neutral-300">Mobile Experience</h3>
            <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1 mb-4">
              <Image
                src="/hula/mobile_homepage.jpg"
                alt="Hula the Goose mobile homepage design"
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-md"
                unoptimized
              />
            </div>
            <p className="text-left">
              We made sure the magical experience worked beautifully on mobile devices, adapting the layout and interactions while preserving the whimsical feel and artistic integrity that makes Hula&apos;s world so enchanting.
            </p>
          </section>

          {/* Visual Storytelling */}
          <section className="text-neutral-900">
            <h3 className="text-2xl font-normal mb-4 text-left text-neutral-300">Visual Storytelling</h3>
            <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1 mb-4">
              <Image
                src="/hula/promo-shot.png"
                alt="Hula the Goose promotional artwork showcase"
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-md"
                unoptimized
              />
            </div>
            <p className="text-left">
              We showcased the game&apos;s gorgeous art throughout the site, using it not just as decoration but as a storytelling tool that helps visitors understand the game&apos;s tone, characters, and world before they even play.
            </p>
          </section>
        </div>
      </section>

      {/* Technology & Approach */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-6 text-left">Our Design Approach</h2>
        <div>
          <p className="text-lg">
            Every design decision was guided by one question: &quot;Does this feel like it belongs in Hula&apos;s world?&quot; We focused on creating a cohesive experience that would make visitors feel like they were already part of the game&apos;s charming universe, setting them up to become invested backers and eventual players.
          </p>
        </div>
      </section>

      {/* Impact & Outcomes */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-6 text-left">The Result</h2>
        <div>
          <p className="text-lg">
            We delivered a promotional website that perfectly captured Hula the Goose&apos;s unique charm and artistic vision. The site successfully built anticipation for the Kickstarter campaign, giving potential backers a taste of the magical world awaiting them. It stands as proof that thoughtful web design can be just as enchanting as the games it promotes.
          </p>
        </div>
      </section>
    </main>
  );
}
