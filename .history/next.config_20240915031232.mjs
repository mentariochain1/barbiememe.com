/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // basePath: '/путь_к_вашему_сайту', // Раскомментируйте и настройте, если сайт не в корне
};

export default nextConfig;
