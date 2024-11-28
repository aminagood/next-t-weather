

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     turbo: false, // Disable Turbopack
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // Disable Turbopack
  },
  images: {
    domains: ['i.pinimg.com'], // Add the domain for external images
  },
};

module.exports = nextConfig;
