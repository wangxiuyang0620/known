使用require.context实现前端工程自动化
1.什么东西

一个webpack提供的工具 require.context require.context 返回的是一个上下文

2.怎么用

require.context(dir,userrrr,regExp)

执行时接收三个参数 1.dir(String) 2.useS#$%^&*(Bool) 3.regExp
执行后返回值：一个函数 提供两个方法 keys() default
3.什么时候用 1.在大量使用import...from... 的情况下 可使用require.context进行批量导出 2.svg
 let moduleFunc = require.context('./component',true,/index\.js$/)

    let arr  = moduleFunc.keys().map(item=> {
        
        let key = item.split('/')[1][0].toUpperCase()+item.split('/')[1].slice(1);
        return {
            [key]:moduleFunc(item).default
        }
    })
    export default {
    ...arr.reduce((pre,next)=>({...pre,...next}))
}
