import Image from 'next/image';
import Link from 'next/link';

export default function SquidProjectPage() {
  return (
    <main className="max-w-7xl mx-auto py-16 px-8 mt-24 md:mt-32 text-neutral-300 relative z-10">
      {/* Project Title */}
      <h1 className="text-4xl md:text-5xl font-thin mb-4 text-left">Squid Loyalty</h1>

      {/* Overview Section */}
      <section className="mb-12 relative z-10">
        <p className="text-lg md:text-xl mb-6 max-w-3xl text-left">
          We partnered with Squid to build their comprehensive digital loyalty platform from the ground up. From the customer-facing iOS and Android apps to the business client web app, backend systems, and intricate CRM integrations, we engineered the entire ecosystem that powers Squid&apos;s innovative approach to customer rewards.
        </p>
        <div className="flex justify-between items-center gap-4 mb-8">
          <p className="text-md text-neutral-400">Revolutionizing Customer Loyalty: Our End-to-End Development for Squid</p>
          <Link href="https://squidloyalty.ie/" target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 text-white/80 hover:bg-light-teal/10 hover:text-light-teal border border-white/30 hover:border-light-teal/50">
            Visit Squid Loyalty
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mb-16 relative z-10">
        <div className="flex justify-center">
          <div className="relative mx-auto z-10">
            <Image
              src="/squid/hero_img.png"
              alt="Squid Loyalty app interface showing digital wallet"
              width={800}
              height={600}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
        <p className="text-center text-neutral-400 mt-4 italic">The Squid Loyalty digital wallet - all your loyalty cards in one convenient place.</p>
      </section>

      {/* About Squid Section */}
      <section className="mb-16 relative z-10">
        <h2 className="text-3xl font-normal mb-6 text-left">About Squid: Seamless Digital Loyalty for Modern Businesses & Customers</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="max-w-xs relative z-10">
              <Image
                src="/squid/IMG_9609.PNG"
                alt="Squid app showing loyalty card details and rewards"
                width={300}
                height={600}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2 text-light-teal">Digital Loyalty Wallet</h3>
              <p className="text-base">Replace easily lost paper cards with a convenient smartphone wallet that organizes all loyalty programs in one place.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-light-teal">Seamless Stamp Collection</h3>
              <p className="text-base">Effortless NFC tap-to-collect functionality makes earning stamps and rewards as simple as a tap of the phone.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-light-teal">Business Discovery</h3>
              <p className="text-base">Help customers discover new local businesses while providing powerful analytics and customer engagement tools for merchants.</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg mb-4">
            Squid transforms the traditional loyalty card experience, offering a seamless and engaging digital solution for local businesses and their customers. For users, Squid provides a convenient &quot;Loyalty Card Wallet&quot; on their smartphone, allowing them to effortlessly collect stamps, redeem rewards, and discover new local favorites.
          </p>
          <p className="text-lg">
            For businesses, Squid is a powerful tool to foster customer loyalty, drive repeat business, and gain valuable insights through a dedicated web app and integrated CRM analytics. It modernizes customer engagement, moving beyond easily lost paper cards to a dynamic, data-rich platform.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="mb-16 relative z-10">
        <h2 className="text-3xl font-normal mb-8 text-left">Key Platform Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 backdrop-blur-xxs bg-light-teal/5 border border-light-teal/10 rounded-lg">
            <h3 className="text-xl font-medium mb-3 text-light-teal">Digital Loyalty Cards</h3>
            <p className="text-base mb-3">
              A comprehensive digital wallet for storing and managing all loyalty cards in one convenient mobile app, eliminating the need for physical cards.
            </p>
            <div className="relative w-full h-48 overflow-hidden rounded z-10">
              <Image
                src="/squid/IMG_9608.PNG"
                alt="Squid digital wallet interface"
                layout="fill"
                objectFit="contain"
                unoptimized
              />
            </div>
          </div>
          
          <div className="p-6 backdrop-blur-xxs bg-light-teal/5 border border-light-teal/10 rounded-lg">
            <h3 className="text-xl font-medium mb-3 text-light-teal">NFC Stamp Collection</h3>
            <p className="text-base mb-3">
              Seamless tap-to-collect functionality using NFC technology, making it effortless for customers to earn stamps and rewards.
            </p>
            <div className="relative w-full h-48 overflow-hidden rounded z-10">
              <Image
                src="/squid/IMG_9610.PNG"
                alt="Squid tap to collect interface"
                layout="fill"
                objectFit="contain"
                unoptimized
              />
            </div>
          </div>
          
          <div className="p-6 backdrop-blur-xxs bg-light-teal/5 border border-light-teal/10 rounded-lg">
            <h3 className="text-xl font-medium mb-3 text-light-teal">Business Discovery</h3>
            <p className="text-base mb-3">
              Integrated map and discovery features that help users find new local businesses that offer loyalty rewards through the Squid platform.
            </p>
            <div className="relative w-full h-48 overflow-hidden rounded z-10">
              <Image
                src="/squid/IMG_9615.PNG"
                alt="Squid business discovery map"
                layout="fill"
                objectFit="contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Contribution Section */}
      <section className="mb-16 relative z-10">
        <h2 className="text-3xl font-normal mb-6 text-left">Our End-to-End Solution</h2>
        <div>
          <p className="text-lg mb-4">
            We delivered a complete ecosystem for Squid Loyalty, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
            <li>Native iOS and Android applications for end users</li>
            <li>Web portals for business clients to manage their loyalty programs</li>
            <li>Internal admin tools for platform management</li>
            <li>Backend systems for data management and processing</li>
            <li>CRM integrations for business analytics and insights</li>
            <li>NFC tag encoding and processing systems</li>
          </ul>
          <p className="text-lg">
            Through our comprehensive development efforts, we provided Squid with a powerful, scalable platform that revolutionizes how local businesses engage with their customers and how consumers interact with loyalty programs.
          </p>
        </div>
      </section>
    </main>
  );
}
