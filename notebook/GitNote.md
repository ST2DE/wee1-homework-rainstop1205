# Git 操作筆記（Windows 版本）

## $ 常用指令
指令|功能說明
:---|:---
cd<br>(change directory)|切換目錄
ls<br>(list)|列出目前的檔案列表
mkdir<br>(make directory)|建立新目錄
touch|建立新檔案
git clone|複製儲存庫
git init<br>(initiate)|初始化版本庫 &rArr; 目錄中會生成.git資料夾
git status|當前的git狀態
git add|加入追蹤(tracking) &rArr; 放入暫存區(Staging Area)
git rm<br>(remove)|刪除檔案
git commit|提交目前暫存區的修改 &rArr; 放入本地儲存庫(local repository)並**產生log記錄**
git log|查看歷史記錄
git push|提取本地儲存庫的檔案並推送至遠端儲存庫(remote repository)
git branch|列出分支

### 簡易概念圖
![Git基本流程](https://i.imgur.com/PJf8pm4.png)
---
### 各指令詳細介紹
#### $ cd（切換目錄）
* ```cd /haha```<br>
  切換到 /haha 目錄(絕對路徑)
* ```cd haha```<br>
  切換到 haha 目錄(相對路徑) 
* ```cd ..```<br>
  切換到上一層目錄
* ```cd ~/ohoh/haha```<br>
  切換到 home 目錄(~表示 home 目錄)下的 ohoh 下的 haha 目錄
#### $ git clone（複製儲存庫）
* ```git clone <url>```<br>
  將\<url>的遠端儲存庫複製到自己的電腦，目錄裡會產生一個同名資料夾
* ```git clone <url> <name>```<br>
  複製到自己的電腦，並將資料夾命名為name 
#### $ git add（加入追蹤）
* ```git add <file>```<br>
  將\<file>加入追蹤
* ```git add -u```<br>
  只將修改過的(edited)檔案加入追蹤
* ```git add --all```<br>
  將所有檔案加入追蹤
* ```git add -i```<br>
  進入互動模式，依照指示操作即可
#### $ git commit（提交）
* ```git commit```<br>
  將目前暫存區的修改進行提交，會進入編輯message(**顯示在log記錄**)階段
* ```git commit -m <message>```<br>
  直接加上message一起提交，跳過編輯階段
#### $ git remote（遠端）
* ```git remote (show)```<br>
  顯示遠端儲存庫名稱(**預設為origin**)，show可省略
* ```git remote -v```<br>
  顯示遠端儲存庫名稱及位置
#### $ git push（推送）
* ```git push```<br>
  將本地分支(**預設為master**)已提交的(committed)檔案推送至遠端儲存庫分支(**預設為origin**)
* ```git push <remote> <branch>```<br>
  將本地分支\<branch>的檔案推送至遠端儲存庫分支\<remote><br>
  ~意即```$ git push ```的作用等於```$ git push origin master```	&larr; 默認！！！
#### $ git branch（分支）
* ```git branch```<br>
  列出本地分支
* ```git branch -r```<br>
  列出遠端分支
* ```git branch -a```<br>
  列出所有分支
* ```git branch -v```<br>
  列出每個分支**最後的提交**

---
參考網站：<br>

[阿輝的零碎筆記](https://dotblogs.com.tw/grayyin/1)<br>
[ihower 的 Git 教室 - Git 版本控制系統](https://ihower.tw/git/basic.html)<br>
[為你自己學 Git](https://gitbook.tw/)<br>
[CSDN博客 - 在md中使用HTML特殊符号](https://blog.csdn.net/vola9527/article/details/69948411)<br>
[Markdown 語法說明(中文版)](http://markdown.tw/)<br>
[Markdown Syntax Documentation(英文版)](https://daringfireball.net/projects/markdown/syntax)<br>
[Git Tutorial](https://github.com/twtrubiks/Git-Tutorials/blob/master/README.md)<br>
[Markdown | GitBook 中文解說 - 2.4](https://wastemobile.gitbooks.io/gitbook-chinese/content/format/markdown.html)<br>


