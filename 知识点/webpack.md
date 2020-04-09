webpack 是一个前端工程化的构建工具
只能打包js 我们的loader 可以把我们的各种文件转译为js

entry 接收的参数类型有三种
string 接收一个绝对路径地址 array 接收多个路径地址作为入口文件 最终输出一个js文件 object 接收多个路径地址作为入口文件 最终输出多个js文件

output 配置filename
[name].js [chunkhash].js [name]-[chunkhash].js

3.mode

production 生产环境（打包并压缩） development 开发环境（打包）

4.module 配置loader

5.plugins

1.HtmlWebpackPlugin 自动输出html并把打包好的js引入 2.VueLoaderPulgin 辅助vue-loader解析和转换.vue文件

6.resolve

配置模块加载路径

7.webpack-dev-server

创建一个临时服务器 对模块进行打包（但未写入硬盘）通过port做实时预览