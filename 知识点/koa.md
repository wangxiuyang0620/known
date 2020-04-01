1.安装
npm i koa koa-bodyparser koa-router mysql -S
2.项目目录
——node_modules       //文件夹 npm i koa 后自动创建
——package-lock.json  //文件  npm i koa 后自动创建
——package.json       //文件  npm init 后生成
——app.js             //文件  手动创建 
——middleware         //文件夹 
————index.js         //文件  手动创建 中间件函数
——router             //文件夹  
————index.js         //文件  手动创建 设置路由接口
——api                //文件夹 
———— ···             //文件  手动创建 具体路由接口对应的处理逻辑
——mysql              //文件夹 
————index.js         //文件  手动创建 连接数据库的语法 及一个异步查询数据库的方法
3.常用SQ语句
    `SELECT * FROM 表名`                                          //查询全部数据
    `SELECT * FROM 表名 where name='狗子'`                         // 查询name为狗子

    `INSERT INTO 表名 (id,name) VALUES (null,'狗子')`              //插入一条 id自增，name为狗子的数据
    `INSERT INTO 表名 (id,name) VALUES (null,'狗子'),(null,'美丽')` //插入多条
    `INSERT INTO 表名 VALUES (null,'狗子'),(null,'美丽')`           //可省略key插入 但要与数据库字段一一对应

    `UPDATE 表名 SET name='英俊' WHERE id='7'`                     //更新id=7的数据，讲name更为英俊

    `DELETE FROM 表名 WHERE id='7'`                               //删除id=7的数据
4.app.js 具体内容

const Koa        = require('koa')
const app        = new Koa()                  //创建一个app实例
const router     = require('./router')        //抛出路由

const middleware = require('./middleware')    //抛出中间件
middleware(app)

app.use(router.routes())                      //使用路由
app.listen(8000,()=>console.log('服务开启'))   //监听端口8000
5.middleware/index.js 内容

const bodyparser = require('koa-bodyparser')() //引出 bodyparser
module.exports   = app =>{
    app.use(bodyparser)                        //使用中间件
}
6.mysql/index.js 内容
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rootroot',
  database : 'zx'
});
connection.connect();               //开启连接

module.exports = sql =>{            //封装数据查询的异步函数
    return new Promise(res=>{
        connection.query(sql, (error, results)=>{
            if (error) throw error;
            res(results)
        });
    })
}
7.router/index.js 内容
const router   = require('koa-router')()  //生成路由实例

const login    = require('../api/login')  //抛出登录接口对应的处理函数 此处可无限抛出
router.post('/login',login)               //增加一个登录接口 此处可无限增加

module.exports = router                   //抛出路由
8.api/login.js 内容
const sq = require('../mysql')           //抛出数据库查询方法
module.exports = async ctx => {
    //...
    let data = await sq(`数据库SQ语句`)   //获取查询结果
    //...
    ctx.body = {code:0,msg:'',data}     //对请求做出响应
    
}