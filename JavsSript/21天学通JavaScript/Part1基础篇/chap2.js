<!-- script language = "javascript" -->
<!-- 2-5 显示程序运行时的本地时间，Date对象的使用方法

var timeval = 2017;
var date1 = new Date(timeval);

document.write(date1);

var cur = new Date();
var years = cur.getYear();
var months = cur.getMonth();
var days = cur.getDate();
var hours = cur.getHours();
var minutes = cur.getMinutes();
var seconds = cur.getSeconds();

alert( "此时时间是：" + years + "年" + (months+1) + "月" + days + "日" + hours + "时" + minutes + "分" + seconds + "秒");
-->

<!-- 调用Global对象的isNaN方法判断一个值是否为数值
var a = NaN;  // 定义非数字常量
var b = "123";
var c = 123;
var d = "1.23";
document.write("<b>Global对象的isNaN方法</b><br>");
var ta = isNaN(a);
var tb = isNaN(b);
var tc = isNaN(c);
document.write();
var ib = parseInt(b);
if(ib == c)
{
	document.write();
}
document.write();
var id = parseFloat(d);
if(d == 1.23)
{
	document.write();
}
-->
<!-- /script -->

