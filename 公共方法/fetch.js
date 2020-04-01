let fetchHttp   = async (arr,success,error) => {
    let url     = arr[0],
        method  = arr[1]||'GET',
        body    = JSON.stringify(arr[2])||JSON.stringify({}),
        headers = new Headers({'content-type': 'application/json'}),
        obj     = method ==='GET'||method ==='HEAD'?{method}:{method,body,headers},
        err     = error =>{
                        const { status } = error.response;
                        if(status === 500) return alert('服务器错误')
                        if(status === 404) return alert('接口不存在')
                    },
        res     = await fetch(url,obj).catch(err),
        data    = await res.json(),
        code    = data.code,
        msg     = data.msg;
        
    if(code === 0){
        if(!success) return alert(msg)
        success(data)
        return 
    }
    if(!error) return alert(msg)
    error(msg)
    return 
}
export default fetchHttp