const { override, fixBabelImports} = require('customize-cra');

// override
module.exports = {
  webpack: override(
    // customize-cra plugins here

    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: 'css',
    }),

    (config) => {
      return config;
    },
  ),

  jest: config => {
    return config;
  },

  devServer: configFunction => (proxy, allowedHost) => {
    const config = configFunction(proxy, allowedHost);
    return config;
  },

  paths: (paths, env) => {
    return paths;
  }
};