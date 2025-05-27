import Image from 'next/image';
import Link from 'next/link';

export default function EspousedProjectPage() {
  return (
    <main className="max-w-7xl mx-auto py-16 px-8 mt-24 md:mt-32 text-neutral-300">
      {/* Project Title */}
      <h1 className="text-4xl md:text-5xl font-thin mb-4 text-left">Espoused Productions</h1>

      {/* Overview Section */}
      <section className="mb-12">
        <p className="text-lg md:text-xl mb-6 max-w-3xl text-left">
          We partnered with the innovative improv theatre company, Espoused Productions, to design and develop their complete website. From showcasing their unique shows to implementing a comprehensive admin dashboard and an integrated ticketing system, we built a platform that amplifies their creative voice.
        </p>
        <div className="flex justify-between items-center gap-4 mb-8">
          <p className="text-md text-neutral-400">Setting the Stage Online: Crafting a Vibrant Digital Presence for Espoused Productions</p>
          <Link href="https://espousedproductions.ca/" target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 text-white/80 hover:bg-light-teal/10 hover:text-light-teal border border-white/30 hover:border-light-teal/50">
            Visit Espoused Productions
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mb-16">
        <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1">
          <Image
            src="/espoused/homescreen.png"
            alt="Espoused Productions website homepage"
            width={1200}
            height={800}
            className="object-contain w-full h-full rounded-md"
          />
        </div>
        <p className="text-center text-neutral-400 mt-2 italic">The vibrant Espoused Productions website we designed and developed.</p>
      </section>

      {/* About Espoused Productions Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-6 text-left">About Espoused Productions: Improv, Artistry, and Connection</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="max-w-xs">
              <Image
                src="/espoused/homescreen_mobile.png"
                alt="Espoused Productions mobile website design"
                width={300}
                height={600}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2 text-light-teal">Live Improv Theatre</h3>
              <p className="text-base">Producing live, improvised, and immersive variety shows that offer brand new, original formats to audiences in Vancouver.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-light-teal">Creative Inspiration</h3>
              <p className="text-base">Shows conceptualized by award-winning performers and often co-produced with local theatre groups, bringing fresh experiences to audiences.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-light-teal">Community Connection</h3>
              <p className="text-base">Focused on fostering connection, creativity, and the magic of live theatre through engaging performances and events.</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg mb-4">
            Espoused Productions, based in Vancouver, is the creative venture of co-founders (and co-wives!) Maddie and Ivy. They are dedicated to producing live, improvised, and immersive variety shows that offer brand new, original formats. Their work, like &quot;The Maddie and Ivy Hour&quot;, is conceptualized by award-winning performers and often co-produced with local theatre groups, bringing fresh and engaging experiences to audiences.
          </p>
          <p className="text-lg">
            Their productions are all about connection, creativity, and the magic of live theatre, bringing innovative entertainment to the Vancouver theatre scene.
          </p>
        </div>
      </section>

      {/* Our Comprehensive Web Solution Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-6 text-left">Our Comprehensive Web Solution: From Showcase to Sales</h2>
        <div className="mb-8">
          <p className="text-lg mb-6">
            We developed a tailored web solution to meet all of Espoused Productions&apos; digital needs, ensuring their online presence is as dynamic as their performances:
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-light-teal">Engaging Public-Facing Website</h3>
              <p className="text-base leading-relaxed">
                We designed and built a visually captivating website that serves as the main hub for information about Espoused Productions. This includes sections detailing their company story, the founders Maddie and Ivy, and their unique approach to theatre. The site effectively communicates their brand and artistic vision.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-light-teal">Dynamic Show Display & Individual Pages</h3>
              <p className="text-base leading-relaxed">
                A core feature is the ability to showcase both upcoming and past performances. We implemented a system where each show has its own dedicated page, complete with detailed information, imagery, dates, venue specifics, and ticketing links.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-light-teal">Powerful Admin Dashboard</h3>
              <p className="text-base leading-relaxed">
                To give Espoused Productions full control, we created a comprehensive admin dashboard. This backend system allows them to easily create and edit show listings, upload promotional images and detailed show information, manage ticketing configurations, and handle other administrative tasks like newsletter emails.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-light-teal">Integrated In-Site Ticketing System</h3>
              <p className="text-base leading-relaxed">
                A key deliverable was an in-site ticketing system, providing an alternative to external providers. This feature, integrated with Stripe for secure payments, allows users to purchase tickets directly on the Espoused Productions website. The admin dashboard includes tools for managing these ticket sales, setting prices, and tracking availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Highlights & Functionality */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-8 text-left">Platform Highlights & Functionality</h2>
        
        <div className="space-y-16">
          {/* Frontend Showcase */}
          <section>
            <h3 className="text-2xl font-normal mb-4 text-left text-neutral-300">Vibrant Showcasing & Upcoming Events</h3>
            <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1 mb-4">
              <Image
                src="/espoused/homescreen.png"
                alt="Espoused Productions homepage design"
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-md"
              />
            </div>
            <p className="text-left">
              The website frontend immediately draws users in with striking visuals and clear navigation to upcoming shows and company information. The design captures the energetic and creative spirit of Espoused Productions.
            </p>
          </section>

          {/* Shows Page */}
          <section>
            <h3 className="text-2xl font-normal mb-4 text-left text-neutral-300">Detailed Show Information</h3>
            <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1 mb-4">
              <Image
                src="/espoused/shows_page.png"
                alt="Espoused Productions show page design"
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-md"
              />
            </div>
            <p className="text-left">
              Each performance gets a dedicated page with all necessary details, including descriptions, dates, times, venue, and links to buy tickets. These pages are designed to provide both information and excitement about upcoming events.
            </p>
          </section>

          {/* Admin Dashboard */}
          <section>
            <h3 className="text-2xl font-normal mb-4 text-left text-neutral-300">Comprehensive Show Management</h3>
            <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1 mb-4">
              <Image
                src="/espoused/admin_dashboard.png"
                alt="Espoused Productions admin dashboard"
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-md"
              />
            </div>
            <p className="text-left">
              The admin dashboard provides Espoused Productions with full control over their show listings, allowing them to easily view, edit, and manage all aspects of their performances. This empowers the team to maintain their online presence without technical assistance.
            </p>
          </section>

          {/* Ticketing Configuration */}
          <section>
            <h3 className="text-2xl font-normal mb-4 text-left text-neutral-300">Flexible Ticketing Control</h3>
            <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1 mb-4">
              <Image
                src="/espoused/ticket_management.png"
                alt="Espoused Productions ticketing configuration"
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-md"
              />
            </div>
            <p className="text-left">
              We empowered Espoused Productions with the ability to configure their own ticketing, set prices, manage ticket inventory, and choose between internal or external ticketing options. This flexibility allows them to adapt to different venues and event types.
            </p>
          </section>

          {/* In-Site Ticket Sales */}
          <section>
            <h3 className="text-2xl font-normal mb-4 text-left text-neutral-300">Seamless In-Site Ticketing</h3>
            <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1 mb-4">
              <Image
                src="/espoused/in-site_ticket_sales.png"
                alt="Espoused Productions in-site ticket purchasing"
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-md"
              />
            </div>
            <p className="text-left">
              The integrated ticketing system allows for a smooth purchase experience directly on the website, powered by Stripe for secure payment processing. This removes friction from the ticket-buying process, improving the user experience and potentially increasing sales.
            </p>
          </section>
        </div>
      </section>

      {/* Technology & Approach */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-6 text-left">Technology & Approach</h2>
        <div>
          <p className="text-lg">
            Our approach focused on delivering a user-friendly experience for both the audience and the Espoused Productions team. We utilized modern web technologies to create a custom solution that is both flexible and easy to manage. The integration of Stripe for payments ensures a secure and reliable ticketing process, while the content management system gives the team full control over their digital presence.
          </p>
        </div>
      </section>

      {/* Impact: Empowering Independent Theatre */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-6 text-left">Impact: Empowering Independent Theatre</h2>
        <div>
          <p className="text-lg">
            By developing a bespoke website complete with show management and an integrated ticketing system, we provided Espoused Productions with a powerful digital platform to connect with their audience, promote their unique shows, and manage their operations efficiently. This solution empowers them to control their online presence and ticketing process, supporting their continued growth and artistic endeavors in the vibrant Vancouver theatre scene.
          </p>
        </div>
      </section>
    </main>
  );
}
