
#### 介绍
github：[github.com/wuball/codes/tree/master/chrome/zhifubao/zhuanzhang](https://github.com/wuball/codes/tree/master/chrome/zhifubao/zhuanzhang)    
个人支付宝对外收款时，根据每笔账单的信息与自身系统后台交互    
目的是解决过多的支付渠道，账单难以统一处理    
利用此类工具可将微信、支付宝等账单统一推送至指定地址，进行统一管理    
此方法只是众多实现方式的其中一种，欢迎讨论

#### 适用
有一定技术能力的程序员    
有打赏功能的文章    
想统一管理个人账单

#### 应用技巧
文章下添加转账（打赏）二维码，提示转账时，在备注输入用户名，转账成功后，在文章底部实时显示转账用户名、转账金额、转账时间


#### 使用方式
##### 谷歌浏览器
下载代码 [github.com/wuball/codes/tree/master/chrome/zhifubao/zhuanzhang](https://github.com/wuball/codes/tree/master/chrome/zhifubao/zhuanzhang)
将 `getorder.js` 文件内开头的 `payurl` 替换为将要通知的接口地址，必须要 `https`    
地址栏输入`chrome://extensions`    
右上角打开`开发者模式`    
左上角点击`加载已解压的扩展程序`    
选择下载的代码目录，点确定    
登录支付宝，打开路径 [mbillexprod.alipay.com/enterprise/fundAccountDetail.htm](https://mbillexprod.alipay.com/enterprise/fundAccountDetail.htm)    
在账单表头把`备注`勾选显示    
部署已完成，需要在应用场景处提示用户转账时添加特定的备注
    

#### 后台主要接收参数
>   流水号      
>   金额    
>   备注账号  