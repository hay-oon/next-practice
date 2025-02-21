/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/hayoon/jeong",
  //       permanent: true,
  //     },
  //   ];
  // },
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
  },
};

export default nextConfig;
