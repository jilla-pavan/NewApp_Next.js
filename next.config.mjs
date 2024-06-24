/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
        ],
      },
    ];
  },
};

export default nextConfig;
