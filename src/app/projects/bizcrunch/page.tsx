import Image from 'next/image';
import Link from 'next/link';

export default function BizCrunchProjectPage() {
  return (
    <main className="max-w-7xl mx-auto py-16 px-8 mt-24 md:mt-32 text-neutral-300">
      {/* Project Title */}
      <h1 className="text-4xl md:text-5xl font-thin mb-4 text-left">Bizcrunch</h1>

      {/* Overview Section */}
      <section className="mb-12">
        <p className="text-lg md:text-xl mb-6 max-w-3xl text-left">
          We built Bizcrunch from the ground up - a platform that helps entrepreneurs find and buy businesses in the UK. From the main web app to the complex data systems powering it, we created everything they needed to connect buyers with sellers in the M&A market.
        </p>
        <div className="flex justify-between items-center gap-4 mb-8">
          <p className="text-md text-neutral-400">Building the UK&apos;s Business Marketplace</p>
          <Link href="https://bizcrunch.co" target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 text-white/80 hover:bg-light-teal/10 hover:text-light-teal border border-white/30 hover:border-light-teal/50">
            Visit Bizcrunch Website
          </Link>
        </div>
      </section>


      {/* About Bizcrunch Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-6 text-left">About Bizcrunch: Solving the M&A Challenge</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-[#F5F5F7] p-4 rounded-lg shadow-md">
            <div className="relative w-full h-auto aspect-video overflow-hidden">
              <Image
                src="/bizcrunch/marketing_image1.jpeg"
                alt="90% of companies for sale in the UK go unsold"
                layout="fill"
                objectFit="contain"
                unoptimized
              />
            </div>
          </div>
          <div className="bg-[#F5F5F7] p-4 rounded-lg shadow-md">
            <div className="relative w-full h-auto aspect-video overflow-hidden">
              <Image
                src="/bizcrunch/marketing_image2.jpeg"
                alt="Only 15% of retiring business owners have a succession plan"
                layout="fill"
                objectFit="contain"
                unoptimized
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg mb-4">
            Here&apos;s the thing - buying and selling businesses in the UK is broken. Most entrepreneurs who want to buy a company have no idea where to start, and business owners looking to retire often can&apos;t find buyers.
          </p>
          <p className="text-lg">
            The numbers are pretty stark: 90% of companies for sale never actually sell, and only 15% of business owners have any kind of exit plan. Bizcrunch fixes this by making it simple to find, research, and connect with the right opportunities.
          </p>
        </div>
      </section>

      {/* Our Contributions Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-6 text-left">What We Built</h2>
        <div className="mb-8">
          <p className="text-lg mb-6">
            Bizcrunch needed everything from scratch - the main platform, the data infrastructure, and all the backend systems to make it work. Here&apos;s what we delivered:
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-3 text-light-teal">The Main Platform</h3>
              <p className="text-base leading-relaxed">
                We built the core web app where users search and browse companies. This includes smart filtering (like finding only profitable businesses or those with low debt), detailed company profiles with financials and ownership info, and a clean interface that makes sense of complex business data.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-light-teal">Data Infrastructure</h3>
              <p className="text-base leading-relaxed">
                Bizcrunch is powered by data - lots of it. We built the systems that collect, process, and organize company information from various sources, keeping everything accurate and up-to-date so users get reliable insights about potential acquisitions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-light-teal">Admin Dashboard</h3>
              <p className="text-base leading-relaxed">
                The Bizcrunch team needed tools to manage everything behind the scenes. We created an internal admin portal for managing data, monitoring user activity, and keeping the platform running smoothly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-light-teal">Automation Systems</h3>
              <p className="text-base leading-relaxed">
                We set up automated workflows using n8n on Kubernetes to handle repetitive tasks and integrate different services. This keeps the platform efficient and reduces manual work for the team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Highlights & Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-8 text-left">Platform Highlights & Features</h2>
        
        <div className="space-y-16">
          {/* In-Depth Company Discovery */}
          <section className="text-neutral-900">
            <h3 className="text-2xl font-normal mb-4 text-left text-neutral-300">Company Search & Profiles</h3>
            <div className="bg-[#F5F5F7] p-4 rounded-lg mb-4 shadow-md">
              <div className="relative w-full h-auto aspect-video overflow-hidden">
                <Image
                  src="/bizcrunch/Company details on hover.png"
                  alt="BizCrunch company details interface"
                  layout="fill"
                  objectFit="contain"
                  unoptimized
                />
              </div>
            </div>
            <p className="text-left">
              Users can search through thousands of UK companies and view detailed profiles with financials, ownership info, and company history - everything you need to evaluate a potential acquisition.
            </p>
          </section>

          {/* Powerful & Intuitive Filtering */}
          <section className="text-neutral-900">
            <h3 className="text-2xl font-normal mb-4 text-left text-neutral-300">Smart Filtering</h3>
            <div className="bg-[#F5F5F7] p-4 rounded-lg mb-4 shadow-md">
              <div className="relative w-full h-auto aspect-video overflow-hidden">
                <Image
                  src="/bizcrunch/Enter Advanced filters.png"
                  alt="BizCrunch advanced filtering system"
                  layout="fill"
                  objectFit="contain"
                  unoptimized
                />
              </div>
            </div>
            <p className="text-left">
              Find exactly what you&apos;re looking for with filters for location, industry, revenue, and our &quot;Smart Acquire Filters&quot; like &quot;Low Debt&quot; or &quot;Profitable&quot; - perfect for finding acquisition targets that match your criteria.
            </p>
          </section>

          {/* Seamless Data Export */}
          <section className="text-neutral-900">
            <h3 className="text-2xl font-normal mb-4 text-left text-neutral-300">Data Export</h3>
            <div className="bg-[#F5F5F7] p-4 rounded-lg mb-4 shadow-md">
              <div className="relative w-full h-auto aspect-video overflow-hidden">
                <Image
                  src="/bizcrunch/Export search.png"
                  alt="BizCrunch data export functionality"
                  layout="fill"
                  objectFit="contain"
                  unoptimized
                />
              </div>
            </div>
            <p className="text-left">
              Export company lists and data in different formats - whether you need everything or just contact details, you can get the data out of BizCrunch and into your own workflow.
            </p>
          </section>

          {/* Flexible Subscription Management */}
          <section className="text-neutral-900">
            <h3 className="text-2xl font-normal mb-4 text-left text-neutral-300">Subscription & Credits</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#F5F5F7] p-4 rounded-lg shadow-md">
                <div className="relative w-full h-auto aspect-video overflow-hidden">
                  <Image
                    src="/bizcrunch/How many credits (1).png"
                    alt="BizCrunch credit management system"
                    layout="fill"
                    objectFit="contain"
                    unoptimized
                  />
                </div>
              </div>
              <div className="bg-[#F5F5F7] p-4 rounded-lg shadow-md">
                <div className="relative w-full h-auto aspect-video overflow-hidden">
                  <Image
                    src="/bizcrunch/Plan selected.png"
                    alt="BizCrunch subscription plan selection"
                    layout="fill"
                    objectFit="contain"
                    unoptimized
                  />
                </div>
              </div>
            </div>
            <p className="text-left">
              Simple pricing with credit-based exports and clear subscription plans. Users can easily manage their account, top up credits, and choose the plan that works for their needs.
            </p>
          </section>
        </div>
      </section>

      {/* Technology & Approach */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-6 text-left">How We Built It</h2>
        <div>
          <p className="text-lg">
            We focused on building something that could handle thousands of users and massive amounts of data without breaking. Modern web tech, smart data pipelines, and Kubernetes to keep everything running smoothly - basically, the kind of setup that scales as Bizcrunch grows.
          </p>
        </div>
      </section>

      {/* Impact & Outcomes */}
      <section className="mb-16">
        <h2 className="text-3xl font-normal mb-6 text-left">The Result</h2>
        <div>
          <p className="text-lg">
            Bizcrunch now has a platform that actually works for both sides of the M&A market. Buyers can find opportunities they never would have discovered otherwise, and sellers have a real channel to reach interested entrepreneurs. It&apos;s solving a genuine problem in the UK business world.
          </p>
        </div>
      </section>
    </main>
  );
}
