const { override, fixBabelImports } = require('customize-cra');

// 是否开启 sourcemap
process.env.GENERATE_SOURCEMAP = "false";

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  })
);