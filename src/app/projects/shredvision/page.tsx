import Image from 'next/image';
import Link from 'next/link';

export default function ShredvisionProjectPage() {
  return (
    <main className="max-w-7xl mx-auto py-16 px-8 mt-24 md:mt-32 text-neutral-300">
      {/* Project Title */}
      <h1 className="text-4xl md:text-5xl font-thin mb-4 text-left">ShredVision</h1>

      {/* Overview Section */}
      <section className="mb-12">
        <p className="text-lg md:text-xl mb-6 max-w-3xl text-left">
          We collaborated with ShredVision to bring their innovative ski and snowboard video coaching concept to life. From detailed Figma designs to a fully-fledged mobile-first web application, we engineered a platform that connects athletes with professional coaches for personalized, on-demand improvement.
        </p>
        <div className="flex justify-between items-center gap-4 mb-8">
          <p className="text-md text-neutral-400">Elevating Snow Sports Coaching: Designing and Building the ShredVision Platform</p>
          <Link href="https://shredvision.io/" target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 text-white/80 hover:bg-light-teal/10 hover:text-light-teal border border-white/30 hover:border-light-teal/50">
            Visit ShredVision
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mb-16">
        <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1">
          <Image
            src="/shredvision/shredvision_homepage.png"
            alt="ShredVision mobile app interface"
            width={1200}
            height={800}
            className="object-contain w-full h-full rounded-md"
          />
        </div>
        <p className="text-center text-neutral-400 mt-2 italic">The mobile-first ShredVision platform we designed and developed for personalized snow sports coaching.</p>
      </section>

      {/* Client Testimonial Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-6 text-left">What the Creator Says</h2>
        <div className="max-w-4xl">
          <p className="text-lg mb-6 text-neutral-400">
            The ShredVision team shares their experience working with us on transforming their vision into a comprehensive digital coaching platform.
          </p>
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1">
            <video 
              controls 
              className="w-full h-auto rounded-md"
              preload="metadata"
            >
              <source 
                src="https://firebasestorage.googleapis.com/v0/b/koduu-ie.firebasestorage.app/o/Testimonial%20for%20Cade.mp4?alt=media&token=94efe5cb-6d82-43a7-8664-d650059c8e1c" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* About ShredVision Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-6 text-left">About ShredVision: Personalized Coaching, Anywhere</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1">
            <Image
              src="/shredvision/shredvision_homepage.png"
              alt="ShredVision mobile app showing coaching interface"
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-md"
              unoptimized
            />
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2 text-light-teal">Professional Video Analysis</h3>
              <p className="text-base">Connect with expert coaches who provide hyper-personalized video analysis and detailed feedback on your technique.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-light-teal">1-on-1 Coaching</h3>
              <p className="text-base">Receive direct, individualized guidance tailored to your specific skill level and improvement goals.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-light-teal">On-Demand Access</h3>
              <p className="text-base">Get expert coaching whenever you need it, whether you&apos;re on the slopes or planning your next session at home.</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg mb-4">
            ShredVision is revolutionizing how skiers and snowboarders hone their skills. The platform provides direct access to professional coaches who deliver hyper-personalized video analysis and 1-on-1 feedback. Whether you&apos;re looking to master a new trick, refine your technique, or simply gain more confidence on the slopes, ShredVision offers expert guidance tailored to your specific needs—even when you&apos;re off the slopes.
          </p>
          <p className="text-lg">
            It&apos;s like having a pro coach in your pocket, ready to help you find euphoria in every turn.
          </p>
        </div>
      </section>

      {/* Our Contribution Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-6 text-left">Our Contribution: From Design Blueprint to Mobile-First Reality</h2>
        <div className="mb-8">
          <p className="text-lg mb-6">
            We were the driving force behind ShredVision&apos;s digital presence, meticulously crafting both the user experience and the underlying technology. Our journey involved:
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-light-teal">Strategic UI/UX Design in Figma</h3>
              <p className="text-base leading-relaxed">
                We started by developing a comprehensive design system in Figma, establishing clear UI treatments with defined corner radiuses for visual consistency—6px for buttons and elements, and 12px for images and cards. A carefully selected color palette was created, featuring neutral colors like #1D252A for main content and iconography, and accent colors like #DD4523, used sparingly to communicate premium-ness.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-light-teal">Mobile-First Web Application Development</h3>
              <p className="text-base leading-relaxed">
                Understanding the on-the-go nature of athletes, we developed ShredVision as a mobile-first web application. This ensures a seamless and optimized experience whether users are on the mountain, at home, or traveling. Our development encompassed all core functionalities, including user dashboards, clear navigation menus, intuitive video upload interfaces, user profile and skill level inputs, and features like QR code referrals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Highlights Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-8 text-left">Platform Highlights & User Experience</h2>
        
        <div className="space-y-16">
          {/* Design System */}
          <section className="text-neutral-900">
            <h3 className="text-2xl font-normal mb-4 text-left text-neutral-300">Cohesive Design Language</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1">
                <Image
                  src="/shredvision/Button design.png"
                  alt="ShredVision button design system"
                  width={400}
                  height={400}
                  className="object-contain w-full h-full rounded-md"
                  unoptimized
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1">
                <Image
                  src="/shredvision/Color_design.png"
                  alt="ShredVision color palette design"
                  width={400}
                  height={400}
                  className="object-contain w-full h-full rounded-md"
                  unoptimized
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1">
                <Image
                  src="/shredvision/Elevation_design.png"
                  alt="ShredVision elevation and shadow design"
                  width={400}
                  height={400}
                  className="object-contain w-full h-full rounded-md"
                  unoptimized
                />
              </div>
            </div>
            <p className="text-left">
              Our comprehensive design system established consistent UI treatments, color palettes, and elevation rules, resulting in a polished and professional user experience across the entire ShredVision application. We defined elevation and shadow styles to create depth and hierarchy, distinguishing clickable elements from static content.
            </p>
          </section>

          {/* Mobile Experience */}
          <section className="text-neutral-900">
            <h3 className="text-2xl font-normal mb-4 text-left text-neutral-300">Intuitive Mobile Experience</h3>
            <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1 mb-4">
              <Image
                src="/shredvision/shredvision_homepage.png"
                alt="ShredVision mobile app interface"
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-md"
                unoptimized
              />
            </div>
            <p className="text-left">
              We designed a clean, accessible mobile interface allowing users to easily navigate the platform, access their dashboard, find coaches, and analyze their videos, all optimized for smaller screens and on-the-go usage.
            </p>
          </section>

          {/* Video Upload Process */}
          <section className="text-neutral-900">
            <h3 className="text-2xl font-normal mb-4 text-left text-neutral-300">Streamlined Video Analysis Process</h3>
            <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1 mb-4">
              <Image
                src="/shredvision/Video_upload_page.png"
                alt="ShredVision video upload interface"
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-md"
                unoptimized
              />
            </div>
            <p className="text-left">
              The video upload process is straightforward and user-friendly. Users can easily submit their footage and provide essential details about themselves and their skill level, enabling coaches to deliver targeted, personalized feedback.
            </p>
          </section>

          {/* Growth Features */}
          <section className="text-neutral-900">
            <h3 className="text-2xl font-normal mb-4 text-left text-neutral-300">Growth-Focused Features</h3>
            <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg bg-neutral-800 p-1 mb-4">
              <Image
                src="/shredvision/QR_code_referrals.png"
                alt="ShredVision QR code referral system"
                width={1200}
                height={800}
                className="object-contain w-full h-full rounded-md"
                unoptimized
              />
            </div>
            <p className="text-left">
              We integrated features like QR code referrals to support user acquisition and community growth for the ShredVision platform, making it easy for satisfied users to share the service with fellow athletes.
            </p>
          </section>
        </div>
      </section>

      {/* Technology & Approach */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-6 text-left">Technological Approach</h2>
        <div>
          <p className="text-lg">
            Our development focused on creating a responsive and performant web application using modern front-end technologies. The mobile-first approach ensured an optimal user experience on the primary devices used by athletes. We emphasized clean code, usability, and a scalable architecture to support ShredVision&apos;s growth.
          </p>
        </div>
      </section>

      {/* Impact & Outcomes */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-6 text-left">Impact: Empowering Athletes Through Technology</h2>
        <div>
          <p className="text-lg">
            Through our dedicated design and development efforts, we transformed ShredVision&apos;s vision into a tangible, user-centric platform. We delivered a robust, mobile-first web application, underpinned by a thoughtful design system, that empowers skiers and snowboarders to directly connect with expert coaches and significantly improve their riding. Our work provides ShredVision with a strong foundation to grow its community and become a go-to resource for personalized snow sports coaching.
          </p>
        </div>
      </section>
    </main>
  );
}
