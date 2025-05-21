/** @type {import('next').NextConfig} */
const nextConfig: any = {
  images: {
    unoptimized: true,
  },
};

if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export';
  nextConfig.basePath = '/car-finder-filter';
  nextConfig.assetPrefix = '/car-finder-filter';
}

module.exports = nextConfig;