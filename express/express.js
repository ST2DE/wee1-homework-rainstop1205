const express = require('express');//宣告express變數載入express函式庫
const app = express(); //宣告app變數為express function，建立一個Express伺服器

app.listen(3000, function () {//告訴server聽取3000這個port(像是電腦的門，可以是0~65535)
    console.log('Example app is running on port 3000!');//為了更快確認伺服器成功連線，加上一行訊息並在console印出來(這則訊息不會讓客戶端看到，僅供開發者參考)
});

app.get('/', function (req, res) {//從根目錄拿資料--> localhost:3000
    res.send('<h1>How are you?</h1>')
});
//function (req, res) 表示接收連線請求(Get Request)並回應客戶端(Send Response)

app.get('/about_me', function (req, res) {//從/about_me拿資料--> localhost:3000/about_me
    res.send('<h1>Hello~</h1>')
});