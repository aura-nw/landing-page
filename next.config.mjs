/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'insight.aura.network',
        port: '',
        pathname: '/content/images/**',
      },
    ],
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
