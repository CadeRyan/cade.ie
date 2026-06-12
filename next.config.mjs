/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Espoused is deprecated; the Fools' Guild platform is its successor.
      { source: "/projects/espoused", destination: "/work/fools-guild", permanent: true },
      { source: "/work/espoused", destination: "/work/fools-guild", permanent: true },
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/projects/:slug", destination: "/work/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
