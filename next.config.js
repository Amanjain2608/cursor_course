/** @type {import('next').NextConfig} */

// Disable SSL certificate verification in development (for corporate proxies)
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

const nextConfig = {
  /* config options here */
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
  allowedDevOrigins: [
    '10.198.82.115',
    '10.198.82.115:3000',
    '10.198.82.115:8080',
    '10.198.82.216',
    '10.198.82.216:3000',
    '10.198.82.216:8080',
  ],
};

module.exports = nextConfig;
