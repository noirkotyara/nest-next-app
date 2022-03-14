/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SELL_SERVER_HOST: process.env.SELL_SERVER_HOST ?? "http://localhost:8081",
  }
}

module.exports = nextConfig
