##chap14 错误处理与调试  

###14.1 浏览器错误报告  


###14.2 错误处理  
+ d 
+ d
+ 错误(error)事件  
任何没有通过try-catch处理的错误都会触发window对象的error事件。  
在任何Web浏览器中，onerror事件处理程序都不会创建event对象，但它可以接受3个参数：错误消息，错误所在的URL和行号。  


###14.3 错误处理策略  
+ 常见的错误类型  
    + 类型转换错误  
    + 数据类型错误  
    + 通信错误  
+ 区分致命和非致命错误    
+ 把错误记录到服务器  


###14.4 调试技术  
+ 将消息记录到控制台  
`console.error(message)`//错误消息  
`console.info(message)`//信息性消息  
`log.info(message)`//警告消息  
`warn.info(message)`//一般消息  
+ 将消息记录到当前页面  
+ 抛出错误  
