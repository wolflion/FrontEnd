##  chap3 DOM  50P 18+32P
目录是15页  
**5个常用DOM方法**：`getElementById`,    `getElementByTagName`,  `getElementByClassName`,    `getAttribute`,  `setAttribute`,  

###  3.1 文档:DOM中的"D"
**把编写的网页文档转换为一个文档对象。**  

###  3.2 对象:DOM中的"O"
+ **最基础的对象是window对象**，*window对象*对应着浏览器窗口本身，这个对象的属性和方法通常统称为BOM。
+ 注意力集中在浏览器窗口内的网页内容上。*document对象*的主要功能就是处理网页内容。

###  3.3 模型:DOM中的"M"
+ DOM代表着加载到浏览器窗口的当前网页。浏览器提供了网页的模型，而我们可以通过JavaScript去读取这个模型。


###  3.4 节点
+ 元素节点
	+ 标签的名字就是元素的名字。`p`,`ul`，`li`
+ 文本节点
+ 属性节点  
`<p title="a gentle reminder">Don't forget to buy this stuff.</p>`
+ CSS  
DOM并不是与网页结构打交道的唯一技术。我们还可以通过CSS告诉浏览器应该如何显示一份文档的内容。  
	+ class属性
	+ id属性
+ 获取元素
	+ getElementById
	+ getElementByTagName
	+ getElementByClassName
+ 盘点知识点
	+ 文档中的每个元素节点都是一个对象，这些对象中的每一个还天生具有一系列非常有用的方法。
	+ 一份文档就是一棵节点树。
	+ 节点可以分为不同的类型。


###  3.5 获取和设置属性
+ getAttribute
	`object.getAttribute(attribute)`
+ setAttribute