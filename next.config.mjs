/** @type {import('next').NextConfig} */
const nextConfig = {
  // Membatasi jumlah worker biar Vercel gak serakah makan RAM
  experimental: {
    workerThreads: false,
    cpus: 1
  },
  // Memaksa Next.js tidak melakukan optimasi berlebihan yang bikin OOM
  productionBrowserSourceMaps: false,
};

export default nextConfig;