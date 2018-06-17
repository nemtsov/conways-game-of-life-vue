const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              module: true,
              localIdentName: '[local]_[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
