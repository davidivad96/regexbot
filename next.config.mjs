/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [{ hostname: "api.producthunt.com" }],
  },
};

export default nextConfig;
