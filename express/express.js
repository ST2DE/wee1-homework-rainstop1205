const express = require('express');//�ŧiexpress�ܼƸ��Jexpress�禡�w
const app = express(); //�ŧiapp�ܼƬ�express function�A�إߤ@��Express Application ����(���A��)

app.use(express.static(__dirname + '/public')); //���J���public�ؿ������R�A�ɮ�

app.set('view engine', 'ejs');//�ŧiview engine��ejs(�٦���L���Opug(��jade��W).dust�����A�ΦU�ۿW�S���榡�gHTML�A�M����ƶǶi�h���X�b�@�_�A�̫�۰�compile��HTML)
app.get('/about_me', function (req, res) {
    res.render('index', { name: req.query.name });//���μg'views/index'�A�]��express�w�]template�N�O�|��bviews��Ƨ�
});

app.get('/', function (req, res) {//��ϥΪ̳s�u����A����"�ڥؿ�/"�ɰ��X�^��(�q�ڥؿ����o���)
    res.send("Who are <b>YOU!</b>");
});
//function (req, res) ��ܱ����s�u�ШD(Get Request)�æ^���Ȥ��(Send Response)

/*
app.get('/about_me', function (req, res) {//��ϥΪ̳s�u����A����"/about_me�ؿ�"�ɰ��X�^��(�q/about_me���o���)
    res.sendFile('/about/about_me.html', { root: __dirname }); //�]�wroot����e�ؿ�(�קK�X��)
});
*/

app.listen(3000, function () {//�Ұʦ��A���A�i�Dserverť��3000�o��port(���O�q�������A�i�H�O0~65535)
    console.log('The server has been run on http://localhost:3000/');//���F��ֽT�{���A�����\�s�u�A�[�W�@��T���æbconsole�L�X��(�o�h�T�����|���Ȥ�ݬݨ�A�ȨѶ}�o�̰Ѧ�)
});