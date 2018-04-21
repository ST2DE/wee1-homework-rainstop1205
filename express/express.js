const express = require('express');//宣告express變數載入express函式庫
const app = express(); //宣告app變數為express function，建立一個Express Application 物件(伺服器)

app.use(express.static(__dirname + '/public')); //載入位於public目錄中的靜態檔案

app.set('view engine', 'ejs');//宣告view engine為ejs(還有其他像是pug(由jade改名).dust等等，用各自獨特的格式寫HTML，然後把資料傳進去結合在一起，最後自動compile成HTML)
app.get('/about_me', function (req, res) {
    res.render('index', { name: req.query.name });//不用寫'views/index'，因為express預設template就是會放在views資料夾
});

app.get('/', function (req, res) {//當使用者連線到伺服器的"根目錄/"時做出回應(從根目錄取得資料)
    res.send("Who are <b>YOU!</b>");
});
//function (req, res) 表示接收連線請求(Get Request)並回應客戶端(Send Response)

/*
app.get('/about_me', function (req, res) {//當使用者連線到伺服器的"/about_me目錄"時做出回應(從/about_me取得資料)
    res.sendFile('/about/about_me.html', { root: __dirname }); //設定root為當前目錄(避免出錯)
});
*/

app.listen(3000, function () {//啟動伺服器，告訴server聽取3000這個port(像是電腦的門，可以是0~65535)
    console.log('The server has been run on http://localhost:3000/');//為了更快確認伺服器成功連線，加上一行訊息並在console印出來(這則訊息不會讓客戶端看到，僅供開發者參考)
});