/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/mo-checklist",
  output: "export",
  basePath: process.env.BASE_PATH == "/" ? "" : process.env.BASE_PATH,
}

module.exports = nextConfig
