const path = require('path');

module.exports = {

  // 配置入口为./src/index.js文件
  entry: './src/index.js',

  // 配置输出文件名、路径
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  // 通过module.rules配置loaders
  module: {
    rules: [
      {
        // 处理.css文件
        test: /\.css$/,
        // 使用style-loader、css-loader两个loader来处理
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
