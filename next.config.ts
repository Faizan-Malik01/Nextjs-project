/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARNING !!
    // Ye line errors ignore karke website live kar degi
    ignoreBuildErrors: true,
  },
  eslint: {
    // Isse ESLint ke errors bhi ignore ho jayenge
    ignoreDuringBuilds: true,
  },
};

export default nextConfig
