##chap13  

###13.1 客户端JavaScript  


###13.2 在HTML里嵌入JavaScript  
+ 内联，放置在`<script>`和`</script>`标签之间  
+ 放置在由`<script>`标签的src属性指定的外部文件中  
+ 放置在HTML事件处理程序中，该事件处理程序由onclick或onmouseover这样的HTML属性值指定  
+ 放在一个URL里，这个URL使用特殊的"javascript:"协议  


###13.3 JavaScript程序的执行   
+ 第一个阶段：载入文档内容，并执行`<script>`元素里的代码。  
+ 第二个阶段：异步的，而且由事件驱动的。  
**事件驱动阶段里发生的第一个事件是load事件，指示文档已经完全载入，并可以操作**  


###13.4 兼容性和互用性  
