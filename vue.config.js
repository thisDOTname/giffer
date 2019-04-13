const HtmlWebpackPlugin = require('html-webpack-plugin');
// const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Giffer',
        template: 'public/index.html',
        filename: 'index.html',
      }),
      new HtmlWebpackPlugin({
        title: 'Giffer - Test',
        template: 'test/index.html',
        filename: 'test.html',
        meta: {
          viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
          'theme-color': '#4285f4',
          'Content-Security-Policy': {
            'http-equiv': 'Content-Security-Policy',
            content: '',
          },
          'set-cookie': {
            'http-equiv': 'set-cookie',
            content: 'name=value; expires=date; path=url',
          },
        },
      }),
      // new StyleLintPlugin({
      //   files: ['**/*.{vue,htm,html,css,sss,less,scss,sass,stylus}'],
      // }),
    ],
  },
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        console.log(options);
        // modify the options...
        return options;
      });

    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end();
  },
};
