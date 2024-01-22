/** @type {import('next').NextConfig} */
const nextConfig = {
  outDir: 'export',
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  trailingSlash: true,
}
 
module.exports = nextConfig