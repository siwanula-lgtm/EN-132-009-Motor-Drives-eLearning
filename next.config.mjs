/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    // ให้ Vercel แนบไฟล์ใน content/ ไปกับ API route (Review Sheet)
    outputFileTracingIncludes: {
      '/api/content/[...path]': ['./content/**/*'],
    },
  },
};

export default nextConfig;
