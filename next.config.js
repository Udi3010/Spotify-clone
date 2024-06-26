/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'oznwdbfxzlsehqsopwns.supabase.co',
            },
          ],
    }
}

module.exports = nextConfig
