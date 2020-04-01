export default  (files,callback) =>{
    //创建实例
    let reader = new FileReader()
    // 读取本地图片文件的地址
    reader.readAsDataURL(files)
    
    reader.onload = ev => callback(ev.target.result)
}