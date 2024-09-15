/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Раскомментируйте и замените на ваш домен
  // basePath: 'https://ваш-домен.ru',
};

export default nextConfig;
