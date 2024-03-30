/** @type {import('next').NextConfig} */
// const { i18n } = require("./next-i18next.config");

const nextConfig = {
  // output:'export', 
  reactStrictMode: true,
  swcMinify: true,
  // i18n,
  env:{
    base_url:'https://admin.goldenarroww.co/'
  }
}
module.exports = nextConfig
