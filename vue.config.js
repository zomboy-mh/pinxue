module.exports={
  devServer: {
    host: '0.0.0.0', // 使用花生壳之类的 需改为 0.0.0.0
    port: 8089,
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(html)$/,
          exclude: /node_modules/,
          use: {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        }
      ]
    }
  },
  publicPath: './',
}
