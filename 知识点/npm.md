1.什么是npm
全称 node package manager js代码库 600000+

npm自己的地址 ：http://registry.npmjs.org/ 淘宝镜像地址 ：就是国内的包管理地址 https://registry.npm.taobao.org/

2.怎么使用npm
3. 常见指令
安装 npm install 卸载 npm uninstall 更新 npm update 搜索 npm search 查看全局包 npm list -g 查看node全局路径 npm root -g

切换包下载地址 npm config get registry npm config set registry http://registry.npmjs.org/

注册 npm adduser 登录 npm login 发包 npm publish

4.创建一个命令行程序
a.配置bin 自定义一个指令 b.写一些自定义逻辑 获取命令行指令所在目录 process.cwd() 获取命令行指令后输入的内容 process.argv[2] c.当前文件第一行输入 #!/usr/bin/env node d.本地测试前执行 npm link