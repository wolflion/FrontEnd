###1 语法  
* 区分大小写  
* 标识符  
第一个字符必须是一个字母，下划线或美元符号。**驼峰命令** `doSomethingImporttant`  
* 注释
* 严格模式  
启用严格模式，在顶部代码中添加`"use strict";`  
* 语句  
虽然语句结尾的分号不是必需的，但还是不要省略它。  

###2 关键字和保留字  
**知道每一个关键字的作用**

###3 变量  
ECMAScrpit的变量是松散类型的，所谓松散类型就是可以用来保存任何类型的数据。  
`var message;`该变量可以用来保存任何值。  
**不建议修改变量所保存值的类型**  
**使用var操作符定义的变量将成为定义该变量的作用域中的局部变量。**  
**省略var操作符，从而创建一个全局变量**  

###4 数据类型  
* typedef操作符    
typedef用来检测给定变量的数据类型。  `alert(typedef message);//string`  `alert(typedef(message));//string`  
**typedef是一个操作符而不是函数，圆括号尽管可以使用，但不是必需的。**  
* undefined类型  
在使用var声明变量但未对其加以初始化时，这个变量的值就是undefined。  
`var message;`  
`alert(message == undefined);//true`  
**P25**  
**对未初始化和未声明的变量执行typedef操作符都返回了undefined值**  
* Null类型  
* Boolean类型
+ Number类型
+ String类型
+ Object类型
**P26**  


###5 操作符 
* 一元操作符   

###6 语句  
* if语句  
* do-while语句  
* while语句  
* for语句  
* for-in语句  
用for-in循环来显示BOM中的window对象的所有属性。
`for (var propName in window){document.write(proName);}`  
* label语句  
**这个不太懂**
* break和continue语句  
* with语句  
**with语句的作用是将代码的作用域设置到一个核心的对象中。**  
* switch语句  

###7 函数
+ **function关键字**  
+ **ECMAScript中的函数在定义时不必指定是否返回值。实际上，任何函数在任何时候都可以通过return语句跟要返回的值来实现返回值。**  
+ **return语句之后的任何代码都不会执行。**  
+ 理解参数  
+ **ECMAScript函数不介意传递进来多少个参数，也不在乎传进来参数是什么数据类型。**  
+ **arguments对象**  
	+ `function sayHi(){alert("Hello " + arguments[0] + "," + arguments[1]);}`  
+ 没有重载  
+ 不必指定是否有返回值，可以直接在函数体内return，但执行完return后就会直接退出   `function sum(num1,num2){return num1+num2;alert("return");}`
+ 在函数体内可以通过**arguments对象**来访问这个参数数组，从而获取传递给函数的每一个参数。  
`function doAdd(num1,num2){arguments[1] = 10; alert(arguments[0]+num2);}`//修改arguments[1]时，也会修改num2的值。
+ 定义两个名字相同的函数，只有后定义的有效。*通过检查传入函数中参数的类型和数量并作出不同的反应，可以模仿方法的重载。*


##  《js权威指南》中内容
####  chap2 词法结构
+ 2.1 字符集
	+ 标准化后，JavaScript程序是用16位Unicode字符集编写的；ASCII编码是7位。
+ 2.3 空白符和换行符
	+ 可以随意使用空白符，制表符和换行符。
+ 2.6 直接量literal
	+ **直接量**:程序中直接显示出来的数据值。如`1.2`