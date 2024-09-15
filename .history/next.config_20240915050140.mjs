/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // basePath: '/your-base-path', // Раскомментируйте и настройте, если сайт не в корне
};

export default nextConfig;
