/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com", // Update this to your Shopify domain
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
