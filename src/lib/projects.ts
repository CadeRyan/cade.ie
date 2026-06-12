export type CaseImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseSection = {
  kicker: string;
  heading: string;
  body: string[];
  images?: CaseImage[];
  /** full = one wide image, split = image beside text, trio = three across */
  layout?: "full" | "split" | "trio";
  video?: { src: string; note: string };
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  /** short descriptor used in list rows */
  short: string;
  category: string;
  role: string;
  scope: string[];
  client?: string;
  credit?: string;
  link?: { href: string; label: string };
  tagline: string;
  intro: string[];
  cover: CaseImage;
  /** image used for the hover preview in list rows */
  preview: string;
  sections: CaseSection[];
  outcome: { heading: string; body: string[] };
};

export const projects: Project[] = [
  {
    slug: "fools-guild",
    title: "The Fools' Guild",
    short: "Fantasy improv theatre platform",
    category: "Platform — Theatre",
    role: "Co-producer · Design & full-stack development",
    scope: ["Show CMS", "Per-show box office", "Cast & team profiles", "Admin tools"],
    client: "My own troupe",
    link: { href: "https://foolsguild.ca/", label: "foolsguild.ca" },
    tagline: "Heroes rise, kingdoms fall, tickets sell.",
    intro: [
      "The Fools' Guild is a fantasy improv troupe I co-produce in Vancouver — \"a theatre company by and for fantasy lovers\", staging improvised D&D adventures, romantasy epics and tavern nights across the city. I also built its entire digital home.",
      "The platform grew out of a ticketing system I built for an earlier theatre company, expanded into a full self-serve venue: a show CMS, cast and team profiles, a newsletter, and a per-show box office that sells tickets without anyone leaving the site.",
    ],
    cover: {
      src: "/foolsguild/homepage.png",
      alt: "The Fools' Guild homepage with show reel and upcoming shows",
      caption: "foolsguild.ca — the Guild's digital home.",
    },
    preview: "/foolsguild/homepage.png",
    sections: [
      {
        kicker: "The stage",
        heading: "A guild hall on the web",
        body: [
          "The site leads with what the troupe does best: an auto-playing show reel, then straight into upcoming shows with their poster art front and centre. The dark, lightly fantastical visual language stays out of the posters' way while making the whole thing feel like one production.",
        ],
        images: [
          {
            src: "/foolsguild/homepage_full.png",
            alt: "The Fools' Guild homepage from hero to footer",
          },
        ],
        layout: "full",
      },
      {
        kicker: "Show CMS",
        heading: "Every quest gets its own page",
        body: [
          "Each show is a full production page: poster art with photo credits, the pitch, the cast with linked performer profiles, venue, date and runtime, content advisories and accessibility notes — everything an audience member needs before committing to a night of shenanigans.",
          "Past shows stay up as a growing archive of the Guild's history, and the whole catalogue is managed through the site's own admin — publishing a new show takes minutes, not a developer.",
        ],
        images: [
          {
            src: "/foolsguild/show_page.png",
            alt: "A Court of Crits and Bits show page with description, cast and ticket sidebar",
          },
          {
            src: "/foolsguild/shows_archive.png",
            alt: "Upcoming and past shows archive on foolsguild.ca",
          },
        ],
        layout: "full",
      },
      {
        kicker: "Box office",
        heading: "Tickets without leaving the page",
        body: [
          "Every show configures its own box office. The platform carries a built-in Stripe checkout, and co-presentations — like runs at The Improv Centre — can swap in an embedded partner checkout instead. Either way the audience buys in a modal right on the show page: pick tickets, add a donation, check out, done.",
        ],
        images: [
          {
            src: "/foolsguild/ticket_flow.png",
            alt: "In-page ticket checkout modal with quantities, pricing and donations",
          },
        ],
        layout: "full",
      },
      {
        kicker: "The company",
        heading: "The cast, on stage and off",
        body: [
          "An about section introduces the whole operation — co-producers, creative, marketing, technical and partnerships directors — each with their own profile. The same profile system powers the cast lists on every show page, so performers accumulate a body of work as the archive grows.",
        ],
        images: [
          {
            src: "/foolsguild/about.png",
            alt: "Meet the team grid on the Fools' Guild about page",
          },
        ],
        layout: "full",
      },
      {
        kicker: "Mobile",
        heading: "Pocket-sized shenanigans",
        body: [
          "Show announcements travel by Instagram, so the whole experience — posters, listings, show pages and checkout — is tuned for the phone it'll be opened on.",
        ],
        images: [
          {
            src: "/foolsguild/homepage_mobile.png",
            alt: "The Fools' Guild homepage on mobile",
          },
        ],
        layout: "split",
      },
    ],
    outcome: {
      heading: "A theatre that runs itself",
      body: [
        "The Guild publishes shows, sells tickets and grows its audience from one platform — no third-party storefront, no developer on call. I co-produce the shows, host some of them, and built every pixel and endpoint of the thing that sells them: the most \"me\" project on this site.",
      ],
    },
  },
  {
    slug: "voxmail",
    title: "VoxMail",
    short: "Voice messaging for the web",
    category: "Product — SaaS",
    role: "Founder · Design & Engineering",
    scope: ["Product", "Web platform", "Embeddable widget", "Brand"],
    credit: "UI/UX design with Susanne Duswald",
    link: { href: "https://vox-mail.com/", label: "vox-mail.com" },
    tagline: "Your customers' voice, amplified.",
    intro: [
      "VoxMail is my own product — an intuitive voice-messaging tool for websites. A small widget sits in the corner of any site and lets visitors leave a voice message instead of typing into a form, making feedback faster, warmer and more accessible.",
      "I built the product end-to-end; the UI/UX design was crafted with Susanne Duswald. From first sketches to a shipped, embeddable tool, every detail was tested against one question: does this make it easier for people to be heard?",
    ],
    cover: {
      src: "/voxmail/Fullexperience.png",
      alt: "VoxMail full website experience rendered on an iPad Pro",
      caption: "The full VoxMail experience, rendered on an iPad Pro.",
    },
    preview: "/voxmail/VoxMail Master - web.png",
    sections: [
      {
        kicker: "Process",
        heading: "From sketches to system",
        body: [
          "Everything started on paper — early-stage brainstorming and layout exploration through hand-drawn sketches that formed the foundation of the interface before a single pixel was placed.",
          "Those sketches matured into high-fidelity wireframes in Figma, locking the website structure, content placement and user flow before final design implementation.",
        ],
        images: [
          { src: "/voxmail/Sketches.png", alt: "Initial hand-drawn UI/UX sketches for VoxMail" },
          { src: "/voxmail/Fidelity wireframe.png", alt: "High-fidelity wireframes for the VoxMail website" },
        ],
        layout: "full",
      },
      {
        kicker: "Identity",
        heading: "A brand built to speak",
        body: [
          "The visual identity — a focused colour palette and typography system — runs through the marketing site and the widget itself, so VoxMail feels like one product wherever it shows up.",
        ],
        images: [
          { src: "/voxmail/Branding.png", alt: "VoxMail branding: colour palette and typography" },
        ],
        layout: "full",
      },
      {
        kicker: "The product",
        heading: "A widget with manners",
        body: [
          "The core of VoxMail is the widget that lives on client websites. Every screen and state was designed in Figma, then mapped into a full interaction flow — the paths, logic and edge cases a visitor can take while recording and sending a voice message.",
          "The result is a tool that stays out of the way until it's needed, then makes leaving a message feel effortless.",
        ],
        images: [
          { src: "/voxmail/Widget.png", alt: "Figma renders of the VoxMail widget screens and states" },
          { src: "/voxmail/Widget interaction.png", alt: "Flow chart of the VoxMail widget's interaction logic" },
        ],
        layout: "full",
      },
      {
        kicker: "Accessibility",
        heading: "Tested for every kind of sight",
        body: [
          "The palette and contrast levels were tested against multiple forms of colour-vision deficiency — Deuteranopia, Tritanopia and Protanopia — so the product reads clearly for everyone, not just most people.",
        ],
        images: [
          { src: "/voxmail/Accessibility.png", alt: "Colour-contrast accessibility testing for VoxMail" },
        ],
        layout: "full",
      },
      {
        kicker: "Responsive",
        heading: "Every screen, every device",
        body: [
          "Website and widget were designed and built to adapt across desktop, tablet and mobile — same brand, same clarity, optimal layout at every size.",
        ],
        images: [
          { src: "/voxmail/Collage.png", alt: "VoxMail website and widget across desktop, tablet and mobile" },
        ],
        layout: "full",
      },
    ],
    outcome: {
      heading: "A product that listens",
      body: [
        "VoxMail shipped as a live SaaS — you can try the widget in the corner of this site's contact page. It's the clearest expression of how I like to build: design and engineering as one continuous craft.",
      ],
    },
  },
  {
    slug: "squid",
    title: "Squid Loyalty",
    short: "Digital loyalty, end to end",
    category: "Platform — Mobile",
    role: "MVP design & engineering",
    scope: ["iOS & Android apps", "Business web app", "Backend & CRM", "NFC systems"],
    client: "Squid Rewards",
    link: { href: "https://squidloyalty.ie/", label: "squidloyalty.ie" },
    tagline: "A complete loyalty ecosystem, built from the ground up.",
    intro: [
      "At Squid Rewards I built the MVP of their digital loyalty platform — the customer-facing iOS and Android apps, the business client web app, the backend systems, and the CRM integrations that tie it all together.",
      "Squid replaces the paper stamp card with a loyalty wallet on your phone: collect stamps with an NFC tap, redeem rewards, and discover new local favourites — while businesses get a data-rich view of their regulars.",
    ],
    cover: {
      src: "/squid/hero_img.png",
      alt: "Squid Loyalty digital wallet interface",
      caption: "The Squid loyalty wallet — every card in one place.",
    },
    preview: "/squid/hero_img.png",
    sections: [
      {
        kicker: "For customers",
        heading: "A wallet, not a card drawer",
        body: [
          "Every loyalty programme lives in one smartphone wallet — no more lost paper cards. Cards, stamps and rewards are always in your pocket and always up to date.",
          "Collecting is a single gesture: tap your phone on the counter's NFC point and the stamp is yours. No app fumbling, no QR hunting.",
        ],
        images: [
          { src: "/squid/IMG_9609.PNG", alt: "Squid app showing loyalty card details and rewards" },
          { src: "/squid/IMG_9608.PNG", alt: "Squid digital wallet interface" },
          { src: "/squid/IMG_9610.PNG", alt: "Squid NFC tap-to-collect interface" },
        ],
        layout: "trio",
      },
      {
        kicker: "Discovery",
        heading: "New favourites, built in",
        body: [
          "An integrated map helps customers discover local businesses on the platform — turning a loyalty app into a way to find your next regular spot, and giving merchants a new acquisition channel.",
        ],
        images: [
          { src: "/squid/IMG_9615.PNG", alt: "Squid business discovery map" },
        ],
        layout: "split",
      },
      {
        kicker: "For businesses",
        heading: "Loyalty with a dashboard",
        body: [
          "Merchants run their programmes through a dedicated web app with analytics and engagement tools — modernising customer loyalty from a box of stamps into a living dataset.",
        ],
        bullets: [
          "Native iOS and Android applications for end users",
          "Web portals for business clients to manage loyalty programmes",
          "Internal admin tools for platform management",
          "Backend systems for data management and processing",
          "CRM integrations for analytics and insights",
          "NFC tag encoding and processing systems",
        ],
        images: [
          { src: "/squid/IMG_9614.PNG", alt: "Squid app rewards screen" },
        ],
        layout: "split",
      },
    ],
    outcome: {
      heading: "The whole ecosystem, shipped",
      body: [
        "From NFC tags on countertops to CRM dashboards, the Squid MVP shipped on systems I engineered end-to-end — the foundation for a platform that changes how local businesses keep their customers coming back.",
      ],
    },
  },
  {
    slug: "shredvision",
    title: "ShredVision",
    short: "Snow-sports coaching platform",
    category: "Design + Build — Web app",
    role: "Product design & engineering",
    scope: ["Figma design system", "Mobile-first web app", "Video workflows", "Growth features"],
    client: "ShredVision",
    link: { href: "https://shredvision.io/", label: "shredvision.io" },
    tagline: "A pro coach in your pocket.",
    intro: [
      "ShredVision connects skiers and snowboarders with professional coaches for hyper-personalised video analysis and 1-on-1 feedback — expert guidance whether you're on the lift or on the couch.",
      "I took the concept from Figma blueprints to a fully-fledged mobile-first web application: design system, user flows, video upload pipeline and growth features included.",
    ],
    cover: {
      src: "/shredvision/shredvision_homepage.png",
      alt: "ShredVision mobile-first app interface",
      caption: "The mobile-first ShredVision platform.",
    },
    preview: "/shredvision/shredvision_homepage.png",
    sections: [
      {
        kicker: "Design system",
        heading: "A language for the mountain",
        body: [
          "The Figma design system defines the whole product: 6px radii for buttons and controls, 12px for imagery and cards; a neutral base of #1D252A for content and iconography; and a single accent — #DD4523 — used sparingly to signal premium moments.",
          "Elevation and shadow rules create depth and hierarchy, cleanly separating what's clickable from what's content.",
        ],
        images: [
          { src: "/shredvision/Button design.png", alt: "ShredVision button design system" },
          { src: "/shredvision/Color_design.png", alt: "ShredVision colour palette" },
          { src: "/shredvision/Elevation_design.png", alt: "ShredVision elevation and shadow rules" },
        ],
        layout: "trio",
      },
      {
        kicker: "Experience",
        heading: "Built for gloves and goggles",
        body: [
          "Athletes live on their phones, so ShredVision is mobile-first by design — dashboard, coach discovery and video analysis all tuned for small screens and on-the-go use.",
        ],
        images: [
          { src: "/shredvision/shredvision_homepage.png", alt: "ShredVision mobile interface" },
        ],
        layout: "split",
      },
      {
        kicker: "Core flow",
        heading: "Footage in, coaching out",
        body: [
          "The upload flow asks for exactly what a coach needs — your footage, your level, your goals — so feedback comes back targeted and personal, not generic.",
        ],
        images: [
          { src: "/shredvision/Video_upload_page.png", alt: "ShredVision video upload flow" },
        ],
        layout: "split",
      },
      {
        kicker: "Growth",
        heading: "Made to spread",
        body: [
          "QR-code referrals make it effortless for riders to share the platform on the hill — user acquisition designed into the product rather than bolted on.",
        ],
        images: [
          { src: "/shredvision/QR_code_referrals.png", alt: "ShredVision QR code referral system" },
        ],
        layout: "split",
      },
      {
        kicker: "In their words",
        heading: "What the team says",
        body: [
          "The ShredVision team on taking their vision from idea to a working coaching platform.",
        ],
        video: {
          src: "https://firebasestorage.googleapis.com/v0/b/koduu-ie.firebasestorage.app/o/Testimonial%20for%20Cade.mp4?alt=media&token=94efe5cb-6d82-43a7-8664-d650059c8e1c",
          note: "Client testimonial — ShredVision",
        },
      },
    ],
    outcome: {
      heading: "Euphoria in every turn",
      body: [
        "A robust, mobile-first platform on a thoughtful design system — giving ShredVision the foundation to grow into the go-to resource for personalised snow-sports coaching.",
      ],
    },
  },
  {
    slug: "hula-the-goose",
    title: "Hula the Goose",
    short: "Indie game promo site",
    category: "Web — Creative",
    role: "Design & development",
    scope: ["Promotional website", "Kickstarter pre-launch", "Responsive design"],
    client: "Your Studios",
    link: { href: "https://hulathegoose.com/", label: "hulathegoose.com" },
    tagline: "Digital whimsy for a cozy goose game.",
    intro: [
      "Hula the Goose isn't your typical dating sim — it's a cozy \"relationship builder\" where you waddle through the town of Dewlithe, exploring, crafting, and building genuine connections with a cast of charming characters.",
      "I designed and built the game's promotional website for Your Studios, with one brief: capture the hand-drawn whimsy of the game and turn visitors into Kickstarter backers.",
    ],
    cover: {
      src: "/hula/hula_homepage.png",
      alt: "Hula the Goose website homepage",
      caption: "Hula in the world of Dewlithe, on the web.",
    },
    preview: "/hula/hula_homepage.png",
    sections: [
      {
        kicker: "Translation",
        heading: "Hula's world, on the web",
        body: [
          "The hardest part was honouring the game's hand-drawn art style in a browser. Every choice — palette, type, motion — was tested against one question: does this feel like it belongs in Hula's world?",
          "The art isn't decoration; it's the storytelling. The site uses it to teach visitors the game's tone, characters and world before they ever play.",
        ],
        images: [
          { src: "/hula/promo-shot.png", alt: "Hula the Goose promotional artwork" },
        ],
        layout: "full",
      },
      {
        kicker: "Characters",
        heading: "Meet the cast",
        body: [
          "Character sections give visitors a first hello with the personalities they'll befriend (or romance) in-game — navigation that feels part of the world while staying intuitive and accessible.",
        ],
        images: [
          { src: "/hula/characters_page.png", alt: "Hula the Goose characters page" },
        ],
        layout: "full",
      },
      {
        kicker: "Mobile",
        heading: "Cozy on every screen",
        body: [
          "The layout and interactions adapt fully to mobile while keeping the artistic integrity intact — the whimsy survives the breakpoints.",
        ],
        images: [
          { src: "/hula/mobile_homepage.jpg", alt: "Hula the Goose mobile homepage" },
        ],
        layout: "split",
      },
      {
        kicker: "Launch",
        heading: "Built for the campaign",
        body: [
          "The site's job was anticipation: prominent Kickstarter-follow calls to action, a newsletter for \"secret updates\", and every path nudging fans to stay connected until launch day.",
        ],
        video: {
          src: "https://firebasestorage.googleapis.com/v0/b/koduu-ie.firebasestorage.app/o/WhatsApp%20Video%202025-05-08%20at%2023.17.23.mp4?alt=media&token=3e09a983-603b-4155-b27e-81d505deda29",
          note: "Ryan, founder of Your Studios, on working together",
        },
      },
    ],
    outcome: {
      heading: "Proof that promo sites can enchant",
      body: [
        "A website that captured the game's charm and built real anticipation for the Kickstarter — evidence that thoughtful web design can be as enchanting as the game it promotes.",
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function nextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
