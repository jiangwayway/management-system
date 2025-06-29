const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#2378ff' },
            javascriptEnabled: true,
          },
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: '[local]_[hash:base64:5]',
          },
        },
      },
    },
  ],
};

