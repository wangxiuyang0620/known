import axios from 'axios'
let axiosHttp   = async (arr,success,error) => {
    let url     = arr[0],
        method  = arr[1],
        data    = arr[2]||{},
        headers = arr[3]||{},
        key     = method ==='GET'?'params':'data',
        err     = error =>{
                        const { status } = error.response;
                        if(status === 500) return alert('服务器错误')
                        if(status === 404) return alert('接口不存在')
                    },
        res     = await axios({method,url,[key]:data,headers}).catch(err),
        code    = res.data.code,
        msg     = res.data.msg;
        
    if(code === 0){
        if(!success) return alert(msg)
        success(res.data)
        return 
    }
    if(!error) return alert(msg)
    error(msg)
    return 
}

export default {
    login:(body,success) => axiosHttp(['/login','POST',body],success)
}