const express = require('express');//�ŧiexpress�ܼƸ��Jexpress�禡�w
const app = express(); //�ŧiapp�ܼƬ�express function�A�إߤ@��Express���A��

app.listen(3000, function () {//�i�Dserverť��3000�o��port(���O�q�������A�i�H�O0~65535)
    console.log('Example app is running on port 3000!');//���F��ֽT�{���A�����\�s�u�A�[�W�@��T���æbconsole�L�X��(�o�h�T�����|���Ȥ�ݬݨ�A�ȨѶ}�o�̰Ѧ�)
});

app.get('/', function (req, res) {//�q�ڥؿ������--> localhost:3000
    res.send('<h1>How are you?</h1>')
});
//function (req, res) ��ܱ����s�u�ШD(Get Request)�æ^���Ȥ��(Send Response)

app.get('/about_me', function (req, res) {//�q/about_me�����--> localhost:3000/about_me
    res.send('<h1>Hello~</h1>')
});