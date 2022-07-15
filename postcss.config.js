module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 37.5, // 根元素字体大小
      // propList: ['width', 'height']
      propList: ['*']
    }
  }
}
