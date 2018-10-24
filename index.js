//--------------------------------
// 載入必要的模組
//--------------------------------
var linebot = require('linebot');
var express = require('express');


//--------------------------------
// 填入自己在linebot的channel值
//--------------------------------
var bot = linebot({
    channelId: '1615371469',
    channelSecret: '157db422188f79c80de5f3e19fe70671',
    channelAccessToken: 'joq1Haeq7xhCSlmX95MrS+IqVBvrMmpKbYSiaFJKK4vGiknWu60CZ2idt+cfTKPXaDO0bxy20AlWeOglMu7xSa0a0buACiFTeCjMqYp76bvQbJAB08bZXc59KvsMAVxOYiKHKYD5MynPxVZvmt1+UwdB04t89/1O/w1cDnyilFU='
});


//--------------------------------
// 機器人接受訊息的處理
//--------------------------------
bot.on('message', function(event) {
    event.source.profile().then(
        function (profile) {		
            return event.reply('你好, ' + profile.displayName + '. 你的編號是:' + profile.userId + ', 你的回應是:' +  event.message.text);
        }
    );
});


//--------------------------------
// 建立一個網站應用程式app
// 如果連接根目錄, 交給機器人處理
//--------------------------------
const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);


//--------------------------------
// 可直接取用檔案的資料夾
//--------------------------------
app.use(express.static('public'));


//--------------------------------
// 監聽3000埠號, 
// 或是監聽Heroku設定的埠號
//--------------------------------
var server = app.listen(process.env.PORT || 3000, function() {
    var port = server.address().port;
    console.log("正在監聽埠號:", port);
});