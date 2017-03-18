##  简介
主体是以《JavaScript高级程序设计》中的Chap8 BOM


##  内容
####  8.1 window对象
+ 全局作用域
+ 窗口关系及框架
+ 窗口位置
+ 窗口大小
+ 导航和打开窗口
+ 间歇调用和超时调用
	+ **最好不要用间歇调用**
	+ setInterval()
+ 系统对话框
	+ alert()
		+ `alert("Hello world!");`
	+ confirm()
		+ `if(confirm("sure?")){alert("OK!");}else{alert("Cancel!");}`
	+ prompt()
		+ `var result = prompt("name?","");`

####  8.2 location对象
**最有用**
+ window.location和document.location引用的是同一个对象。  
location对象的用处不只表现在它**保存着当前文档的信息**，还表现在它**将URL解析为独立的片段**，让开发人员可以通过不同的属性访问这些片段。  

+ 查询字符串参数  
*location.search*返回从问号到URL末尾的所有内容，但没有办法逐个访问其中的每个查询字符串参数。  
+ 位置操作  
`location.assign("http://wwww.wrox.com");`与下面两句作用相同    
`winods.location = "http://wwww.wrox.com"; location.href="http://wwww.wrox.com";`   
**每次修改location的属性(hash除外)，页面都会以新URL重新加载。**  
*调用location.replace()方法之后，用户不能回到前一个页面。*

####  8.3 navigator对象

####  8.4 screen对象
**编程中用处不大**

####  8.5 history对象
+ history.go() 在用户的历史记录中任意跳转
	+ `history.go(-1)//后退一页`
	+ `history.go("wrox.com")//跳转到最近的wrox.com页面`
+ history.back()
+ history.forward()
+ history.length 保存着历史记录的数量
	+ `if(history.length == 0){//这应该是用户打开窗口后的第一个页面}`

