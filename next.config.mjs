/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.externals = [...config.externals, { canvas: "canvas" }]; // required to make Konva & react-konva work
      return config;
    },
    experimental: {
      esmExternals: "loose", // required to make Konva & react-konva work
    },
};

export default nextConfig;