const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = "source-map"; // Ensure source maps are generated
    }
    return config;
  },
};

module.exports = nextConfig;
