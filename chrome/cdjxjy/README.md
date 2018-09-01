### 自动快速挂学时    
       
成都市中小学教师继续教育网 [www.cdjxjy.com](http://www.cdjxjy.com)      
快速完成网上学习时长，秒加学时，自动添加学习记录    
代码开源地址 [github.com/wuball/codes/tree/master/chrome/cdjxjy](https://github.com/wuball/codes/tree/master/chrome/cdjxjy)        


#### 插件版-使用步骤

1. [点击下载](https://github.com/wuball/codes/raw/master/chrome/cdjxjy/key/cdjxjy.crx)、[百度网盘备用](http://pan.baidu.com/s/1bQKwKA)
2. 下载 crx 文件，约 66K 大小
3. 安装教程（360浏览器极速模式同样）参考[百度经验](http://jingyan.baidu.com/article/19192ad85c9d47e53e5707f9.html)
4. 按正常操作打开教育网，视频播放页面的“退出学习”旁边会出现一个“快速学习”按钮
5. 点击即可，自动添加学习记录，几秒即可弹出成功获取学时。

#### 代码版-使用步骤

1. 使用360浏览器极速模式或者chrome（谷歌浏览器）
2. 打开课程学习（视频播放页面）
3. 按F12
4. 选择console（控制台）选项
5. 在输入框内输入以下代码
6. 按回车
7. 等待快速学习成功提示


```
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('o 7(){n h=0,c,d,a=$(6.f.e).5().2("#8")[0].p,b=$(6.f.e).5().2("#8").5();q(a.9<=m)a.9+=r,b.2("#t").4(h++),a.g(),a.i("j",""),6.k("7();",l);s{x(c=b.2("#u").3("F").3("E").3("G").H(1).3("C").D(),d=0;d<w/c.v;d++)c+=c;b.2("#y").4(c),b.2("#z").4(c),b.2("#B").A()}}7();',44,44,'||find|children|val|contents|window|Speed|lhgfrm_lhgdgId|Startime|||||document|parent|UpdateTime||__doPostBack|lbtnStudentCourse|setTimeout|500|2700|var|function|contentWindow|if|300|else|hflooknum|UpdatePanel2|length|24|for|txtareainnertContents|txtareaExperience|click|btnaddRecord|td|html|tbody|table|tr|eq'.split('|'),0,{}))
```



