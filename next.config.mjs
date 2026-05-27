/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLICK_URL: process.env.NEXT_PUBLICK_URL,
  },
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
