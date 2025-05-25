// NodeJs架设本地服务端

const chunk = require('./vendor.chunk.js');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));  // 设置参数解析中间件

app.post('/encrypt/qq/music', (req, res) => {
    let data = req.body.data;
    console.log(data);
// 调用加密参数生成逻辑
    let result = chunk.encrypt(data);
    console.log(result);
// 返回结果
    res.send(result);
})

app.listen(3000, () => {
    console.log('server is running at port 3000');
})
