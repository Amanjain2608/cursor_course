/** @type {import('next').NextConfig} */

// Disable SSL certificate verification in development (for corporate proxies)
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

const nextConfig = {
  /* config options here */
  allowedDevOrigins: ['http://10.198.82.115:3000', 'http://10.198.82.216:8080'],
};

module.exports = nextConfig;
