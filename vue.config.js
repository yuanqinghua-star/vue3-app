const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: "./",
  devServer: {
    open: true, //项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080", //对应自己的接口，代理地址修改后必须重启项目
        changeOrigin: true, //是否允许跨域
        pathRewrite: {
          // 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/user/userInfo 时
          // 实际上访问的地址是：http://127.0.0.1/user/userInfo,因为重写了 /api
          "^/api": "",
        },
      },
    },
  },
  chainWebpack: config => {
    config.module.rules.delete("svg"); // 重点:删除默认配置中处理svg,
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/icons')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
};
